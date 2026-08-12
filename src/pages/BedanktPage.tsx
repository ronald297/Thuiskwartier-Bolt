import { Link, useLocation } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const content: Record<string, { title: string; message: string }> = {
  '/bedankt-contact': {
    title: 'Bedankt voor je bericht',
    message: 'We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.',
  },
  '/bedankt-partneraanvraag': {
    title: 'Bedankt voor je interesse',
    message: 'Bedankt voor je interesse in samenwerking met Thuiskwartier. We bekijken je aanvraag en nemen contact met je op.',
  },
  '/bedankt-serviceverzoek': {
    title: 'Bedankt voor je melding',
    message: 'We hebben je serviceverzoek ontvangen. Als er aanvullende informatie nodig is, nemen we contact met je op.',
  },
};

export default function BedanktPage() {
  const { pathname } = useLocation();
  const page = content[pathname] || content['/bedankt-contact'];

  return (
    <>
      <PageMeta title={page.title} description={page.message} />
      <section className="pt-32 lg:pt-40 section-padding pb-20 min-h-[70vh] flex items-center">
        <div className="container-narrow text-center">
          <div className="w-16 h-16 bg-turquoise-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-turquoise-500" />
          </div>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            {page.title}
          </h1>
          <p className="text-softgray-600 mb-8 max-w-md mx-auto">{page.message}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Naar de homepage</Link>
            <Link to="/projecten" className="btn-secondary">Bekijk projecten</Link>
          </div>
        </div>
      </section>
    </>
  );
}
