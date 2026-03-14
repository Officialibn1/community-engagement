import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load .env.local in development, Vercel injects env vars automatically in production
dotenv.config({ path: '.env.local' });
dotenv.config(); // fallback to .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
    },
});

const NODEMAILER_EMAIL = process.env.NODEMAILER_EMAIL;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: ADMIN_EMAIL,
            replyTo: email,
            subject: `New Contact Form Submission - ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        res.json({ success: true, message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
});

// Resource-based sponsor endpoint
app.post('/api/resource-sponsor', async (req, res) => {
    try {
        const {
            organizationName,
            contactName,
            email,
            phone,
            resourceCategory,
            resourceDescription,
            estimatedValue,
        } = req.body;

        const categoryLabels = {
            logistics: 'Logistics & Cleaning Equipment',
            media: 'Media & Communication',
            branding: 'Branding & Printing',
            volunteer: 'Volunteer Support',
        };

        await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: ADMIN_EMAIL,
            replyTo: email,
            subject: `New Resource-Based Sponsorship - ${organizationName}`,
            html: `
                <h2>New Resource-Based Sponsorship Submission</h2>
                <p><strong>Organization:</strong> ${organizationName}</p>
                <p><strong>Contact Person:</strong> ${contactName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Resource Category:</strong> ${categoryLabels[resourceCategory] || resourceCategory}</p>
                <p><strong>Estimated Value:</strong> ${estimatedValue || 'Not provided'}</p>
                <p><strong>Resource Description:</strong></p>
                <p>${resourceDescription}</p>
                <hr />
                <p><em>Please assess the market value and assign appropriate sponsorship tier.</em></p>
            `,
        });

        res.json({ success: true, message: 'Resource sponsorship submitted successfully' });
    } catch (error) {
        console.error('Resource sponsor error:', error);
        res.status(500).json({ success: false, message: 'Failed to submit sponsorship' });
    }
});

// Newsletter subscription endpoint — email only, no file system
app.post('/api/newsletter', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email || !email.includes('@')) {
            return res.status(400).json({ success: false, message: 'Valid email is required' });
        }

        await transporter.sendMail({
            from: NODEMAILER_EMAIL,
            to: ADMIN_EMAIL,
            subject: 'New Newsletter Subscription',
            html: `
                <h2>New Newsletter Subscriber</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
            `,
        });

        res.json({ success: true, message: 'Successfully subscribed to newsletter' });
    } catch (error) {
        console.error('Newsletter error:', error);
        res.status(500).json({ success: false, message: 'Failed to subscribe' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;
