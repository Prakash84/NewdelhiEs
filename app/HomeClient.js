"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default function HomeClient() {
  const services = [
    {
      title: "Independent Escorts",
      subtitle: "Self-managed, authentic connections",
      clients: "Perfect for returning clients who value direct communication and relaxed, girlfriend-style chemistry.",
      experience: "Unhurried conversations over Old Delhi chai, spontaneous Khan Market strolls, and the freedom to shape the evening as mood dictates."
    },
    {
      title: "VIP & Premium Escorts",
      subtitle: "Globally polished, luxury-ready",
      clients: "Designed for diplomats, Fortune-500 visitors and private-jet travellers who need flawless poise at five-star venues.",
      experience: "Multilingual banter at ITC Maurya’s Dum Pukht, couture that matches your Rolls-Royce, and discretion calibrated to embassy-level security."
    },
    {
      title: "College & Young Companions",
      subtitle: "Vibrant energy, intellectual spark",
      clients: "Suited to curious professionals 26-40 who enjoy playful exploration and genuine cultural exchange.",
      experience: "Midnight drives to Murthal dhabas, debating Netflix vs. indie cinema over Third-wave coffee, followed by comfortable, consent-focused intimacy."
    },
    {
      title: "Couple-Friendly Companionship",
      subtitle: "Respectful thirds for two hearts",
      clients: "Married or long-term couples celebrating an anniversary or safely exploring new dimensions together.",
      experience: "A soothing presence that eases first-time nerves, shared laughter over wine, and memories that strengthen your existing bond—never drama."
    }
  ];
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
  const testimonials = [
    {
      initials: "A.S.",
      rating: 5,
      text: "The service was polite, professional, and discreet. She arrived at the Aerocity hotel within 30 minutes, greeted the staff by my alias, and left no trace—exactly what a back-to-back business traveller needs."
    },
    {
      initials: "K.R.",
      rating: 5,
      text: "First-time couple booking. The coordinator eased our nerves, matched us with someone who understood boundaries, and even suggested a safe word. Evening flowed like wine—no awkwardness, just laughter."
    },
    {
      initials: "S.M.",
      rating: 5,
      text: "I’ve used agencies across Asia; this is the only one that sends a live selfie ten minutes before arrival. Transparency builds trust, and trust makes the night effortless."
    }
  ];
  const steps = [
    { icon: "👀", title: "Pick Your Companion", desc: "Browse verified profiles, tap to view recent selfies and availability calendar." },
    { icon: "📲", title: "Call or WhatsApp", desc: "Share the name, preferred time & location. One chat—no endless middlemen." },
    { icon: "✅", title: "Get Confirmation", desc: "We lock the slot, send you live location tracking and a discreet meeting code." },
    { icon: "🤝", title: "Enjoy & Relax", desc: "Companion arrives, chemistry checks, timer starts. Payment after hello—no advance drama." }
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
  const teamMembers = [
    {
      name: "Chelsea Foster",
      designation: "Spa Therapist",
      image: "/images/These Fashion1.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Lane Parsons",
      designation: "Spa Therapist",
      image: "/images/Evie Lee Mikomin.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Haven West",
      designation: "Spa Therapist",
      image: "/images/downloadd1.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/download432.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Chelsea Foster",
      designation: "Spa Therapist",
      image: "/images/These Fashion1.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Lane Parsons",
      designation: "Spa Therapist",
      image: "/images/Evie Lee Mikomin.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Haven West",
      designation: "Spa Therapist",
      image: "/images/downloadd1.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/download432.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
  ];

  const escorts = [
  {
    name: "Kiara",
    image: "/images/Click for sample.webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Manshi",
    image: "/images/download (36).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Payal",
    image: "/images/Tap to Experience.webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Mugdha",
    image: "/images/download (13).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Kiara",
    image: "/images/download (12).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Manshi",
    image: "/images/download (3).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Payal",
    image: "/images/download (7).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
  {
    name: "Mugdha",
    image: "/images/download (17).webp",
    whatsapp: "https://wa.me/919999999999",
    rating: "4.9",
  },
];

const locations1 = [
  "Bhopal", "Ludhiana", "Delhi", "Varanasi",
  "Jamshedpur", "Hyderabad", "Chennai", "Rishikesh",
  "Raipur", "Ghaziabad", "Amritsar", "Surat",
  "Manali", "Dehradun", "Jammu", "Noida",
  // "Ambala", "Zirakpur", "Allahabad", "Jodhpur",
  // "Kochi", "Lucknow", "Haridwar", "Karnal",
  // "Chandigarh", "Guwahati", "Jaipur", "Indore",
  // "Navi Mumbai", "Ajmer", "Ranchi", "Patna",
  // "Visakhapatnam", "Vadodara", "Mohali", "Daman",
  // "Shimla", "Gurgaon", "Faridabad", "Goa",
  // "Pune", "Dwarka", "Jalandhar"
];

  // new
  // const services1 = [
  //   {
  //     title: "Independent Escorts",
  //     description: "Our independent companions offer personalized experiences with flexibility and personal attention. Suitable for clients seeking one-on-one companionship with complete privacy.",
  //     for: "Ideal for individuals preferring direct arrangements and customized experiences.",
  //     icon: "👑"
  //   },
  //   {
  //     title: "VIP & Premium Escorts",
  //     description: "Exclusive companions for high-profile clients and luxury experiences. These companions are sophisticated, well-educated, and accustomed to elite social settings.",
  //     for: "Perfect for business leaders, celebrities, and those requiring utmost discretion.",
  //     icon: "⭐"
  //   },
  //   {
  //     title: "College Companions",
  //     description: "Young, vibrant, and educated companions who bring fresh energy and engaging conversation. Professional relationships maintained with appropriate boundaries.",
  //     for: "Clients seeking youthful company with intellectual stimulation.",
  //     icon: "🎓"
  //   },
  //   {
  //     title: "Couple-Friendly Companions",
  //     description: "Open-minded professionals comfortable accompanying couples for social events or private gatherings. Emphasis on creating comfortable, enjoyable experiences.",
  //     for: "Couples looking to enhance their social experiences with compatible company.",
  //     icon: "💑"
  //   }
  // ];
  return (
   <>
   {/* <section className="relative py-20 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center lg:text-left lg:flex items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Premium Escort Services
              </span>
              <br />
              <span className="text-3xl lg:text-4xl">in Delhi</span>
            </h1>
            
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-300">
                Experience unparalleled discretion, absolute privacy, and trusted companionship 
                with Delhi's most exclusive escort service.
              </p>
              <p className="text-lg text-gray-400">
                Catering to discerning gentlemen who value sophistication and confidentiality. 
                Same-day booking available for your convenience.
              </p>
              <p className="text-lg text-gray-400">
                Your privacy is our priority - every interaction is handled with the utmost 
                discretion and professional care.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:+911234567890" 
                className="bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                📞 Call Now: +91 1234567890
              </a>
              <a 
                href="https://wa.me/911234567890" 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h3>
              <div className="space-y-4">
                {['✅ Verified Companions', '✅ Absolute Discretion', '✅ Same-Day Booking', 
                  '✅ Premium Service', '✅ 24/7 Support', '✅ All Delhi Areas'].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 lg:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="border-b-4 border-pink-600 pb-2">Delhi's Premier Companion Service</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              As Delhi's leading escort agency, we provide sophisticated companionship services 
              for discerning individuals seeking genuine connections. Our platform bridges the 
              gap between social needs and professional companionship in India's capital city.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We cater to a diverse clientele including business executives, international 
              travelers, local professionals, and individuals seeking meaningful social 
              interactions. Each companion is carefully selected to ensure they embody 
              elegance, intelligence, and discretion.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Beyond physical companionship, we emphasize emotional connection and social 
              compatibility. Our companions are excellent conversationalists who can 
              accompany you to business events, social gatherings, or provide relaxing 
              company during your stay in Delhi.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We understand the importance of safety and discretion in personal services. 
              Our comprehensive verification process and strict privacy protocols ensure 
              every encounter remains confidential while maintaining the highest standards 
              of professionalism and respect.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Escort Services in Delhi</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Tailored companionship experiences designed for sophistication and discretion
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services1.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-pink-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="p-3 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-300"><span className="font-semibold">Suitable for:</span> {service.for}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section> */}


    <section
  className="relative min-h-[62vh] text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/images/bannermodel.webp')",
  }}
>
  {/* dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative container mx-auto px-6 h-full flex items-center">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
        Premium Escorts in Delhi
      </h1>

      <p className="mt-6 text-lg md:text-xl text-neutral-200 leading-relaxed">
        Discretion, privacy and trust are the cornerstones of our service.
        Hand-selected companions arrive promptly at your hotel or residence,
        ensuring every moment feels effortless and confidential.
      </p>

      <p className="mt-4 text-neutral-300">
        Same-day bookings are welcome—simply reach out and let us arrange
        an unforgettable encounter tailored to your schedule.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="tel:+91XXXXXXXXXX"
          className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold transition"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/91XXXXXXXXXX"
          className="inline-flex items-center px-6 py-3 rounded-full border border-neutral-300 hover:bg-white/10 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>
    {/* Our Therapy Experts */}
      <section className="py-16 px-4 ">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
          <motion.p
            className="text-amber-300 uppercase font-semibold tracking-wider mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Our Delhi Escort Service
          </motion.p>
          
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-black-900 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Best Call Girls in Delhi Escorts at Rs.1599 Home Delivery<span className="text-black-600"> </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-6xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             Book Call Girls in Delhi with Sakshirana at ₹1599! Enjoy fast 30-minute doorstep service, easy cash payment, and 24/7. cheap & reliable escorts ready to meet your needs. Welcome to Garden City Delhi, a popular high-tech city in India. And there is no hesitation in feeling lonely or isolated in this city. Because life is so busy in this tech city, it becomes impossible to find time for recreation, and as a result, you lose the delight of your life. So, are you ready to turn your wakeful nights into entertaining ones? That is unbelievable without a female companion. If your female partner cannot entertain or satisfy you, then It's time to Hire Exotic Delhi Call Girls. The main interesting thing about our females is that you can't sleep when you are with them in bed. Their level of entertainment makes every client speechless. So, do you want to taste your erotic fantasies in real life? Then, don't be shy about booking a real Call Girl in Delhi.
          </motion.p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden text-center relative group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                  loading="lazy"
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                    <h3 className="text-white text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-yellow-300">{member.designation}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-4 pb-4">
                  <a href={member.socials.WhatsApp} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaWhatsapp /></a>
                  <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaInstagram /></a>
                  {/* <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-700 text-xl"><FaTwitter /></a> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
       {/* End Our Therapy Experts */}
       <section className="bg-black py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Our Popular High Profile Delhi Escorts Girls
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-gray-300 leading-relaxed">
        Step into the world of Delhi's premier call girl services, where we bring you the finest escort services in town. Our exclusive empire boasts the cutest and most charming companions, ready to make your experience unforgettable. Discover luxury, elegance, and excitement with Delhi's top Call Girls!
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {escorts.map((girl, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          viewport={{ once: true }}
          className="bg-[#0f0f0f] rounded-2xl overflow-hidden 
                     border border-gray-800 shadow-lg hover:shadow-2xl transition"
        >
          {/* Image */}
          <div className="relative h-[320px] overflow-hidden">
            {/* 👆 height kam kar di (420 → 320) */}

            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src={girl.image}
                alt={girl.name}
                fill
                priority={index < 2}
                className="object-cover"
              />
            </motion.div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

            {/* Rating */}
            <div className="absolute top-3 left-3 bg-purple-700 text-white px-3 py-1 rounded-lg 
                            flex items-center gap-1 text-sm font-semibold z-20">
              <FaStar className="text-yellow-300" />
              {girl.rating}
            </div>
          </div>

          {/* Info */}
          <div className="p-5 text-center">
            <a
              href={girl.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 
                         bg-emerald-700 hover:bg-emerald-600 
                         text-white px-6 py-2 rounded-full 
                         text-sm font-semibold transition"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp
            </a>

            <h3 className="mt-4 text-lg font-bold text-white">
              {girl.name}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>


    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
          Delhi Escort Services – Sophisticated Companionship for Discerning Clients
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-neutral-700 leading-relaxed">
          <div>
            <p>
              Delhi escort services provide more than beautiful company; they deliver polished, 
              emotionally intelligent companions who understand the rhythms of a global metropolis. 
              Whether you are a jet-lagged executive closing a Gurgaon deal, a solo traveller 
              exploring Chandni Chowk between conferences, or a local entrepreneur seeking 
              respite from the city’s relentless pace, our service curates moments of genuine 
              connection without complication.
            </p>
          </div>

          <div>
            <p>
              Safety and discretion are engineered into every step. Meetings are arranged 
              in secure, neutral venues—five-star suites in Aerocity, luxury serviced 
              apartments in South Delhi, or the privacy of your own residence—with 
              identity-verified companions who value confidentiality as much as you do. 
              Beyond physical presence, our escorts offer conversational ease, cultural 
              fluency and emotional attentiveness, turning an ordinary evening into 
              a shared experience that leaves both parties enriched and respected.
            </p>
          </div>
        </div>

        <p className="mt-6 text-neutral-700 leading-relaxed">
          From spontaneous dinner dates at Indian Accent to weekend getaways in Neemrana, 
          the service adapts to your schedule and social context, ensuring every encounter 
          feels organic, safe and completely private.
        </p>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-4 text-center">
          Our Escort Services in Delhi
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
          Every encounter is tailored, consensual and confidential—crafted around your schedule, mood and privacy.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-neutral-100"
            >
              <div className="absolute -top-4 left-8 bg-amber-400 text-neutral-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {s.title}
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mt-4">
                {s.subtitle}
              </h3>
              <p className="mt-4 text-neutral-700 leading-relaxed">
                <span className="font-semibold text-amber-600">Who chooses this:</span> {s.clients}
              </p>
              <p className="mt-3 text-neutral-600 leading-relaxed">
                <span className="font-semibold text-amber-600">Experience focus:</span> {s.experience}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold transition"
          >
            Explore Availability
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
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
    <section className="py-16 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Why Delhi Chooses Us Over the Rest
        </h2>
        <p className="text-center text-neutral-400 mb-10">
          We don’t chase volume—we protect your peace of mind.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-neutral-300">
          {/* 1 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Verified & Genuine</h3>
            <p className="text-sm leading-relaxed">
              Every photo is shot in-house, every ID cross-checked. No five-year-old selfies, no catfish—just the face that actually knocks on your door.
            </p>
          </div>

          {/* 2 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Privacy & Discretion</h3>
            <p className="text-sm leading-relaxed">
              Encrypted WhatsApp, cash or UPI with no statement descriptor, NDAs on request. Your concierge won’t know; your accountant won’t know.
            </p>
          </div>

          {/* 3 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">No Fake Promises</h3>
            <p className="text-sm leading-relaxed">
              Rates quoted are final—no “cab fee”, no hidden overtime. If a companion isn’t available we tell you upfront, not after you’ve checked in.
            </p>
          </div>

          {/* 4 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Friendly 24×7 Support</h3>
            <p className="text-sm leading-relaxed">
              A real human replies within 90 seconds, speaks Hindi & English, and won’t ghost you once payment is made. Call, text or voice note—your comfort zone.
            </p>
          </div>

          {/* 5 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Transparent Process</h3>
            <p className="text-sm leading-relaxed">
              Profile → recent selfie → confirmation → location share → arrival. Every step is time-stamped in the same chat thread; no parallel “managers” or middlemen.
            </p>
          </div>

          {/* 6 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Elite but Local</h3>
            <p className="text-sm leading-relaxed">
              Big-agency polish with Delhi-neighbourhood speed. We know which hotels allow guests, which lifts need key-cards, and when the Dwarka expressway is jammed.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-400 text-sm">
            Still comparing? Ask for a live selfie right now and watch how fast we deliver it—others send excuses, we send confirmation.
          </p>
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
              <p className="text-xs text-amber-600 font-semibold">{loc.convenience}</p>
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
            <h4 className="font-bold text-amber-400 mb-2">Need a custom pin?</h4>
            <p className="text-sm text-neutral-300 mb-4">
              If your hotel or residence isn’t listed, drop the location pin on WhatsApp—we cover 40+ additional micro-markets across NCR.
            </p>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-flex items-center text-amber-400 font-semibold text-sm"
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
    <section className="py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* subtle lock pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="200" height="200" className="absolute top-0 right-0">
          <path d="M50 50h100v100H50z" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
          Zero-Trace Policy
        </h2>
        <p className="text-center text-neutral-300 mb-10 max-w-2xl mx-auto">
          Your name, address and chat history are encrypted end-to-end; even our dispatch team sees only a first name and postcode.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-amber-400 text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Client Privacy First</h3>
            <p className="text-sm text-neutral-300">No ID photocopy, no digital trail—just a one-time OTP that self-destructs after arrival.</p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-amber-400 text-3xl mb-3">🚫</div>
            <h3 className="font-semibold mb-2">No Data Sharing Ever</h3>
            <p className="text-sm text-neutral-300">Numbers, chat logs and location pins are auto-purged every 24 h; we don’t sell or store lists.</p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-amber-400 text-3xl mb-3">🤝</div>
            <h3 className="font-semibold mb-2">Respectful Conduct</h3>
            <p className="text-sm text-neutral-300">Companions carry the same policy—no photos, no social-media lookup, no post-encounter messages.</p>
          </div>

          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
            <div className="text-amber-400 text-3xl mb-3">✅</div>
            <h3 className="font-semibold mb-2">Safe Meeting Standard</h3>
            <p className="text-sm text-neutral-300">Pre-vetted venues, live location sharing, and a silent panic-code ensure you remain in control.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-400 text-xs">
            Still anxious? Ask for our NDA template—sign before you meet, keep the copy, shred when you’re done.
          </p>
        </div>
      </div>
    </section>
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 text-center">
          What Our Clients Say
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          Real feedback, initials only—privacy honoured as fiercely as the encounter itself.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="relative bg-neutral-50 rounded-2xl p-6 border border-neutral-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 flex items-center justify-center text-neutral-900 font-bold">
                  {t.initials}
                </div>
                <div className="ml-3 flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-neutral-700 text-sm leading-relaxed italic">
                “{t.text}”
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white font-semibold transition"
          >
            Share Your Experience
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
    <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 text-center">
          4-Step Booking
        </h2>
        <p className="text-center text-neutral-600 mb-10">Zero forms, zero prepayment—just clarity.</p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-2">Step {i + 1}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
              {i < 3 && (
                <svg className="hidden md:block absolute top-1/2 -right-5 w-5 h-5 text-neutral-300 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-neutral-500 text-xs">
          Total average time: 25 minutes from first message to door-knock.
        </p>
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
                <svg className="w-5 h-5 text-amber-500 group-open:rotate-180 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
