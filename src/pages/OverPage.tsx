import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import CTASection from '../components/CTASection';
import { team } from '../data/team';

export default function OverPage() {
  return (
    <>
      <PageMeta
        title="Over Thuiskwartier"
        description="Thuiskwartier is een betrokken bedrijf uit Urk voor keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten. Persoonlijk, nuchter en betrouwbaar."
      />

      <section className="pt-32 lg:pt-40 section-padding pb-8">
        <div className="container-narrow text-center">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-purple-800 mb-4">
            Over Thuiskwartier
          </h1>
          <p className="text-lg text-softgray-600 max-w-xl mx-auto">
            Een nuchter en betrokken bedrijf uit Urk. Met een showroom waar je terechtkunt voor
            keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Over Thuiskwartier' }]} />

      <section className="section-padding py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-5">
                Van tegels naar totaalinterieur
              </h2>
              <p className="text-softgray-600 leading-relaxed mb-4">
                Thuiskwartier is ontstaan vanuit TegelExpert. Wat begon als een tegelspecialist is
                gegroeid naar een complete woonshowroom. Niet omdat het moest, maar omdat klanten er
                steeds vaker om vroegen.
              </p>
              <p className="text-softgray-600 leading-relaxed mb-4">
                Vandaag kun je bij Thuiskwartier terecht voor keukens, badkamers, PVC-vloeren,
                tegels en maatwerkkasten. Alles onder een dak, met advies dat verder kijkt dan
                losse producten.
              </p>
              <p className="text-softgray-600 leading-relaxed">
                We geloven in persoonlijk contact, eerlijk advies en keuzes die kloppen bij je
                woning en je manier van leven. Geen druk, geen haast. Gewoon goed meedenken.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Thuiskwartier in gesprek"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            Waar Thuiskwartier voor staat
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            {[
              { title: 'Nuchter', desc: 'We zeggen wat we doen en doen wat we zeggen.' },
              { title: 'Persoonlijk', desc: 'Je bent geen nummer. We kennen je naam en je plannen.' },
              { title: 'Betrouwbaar', desc: 'Afspraken nakomen en kwaliteit leveren. Daar staan we voor.' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6">
                <h3 className="font-display text-lg font-semibold text-purple-800 mb-2">{v.title}</h3>
                <p className="text-sm text-softgray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-20 bg-white">
        <div className="container-wide">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-10 text-center">
            Het team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4 bg-softgray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-sans font-semibold text-purple-800">{member.name}</h3>
                <p className="text-sm text-turquoise-600 mb-2">{member.role}</p>
                {(member.email || member.phone || member.whatsapp) && (
                  <div className="flex items-center justify-center gap-2 mt-2">
                    {member.email && (
                      <a href={`mailto:${member.email}`} title={`Mail ${member.name}`} className="text-softgray-400 hover:text-turquoise-600 transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.phone && (
                      <a href={`tel:${member.phone}`} title={`Bel ${member.name}`} className="text-softgray-400 hover:text-turquoise-600 transition-colors">
                        <Phone className="w-4 h-4" />
                      </a>
                    )}
                    {member.whatsapp && (
                      <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" title={`WhatsApp ${member.name}`} className="text-softgray-400 hover:text-turquoise-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-narrow text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-4">
            Bezoek onze showroom
          </h2>
          <p className="text-softgray-600 mb-6">
            In onze showroom aan de Marsdiep 1 in Urk kun je alles bekijken, voelen en bespreken.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/over-thuiskwartier/showroom-urk" className="btn-primary inline-flex items-center gap-2">
              Bekijk de showroom <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/afspraak-maken" className="btn-secondary inline-flex items-center gap-2">
              Plan een showroomafspraak
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
