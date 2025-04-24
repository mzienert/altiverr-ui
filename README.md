This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
https://colorhunt.co/palette/fe7743efeeea273f4f000000

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/(marketing)/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Calendly Integration

This project includes a Calendly integration for scheduling consultations. To configure it:

1. Create a dedicated Calendly event for consultations in your Calendly account
2. Create a `.env.local` file in the root directory with the following variables:

```bash
# Calendly configuration
# Replace with your actual Calendly event link
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/initial-consultation
```

3. Replace `your-username` with your actual Calendly username and `initial-consultation` with your event name
4. The Calendly integration will now be available at:
   - Button components throughout the site
   - Full calendar embed at `/consultation`

For advanced Calendly customization, see the components in:
- `components/calendly/CalendlyButton.tsx` - For popup calendar buttons
- `components/calendly/CalendlyEmbed.tsx` - For inline calendar embeds
- `lib/calendly.ts` - For utility functions

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
