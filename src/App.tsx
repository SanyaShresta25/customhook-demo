import React from 'react';
import { TextEditor } from './components/TextEditor';

const App: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 text-center">
      <a
        href="https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-3xl sm:text-5xl font-bold font-serif mb-6 underline decoration-blue-500 underline-offset-8 hover:text-pink-700 transition">
          CustomHook Demo
        </h1>
      </a>
    </div>

    <div className="flex justify-center px-4 sm:px-6">
      <TextEditor />
    </div>
  </div>
);

export default App;
