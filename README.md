# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring an AI-powered chatbot that speaks on behalf of the portfolio owner.

## Features

- Modern, responsive design
- **AI-Powered Chatbot**: Interactive chatbot using OpenAI that represents you
- LinkedIn integration
- Sections for:
  - Professional Experience
  - Education
  - Skills & Expertise
  - Contact Information
- Optimized for performance and SEO

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_openai_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3001](http://localhost:3001) in your browser

## Chatbot Setup

The portfolio includes an AI chatbot that speaks as you. To set it up:

1. Get an OpenAI API key from [OpenAI Platform](https://platform.openai.com/account/api-keys)
2. Add it to your `.env.local` file
3. Customize the chatbot personality in `src/app/api/chat/route.ts`
4. Update your profile image URL in `src/components/Chatbot.tsx`

## Customization

1. Update your personal information in the components:
   - `src/components/Hero.tsx`
   - `src/components/About.tsx`
   - `src/components/Experience.tsx`
   - `src/components/Education.tsx`
   - `src/components/Contact.tsx`

2. Replace the LinkedIn profile URL in the Hero and Contact components with your actual LinkedIn profile URL.

3. Update the email address in the Contact component.

4. Customize the chatbot personality in `src/app/api/chat/route.ts` to reflect your background and communication style.

5. Customize the color scheme by modifying the Tailwind classes in the components.

## Technologies Used

- Next.js 14
- React
- Tailwind CSS
- React Icons
- TypeScript
- OpenAI API
- AI-powered chatbot

## Deployment

### Vercel Deployment

1. Push your code to GitHub (make sure `.env.local` is NOT committed)
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `NEXT_PUBLIC_APP_URL`: Your deployed domain (e.g., https://yourname.vercel.app)
4. Deploy

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXT_PUBLIC_APP_URL`: Your production domain

## Security Notes

- Never commit your `.env.local` file to Git
- Keep your OpenAI API key secure
- The chatbot API route includes proper error handling and rate limiting considerations

## License

MIT 