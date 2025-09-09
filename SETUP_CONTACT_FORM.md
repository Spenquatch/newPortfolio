# Contact Form Setup

The contact form saves submissions directly to a private GitHub repository.

## Setup Instructions

### 1. Create a Private Repository for Submissions
Create a new private repository on GitHub (e.g., `portfolio-submissions`) to store form submissions.

### 2. Generate a GitHub Personal Access Token
1. Go to GitHub Settings > Developer settings > Personal access tokens > Fine-grained tokens
2. Click "Generate new token"
3. Give it a name like "Portfolio Contact Form"
4. Set expiration (recommended: 1 year, then rotate)
5. Under "Repository access", select "Selected repositories" and choose your submissions repo
6. Under "Repository permissions", grant:
   - **Contents**: Read and Write (to create submission files)
7. Click "Generate token" and copy the token

### 3. Add Environment Variables to Netlify
1. Go to your Netlify site dashboard
2. Navigate to Site settings > Environment variables
3. Add the following variables:
   - `GITHUB_TOKEN`: Your fine-grained personal access token
   - `GITHUB_REPO`: Your repo in format `username/repo-name` (e.g., `Spenquatch/portfolio-submissions`)
   - `GITHUB_BRANCH`: Branch to save to (optional, defaults to `main`)

### 4. Deploy
Redeploy your site and the contact form will start saving submissions to your GitHub repo.

## Submission Format
Submissions are saved as JSON files organized by date:
```
submissions/
  2024-01-15/
    2024-01-15T10-30-45-123Z.json
    2024-01-15T14-22-10-456Z.json
  2024-01-16/
    2024-01-16T09-15-30-789Z.json
```

Each submission contains:
- Name, email, and message
- Timestamp
- Metadata (IP, user agent, referrer)

## Security Notes
- The token is only accessible server-side
- Bot protection via honeypot field
- Email validation
- Rate limiting can be added if needed