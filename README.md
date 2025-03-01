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
![Home Page](/public/screenshots/screenshot1.png)  
*The home page showcasing featured podcasts. Desktop & tablet views*

### Other pages
![AI Podcast Creation](/public/screenshots/screenshot2.png)  
*Other pages. mobile view*

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

## Credits
### Original Tutorial
This project started as a tutorial from JS Mastery. The original tutorial provided the foundation for the project, including the basic structure, design, and functionality.
Tutorial Link: [JS Mastery Podcast App Tutorial](https://jsmastery.pro)

### My Contributions
After completing the tutorial, I made the following improvements and added new features:

Added Feature 1: Allowed users to upload their own audio files instead of relying on AI-generated audio.

Added Feature 2: Added the ability to add podcasts to playlist and play them in order

Added feature 3: Implemented the ability to add podcasts to a playlist and play them in sequential order.

Code Improvements: Refactored the codebase for better readability, maintainability, and performance.

UI Enhancements: Improved the overall user interface by adding animations for interactivity and ensuring a better design for mobile responsiveness.


Feel free to contribute, report issues, or suggest improvements! Your feedback is highly appreciated.
