import React from 'react';
import { createRoot } from 'react-dom/client';
import FormComponent from './Components/form-component';
import './styles.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<FormComponent />);
