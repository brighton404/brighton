// src/context/CardContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface CardContextType {
  expanded: boolean;
  toggleCard: () => void;
}

// Create the context with the type or default value (null initially)
const CardContext = createContext<CardContextType | undefined>(undefined);

// Define the provider props
interface CardProviderProps {
  children: ReactNode;
}

// Create a provider component
export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleCard = () => setExpanded(!expanded);

  return (
    <CardContext.Provider value={{ expanded, toggleCard }}>
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the Card context
export const useCardContext = (): CardContextType => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
};
