# Invoice App

A modern web application for managing invoices built with React, TypeScript, and Vite. This application provides a secure authentication system and features for viewing and managing invoices.

## Features

- 🔐 Secure user authentication
- 📊 Invoice dashboard
- 🔍 Detailed invoice view modal
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast development with Vite
- ✨ Type-safe with TypeScript

## Tech Stack

- [React](https://reactjs.org/) - UI Library
- [TypeScript](https://www.typescriptlang.org/) - Language
- [Vite](https://vitejs.dev/) - Build Tool
- [TanStack Query](https://tanstack.com/query) - Data Fetching
- [Redux Toolkit](https://redux-toolkit.js.org/) - State Management
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Zod](https://zod.dev/) - Schema Validation
- [Axios](https://axios-http.com/) - HTTP Client

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```bash
VITE_BACKEND_URL="http://localhost:3000"
```

4. Start the development server:

```bash
npm run dev
```

## Available scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/     # React components
├── providers/      # Context providers
├── services/      # API services
├── slices/        # Redux slices
├── types/         # TypeScript types
├── lib/           # Utilities and configurations
├── App.tsx        # Root component
└── main.tsx       # Entry point
```
