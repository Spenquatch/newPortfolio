# Projects Page Configuration Guide

## Overview
The Projects page displays both GitHub repositories and manually-added projects in a unified grid layout.

## Configuration Files

### 1. `portfolio.config.json`
Controls which projects display and their ordering.

```json
{
  "pinnedRepos": ["project-name"],     // Projects to pin at the top
  "displayRepos": [],                   // Allowlist (if useAllowlist is true)
  "hideRepos": ["repo-to-hide"],       // Blocklist of repos to never show
  "useAllowlist": false,                // true = only show displayRepos, false = show all except hideRepos
  "maxRepos": 12,                       // Maximum projects to display
  "randomizeOrder": true                // Randomize unpinned projects on each load
}
```

### 2. `manual-projects.json`
Add non-GitHub projects to display alongside repos.

```json
{
  "projects": [
    {
      "id": "unique-id",
      "name": "Project Name",
      "description": "Brief description of the project",
      "url": "https://project-url.com",
      "language": "Web",                // Options: Web, Tool, API, or any GitHub language
      "updated_at": "2024-01-15T00:00:00Z"
    }
  ]
}
```

## Features

### Project Sources
- **GitHub**: Automatically fetches from your personal repos and AtomizeCodes organization
- **Manual**: Projects defined in `manual-projects.json`

### Filtering
- **Allowlist mode**: Set `useAllowlist: true` and list specific repos in `displayRepos`
- **Blocklist mode**: Set `useAllowlist: false` and list repos to hide in `hideRepos`

### Ordering
- **Pinned projects**: Always appear first (works for both GitHub and manual projects)
- **Random order**: Enable with `randomizeOrder: true` to shuffle unpinned projects
- **Chronological**: Set `randomizeOrder: false` to sort by last updated date

### Language Icons
Manual projects can use these language types for appropriate icons:
- `Web` - Globe icon
- `Tool` - Wrench icon  
- `API` - Plug icon
- Any GitHub language (JavaScript, Python, TypeScript, etc.)

## Common Tasks

### Pin a project to the top
Add the project name to `pinnedRepos` in `portfolio.config.json`:
```json
"pinnedRepos": ["ask-claude", "My Web App"]
```

### Hide a GitHub repo
Add the repo name to `hideRepos`:
```json
"hideRepos": ["test-repo", "old-project"]
```

### Add a manual project
Edit `manual-projects.json` and add to the projects array:
```json
{
  "id": "my-app",
  "name": "My App",
  "description": "A web application for clients",
  "url": "https://myapp.com",
  "language": "Web",
  "updated_at": "2024-02-01T00:00:00Z"
}
```

### Change display limit
Modify `maxRepos` in `portfolio.config.json` (default is 12).

## Notes
- Manual projects participate in all features (pinning, randomization, filtering)
- The GitHub icon in the header links to your GitHub profile
- All project cards open in new tabs when clicked
- Projects display shows "GitHub + Custom" to indicate mixed sources