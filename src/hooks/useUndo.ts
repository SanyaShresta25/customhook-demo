
import { useState, useRef } from 'react';

export function useUndo(initialValue = '') {
  const [input, setInput] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  const index = useRef(0);

  const update = (value: string) => {
    index.current += 1;
    const newHistory = [...history.slice(0, index.current), value];
    setHistory(newHistory);
    setInput(value);
  };

  const undo = () => {
    if (index.current > 0) {
      index.current -= 1;
      setInput(history[index.current]);
    }
  };

  const redo = () => {
    if (index.current < history.length - 1) {
      index.current += 1;
      setInput(history[index.current]);
    }
  };

  return {
    input,
    update,
    undo,
    redo,
    canUndo: index.current > 0,
    canRedo: index.current < history.length - 1
  };
}
