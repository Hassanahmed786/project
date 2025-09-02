# Shruti Keshri - Personal Portfolio

A modern, responsive portfolio website showcasing Shruti Keshri's journey as an aspiring full-stack developer, Amazon ML School student, and 2× hackathon winner.

## 🚀 Features

- **Modern Design**: Clean, professional design with royal blue and purple gradient theme
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Optimized for mobile, tablet, and desktop viewing
- **Interactive**: Smooth animations, hover effects, and section transitions
- **Performance**: Built with React + TypeScript + Tailwind CSS for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for any static hosting platform

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation with mobile support
│   ├── Hero.tsx        # Hero section with CTA buttons
│   ├── About.tsx       # About section with stats
│   ├── Skills.tsx      # Skills with progress indicators
│   ├── Experience.tsx  # Experience and education
│   ├── Projects.tsx    # Featured projects showcase
│   ├── Achievements.tsx# Achievements and certifications
│   ├── Contact.tsx     # Contact form and social links
│   └── Footer.tsx      # Footer component
├── hooks/              # Custom React hooks
│   ├── useTheme.ts     # Dark/light mode management
│   └── useActiveSection.ts # Navigation active state
├── data/               # Data and content
│   └── portfolioData.ts# All portfolio content
├── types/              # TypeScript type definitions
│   └── portfolio.ts    # Interface definitions
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🎨 Customization

### Updating Content

Edit the data in `src/data/portfolioData.ts` to customize:
- Personal information
- Skills and experience
- Projects and achievements
- Contact information

### Styling

The design system is configured in `tailwind.config.js` with:
- Custom color palette (primary blue, secondary purple)
- Responsive breakpoints
- Animation utilities
- Custom spacing system

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the section data to `src/data/portfolioData.ts`
3. Import and use in `src/App.tsx`
4. Update navigation in `src/components/Navigation.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🌟 Key Features

- **Section Navigation**: Smooth scroll-to-section with active highlighting
- **Theme Toggle**: Persistent dark/light mode with system preference
- **Contact Form**: Functional mailto integration
- **Project Showcase**: Interactive project cards with tech stack display
- **Skills Visualization**: Progress bars and category grouping
- **Certification Gallery**: Expandable list with show more/less functionality

## 📞 Contact

For questions about this portfolio template or to connect with Shruti:

- **Email**: shruti.keshri@example.com
- **LinkedIn**: [linkedin.com/in/shrutikeshri](https://www.linkedin.com/in/shrutikeshri/)
- **GitHub**: [github.com/shrutikeshri](https://github.com/shrutikeshri)

---

Built with ❤️ by Shruti Keshri using React + TypeScript + Tailwind CSS