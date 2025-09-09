# Setting Up Email Notifications for Form Submissions

## Step 1: Create the GitHub Action Workflow

In your `portfolio-submissions` repository, create this file structure:
```
.github/
  workflows/
    notify.yml
```

Copy this workflow file:

```yaml
name: Email Notification for New Submission

on:
  push:
    branches: [main]
    paths:
      - 'submissions/**'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 2
      
      - name: Get submission details
        id: submission
        run: |
          # Get the newly added file
          NEW_FILE=$(git diff --name-only HEAD^ HEAD | grep "submissions/" | head -1)
          
          if [ -n "$NEW_FILE" ]; then
            # Parse the JSON file
            NAME=$(jq -r '.name' "$NEW_FILE")
            EMAIL=$(jq -r '.email' "$NEW_FILE")
            MESSAGE=$(jq -r '.message' "$NEW_FILE")
            TIMESTAMP=$(jq -r '.timestamp' "$NEW_FILE")
            
            # Make message GitHub Actions friendly (escape newlines)
            MESSAGE="${MESSAGE//$'\n'/<br>}"
            
            echo "name=$NAME" >> $GITHUB_OUTPUT
            echo "email=$EMAIL" >> $GITHUB_OUTPUT
            echo "message<<EOF" >> $GITHUB_OUTPUT
            echo "$MESSAGE" >> $GITHUB_OUTPUT
            echo "EOF" >> $GITHUB_OUTPUT
            echo "timestamp=$TIMESTAMP" >> $GITHUB_OUTPUT
            echo "file=$NEW_FILE" >> $GITHUB_OUTPUT
          fi
      
      - name: Send email notification
        if: steps.submission.outputs.name != ''
        uses: dawidd6/action-send-mail@v3
        with:
          server_address: smtp.gmail.com
          server_port: 465
          secure: true
          username: ${{secrets.EMAIL_USERNAME}}
          password: ${{secrets.EMAIL_PASSWORD}}
          subject: 📬 New Portfolio Contact - ${{ steps.submission.outputs.name }}
          to: spensermcconnell@gmail.com
          from: Portfolio Contact Form <${{secrets.EMAIL_USERNAME}}>
          html_body: |
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: #4bffa5; color: #000; padding: 20px; border-radius: 5px 5px 0 0; }
                    .content { background: #f4f4f4; padding: 20px; border-radius: 0 0 5px 5px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #555; }
                    .message { background: white; padding: 15px; border-radius: 5px; margin-top: 10px; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2 style="margin: 0;">📬 New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">From:</span> ${{ steps.submission.outputs.name }}
                        </div>
                        <div class="field">
                            <span class="label">Email:</span> 
                            <a href="mailto:${{ steps.submission.outputs.email }}">
                                ${{ steps.submission.outputs.email }}
                            </a>
                        </div>
                        <div class="field">
                            <span class="label">Time:</span> ${{ steps.submission.outputs.timestamp }}
                        </div>
                        <div class="field">
                            <span class="label">Message:</span>
                            <div class="message">
                                ${{ steps.submission.outputs.message }}
                            </div>
                        </div>
                        <div class="footer">
                            <a href="${{ github.server_url }}/${{ github.repository }}/blob/main/${{ steps.submission.outputs.file }}">
                                View submission in GitHub →
                            </a>
                        </div>
                    </div>
                </div>
            </body>
            </html>
```

## Step 2: Set Up Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification** (must be enabled)
4. Scroll to the bottom and click on **App passwords**
5. Select "Mail" and "Other (custom name)"
6. Name it "GitHub Actions" or "Portfolio Notifications"
7. Click **Generate**
8. **Copy the 16-character password** (you won't see it again!)

## Step 3: Add Secrets to Your GitHub Repository

1. Go to your `portfolio-submissions` repository on GitHub
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - **Name:** `EMAIL_USERNAME`
   - **Value:** Your full Gmail address (e.g., `spensermcconnell@gmail.com`)
4. Click **New repository secret** again and add:
   - **Name:** `EMAIL_PASSWORD`  
   - **Value:** The 16-character app password from Step 2 (no spaces)

## Step 4: Test the System

1. Submit a test message through your contact form
2. Check your `portfolio-submissions` repo - you should see the new submission
3. Within a minute, you should receive a formatted email notification
4. Check the **Actions** tab in your repo to see the workflow run

## Troubleshooting

- **No email received?** Check the Actions tab for errors
- **Authentication failed?** Make sure the app password is correct (no spaces)
- **Workflow not running?** Ensure the file is in `.github/workflows/` exactly
- **Gmail blocking?** Make sure "Less secure app access" is not needed (app passwords bypass this)

## Optional Enhancements

### Add Multiple Recipients
```yaml
to: spensermcconnell@gmail.com, backup@example.com
```

### Add Reply-To Header
```yaml
reply_to: ${{ steps.submission.outputs.email }}
```

### Send to Different Emails Based on Content
```yaml
to: ${{ contains(steps.submission.outputs.message, 'urgent') && 'urgent@example.com' || 'spensermcconnell@gmail.com' }}
```