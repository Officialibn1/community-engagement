# Express Backend for Email Integration

This minimal Express server handles email sending via Nodemailer for:

- Contact form submissions
- Resource-based sponsorship applications
- Newsletter subscriptions

## Setup

### Environment Variables

Add these to your `.env.local` file:

```
NODEMAILER_EMAIL=your-email@gmail.com
NODEMAILER_PASSWORD=your-app-password
```

**For Gmail:**

1. Enable 2-factor authentication
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the app password (not your regular password)

### Development

Run both frontend and backend:

```bash
pnpm dev
```

Or run separately:

```bash
# Terminal 1 - Backend
pnpm run server

# Terminal 2 - Frontend
pnpm run dev:frontend
```

## Vercel Deployment

### Setup Environment Variables in Vercel:

1. Go to your Vercel project settings
2. Add environment variables:
   - `NODEMAILER_EMAIL`
   - `NODEMAILER_PASSWORD`

### Deploy:

```bash
vercel
```

The `vercel.json` configuration automatically:

- Routes `/api/*` requests to the Express backend
- Serves frontend static files
- Handles serverless function deployment

## Newsletter Tracking

Newsletter subscribers are tracked in two ways:

1. **Email notification** - You receive an email for each subscription
2. **File storage** - Appended to `server/data/newsletter-subscribers.txt`

The file format:

```
2026-03-13T10:30:00.000Z - user@example.com
2026-03-13T11:45:00.000Z - another@example.com
```

## API Endpoints

- `POST /api/contact` - Contact form
- `POST /api/resource-sponsor` - Resource sponsorship
- `POST /api/newsletter` - Newsletter subscription
- `GET /api/health` - Health check
