import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Phone } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import Breadcrumbs from '../components/Breadcrumbs';
import ReviewCard from '../components/ReviewCard';
import CTASection from '../components/CTASection';
import { reviews } from '../data/reviews';

export default function ShowroomPage() {
  return (
    <>
      <PageMeta
        title="Showroom in Urk"
        description="Bezoek onze showroom in Urk. Keukens, badkamers, PVC-vloeren, tegels en maatwerkkasten bekijken, voelen en bespreken. Marsdiep 1, Urk."
      />

      <section className="relative h-[50vh] lg:h-[60vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src="/showroom-thuiskwartier copy.jpg"
            alt="Showroom interieur Thuiskwartier in Urk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-purple-950/30 to-transparent" />
        </div>
        <div className="relative section-padding pb-10 lg:pb-14 w-full">
          <div className="container-wide">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              Showroom in Urk
            </h1>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: 'Over Thuiskwartier', href: '/over-thuiskwartier' },
          { label: 'Showroom in Urk' },
        ]}
      />

      <section className="section-padding py-12 lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-purple-800 mb-5">
                Materialen zien en voelen
              </h2>
              <p className="text-softgray-600 leading-relaxed mb-4">
                In onze showroom aan de Marsdiep 1 in Urk kun je keukens, badkamers, PVC-vloeren,
                tegels en maatwerkkasten bekijken. Niet op een scherm, maar echt. Je kunt materialen
                voelen, kleuren vergelijken en combinaties uitproberen.
              </p>
              <p className="text-softgray-600 leading-relaxed mb-4">
                Onze adviseurs nemen de tijd om mee te denken. Over stijl, indeling, materialen en
                budget. Zodat je keuzes maakt die kloppen bij je woning en je manier van leven.
              </p>
              <p className="text-softgray-600 leading-relaxed mb-6">
                Je bent welkom zonder afspraak. Wil je zeker weten dat we alle tijd voor je hebben?
                Plan dan vooraf een showroomafspraak.
              </p>
              <Link to="/afspraak-maken" className="btn-primary inline-flex items-center gap-2">
                Plan een showroomafspraak <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6444260/pexels-photo-6444260.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Materialen en tegels in de showroom"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-purple-800 mb-6">
            Dit kun je bekijken in de showroom
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {['Keukens', 'Badkamers', 'PVC-vloeren', 'Tegels', 'Maatwerkkasten'].map((item) => (
              <div key={item} className="bg-white rounded-xl p-5 text-center">
                <span className="font-medium text-purple-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google 360 placeholder */}
      <section className="section-padding py-12 lg:py-16 bg-white">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-purple-800 mb-6">
            Virtuele rondleiding
          </h2>
          <div className="aspect-video rounded-2xl overflow-hidden bg-softgray-200 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-softgray-500 mb-2">Google 360 rondleiding</p>
              <p className="text-sm text-softgray-400">De virtuele tour wordt hier ingeladen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Praktische info */}
      <section className="section-padding py-12 lg:py-16 bg-softgray-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-display text-2xl font-semibold text-purple-800 mb-6">
                Praktische informatie
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-turquoise-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-800">Adres</p>
                    <p className="text-softgray-600">Marsdiep 1, Urk</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-turquoise-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-800">Telefoon</p>
                    <a href="tel:0527798000" className="text-softgray-600 hover:text-purple-800">0527 798 000</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-turquoise-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-purple-800">Openingstijden</p>
                    <p className="text-softgray-600">Maandag t/m vrijdag: 09:00 - 17:30</p>
                    <p className="text-softgray-600">Zaterdag: 09:30 - 16:00</p>
                    <p className="text-softgray-600">Zondag: gesloten</p>
                  </div>
                </div>
              </div>
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
                title="Locatie Thuiskwartier Urk"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding py-12 lg:py-16 bg-white">
        <div className="container-wide">
          <h2 className="font-display text-2xl font-semibold text-purple-800 mb-8">
            Wat klanten zeggen over de showroom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
