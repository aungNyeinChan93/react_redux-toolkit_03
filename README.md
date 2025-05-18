# React + Vite Starter

A minimal template to kickstart React projects with Vite, featuring HMR and basic ESLint setup.

## Key Features

- ⚡️ Lightning-fast development with Vite
- 🔥 React Hot Module Replacement (HMR)
- 🧹 Basic ESLint configuration
- 🛠️ Easy extension for TypeScript and advanced linting

## Official Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/) for Fast Refresh

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the development server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
.
├── public/             # Static assets
├── src/                # React source code
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point for React
├── .eslintrc           # ESLint configuration
├── index.html          # HTML template
└── package.json        # Project metadata and scripts
```

## ESLint & TypeScript

For production apps, consider using TypeScript with type-aware linting. See the [React + TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io) for integration details.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [ESLint Documentation](https://eslint.org/)

## License

MIT
