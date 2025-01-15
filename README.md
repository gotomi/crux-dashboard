# CrUX Dashboard

A live web performance monitoring dashboard that tracks Core Web Vitals metrics for multiple websites using Chrome User Experience Report (CrUX) data. Live version available at: https://crux.gotomi.info

## Features

- **Automated Daily Updates**: Fetches fresh CrUX data every day at 7:00 UTC
- **Multiple View Options**:
  - Distribution view - Shows good/needs improvement/poor percentages
  - P75 view - Displays 75th percentile values in a table format
  - Historical charts - Tracks metrics over time
- **Website Categories**:
  - Polish ecommerce sites
  - European ecommerce sites
  - Radio stations
- **Core Web Vitals Metrics**:
  - First Contentful Paint (FCP)
  - Largest Contentful Paint (LCP)
  - Cumulative Layout Shift (CLS)
  - Time to First Byte (TTFB)
  - Interaction to Next Paint (INP)

## Setup for Your Own Dashboard

1. Fork the repository

2. Configure GitHub Secrets:
   - Add `PSIKUS` secret with your CrUX API key

3. Configure GitHub Pages:
   - Enable GitHub Pages in repository settings
   - Set custom domain (optional)

4. Add/Modify Website Lists:
   Update JSON files in `src/_urls/` directory, for example:
   ```json
   [
     "example.com",
     "otherdomain.com"
   ]
   ```

5. The GitHub Actions workflows will:
   - Build and deploy on every push to master
   - Fetch new CrUX data daily and update the dashboard

## GitHub Actions Workflows

### Daily Data Update (`gh-pages-scheduled.yml`)
```yaml
name: update data scheduled
on:
  schedule:
    - cron: '0 7 * * *'
```
This workflow:
- Runs daily at 7:00 UTC
- Fetches fresh CrUX data
- Updates historical charts
- Commits new data to repository
- Deploys updated dashboard
