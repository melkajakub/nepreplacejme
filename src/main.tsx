import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPostHog } from './lib/posthog'

// GitHub Pages sends deep links through public/404.html. Restore the requested
// path before BrowserRouter is mounted so it renders the correct page on the
// very first visit (from search, an advert or a shared link).
const redirectedUrl = sessionStorage.getItem('redirect')
if (redirectedUrl) {
  sessionStorage.removeItem('redirect')
  const target = new URL(redirectedUrl)
  if (target.origin === window.location.origin) {
    window.history.replaceState(null, '', `${target.pathname}${target.search}${target.hash}`)
  }
}

initPostHog();

createRoot(document.getElementById("root")!).render(<App />);
