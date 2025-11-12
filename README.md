# Website

A modern, feature-rich web application built with React, TypeScript, and Vite, designed to be hosted on GitHub Pages.

## Features

### Public Features
- **Meeting Cost Calculator**: Calculate the cost of meetings based on:
  - Number of attendees
  - Average hourly rate
  - Meeting duration
  - Real-time cost calculation

### Private Features (Authentication Required)
- **AWS Instance Availability Checker**: Check if AWS EC2 instances are available in specific regions
  - Instance ID validation
  - Region selection
  - Mock availability checking (demo implementation)

## Technology Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.2
- **Styling**: CSS3 with modern gradients and transitions
- **Authentication**: Client-side authentication with localStorage (demo)

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/BennyScepka/website.git
cd website

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/website/`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Development

### Project Structure

```
website/
├── src/
│   ├── components/          # React components
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── Login.tsx        # Login form
│   │   ├── MeetingCalculator.tsx  # Meeting cost calculator
│   │   └── AWSChecker.tsx   # AWS instance checker
│   ├── AuthContext.tsx      # Authentication context
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
└── dist/                    # Build output (generated)
```

### Authentication

For demo purposes, the application uses a simple authentication system:
- **Username**: Any username
- **Password**: `demo123`

The authentication state is persisted in localStorage.

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

The application is configured for GitHub Pages deployment. When you push to the `main` branch, GitHub Actions will automatically build and deploy the application.

### Manual Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
1. Builds the application
2. Uploads the build artifacts
3. Deploys to GitHub Pages

Make sure GitHub Pages is enabled in your repository settings and set to deploy from GitHub Actions.

## UI/UX Features

- **Responsive Design**: Works on desktop and mobile devices
- **Modern Gradient Theme**: Purple gradient sidebar with smooth transitions
- **Interactive Controls**: Range sliders for intuitive input
- **Real-time Feedback**: Instant cost calculation and status updates
- **Protected Routes**: Private features require authentication
- **Persistent Login**: Authentication state persists across sessions

## Screenshots

### Meeting Cost Calculator
![Meeting Cost Calculator](https://github.com/user-attachments/assets/9a3d1771-b13e-4764-971b-f3d1ce84e412)

### Login Screen
![Login](https://github.com/user-attachments/assets/0620e9d6-f512-4f82-805a-cbe51f63ae23)

### AWS Instance Checker
![AWS Checker](https://github.com/user-attachments/assets/061c30a4-0baa-426c-98cb-835cf1adeb32)

### Result Display
![AWS Result](https://github.com/user-attachments/assets/4ce5a767-dc7f-46f1-b1de-a8ab5a2221ab)

## Future Enhancements

- Backend API integration for real AWS instance checking
- OAuth authentication (GitHub, Google, etc.)
- Additional calculators and tools
- Dark mode toggle
- More AWS service integrations
- User preferences and settings

## License

This project is open source and available under the MIT License.
