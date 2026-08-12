import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ContactPage() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => navigate('/bedankt-contact'), 800);
  };

  return (
    <>
      <PageMeta
        title="Contact"
        description="Neem contact op met Thuiskwartier. Bel, mail, WhatsApp of bezoek onze showroom aan de Marsdiep 1 in Urk."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Contact
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl">
            Heb je een vraag of wil je iets bespreken? Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Contact' }]} />

      <section className="section-padding py-8 lg:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <a href="tel:0527798000" className="flex items-start gap-3 p-5 bg-white rounded-xl border border-softgray-200 hover:shadow-md transition-shadow">
                  <Phone className="w-5 h-5 text-turquoise-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-800">Telefoon</p>
                    <p className="text-softgray-600">0527 798 000</p>
                  </div>
                </a>
                <a href="https://wa.me/31527798000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 p-5 bg-white rounded-xl border border-softgray-200 hover:shadow-md transition-shadow">
                  <MessageCircle className="w-5 h-5 text-turquoise-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-800">WhatsApp</p>
                    <p className="text-softgray-600">0527 798 000</p>
                  </div>
                </a>
                <a href="mailto:info@thuiskwartier.nl" className="flex items-start gap-3 p-5 bg-white rounded-xl border border-softgray-200 hover:shadow-md transition-shadow">
                  <Mail className="w-5 h-5 text-turquoise-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-800">E-mail</p>
                    <p className="text-softgray-600">info@thuiskwartier.nl</p>
                  </div>
                </a>
                <div className="flex items-start gap-3 p-5 bg-white rounded-xl border border-softgray-200">
                  <MapPin className="w-5 h-5 text-turquoise-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-purple-800">Adres</p>
                    <p className="text-softgray-600">Marsdiep 1, Urk</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-softgray-100 rounded-xl">
                <Clock className="w-5 h-5 text-turquoise-600 mt-0.5" />
                <div>
                  <p className="font-medium text-purple-800 mb-1">Openingstijden</p>
                  <p className="text-softgray-600">Maandag t/m vrijdag: 09:00 - 17:30</p>
                  <p className="text-softgray-600">Zaterdag: 09:30 - 16:00</p>
                  <p className="text-softgray-600">Zondag: gesloten</p>
                </div>
              </div>

              <div className="text-sm text-softgray-600">
                <p className="mb-2">
                  Wil je je plannen bespreken? Plan dan een{' '}
                  <Link to="/afspraak-maken" className="text-purple-800 underline hover:no-underline">
                    showroomafspraak
                  </Link>.
                </p>
                <p>
                  Heb je een servicevraag? Ga dan naar{' '}
                  <Link to="/service" className="text-purple-800 underline hover:no-underline">
                    service
                  </Link>.
                </p>
              </div>

              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-softgray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2406.5!2d5.6!3d52.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMarsdiep+1+Urk!5e0!3m2!1snl!2snl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Locatie Thuiskwartier"
                />
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-softgray-200 p-6 lg:p-8 h-fit lg:sticky lg:top-24">
              <h2 className="font-display text-xl font-semibold text-purple-800 mb-6">
                Stuur een bericht
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-softgray-700 mb-1.5">Naam</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-softgray-700 mb-1.5">E-mailadres</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-softgray-700 mb-1.5">Telefoonnummer</label>
                  <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-softgray-700 mb-1.5">Bericht</label>
                  <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800 resize-none" />
                </div>
                <p className="text-xs text-softgray-400">
                  Door dit formulier te versturen ga je akkoord met onze{' '}
                  <Link to="/privacyverklaring" className="underline">privacyverklaring</Link>.
                </p>
                <button type="submit" disabled={sending} className="btn-primary w-full text-center disabled:opacity-50">
                  {sending ? 'Versturen...' : 'Bericht versturen'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
