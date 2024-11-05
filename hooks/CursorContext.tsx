import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface CursorContextType {
  cursorText: string;
  setCursorText: (text: string) => void;
}

// Create the context with an initial value of undefined
const CursorContext = createContext<CursorContextType | undefined>(undefined);

// Custom hook to use the cursor context
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

// Define the props for the CursorProvider
interface CursorProviderProps {
  children: ReactNode; // Explicitly define the type for children
}

// CursorProvider component
export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
  const [cursorText, setCursorText] = useState<string>('');

  return (
    <CursorContext.Provider value={{ cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};
