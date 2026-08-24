import { useState, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import { supabase } from '../lib/supabase';

export default function ServicePage() {
  const navigate = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') as string,
      address: formData.get('address') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      order_number: (formData.get('ordernr') as string) || null,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
    };

    const { error: dbError } = await supabase.from('service_submissions').insert(payload);

    if (dbError) {
      setError('Er ging iets mis bij het versturen. Probeer het opnieuw of neem telefonisch contact op.');
      setSending(false);
      return;
    }

    const files = formData.getAll('photos') as File[];
    const attachments: { filename: string; content: string }[] = [];
    for (const file of files) {
      if (file.size > 0) {
        const buffer = await file.arrayBuffer();
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        attachments.push({ filename: file.name, content: btoa(binary) });
      }
    }

    fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-notification`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'service', data: payload, attachments }),
    }).catch(() => {});

    navigate('/bedankt-serviceverzoek');
  };

  return (
    <>
      <PageMeta
        title="Service"
        description="Serviceverzoeken, garantievragen en nazorg bij Thuiskwartier. Voor keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-wide">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Service
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl">
            Heb je een vraag over je levering, montage of product? Of heb je een serviceverzoek?
            We helpen je graag verder.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Service' }]} />

      <section className="section-padding py-8 lg:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-semibold text-purple-800 mb-4">
                  Serviceverzoek bij Thuiskwartier
                </h2>
                <p className="text-softgray-600 leading-relaxed mb-6">
                  Voor vragen over levering, montage, afwerking, badkamer, keuken, vloer, tegels,
                  maatwerkkasten of algemene nazorg kun je onderstaand formulier invullen. We nemen
                  zo snel mogelijk contact met je op.
                </p>

                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-softgray-200 p-6 lg:p-8 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-softgray-700 mb-1.5">Naam</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-softgray-700 mb-1.5">Adres</label>
                    <input type="text" id="address" name="address" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-softgray-700 mb-1.5">E-mailadres</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-softgray-700 mb-1.5">Telefoonnummer</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="ordernr" className="block text-sm font-medium text-softgray-700 mb-1.5">
                      Ordernummer of projectnummer <span className="text-softgray-400 font-normal">(indien bekend)</span>
                    </label>
                    <input type="text" id="ordernr" name="ordernr" className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800" />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-softgray-700 mb-1.5">Productgroep</label>
                    <select id="category" name="category" required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800 bg-white">
                      <option value="">Selecteer...</option>
                      <option value="keuken">Keuken</option>
                      <option value="badkamer">Badkamer</option>
                      <option value="pvc">PVC-vloer</option>
                      <option value="tegels">Tegels</option>
                      <option value="maatwerkkasten">Maatwerkkasten</option>
                      <option value="apparatuur">Apparatuur</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-softgray-700 mb-1.5">Korte omschrijving</label>
                    <textarea id="description" name="description" rows={4} required className="w-full px-4 py-3 rounded-lg border border-softgray-200 focus:border-turquoise-400 focus:ring-2 focus:ring-turquoise-200 outline-none transition-colors text-purple-800 resize-none" />
                  </div>
                  <div>
                    <label htmlFor="photos" className="block text-sm font-medium text-softgray-700 mb-1.5">
                      Foto's toevoegen <span className="text-softgray-400 font-normal">(optioneel)</span>
                    </label>
                    <input type="file" id="photos" name="photos" multiple accept="image/*" className="w-full text-sm text-softgray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-softgray-200 file:text-softgray-700 hover:file:bg-softgray-200" />
                  </div>
                  <p className="text-xs text-softgray-400">
                    Door dit formulier te versturen ga je akkoord met onze{' '}
                    <Link to="/privacyverklaring" className="underline">privacyverklaring</Link>.
                  </p>
                  <button type="submit" disabled={sending} className="btn-primary w-full text-center disabled:opacity-50">
                    {sending ? 'Versturen...' : 'Serviceverzoek versturen'}
                  </button>
                  {error && <p className="text-red-600 text-sm">{error}</p>}
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-softgray-100 rounded-2xl p-6 lg:p-8">
                <h2 className="font-display text-xl font-semibold text-purple-800 mb-4">
                  Rechtstreeks naar fabrikantservice
                </h2>
                <p className="text-softgray-600 leading-relaxed mb-4">
                  Bij apparatuur kan rechtstreeks melden bij de fabrikant soms sneller zijn.
                  Denk aan Siemens, Bosch, AEG, Electrolux en andere apparatuurmerken.
                </p>
                <p className="text-softgray-600 leading-relaxed">
                  Twijfel je? Dan kun je natuurlijk ook contact met ons opnemen. We helpen je
                  graag op weg.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-softgray-200 p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-purple-800 mb-3">
                  Liever direct contact?
                </h3>
                <p className="text-softgray-600 mb-4">
                  Bel ons of stuur een WhatsApp-bericht.
                </p>
                <div className="space-y-2">
                  <a href="tel:0527798000" className="block text-purple-800 font-medium hover:text-turquoise-700">
                    0527 798 000
                  </a>
                  <a href="mailto:info@thuiskwartier.nl" className="block text-purple-800 font-medium hover:text-turquoise-700">
                    info@thuiskwartier.nl
                  </a>
                </div>
              </div>

              <div className="text-sm text-softgray-500">
                <p>
                  Wil je een showroomafspraak plannen?{' '}
                  <Link to="/afspraak-maken" className="text-purple-800 underline hover:no-underline">
                    Plan een afspraak
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
