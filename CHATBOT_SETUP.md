# Chatbot Setup Guide

## Overview
Your portfolio now includes an AI-powered chatbot that speaks on your behalf! Visitors can interact with "you" through this chatbot to learn about your skills, experience, and projects.

## Setup Instructions

### 1. Configure Your OpenAI API Key
1. Open the `.env.local` file in your project root
2. Replace `your_openai_api_key_here` with your actual OpenAI API key:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### 2. Customize the Bot's Personality
Edit the `SYSTEM_PROMPT` in `src/app/api/chat/route.ts` to better reflect your personality and background. You can:
- Add specific details about your projects
- Include your preferred communication style
- Add information about your specialties and interests
- Customize how the bot should respond to different types of questions

### 3. Test Locally
Run the development server:
```bash
npm run dev
```
Visit `http://localhost:3001` and click the chat button in the bottom-right corner to test the chatbot.

## Features
- **Floating Chat Button**: Always accessible in the bottom-right corner
- **Modern UI**: Beautiful, responsive chat interface with dark mode support
- **Real-time Messaging**: Instant responses powered by OpenAI's GPT-3.5-turbo
- **Typing Indicators**: Shows when the bot is thinking
- **Message History**: Maintains conversation context during the session
- **Mobile Friendly**: Works great on all device sizes

## Customization Options

### Changing the AI Model
In `src/app/api/chat/route.ts`, you can change the model from `gpt-3.5-turbo` to:
- `gpt-4` (more capable but slower and more expensive)
- `gpt-3.5-turbo-16k` (for longer conversations)

### Adjusting Response Style
Modify these parameters in the API route:
- `max_tokens`: Control response length (currently 500)
- `temperature`: Control creativity (0.0 = focused, 1.0 = creative, currently 0.7)

### Styling the Chat Interface
The chatbot component uses Tailwind CSS classes. You can customize:
- Colors in `src/components/Chatbot.tsx`
- Size and position of the chat window
- Animation effects and transitions

## Deployment Notes
When deploying to production:
1. Make sure your OpenAI API key is set in your hosting platform's environment variables
2. The chatbot will automatically work with your deployed domain
3. Consider implementing rate limiting for production use

## Security
- API keys are stored securely in environment variables
- The chat API route includes basic error handling
- No sensitive information is logged or stored

Enjoy your new AI-powered portfolio assistant! 🤖✨ 