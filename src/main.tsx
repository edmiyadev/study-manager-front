import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StudyManager } from './StudyManager';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StudyManager />
  </StrictMode>,
)
