import React from 'react';
import type { UndoRedoProps } from '../types/types';

export const UndoRedoButtons: React.FC< UndoRedoProps> = ({ onUndo, onRedo, canUndo, canRedo }) => (
  <div className="flex space-x-2 mt-2">
    <button
      onClick={onUndo}
      disabled={!canUndo}
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Undo"
    >
      Undo
    </button>
    <button
      onClick={onRedo}
      disabled={!canRedo}
      className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
      title="Redo"
    >
      Redo
    </button>
  </div>
);