# CustomHook Undo/Redo Demo

This project demonstrates how to use a custom React hook to implement undo and redo functionality in a simple text editor. It supports grouped edits (so undo/redo works naturally), responsive layout, and clear UI using Tailwind CSS.

## 🔄 Features

- Custom React hook (`useUndo`) for managing input history
- Undo and Redo buttons with simple logic
- Grouped edits to avoid per-character undo
- Mobile-responsive layout
- Styled with Tailwind CSS
- Emoji favicon and interactive heading

## 🛠 Tech Stack

<div align="left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white&labelColor=eaf4fc" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white&labelColor=eaf4fc" />
  <img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=flat&logo=tailwindcss&logoColor=white&labelColor=eaf4fc" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white&labelColor=eaf4fc" />
</div>

## 🚀 Getting Started

```bash
# Clone the project
git clone https://github.com/SanyaShresta25/customhook-demo.git

# Navigate to the project
cd customhook-undo-demo

# Install dependencies
npm install

# Run the development server
npm run dev
````

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── hooks/              # useUndo logic
├── components/         # TextEditor & Buttons
├── App.tsx             # Root layout
├── main.tsx            # Entry point
├── index.css           # Tailwind setup
```

## 📚 Learn More

Click the heading in the app to explore:
[React Custom Hooks — Sharing Logic Between Components](https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components)

---
