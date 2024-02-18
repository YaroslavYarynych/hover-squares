import React, { useState } from 'react';
import { Mode } from '../types/type';

export const initialValue: any = {
  activeCells: [],
  modes: [],
  value: '',
  error: '',
  isStarted: false,
};

export const Context = React.createContext(initialValue);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [modes, setModes] = useState<Mode[]>([]);
  const [value, setValue] = useState('null');
  const [isStarted, setIsStarted] = useState(false);
  const [error, setError] = useState('');
  const [activeCells, setActiveCells] = useState([]);
  return (
    <Context.Provider
      value={{
        value,
        modes,
        isStarted,
        error,
        activeCells,
        setModes,
        setValue,
        setIsStarted,
        setError,
        setActiveCells,
      }}
    >
      {children}
    </Context.Provider>
  );
};
