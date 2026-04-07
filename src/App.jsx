import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Whatsapp from "./components/Whatsapp";
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import EbooksDesigning from './components/pages/EbooksDesigning';
import EbookDetails from './components/pages/EbookDetails';
import KDPDesigns from './components/pages/KDPDesigns';
import MobileApps from './components/pages/MobileApps';
import MobileAppDetails from './components/pages/MobileAppDetails';
import DetailedAbout from "./components/pages/DetailedAbout";
import useReveal from './hooks/useReveal';

const App = () => {
  const location = useLocation();
  // Re-run on every route change so freshly rendered `.reveal` nodes are observed.
  useReveal([location.pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/DetailedAbout" element={<DetailedAbout />} />
        <Route path="/ebooks-designing" element={<EbooksDesigning />} />
        <Route path="/ebook-details/:id" element={<EbookDetails />} />
        <Route path="/kdp-designs" element={<KDPDesigns />} />
        <Route path="/mobile-apps" element={<MobileApps />} />
        <Route path="/mobile-apps/:id" element={<MobileAppDetails />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
