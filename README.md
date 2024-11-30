# CarePulse

![CarePulse](logoFull.png)

CarePulse is a healthcare appointment management application designed to streamline scheduling and improve interactions between patients and healthcare providers. Built with modern web technologies, it offers a responsive, intuitive, and scalable platform for managing healthcare services.

## Features

- **Appointment Management**: Schedule and manage healthcare appointments effortlessly.
- **Patient Profiles**: Maintain and access patient details with ease.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Modern Stack**: Built with Next.js, React, TypeScript, Shadcn, and Appwrite for robust performance.
- **Admin Dashboard**: Tools for healthcare professionals to oversee appointments and patient records.

## Tech Stack

- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS, Shadcn
- **Backend**: Appwrite
- **Language**: TypeScript

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16+ recommended)
- Package manager (npm, yarn, or pnpm)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DavidDemory/CarePulse.git
   cd CarePulse
   ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
   ```
3. Set up environment variables: Create a .env.local file in the root directory and add necessary variables for Appwrite configuration.

4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to http://localhost:3000.

## File Structure
```php
src/
├── app/            # Application pages and routing
├── components/     # Reusable UI components
├── constants/      # Application constants
├── lib/            # Helper libraries and utilities
├── public/         # Static assets
├── types/          # TypeScript type definitions
└── styles/         # Global and component-specific styles
```

## Acknowledgments
Built with ❤️ using Next.js, React, TypeScript, Tailwind CSS, and Appwrite.  
Thanks to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery/featured) for the tutorial and resources.

## Live Demo
Check out the live demo: CarePulse