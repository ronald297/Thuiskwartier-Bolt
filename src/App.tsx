import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import WerkwijzePage from './pages/WerkwijzePage';
import OverPage from './pages/OverPage';
import ShowroomPage from './pages/ShowroomPage';
import PartnerprogrammaPage from './pages/PartnerprogrammaPage';
import ProjectenPage from './pages/ProjectenPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import InspiratiePage from './pages/InspiratiePage';
import InspirationDetailPage from './pages/InspirationDetailPage';
import AfspraakPage from './pages/AfspraakPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import ServiceApparatuurPage from './pages/ServiceApparatuurPage';
import NieuwbouwPage from './pages/NieuwbouwPage';
import NieuwbouwUrkPage from './pages/NieuwbouwUrkPage';
import RegioPage from './pages/RegioPage';
import MerkenPage from './pages/MerkenPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiePage from './pages/CookiePage';
import BedanktPage from './pages/BedanktPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keukens" element={<ProductPage />} />
          <Route path="/badkamers" element={<ProductPage />} />
          <Route path="/pvc-vloeren" element={<ProductPage />} />
          <Route path="/tegels" element={<ProductPage />} />
          <Route path="/maatwerkkasten" element={<ProductPage />} />
          <Route path="/werkwijze" element={<WerkwijzePage />} />
          <Route path="/over-thuiskwartier" element={<OverPage />} />
          <Route path="/over-thuiskwartier/showroom-urk" element={<ShowroomPage />} />
          <Route path="/partnerprogramma" element={<PartnerprogrammaPage />} />
          <Route path="/projecten" element={<ProjectenPage />} />
          <Route path="/projecten/:slug" element={<ProjectDetailPage />} />
          <Route path="/inspiratie" element={<InspiratiePage />} />
          <Route path="/inspiratie/:slug" element={<InspirationDetailPage />} />
          <Route path="/afspraak-maken" element={<AfspraakPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/service/apparatuur" element={<ServiceApparatuurPage />} />
          <Route path="/nieuwbouw" element={<NieuwbouwPage />} />
          <Route path="/nieuwbouw/urk" element={<NieuwbouwUrkPage />} />
          <Route path="/regio/:slug" element={<RegioPage />} />
          <Route path="/merken" element={<MerkenPage />} />
          <Route path="/privacyverklaring" element={<PrivacyPage />} />
          <Route path="/cookieverklaring" element={<CookiePage />} />
          <Route path="/bedankt-contact" element={<BedanktPage />} />
          <Route path="/bedankt-partneraanvraag" element={<BedanktPage />} />
          <Route path="/bedankt-serviceverzoek" element={<BedanktPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <div className="pb-16 sm:pb-0">
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
}
