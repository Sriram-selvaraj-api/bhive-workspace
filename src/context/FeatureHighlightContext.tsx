import React, { createContext, useContext } from 'react';
import { featureHightLightData } from '../shared/featureHighlightData';

type Feature = {
  icon: string; // you could change this to a ReactNode or component later
  title: string;
};

type FeatureHighlightContextType = {
  whyChooseUs: Feature[];
};

const FeatureHighlightContext = createContext<FeatureHighlightContextType | null>(null);

const FeatureHighlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const data: FeatureHighlightContextType = {
    whyChooseUs: featureHightLightData,
  };

  return <FeatureHighlightContext.Provider value={data}>{children}</FeatureHighlightContext.Provider>;
};

export const useFeatureHighlight = () => {
  const context = useContext(FeatureHighlightContext);
  if (!context) {
    throw new Error('useFeatureHighlight must be used within FeatureHighlightProvider');
  }
  return context;
};

export default FeatureHighlightProvider;
