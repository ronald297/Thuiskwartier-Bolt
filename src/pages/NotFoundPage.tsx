import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="Pagina niet gevonden" description="Deze pagina bestaat niet of is verplaatst." />
      <section className="pt-32 lg:pt-40 section-padding pb-20 min-h-[70vh] flex items-center">
        <div className="container-narrow text-center">
          <p className="text-6xl font-display font-bold text-softgray-200 mb-4">404</p>
          <h1 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-softgray-600 mb-8 max-w-md mx-auto">
            De pagina die je zoekt bestaat niet of is verplaatst. Geen probleem, hieronder vind
            je een paar handige links om verder te gaan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="btn-primary">Home</Link>
            <Link to="/keukens" className="btn-secondary">Keukens</Link>
            <Link to="/badkamers" className="btn-secondary">Badkamers</Link>
            <Link to="/projecten" className="btn-secondary">Projecten</Link>
            <Link to="/contact" className="btn-secondary">Contact</Link>
            <Link to="/afspraak-maken" className="btn-secondary">Afspraak maken</Link>
          </div>
        </div>
      </section>
    </>
  );
}
