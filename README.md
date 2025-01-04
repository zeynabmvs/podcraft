# Podcraft: A Podcast Discovery, Creation, and Playback Platform

Podcraft is a feature-rich web application designed for podcast enthusiasts. It allows users to discover, share, and organize their favorite podcasts, create personalized playlists, and even generate their own podcasts using AI. Built with modern web technologies, Podcraft offers a seamless and responsive experience across all devices.

## Features

- **Podcast Discovery**: Browse and discover popular podcasts.
- **Playlist Management**: Save and organize podcasts into personalized playlists.
- **Podcast Player**: Listen to your favorite podcasts directly within the app.
- **AI-Powered Podcast Creation**:
  - **Text-to-Speech**: Convert text into high-quality audio using OpenAI's text-to-speech API.
  - **AI Image Generation**: Generate custom cover art for your podcasts using OpenAI's image generation API.
- **User Profiles**: Create and manage your podcast collections and playlists.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Interactive UI**: Smooth animations and intuitive user interactions.

## Technologies Used

- **Frontend**: Next.js, Tailwind CSS, shadcn/ui
- **Backend**: Convex (database and backend functions)
- **Authentication**: Clerk
- **AI Integration**: OpenAI API (text-to-speech and image generation)
- **Language**: TypeScript

## Screenshots

### Home Page
![Home Page](screenshots/home.png)  
*The home page showcasing featured podcasts.*

### AI Podcast Creation
![AI Podcast Creation](screenshots/ai-creation.png)  
*Create your own podcast using AI-powered text-to-speech and image generation.*

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- OpenAI API key (for AI features)
- Convex account (for database and backend)
- Clerk account (for authentication)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/zeynabmvs/podcraft.git
   cd podcraft
2. **Install the dependencies**:
    ```bash
    npm install
3. **Set Up Environment Variables**:
    change .env.example's name to .env.local and add required keys to it
4. **Run the Development Server**:
    ```bash
    npm run dev
5. **Access the Application**:
    Open your browser and navigate to http://localhost:3000.

## Live Demo

Explore the live demo here: [Podcraft on Vercel](https://podcraft-roan.vercel.app/)


Feel free to contribute, report issues, or suggest improvements! Your feedback is highly appreciated.
