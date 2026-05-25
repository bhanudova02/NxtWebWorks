import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import ScheduleCall from './components/ScheduleCall';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <TrustStats />
      <Services />
      <FeaturedProjects />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <ScheduleCall />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
