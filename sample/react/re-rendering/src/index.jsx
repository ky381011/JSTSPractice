import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Rendering } from './Rendering';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Rendering />
  </StrictMode>
);