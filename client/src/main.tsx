import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "react-query";

import App from './App.tsx'
import axios from 'axios';

const queryClient = new QueryClient();
axios.defaults.baseURL = 'http://localhost:3000'

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryClientProvider>,
)
