import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('tk-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('tk-cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('tk-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-md">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-softgray-200 p-5 sm:p-6 mx-auto">
        <p className="text-sm text-softgray-700 leading-relaxed mb-4">
          Wij gebruiken cookies om de website goed te laten werken en om het bezoek te analyseren.
          Lees meer in onze{' '}
          <Link to="/cookieverklaring" className="underline text-purple-800 hover:text-purple-900">
            cookieverklaring
          </Link>.
        </p>
        <div className="flex gap-3">
          <button onClick={accept} className="btn-primary flex-1 text-center">
            Accepteren
          </button>
          <button onClick={decline} className="btn-secondary flex-1 text-center">
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
