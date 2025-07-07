import React from 'react';
import { useUndo } from '../hooks/useUndo';

export const TextEditor: React.FC = () => {
  const { input, update, undo, redo, canUndo, canRedo } = useUndo('');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
      <textarea
        placeholder="Start typing your text here..."
        className="w-full h-[400px] sm:h-[500px] p-4 border-2 border-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none text-base"
        value={input}
        onChange={(e) => update(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <button
          onClick={undo}
          disabled={!canUndo}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Undo
        </button>
        <button
          onClick={redo}
          disabled={!canRedo}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Redo
        </button>
      </div>
    </div>
  );
};
