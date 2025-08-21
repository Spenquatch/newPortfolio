export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Honeypot check (bot-field should be empty)
  if (req.body['bot-field']) {
    // Silently accept but don't save (it's a bot)
    return res.status(200).json({ success: true });
  }

  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO || 'Spenquatch/portfolio-submissions';
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token) {
    console.error('GitHub token not configured');
    return res.status(500).json({ error: 'Form submission service not configured' });
  }

  const timestamp = new Date().toISOString();
  const fileName = `submissions/${timestamp.split('T')[0]}/${timestamp.replace(/[:.]/g, '-')}.json`;

  const submission = {
    timestamp,
    name,
    email,
    message,
    metadata: {
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer || req.headers.referrer,
    }
  };

  try {
    // Create or update file in GitHub repo
    const response = await fetch(
      `https://api.github.com/repos/${repo}/contents/${fileName}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `New contact form submission from ${name}`,
          content: Buffer.from(JSON.stringify(submission, null, 2)).toString('base64'),
          branch: branch,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('GitHub API error:', error);
      throw new Error('Failed to save submission');
    }

    // Success
    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your message! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Error saving submission:', error);
    return res.status(500).json({ 
      error: 'Failed to send message. Please try again later.' 
    });
  }
}