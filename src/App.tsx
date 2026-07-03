import { useEffect } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import ParticleField from "./components/ParticleField";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WhyUs from "./pages/WhyUs";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* Shared layout: Navbar + ParticleField + Footer wrapping all pages */
function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#050816] text-white selection:bg-cyan-300 selection:text-[#050816]">
      <ParticleField />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(5,8,22,0)_0%,rgba(5,8,22,0.68)_55%,#050816_100%)]" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
