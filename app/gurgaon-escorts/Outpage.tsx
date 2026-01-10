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
    image: "/images/JW Marriott Hotel Aerocity.webp",
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
          Premium Gurgaon Escorts Service for VIP Clients Tonight
        </h1>
    
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Experience the finest Gurgaon escorts through our premium agency, delivering sophisticated companions directly to your hotel within minutes. Our exclusive Gurgaon escorts collection features verified models who understand luxury hospitality, ensuring your complete satisfaction. Book tonight and discover why discerning clients choose our professional Gurgaon escorts service for memorable encounters.

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
             Best Noida escorts and escort service in Noida for you tonight
          </h2>
    
          {/* Description */}
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            Hello friends, if you are staying in Noida and feeling alone, our Noida escorts are here to make your night happy. We give safe and fast escort service in Noida hotels and flats. Just call or WhatsApp, share your hotel name or sector, and we will send real photos of girls near you. All our Noida escorts are college girls or working girls living nearby, so they reach you in 20 to 30 minutes only. <strong></strong>
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          Our escort service in Noida is open 24×7, even after midnight. No advance money, pay cash only after the girl reaches your room. We cover every sector like 18, 62, 93, 50 and Greater Noida too. Budget starts from ₹7 k for one short, full night ₹12 k.
Privacy is full, no ID asked, no paper work. Driver waits in basement, girl comes alone to your door. You can also take our Noida escorts for dinner or party; they speak good Hindi and English.
Call now, choose your favourite girl, and enjoy fresh company tonight. Repeat customers get extra discount. We are one click away for best escort service in Noida.
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
      <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top headline + icon */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
            <span className="text-4xl">🌟</span>
          </span>
          <h2 className="text-4xl font-extrabold text-zinc-900">
            Elite Gurgaon escorts for five-star hotel service tonight
          </h2>
          <p className="text-zinc-600 mt-2">Fast escort service in Gurgaon, cash only</p>
        </div>

        {/* 2-column layout */}
        <div className="grid md:grid-cols-5 gap-10 items-center">

          {/* Left: big decorative image */}
          <div className="md:col-span-2 relative">
            <img
              src="/images/I Held Her Tight.webp"
              alt="Stylish Companion"
              className="rounded-[2rem] shadow-2xl w-full"
            />
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur rounded-2xl px-3 py-2 text-xs font-semibold text-zinc-800 flex items-center gap-2">
              <span>🔥</span> Editor’s Pick
            </div>
          </div>

          {/* Right: content + feature chips */}
          <div className="md:col-span-3">
            <p className="text-zinc-700 leading-relaxed mb-5">
            Our Gurgaon escorts bring real fun to your hotel room within thirty minutes. We cover every big hotel on MG Road, Golf Course Road, CyberHub and Sector 29. Just message your room number, we reply with live photos and exact time. No advance, pay cash after meeting. Every girl carries hotel security pass, so you skip lobby drama. Rates are simple: ₹8 k for two hours, ₹15 k till morning.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-5">
             Our escort service in Gurgaon is open 24×7, even at 3 a.m. Drivers wait in basement, girl walks straight to your lift. All photos are real and recent; if not, you can send her back without pay. We also offer duo and dinner date deals for VIP guests. Save our number now and enjoy safe, fresh company whenever you visit Gurgaon.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              We know business travellers hate waiting, so we keep girls ready near DLF Phases 1-5. Whether you stay at Leela, Trident, Hyatt or Radisson, our Gurgaon escorts reach before your ice bucket melts. Girls speak Hindi and English, dress in western or Indian as you like. You can take them for a short drive, pub party or quiet night in. We never save your number or share with anyone; once meeting is over, chat history is deleted. Repeat clients get special discount and priority booking. One call, zero tension, hundred percent enjoyment—that is our promise.
            </p>

            {/* Icon chips */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow text-sm">
                <span>🎓</span> Cultured
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow text-sm">
                <span>🍾</span> Concierge
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow text-sm">
                <span>🎶</span> Playlists
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow text-sm">
                <span>🔄</span> 82 % Re-book
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/91XXXXXXXXXX"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                <span>⚡</span> Get Matched Now
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 border border-zinc-300 text-zinc-800 px-6 py-3 rounded-full font-semibold hover:bg-zinc-100 transition"
              >
                <span>📞</span> Quick Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    <section className="bg-black text-gray-300 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Why pick our Gurgaon Noida escort service today
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Real girls, fast delivery, no advance cash—best escort service in Gurgaon and Noida
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Price */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Fast Gurgaon
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our Gurgaon escorts reach your hotel in 30 minutes flat. We keep girls ready near DLF CyberHub, so distance is never issue. Photos you see on WhatsApp are same girl who knocks your door. If looks differ, send her back—no pay. All Gurgaon escorts carry hotel security pass, so you skip lobby tension. Rates are fixed, no hidden taxi charge or tip demand. Night or day, one call and fun begins.<span className="text-white"></span>
            </p>
          </div>

          {/* Speed */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Local Noida
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We choose Noida escorts who live in Sector 18, 62, 93—close to your hotel. Because girls stay nearby, petrol money is zero and time is less. Every Noida escort is student or working girl, speaks good Hindi and English. You can talk to her on phone before booking. She brings ID for safety, you check and relax. Repeat clients get discount and priority booking.
              <span className="text-white"> 30 minutes</span>.
            </p>
          </div>

          {/* Choice */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              24×7 Gurgaon
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Our escort service in Gurgaon is open 24×7, even Sunday 3 a.m. Booking is one WhatsApp message—no long form, no ID upload. We cover all star hotels: Leela, Trident, Hyatt, Radisson, Taj. Driver waits in basement, girl walks straight to lift. Payment only after meeting, cash or UPI as you like. Chat auto-deleted after meet, keeping your phone clean.<span className="text-white"></span>
            </p>
          </div>

          {/* Safety */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Quick Noida
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Best part of our escort service in Noida is speed. From your first text to girl at door, average time is 25 minutes. We serve Sector 18, 50, 62, 93 and Greater Noida. No advance money, no bargaining once girl arrives. If you need extension, ask her directly—fair hourly rate. We also give duo service if you want double fun.
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-2">
              Honest Service
            </h3>
            <p className="text-gray-400 leading-relaxed">
             People trust us because we keep promise: real Gurgaon escorts, real Noida escorts, no cheat. Our escort service in Gurgaon and escort service in Noida both follow same rule—cash after fun, full privacy. Girls are polite, healthy and regularly checked. Drivers are trained, never disturb your talk. Save one number, enjoy in two cities. Simple, safe, sweet—that is why clients choose us again.
            </p>
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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
           Escort Service in Delhi One Click Away – Contact Us Now
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
         Stop hunting. One WhatsApp button brings the best escort service in Delhi to your door in 30 minutes—whether you crave busty boobs, CIM, anal, Russian accent or a party girl who dances till sunrise. Pay hourly, extend instantly, travel together, keep zero traces. Click below, type your fantasy and let the capital’s most trusted escort service in Delhi make tonight unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-left max-w-4xl mx-auto mb-10">
          <ul className="space-y-3">
            <li>✓ Secure online booking for Delhi escorts</li>
            <li>✓ WhatsApp for quick inquiries</li>
            <li>✓ Email for detailed arrangements</li>
          </ul>

          <ul className="space-y-3">
            <li>✓ Phone support for immediate assistance</li>
            <li>✓ Same-day escort service availability</li>
            <li>✓ Best escort service in Delhi NCR</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/your-number"
            className="bg-amber-500 text-black font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition"
          >
            Contact on WhatsApp
          </a>

          <a
            href="/contact"
            className="border border-amber-500 text-amber-300 font-semibold px-8 py-3 rounded-lg hover:bg-amber-500 hover:text-black transition"
          >
            Call Us Now
          </a>
        </div>

      </div>
    </section>
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 text-center">
          Top Gurgaon escorts & Noida escorts ready tonight, cash only.
        </h1>

        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
           If you are in Delhi NCR and want cute girls for fun, call us. We give best Gurgaon escorts and Noida escorts at low price. No advance, full privacy, door delivery in 30 min. Our girls are college students, models and MNC workers who stay nearby. They speak Hindi, English and little Punjabi too. You can choose any girl from WhatsApp photos. If you do not like her, we change once free.
          </p>

          <p>
           Our escort service in Gurgaon covers all big hotels like Leela, Trident, Hyatt, Radisson, Crowne Plaza. Just send hotel name and room number, we send girl with security pass. She will come straight to your lift, no questions at reception. Rate is ₹8 k for two hours, ₹15 k for full night. You can also take girl for short drive or CyberHub dinner. She will wear jeans or dress as you say. After meeting, pay cash and say bye. We never call you back or save your number.
          </p>

          <p>
          For Noida, our escort service in Noida works same way. We cover Sector 18, 62, 93, 50 and Greater Noida. Popular hotels we visit are Radisson Noida, Mosaic, Jaypee, Crowne Plaza. Girl reaches in 25 minutes. Budget starts from ₹7 k short, ₹12 k full night. If you live in flat, we need society gate pass; if hotel, no paper work. All our Noida escorts carry ID and look same as photos. You can talk to girl on phone before booking. Night booking open till 4 a.m.
          </p>
          <p>
            We are open every day, even Sunday and holiday. Booking is simple: WhatsApp “I need girl in Gurgaon” or “I need girl in Noida”, we reply with 4-5 real photos. You pick one, we give time. If flight is late, no worry; we track and change time free. For VIP clients we give two girls package at 20 % discount.
Safety is big for us. Driver waits in basement, girl goes alone. No money talk in lobby. We use polite words in chat, so your phone stays clean. After fun, we delete chat from both sides. Many customers come every week, they trust us for fresh girls and fair deal.
So next time you feel alone in Gurgaon or Noida, save our number. One text, hot girl at your door. Life is short, enjoy with best Gurgaon escorts and Noida escorts tonight.
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