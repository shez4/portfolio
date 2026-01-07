# Shanal's IT Portfolio

A modern, responsive portfolio website showcasing IT Help Desk skills, troubleshooting processes, homelab projects, and technical work.

## 🚀 Live Demo

Visit: [Your Domain Here]

## 📋 Features

- **Modern Design**: Clean, professional UI with smooth animations and glass morphism effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **IT Focus**: Specialized sections for:
  - Technical Projects (automation, scripts, configurations)
  - Homelab Infrastructure (Proxmox, Pi-hole, Docker, networking)
  - Troubleshooting Cases (real-world IT support scenarios)
  - Skills & Certifications
- **Easy to Update**: Simple data structures for adding new content
- **SEO Optimized**: Built with Next.js for great performance and SEO
- **Fast Performance**: Optimized images and code splitting

## 🛠️ Technology Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Styling**: Tailwind CSS 4.1.17
- **Language**: JavaScript
- **Hosting**: Vercel (recommended)
- **Build Tools**: PostCSS 8.5.6, Autoprefixer 10.4.22

## 📦 Installation

### Prerequisites

- Node.js 18+ installed (recommended: Node.js 20+)
- npm package manager (included with Node.js)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/shez4/Portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# This will install:
# - next (16.0.10)
# - react (19.2.1) 
# - react-dom (19.2.1)
# - tailwindcss (4.1.17)
# - postcss (8.5.6)
# - autoprefixer (10.4.22)
```

   **Note**: Run `npm audit` after installation to check for security vulnerabilities. Use `npm audit fix` if any are found.

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 How to Update Content

### Adding New Projects

Edit `app/projects/page.jsx` and add to the `projects` array:

```javascript
{
  title: 'Your Project Name',
  description: 'Detailed description of what the project does',
  tags: ['PowerShell', 'Automation', 'Windows'],
  github: 'https://github.com/yourusername/repo-name',
  image: null
}
```

### Adding New Homelab Projects

Edit `app/homelab/page.jsx` and add to the `homelabProjects` array:

```javascript
{
  title: 'New Homelab Setup',
  description: 'What this setup does',
  purpose: 'Why you built it',
  tools: ['Tool1', 'Tool2', 'Tool3'],
  learned: 'Key learnings and takeaways',
  status: 'Active' // or 'In Progress' or 'Planning'
}
```

### Adding New Troubleshooting Cases

Edit `app/troubleshooting/page.jsx` and add to the `troubleshootingCases` array:

```javascript
{
  title: 'Issue Title',
  problem: 'Description of the problem',
  investigation: 'Initial investigation steps',
  steps: [
    'Step 1',
    'Step 2',
    'Step 3'
  ],
  tools: ['Tool1', 'Tool2'],
  rootCause: 'What caused the issue',
  fix: 'How it was fixed',
  prevention: 'How to prevent it in future',
  difficulty: 'Basic' // or 'Intermediate' or 'Advanced'
}
```

### Updating Skills & Certifications

Edit `app/about/page.jsx`:
- Update the `skills` object with your technical skills
- Update the `certifications` array with your certifications

### Adding Your Resume

1. Place your resume PDF file in the `public` folder as `resume.pdf`
2. The download link on the About page will automatically work

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Upload the `.next` folder to Netlify

### Deploy to GitHub Pages

1. Install the GitHub Pages adapter
2. Configure `next.config.js` for static export
3. Run `npm run build` and deploy the `out` folder

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.jsx          # Root layout with navigation
│   ├── page.jsx            # Homepage with hero and overview
│   ├── globals.css         # Global styles and Tailwind imports
│   ├── about/
│   │   └── page.jsx        # About, skills, certifications
│   ├── contact/
│   │   └── page.jsx        # Contact information
│   ├── projects/
│   │   └── homelab/        # Homelab project details
│   └── troubleshooting/
│       ├── page.jsx        # IT troubleshooting cases
│       └── slow-wifi/      # Specific troubleshooting case
├── components/
│   ├── CodeBlock.jsx       # Code display component
│   ├── Footer.jsx          # Footer with links
│   ├── ImageGallery.jsx    # Image gallery component
│   ├── Navbar.jsx          # Navigation bar
│   ├── ProjectCard.jsx     # Reusable project card
│   ├── SectionCard.jsx     # Section card component
│   ├── Timeline.jsx        # Timeline component
│   └── TroubleshootingSteps.jsx # Troubleshooting steps
├── Content/
│   ├── homelab/            # Homelab content files
│   ├── software/           # Software-related content
│   └── troubleshooting/    # Troubleshooting content
├── public/
│   └── images/             # Place images here
├── styles/
│   └── markdown.css        # Markdown styling
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Customization

### Colors

The site uses a blue-cyan-teal gradient theme. To change colors, update:
- `app/globals.css` - Global color schemes
- Individual page gradients in component files

### Fonts

The site uses system fonts by default. To add custom fonts:
1. Add font files to `public/fonts`
2. Update `app/globals.css` with font-face declarations
3. Update `font-family` in CSS

### Adding Images

Place images in the `public/images` folder and reference them as:
```jsx
<img src="/images/your-image.jpg" alt="Description" />
```

## 🔧 Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## 🔍 Troubleshooting

### Common Issues

1. **Module not found errors**: Ensure all dependencies are installed with `npm install`
2. **Security vulnerabilities**: Run `npm audit fix` to resolve known vulnerabilities
3. **Port 3000 already in use**: Kill existing processes or use a different port with `npm run dev -- -p 3001`
4. **Build errors**: Check that all required files exist in the project structure

### Getting Help

If you encounter issues:
1. Check the console for error messages
2. Ensure Node.js version is 18 or higher
3. Try deleting `node_modules` and running `npm install` again
4. Check that all configuration files are present

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Shanal**

- GitHub: [@shez4](https://github.com/shez4)
- Portfolio: [Your Domain]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

Built with ❤️ using Next.js and Tailwind CSS
