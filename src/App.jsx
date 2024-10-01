import { Routes, Route, useLocation } from "react-router-dom";

// import components
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from "./components/Contact";
import Whatsapp from "./components/Whatsapp";

// pages
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import EbooksDesigning from './components/pages/EbooksDesigning';
import EbookDetails from './components/pages/EbookDetails';
import KDPDesigns from './components/pages/KDPDesigns';
import DetailedAbout from "./components/pages/DetailedAbout";

const App = () => {
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
      </Routes>
      <Whatsapp />
      <Footer />
    </>
  );
}

export default App;
