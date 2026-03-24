import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import PropertyShowcase from '../components/PropertyShowcase';
import Amenities from '../components/Amenities';
import GalleryLightbox from '../components/GalleryLightbox';
import Experience from '../components/Experience';
import Testimonials from '../components/Testimonials';
import Location from '../components/Location';
import BookingFooter from '../components/BookingFooter';
import { ActionButtonBasic } from '../components/ActionButtonDemo';

const Home = () => {
  return (
    <main className="w-full bg-[#f9f9f9]">
      <HeroSection />
      
      <div id="property"><IntroSection /></div>
      <PropertyShowcase />
      <div id="amenities"><Amenities /></div>
      <div id="gallery"><GalleryLightbox /></div>
      <Experience />
      <Testimonials />
      <Location />
      <section className="py-20 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl mb-8 text-black">Interested in joining our community?</h2>
          <ActionButtonBasic />
        </div>
      </section>
      <BookingFooter />
    </main>
  );
};

export default Home;
