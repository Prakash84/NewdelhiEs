"use client";
import Link from 'next/link';
import Image from "next/image";
import { motion } from 'framer-motion';
// components/ModernContentStyle2.jsx
export default function Outpage() {
  const locations = [
    {
      name: "Aerocity",
      icon: "✈️",
      vibe: "Business-hub buzz, 5-star corridors, 24×7 flight schedules.",
      convenience: "10-minute approval, direct-to-room key-card entry, no lobby questions."
    },
    {
      name: "Connaught Place",
      icon: "🏙️",
      vibe: "Heritage colonnades, rooftop bars, metro nexus.",
      convenience: "Meet at parked car or metro exit-4; walk-up heritage suites available."
    },
    {
      name: "South Delhi",
      icon: "🏡",
      vibe: "Leafy avenues, farmhouse parties, Khan Market cafés.",
      convenience: "Discreet bungalow gates, GPS-pinned chauffeur drop, late-night check-ins welcomed."
    },
    {
      name: "Noida",
      icon: "🏢",
      vibe: "Tech parks, mall culture, film-city nights.",
      convenience: "Sector-18 metro pickup, expressway-ready cabs, prepaid room blocks."
    },
    {
      name: "Gurgaon",
      icon: "🌃",
      vibe: "CyberHub neon, golf-course villas, startup rooftops.",
      convenience: "FastTAG express lanes, corporate apartment master-keys, 30-min city-wide SLA."
    }
  ];
  const locations1 = [
  "Bhopal", "Ludhiana", "Delhi", "Varanasi",
  "Jamshedpur", "Hyderabad", "Chennai", "Rishikesh",
  "Raipur", "Ghaziabad", "Amritsar", "Surat",
  "Manali", "Dehradun", "Jammu", "Noida",
  "Ambala", "Zirakpur", "Allahabad", "Jodhpur",
  "Kochi", "Lucknow", "Haridwar", "Karnal",
  "Chandigarh", "Guwahati", "Jaipur", "Indore",
  "Navi Mumbai", "Ajmer", "Ranchi", "Patna",
  "Visakhapatnam", "Vadodara", "Mohali", "Daman",
  "Shimla", "Gurgaon", "Faridabad", "Goa",
  "Pune", "Dwarka", "Jalandhar"
];
const faqs = [
    {
      q: "Is the service discreet?",
      a: "Absolutely—companions arrive in plain Uber or private cabs, use your chosen alias at reception, and leave no paper or digital trail."
    },
    {
      q: "How do I book?",
      a: "Browse profiles, tap the WhatsApp icon, send name + preferred time & location. We confirm availability within 5 minutes and share live tracking."
    },
    {
      q: "Do you provide same-day service?",
      a: "Yes, 90 % of bookings are fulfilled within 45 minutes across Delhi-NCR; peak hours may stretch to 75 minutes—always communicated upfront."
    },
    {
      q: "Which areas of Delhi are covered?",
      a: "Aerocity, Connaught Place, South Delhi, Gurgaon, Noida, Dwarka, Nehru Place and 30+ micro-markets—no travel surcharge inside NCR."
    },
    {
      q: "Is privacy guaranteed?",
      a: "Encrypted chats auto-delete in 24 h, no ID copies stored, optional NDA available. We have served diplomats and Fortune-500 execs without a single leak."
    },
    {
      q: "Is privacy guaranteed?",
      a: "Encrypted chats auto-delete in 24 h, no ID copies stored, optional NDA available. We have served diplomats and Fortune-500 execs without a single leak."
    },
    {
      q: "Is privacy guaranteed?",
      a: "Encrypted chats auto-delete in 24 h, no ID copies stored, optional NDA available. We have served diplomats and Fortune-500 execs without a single leak."
    },
    {
      q: "Is privacy guaranteed?",
      a: "Encrypted chats auto-delete in 24 h, no ID copies stored, optional NDA available. We have served diplomats and Fortune-500 execs without a single leak."
    },
  ];
  const staff = [
    { name: 'Ana.in', role: 'Founder', img: '/images/image1.webp' },
    { name: 'Nisha', role: 'Co-Founder', img: '/images/Watch bright.webp' },
    { name: 'Somya', role: 'Head of Design', img: '/images/Wantto.webp' },
    { name: 'Zaira', role: 'Lead Developer', img: '/images/Today’s heat feed.webp' },
    { name: 'Sakshi', role: 'Marketing Lead', img: '/images/download (36).webp' },
  ];
  {/* End Sample content data */}
  const cities = [
{ name: 'Noida', img: '/Webpimages/hotel3.webp' },
{ name: 'Gurgaon', img: '/Webpimages/lajpatnagahotel.webp' },
{ name: 'Faridabaad', img: '/Webpimages/RoseateHouse.webp' },
{ name: 'Mahipalpur', img: '/Webpimages/paschimvihar.webp' },
{ name: 'Aerocity', img: '/Webpimages/JwMarriott_CP.webp' },
{ name: 'Connaught Place', img: '/Webpimages/Andazhat.webp' },
{ name: 'New Friends Colony', img: '/Webpimages/holidayIn_CP.webp' },
{ name: 'Dwarka', img: '/Webpimages/tajmahalhotel_lajpatnagar.webp' },
{ name: 'Paharganj', img: '/Webpimages/paschimvihar.webp' },
{ name: 'Vasant kunj', img: '/Webpimages/hotel2.webp' },
{ name: 'Lajpat Nagar ', img: '/Webpimages/pullmanAerocity.webp' },
{ name: 'Kalkaji', img: '/Webpimages/jwmarriott.webp' },
]
const hotelOutlets = [
  {
    title: "JW Marriott Hotel Aerocity",
    image: "/images/JW Marriott Hotel Aerocity.jpg",
    description:
      "Spa Delhi is a hotel where one can indulge in luxurious massage therapies and enjoy the wellness experience in high-end comfort.",
  },
  {
    title: "Lemon Tree Premier Aerocity",
    image: "/images/LemonTreePremierAerocity.jpg",
    description:
      "De-Stress and refresh with Spa Delhi expert therapists who provide personalized spa treatments in the luxurious environment of Lemon Tree Premier.",
  },
  {
    title: "Novotel New Delhi Aerocity",
    image: "/images/NovotelNewDelhiAerocity.jpeg",
    description:
      "The ultimate relaxation with Spa Delhi massage therapies, a combination of luxury oils and professional skills in the modern space of Novotel.",
  },
  {
    title: "The Grand New Delhi",
    image: "/images/TheGrandNewDelhi.jpg",
    description:
      "Have a splendid experience of the SpA Delhi massage services that are provided at the Grand New Delhi hotel where you can enjoy total relaxation and wellness in the luxurious surroundings of The Grand.",
  },
  {
    title: "IBIS New Delhi Aerocity",
    image: "/images/IBISNewDelhiAerocity.jpg",
    description:
      "Enjoy Spa Delhi. Have a special massage therapy in IBIS, where masterful care is combined with a relaxing environment to get holistic rejuvenation.",
  },
  {
    title: "The Park Connaught Place",
    image: "/images/TheParkConnaughtPlace.jpg",
    description:
      "Find a pleasant getaway with Spa Delhi luxury massages, which relaxes the body and uplift your senses.",
  },
  {
    title: "The Suryaa New Delhi (NFC)",
    image: "/images/TheSuryaaNewDelhi(NFC).jpg",
    description:
      "Experience Spa Delhi specializes in massage services at The Suryaa, where customers receive personalized well-being and ultimate relaxation in the massage salon.",
  },
  {
    title: "The Ashok (Chanakyapuri)",
    image: "/images/TheAshok(Chanakyapuri).webp",
    description:
      "Relax your body and mind with high-quality spa services at The Ashok, which combines luxurious experiences with a professional approach.",
  },
];
  return (
    <>
    <section
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/ph_ miller_millka.webp')",
      }}
    >
      {/* Dark + gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-fuchsia-600/80 to-indigo-700/80" /> */}
      <div className="absolute inset-0 bg-black/40" />
    
      <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
          Delhi Escorts – Premium & Trusted Escort Services in Delhi
        </h1>
    
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Delhi ek vibrant aur fast-moving city hai jahan log luxury, comfort aur
          companionship ko value karte hain. Hum Delhi escort service ke through
          aapko ek safe, private aur high-quality experience provide karte hain.
          Chahe aap business trip par ho, solo traveler ho ya simply kisi special
          companion ki talash me ho, humari escort services aapki expectations ko
          samajh kar design ki gayi hain. Discretion aur privacy humari priority hai.
        </p>
    
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#profiles"
            className="px-8 py-3 rounded-full bg-white text-fuchsia-700 font-bold hover:bg-opacity-90 transition"
          >
            Browse Profiles
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-fuchsia-700 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text and Icon */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Icon */}
          <div className="flex items-center space-x-4">
            <div className="bg-black-100 p-3 rounded-full shadow-sm">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-black-600"
                viewBox="0 0 576 512"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M568.25 192c-29.04.13-135.01 6.16-213.84 83-33.12 29.63-53.36 63.3-66.41 94.86-13.05-31.56-33.29-65.23-66.41-94.86-78.83-76.84-184.8-82.87-213.84-83-4.41-.02-7.79 3.4-7.75 7.82.23 27.92 7.14 126.14 88.77 199.3C172.79 480.94 256 480 288 480s115.19.95 199.23-80.88c81.64-73.17 88.54-171.38 88.77-199.3.04-4.42-3.34-7.84-7.75-7.82zM287.98 302.6c12.82-18.85 27.6-35.78 44.09-50.52 19.09-18.61 39.58-33.3 60.26-45.18-16.44-70.5-51.72-133.05-96.73-172.22-4.11-3.58-11.02-3.58-15.14 0-44.99 39.14-80.27 101.63-96.74 172.07 20.37 11.7 40.5 26.14 59.22 44.39a282.768 282.768 0 0 1 45.04 51.46z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-black-800">24+ Outlets</p>
          </div>
    
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-black-900 font-serif">
             Enjoy Top-Class Massage in Delhi at Hotel Spa in Delhi
          </h2>
    
          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Spa Delhi guarantees complete relaxation and restorativeness to all the guests in the top Hotels of Delhi. Our professional therapists use the most sophisticated massage methods, essential oils, and individual therapies to help people relieve stress, enhance blood flow, and boost energy. Every session is designed to offer a total wellness experience, whether it's a full body massage, B2B therapy, or a couple session. <strong></strong>
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            
    Through luxury, hygiene, and competent nursing, Spa Delhi is able to convert any room within a hotel to a haven of peace and pleasures. Customers leave rejuvenated, renewed and completely engrossed in an unmatched spa experience and Spa Delhi is the recommended name when it comes to luxury hotel massage services in the city.
    
          </p>
        </motion.div>
    
        {/* Right: Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/anaa - Linkfly.webp"
              alt="Spa Room"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/images/download (24).jpg"
              alt="Massage Therapy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
    {/* our 5* hoterl outlets */}
       <section className="w-full py-16 bg-gradient-to-b from-white to-black-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Title */}
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center text-black-900 font-serif mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Our 5-Star Hotel Outlets for Massage Spa in Delhi
    </motion.h2>

    {/* Description */}
    <motion.p
      className="text-center text-black-800 max-w-3xl mx-auto mb-12 text-base md:text-lg font-medium"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Spa Delhi offers the world standard of wellness to the highest 5-star hotels making sure that the customers experience a personalized massage in a luxurious and serene environment.
    </motion.p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {hotelOutlets.map((hotel, index) => (
        <motion.div
          key={index}
          className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          {/* Image */}
          <div className="relative h-48 w-full">
            <Image
              src={hotel.image}
              alt={hotel.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold text-black-800 font-serif mb-2">
              {hotel.title}
            </h3>
            <p className="text-gray-600 text-sm flex-grow mb-4">
              {hotel.description}
            </p>

            {/* Book Now Button */}
            <a
              href="https://api.whatsapp.com/send?phone=919217255113"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-5 py-2 rounded-full bg-black-500 text-white text-sm font-semibold hover:bg-black-600 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              BOOK NOW
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* End outlets */}
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 text-center">
          Delhi-NCR Coverage Map
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
          Wherever you check-in, we check-point: verified arrival in under 45 minutes—no extra travel fee.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-neutral-100 text-center"
            >
              <div className="text-5xl mb-4">{loc.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">{loc.name}</h3>
              <p className="text-sm text-neutral-600 mb-3">{loc.vibe}</p>
              <p className="text-xs text-black-600 font-semibold">{loc.convenience}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80"
              alt="Delhi skyline"
              className="rounded-xl object-cover w-full h-64 shadow-md"
            />
          </div>
          <div className="bg-neutral-900 text-white rounded-xl p-6">
            <h4 className="font-bold text-black-400 mb-2">Need a custom pin?</h4>
            <p className="text-sm text-neutral-300 mb-4">
              If your hotel or residence isn’t listed, drop the location pin on WhatsApp—we cover 40+ additional micro-markets across NCR.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-flex items-center text-black-400 font-semibold text-sm"
            >
              Share Location
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-black text-center text-black dark:text-white mb-12 tracking-tight">
          Meet Our Team
        </h2>

        {/* Staff Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {staff.map((person) => (
            <div
              key={person.name}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={person.img}
                  alt={person.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
                {person.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {person.role}
              </p>

              {/* Action Buttons */}
              <div className="mt-3 flex gap-3">
                <button className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition">
                  Call
                </button>
                <button className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 transition">
                  Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
          Premium Independent Escorts in Delhi – Authentic, Discreet, Unforgettable
        </h1>

        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
            Welcome to DelhiEscorts.in, the capital’s most selective platform for luxury companionship.  
            We hand-pick only independent, university-educated women who combine stunning looks with sharp intellect and warm, open hearts.  
            Every profile is selfie-verified and re-approved monthly, guaranteeing that the girl who arrives at your suite is the same flawless beauty you admired online.  
            Whether you are a busy executive landing at IGIA late tonight, a traveller seeking a plus-one for a cocktail rooftop in Aerocity, or a local gentleman craving genuine chemistry after endless video calls, we create moments that feel effortless, exciting and completely confidential.
          </p>

          <p>
            Browse high-resolution portfolios, read honest client reviews and chat directly through end-to-end encrypted messages—no brokers, no upsells, no awkward surprises.  
            Prefer a quiet wine evening at the Lodhi Hotel? A spontaneous drive to Neemrana Fort for sunset selfies? Or perhaps an indulgent four-hand massage followed by strawberries and laughter behind closed doors?  
            Our companions tailor every encounter around your schedule, fantasies and comfort level, setting clear boundaries and safe-words before the first kiss.  
            Discretion is woven into every step: your credit-card statement shows a neutral brand name, taxis drop off at lobby side entrances, and selfies taken together are automatically deleted when the date ends.
          </p>

          <p>
            Beyond beauty, we value emotional intelligence. Each escort is trained in active listening, etiquette and after-care, ensuring you feel seen, respected and completely relaxed.  
            Many speak fluent English, Hindi and French, hold degrees in fashion or psychology, and travel internationally on short notice—ideal companions for destination weddings in Udaipur or weekend escapes to Goa.  
            Rates are transparent, hourly or overnight, with complimentary refreshments and lingerie styling included.  
            Repeat clients enjoy priority booking, loyalty discounts and access to our private Telegram channel where new tours are announced first.  
            Ready to meet someone who matches your energy and curiosity? Scroll down, click the WhatsApp button, and let us arrange an encounter that leaves you smiling for days.  
            Delhi after dark has never felt this welcoming, this safe, this deliciously addictive.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14">
          Our Escorts Service Location
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
          {locations1.map((city, index) => (
            <Link
              key={index}
              href={`/call-girls-in-${city.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-center bg-yellow-200 hover:bg-yellow-300 
                         text-blue-700 font-semibold py-3 rounded-xl
                         transition duration-300 shadow-md"
            >
              Call Girls in {city}
            </Link>
          ))}
        </div>

      </div>
    </section>
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8 text-center">
          Quick Answers
        </h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-neutral-100 open:shadow-lg transition">
              <summary className="flex justify-between items-center cursor-pointer p-5 list-none">
                <h3 className="font-semibold text-neutral-900">{item.q}</h3>
                <svg className="w-5 h-5 text-black-500 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-neutral-600 text-sm leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-neutral-500 text-xs">
          Have more questions? Chat icon is on the bottom right—real human, zero bots.
        </p>
      </div>
    </section>
    </>
  );
}