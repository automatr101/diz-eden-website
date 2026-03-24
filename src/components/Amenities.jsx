import { motion } from 'framer-motion';
import { Wifi, Car, ShieldCheck, Utensils, Wind, MonitorSmartphone, Tv, WashingMachine, PawPrint, Building2 } from 'lucide-react';

const Amenities = () => {
  const amenitiesList = [
    { icon: <Wifi size={32} strokeWidth={0.75} />, title: 'High-Speed WiFi', desc: 'Stay connected with fast, reliable internet throughout.' },
    { icon: <Car size={32} strokeWidth={0.75} />, title: 'Free Parking', desc: 'Complimentary on-premises parking available for guests.' },
    { icon: <Tv size={32} strokeWidth={0.75} />, title: 'Smart TV', desc: 'Stream your favourite shows in the elegant living area.' },
    { icon: <WashingMachine size={32} strokeWidth={0.75} />, title: 'Washer & Laundry', desc: 'In-unit washer for extended and long-term stays.' },
    { icon: <MonitorSmartphone size={32} strokeWidth={0.75} />, title: 'Dedicated Workspace', desc: 'Quiet, productive zone ideal for remote work and executives.' },
    { icon: <Wind size={32} strokeWidth={0.75} />, title: 'Air Conditioning', desc: 'Powerful climate control for your comfort year-round.' },
    { icon: <ShieldCheck size={32} strokeWidth={0.75} />, title: '24/7 Security', desc: 'Exterior security cameras and on-site monitoring at all times.' },
    { icon: <Utensils size={32} strokeWidth={0.75} />, title: 'Fully Equipped Kitchen', desc: 'Modern kitchen with everything for a gourmet home meal.' },
    { icon: <Building2 size={32} strokeWidth={0.75} />, title: 'Elevator Access', desc: 'Convenient lift access within the building.' },
    { icon: <PawPrint size={32} strokeWidth={0.75} />, title: 'Pets Allowed', desc: 'Bring your furry companions — they are welcome here.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <section className="py-32 md:py-48 bg-[#f5f5f5]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-gray-400 mb-6 block">The Details</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#111111] mb-6 leading-tight">What This Place Offers</h2>
          <p className="text-gray-500 font-sans text-lg font-light">50 amenities included — everything for a seamless, luxurious stay.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {amenitiesList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-10 bg-[#fdfdfd] border-none shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 rounded-sm"
            >
              <div className="text-[#bda255] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif text-[#111111] mb-3">{item.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed font-light text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
