import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ratingCategories = [
  { label: 'Cleanliness', score: 4.8 },
  { label: 'Accuracy', score: 4.5 },
  { label: 'Check-in', score: 4.8 },
  { label: 'Communication', score: 5.0 },
  { label: 'Location', score: 4.8 },
  { label: 'Value', score: 5.0 },
];

const Testimonials = () => {
  const reviews = [
    {
      name: 'Mary',
      location: 'Airbnb Guest',
      date: 'February 2026',
      text: 'The host was very responsive. The space was very clean and spacious. I enjoyed my stay.',
      rating: 5
    },
    {
      name: 'Kwadwo',
      location: 'Accra, Ghana',
      date: 'October 2025',
      text: 'Very comfortable place in a good location. Apartment is clean and very clean. Definitely staying there again, in just a couple of days.',
      rating: 5
    },
    {
      name: 'Daniel Oppong',
      location: 'Airbnb Guest',
      date: 'January 2026',
      text: 'Beautiful modern aesthetic, lightning-fast WiFi, and an incredibly responsive host. I will definitely be returning next time I am in Accra.',
      rating: 5
    }
  ];

  return (
    <section className="py-32 md:py-48 bg-[#fdfdfd]">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-gray-400 mb-6 block">Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-serif text-[#111111] leading-tight mb-8">Guest Experiences</h2>

          <div className="flex justify-center items-center gap-3 mb-12">
            <Star size={20} fill="#bda255" className="text-[#bda255]" />
            <span className="font-bold text-2xl font-sans text-[#111111]">5.0</span>
            <span className="text-gray-400 font-sans tracking-widest text-sm uppercase ml-2">· 4 Reviews on Airbnb</span>
          </div>

          {/* Rating breakdown */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto mb-16">
            {ratingCategories.map((cat) => (
              <div key={cat.label} className="flex flex-col items-center gap-2">
                <span className="text-xs font-sans uppercase tracking-wider text-gray-400">{cat.label}</span>
                <span className="text-2xl font-serif text-[#111111]">{cat.score}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-10 border-t border-[#bda255]/30 bg-transparent"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#f5f5f5] flex items-center justify-center font-serif text-2xl text-[#111111]">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-sans text-[#111111] text-lg tracking-wide">{review.name}</h4>
                  <p className="text-sm text-gray-400 font-sans tracking-wider uppercase mt-1">{review.location} · {review.date}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#bda255" className="text-[#bda255]" />
                ))}
              </div>
              <p className="text-gray-500 font-sans leading-[2] text-lg font-light italic">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
