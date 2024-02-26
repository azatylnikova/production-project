/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-deprecated */

import { render } from 'react-dom';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/provides/ThemeProveder';


import "./shared/config/i18n/i18n"
import { ErrorBoundary } from 'app/provides/ErrorBoundary';

const domNode = document.getElementById('root');
render(

    // eslint-disable-next-line react/react-in-jsx-scope
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
      

    </BrowserRouter>
    ,
    domNode);