import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                {
                    /**
                     * Header Component
                     */
                }
                <HeaderComponent />
                
                {
                    /**
                     * Body
                     */
                }
                <App {...props} />
                
                {
                    /**
                     * Footer Component
                     */
                }
                <FooterComponent />
            </>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

/**
 * Initialize theme from localStorage on page load
 */
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        /**
         * If no theme is saved, check system preference
         */
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
}

/**
 * Initialize language from localStorage on page load
 */
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('language');
    
    if (!savedLanguage) {
        // Default to English if no language is saved
        localStorage.setItem('language', 'en');
    }
}

/**
 * Initialize theme and language as early as possible to prevent flash
 */
initializeTheme();
initializeLanguage();
