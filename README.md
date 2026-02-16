# Dominique McClaney Portfolio

A modern, production-ready portfolio website built with React.js, showcasing skills, experience, projects, and achievements.

## Features

- **Modern Design**: Dark luxury tech theme with glassmorphism effects
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Mobile-first responsive design
- **Multi-page**: React Router with 6 pages (Home, Experience, Education, Projects, Honors, Contact)
- **AI Chatbot**: Interactive chatbot with knowledge about the portfolio owner
- **SEO Optimized**: React Helmet for meta tags on every page

## Tech Stack

- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS v4 + Custom CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: React Icons
- **SEO**: React Helmet Async
- **Fonts**: Syne, DM Sans, JetBrains Mono (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MccDom1/dominique-mcclaney-portfolio.git
   cd dominique-mcclaney-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically

The `vercel.json` file is already configured for SPA routing.

### Manual Vercel Deployment

```bash
npm install -g vercel
vercel --prod
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (routes)
├── data/           # Centralized resume data
├── assets/         # Static assets
├── App.jsx         # Main app component with routing
├── App.css         # Global styles and animations
├── index.css       # Tailwind imports
└── main.jsx        # App entry point
```

## Pages

- **Home** (`/`): Hero section, stats, skills grid, featured projects, CTA
- **Experience** (`/experience`): Professional timeline
- **Education** (`/education`): Academic background and certifications
- **Projects** (`/projects`): Portfolio of work
- **Honors** (`/honors`): Awards and achievements
- **Contact** (`/contact`): Contact information and form

## Customization

All resume data is centralized in `src/data/resumeData.js` for easy customization.

## License

MIT License

## Contact

- **Email**: mcclaneydominique@gmail.com
- **LinkedIn**: [linkedin.com/in/dominique-mcclaney](https://www.linkedin.com/in/dominique-mcclaney)
- **GitHub**: [github.com/MccDom1](https://github.com/MccDom1)
