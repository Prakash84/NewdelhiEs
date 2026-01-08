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
      subtitle: "Russian Escorts ",
      clients: "Book our Instagram-verified Russian Delhi escorts for mountain or shoreline escapes. Slavic beauties snap Insta-worthy bikini shots on Goa’s Palolem, then cuddle in private pool villas. In Manali, they thrill you with snowboard lessons and steamy log-cabin nights. High-profile, passport-ready, fully vaccinated—travel stickers on IG stories prove every mile. 24-hour companion guarantee.",
      // experience: "Gup-shup over Old-Delhi chai, long Khan-market walks, pocket-friendly rates, cash after hello."
    },
    {
      title: "VIP & Premium Escorts",
      subtitle: "Delhi Girls ",
      clients: "Local Delhi escorts know every twist from Murthal dhabhas to Manali’s Solang ropeway, Rishikesh’s secret campsites to Goa’s sunset shacks. Their Insta reels tag real-time locations, guiding you to cliff-jump spots, cafés, midnight markets. Friendly, fluent in Hindi-English, they charm families and hotel staff alike, turning road trips into VIP adventures.",
      // experience: "Rolls-ready couture, Dum-Pukht dinners, multilingual talk, silent billing."
    },
    {
      title: "College & Young Companions",
      subtitle: "College-Girl Escorts ",
      clients: "Young university Delhi escorts bring energy and affordability to group trips. Share hostel rooms or luxury tents, split costs, yet enjoy flirtatious company. They shoot TikTok-Insta content on Goa beaches, bonfire dance reels in Rishikesh, snowball challenges in Manali. Cooperative, discreet, and travel-smart—perfect for spontaneous long-weekend plans.",
      // experience: "Murthal drives, third-wave coffee, consent-first cosiness, 24×7 slot."
    },
    {
      title: "Couple-Friendly Companionship",
      subtitle: "Insta-Profile Escorts",
      clients: "Swipe verified Instagram Delhi escorts with 10k-plus followers. Their travel highlight albums document past Manali, Goa, Rishikesh tours—real testimonials in comments. Book through DM or WhatsApp link in bio; they carry ring-lights, capture cinematic moments, boost your social clout while delivering private 5-star companionship on hills, beaches, and riverbanks.",
      // experience: "Wine giggles, first-time nerves gone, shared selfies, stronger bond."
    }
  ];
  const locations = [
    {
      name: "Aerocity",
      icon: "✈️",
      vibe: "Premium Delhi escort services at Aerocity's luxury hotels including Roseate House, Pullman, and Lemon Tree. Our escorts in Delhi provide discreet 5-star hotel companionship near IGIA Airport with verified independent escorts in Delhi.",
      convenience: "10-minute approval, direct-to-room key-card entry, no lobby questions."
    },
    {
      name: "Connaught Place",
      icon: "🏙️",
      vibe: "Elite high profile escorts in Delhi available at The Park, Radisson, and central CP hotels. Experience sophisticated escort service in Delhi with educated female escorts in Delhi in the heart of the capital's business district.",
      convenience: "Meet at parked car or metro exit-4; walk-up heritage suites available."
    },
    {
      name: "South Delhi",
      icon: "🏡",
      vibe: "Premium Delhi escort services covering NFC, Greater Kailash, and Defence Colony. Meet sophisticated independent escorts in Delhi at luxury residences and hotels with our trusted escorts in Delhi for discerning clients.",
      convenience: "Discreet bungalow gates, GPS-pinned chauffeur drop, late-night check-ins welcomed."
    },
    {
      name: "Noida",
      icon: "🏢",
      vibe: "Elite escort service in Delhi extended to Noida sectors. Our Delhi escorts travel to your location with verified call girls in Delhi providing premium companionship across NCR's corporate hub.",
      convenience: "Sector-18 metro pickup, expressway-ready cabs, prepaid room blocks."
    },
    {
      name: "Gurgaon",
      icon: "🌃",
      vibe: "High-class Delhi escort services available throughout Gurgaon. From Cyber Hub to Golf Course Road, our high profile escorts in Delhi serve premium hotels and residences with professional independent escorts in Delhi.",
      convenience: "FastTAG express lanes, corporate apartment master-keys, 30-min city-wide SLA."
    }
  ];
  const testimonials = [
    {
      initials: "A.S.",
      rating: 5,
      text: "We let our Delhi escorts do the talking, but the praise keeps pouring in. Busy execs thank our Aerocity escorts for 30-minute stealth arrivals; first-time couples say our female escorts in Delhi made nerves vanish with one warm smile. One regular flyer calls us the only agency that sends a live selfie before the cab rolls—proof that high-profile escorts in Delhi here are photo-real, not Photoshop. No full names, no saved chats, just initials and five-star honesty."
    },
    {
      initials: "K.R.",
      rating: 5,
      text: "Scroll the WhatsApp screenshots and you’ll see why Noida escorts, Gurgaon escorts and Delhi escort service fans rate us ★★★★★ again and again: transparent rates, blank bills, zero catfish. Whether you booked Independent escorts in Delhi for a Lodhi wine night or a quick lunch-break Delhi escort meet, your private story stays locked in our encrypted chat."
    },
    {
      initials: "S.M.",
      rating: 5,
      text: "Feel the same after your date? Hit the green button, drop your initials and a line—we’ll add your word to the wall. Because trust is the sexiest part of any escort service in Delhi, and our Delhi escorts work hard to keep that buzz alive."
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
      q: "What is the cost of Delhi escorts?",
      a: "Full-night Delhi escorts start at 8k, short 2-hour pop is 4k; tips extra if you want the girl in couture. No hidden cab fee—our escort service in Delhi keeps the bill simple."
    },
    {
      q: "Do you offer Independent escorts in Delhi?",
      a: "Yes, most of our girls are Independent escorts in Delhi; they handle their own calendar, so you talk direct on WhatsApp—no broker baba in between."
    },
    {
      q: "Can I book Noida escorts or Gurgaon escorts too?",
      a: "100 %. Just drop location pin—Noida escorts and Gurgaon escorts reach your hotel within 45 minutes, same rate as Delhi escort service."
    },
    {
      q: "Is this Delhi escort service safe for married men?",
      a: "Full privacy. Card shows neutral name, hotel entry via side gate, chat auto-deletes. Your wife or CA will never find out."
    },
    {
      q: "What are high profile escorts in Delhi?",
      a: "These are models, air-hostess types, fluent in English—high profile escorts in Delhi perfect for five-star lobby plus-one without raising brows."
    },
    {
      q: "Can I get a Delhi escort at 3 a.m.?",
      a: "Yup, our phone is on 24×7. Aerocity escorts reach IGI hotels in 25 minutes even at 3 a.m.—night-owl no extra charge."
    },
    {
      q: "Do I pay advance cash?",
      a: "Zero advance for hotels inside Delhi, Noida, Gurgaon. Pay the Delhi escort only after she knocks; outsider towns need small travel token."
    },
    {
      q: "How do I repeat the same girl?",
      a: "Save her code name, ping us next week. If she’s free, we block the slot—VIP perk of our escort service in Delhi."
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
      image: "/images/ESESS.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/download (53).webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Chelsea Foster",
      designation: "Spa Therapist",
      image: "/images/download (24).jpg",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Lane Parsons",
      designation: "Spa Therapist",
      image: "/images/anaa - Linkfly.webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Haven West",
      designation: "Spa Therapist",
      image: "/images/download (52).webp",
      socials: {
        WhatsApp: "https://api.whatsapp.com/send?phone=919217255113",
        instagram: "https://www.instagram.com/delhi.luxury_spa/",
        // twitter: "https://twitter.com",
      },
    },
    {
      name: "Avery Grace",
      designation: "Spa Therapist",
      image: "/images/download (50).webp",
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
  "Delhi Escorts", "Noida Escorts", "Aerocity Escorts", "Gurgaon Escorts",
  "Mahipalpur Escorts", "Rohini Escorts", "Pritampura Escorts", "Escorts Connaught Place",
  "Escorts Lajpatnagar", "Escorts Paharganj", "Escorts Dwarka", "Escorts Vasant Kunj",
  "Escorts Greater Kailash", "Escorts new friends colony", "Escorts Green Park", "Escorts Saket",
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
  className="relative text-white"
  style={{
    backgroundImage: "url('/images/bannermodel.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative container mx-auto px-6 py-20 text-center max-w-4xl">

    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
      Book high-profile Delhi escorts first visit ₹1999 today
    </h1>

    <p className="text-lg md:text-xl text-zinc-300 mb-6">
      Independent Delhi Escorts in 5 star hotel
    </p>

    <div className="inline-flex items-center gap-2 bg-zinc-800/80 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
      <span>✓</span>
      <span>100 % Genuine & Verified</span>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full font-semibold transition"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition"
      >
        💬 WhatsApp
      </a>
    </div>

  </div>
</section>

     {/* <section
  className="relative text-white"
  style={{
    backgroundImage: "url('/images/bannermodel.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative container mx-auto px-6 py-20 text-center max-w-4xl">

    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
      
Book high-profile Delhi escorts first visit ₹1999 today
    </h1>

    <p className="text-lg md:text-xl text-zinc-300 mb-6">
      Book high-profile Delhi escorts first visit ₹1999 today and feel the difference without burning a hole in your pocket. This one-time intro price is our welcome gift to new clients who want to taste five-star company at street-smart cost. Our Delhi escorts are air-hostesses, college girls, models and housewives who only meet selective gents; we never send random profiles. Just WhatsApp “1499” and get a verified photo within 30 seconds—no long chats, no advance, no fake promises.
    </p>

    <div className="inline-flex items-center gap-2 bg-zinc-800/80 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
      <span>✓</span>
      <span>100 % Genuine & Verified</span>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      <a
        href="tel:+91XXXXXXXXXX"
        className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-full font-semibold transition"
      >
        📞 Call Now
      </a>

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition"
      >
        💬 WhatsApp
      </a>
    </div>

  </div>
</section> */}



    {/* <section
  className="relative min-h-[85vh] md:min-h-screen text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/bannermodel.webp')",
  }}
>
  <div className="absolute inset-0 bg-black/60" />

  <div className="relative container mx-auto px-6 h-full flex items-center py-32">
    <div className="max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
        Book high-profile Delhi escorts first visit ₹1999 today
      </h1>

      <p className="mt-6 text-sn md:text-xl text-neutral-200 leading-relaxed">
        Book high-profile Delhi escorts first visit ₹1999 today and feel the difference without burning a hole in your pocket. This one-time intro price is our welcome gift to new clients who want to taste five-star company at street-smart cost. Our Delhi escorts are air-hostesses, college girls, models and housewives who only meet selective gents; we never send random profiles. Just WhatsApp “1499” and get a verified photo within 30 seconds—no long chats, no advance, no fake promises.
      </p>

      <p className="mt-4 text-neutral-300">
       The escort service in Delhi we run is built for privacy: direct room entry at Pullman, Novotel, Radisson Blu, cash payment after you smile.
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
</section> */}
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
            Meet Independent Escorts in Delhi with College Girls & Foreign profile<span className="text-black-600"> </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-6xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
             Stop scrolling fake listings; our Delhi escorts are 100 % real, photo-verified and waiting inside Aerocity, CP, Mahipalpur, Gurugram and all 5 Star hotels in Delhi NCR right now. Every girl on this page is an independent escorts in Delhi, meaning no agent drama—she handles her own calendar, so you get fresher attitude and quicker room service. Browse, pick, WhatsApp and meet within 30 minutes; cash and UPI payment after you open the door and smile. From college teens to busty housewives, these independent escorts in Delhi turn ordinary nights into spicy memories. Book any of our trusted escort Service in Delhi today and lock the ₹1999 first-visit price before the slot is gone.
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
      <section className="bg-black text-gray-300 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Comprehensive Delhi Escort Services
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Tailored to your desires, our premium escort service in Delhi offers
            refined companionship experiences across NCR with discretion and class.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Service Item */}
          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Elite Dinner Dates with Delhi Escorts
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transform ordinary evenings into extraordinary experiences with
              sophisticated Delhi escorts who excel in social settings. Whether
              dining with Aerocity escorts at luxury hotels or Gurgaon escorts at
              corporate venues, our companions enhance every moment with charm
              and engaging conversation.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Corporate Events with High Profile Escorts
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Make a lasting impression at business functions with high profile
              escorts in Delhi who understand professional etiquette. Our
              independent escorts seamlessly fit into corporate environments
              while maintaining elegance and discretion.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Travel Companionship Across NCR
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Explore Delhi and nearby destinations with experienced escorts who
              act as both companions and local guides. From Noida escorts familiar
              with city attractions to Aerocity escorts ideal for airport hotels,
              every journey becomes more enjoyable.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Private Encounters with Independent Escorts
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Enjoy private moments with verified independent escorts in Delhi
              who value comfort, consent, and discretion. Each encounter is
              designed to align with personal preferences and boundaries.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Cultural Experiences with Elite Companions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Discover Delhi’s cultural charm with escorts who appreciate art,
              music, nightlife, and shopping. From Cyber Hub evenings with
              Gurgaon escorts to Noida shopping experiences, companionship adds
              depth to every outing.
            </p>
          </div>

          <div className="bg-[#141414] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-3">
              Extended Arrangements with Premium Escorts
            </h3>
            <p className="text-gray-400 leading-relaxed">
              For longer engagements, our premium escorts in Delhi offer extended
              companionship that allows genuine connections to develop naturally,
              creating meaningful experiences across the NCR region.
            </p>
          </div>

        </div>

        {/* Bottom Note */}
        {/* <p className="text-center text-gray-500 mt-16 max-w-4xl mx-auto">
          Each escort service in Delhi is fully customizable, ensuring every
          experience aligns perfectly with your expectations, preferences,
          and comfort.
        </p> */}

      </div>
    </section>
       {/* End Our Therapy Experts */}
       <section className="bg-black py-24">
  <div className="max-w-8xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        Elite Delhi Escort Gallery – Premium Delhi Escort Service 24/7
      </h2>
      <p className="mt-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
        Scroll through the city’s most-liked Delhi Escorts page and meet high-profile models, air-hostesses and influencer-level beauties who work only with our escort service in delhi. Every profile is selfie-verified, age-checked and hotel-ready; no fake edits, no old photos. Whether you need a glamorous plus-one for a South-Delhi wedding or a discreet late-night visitor at Pullman Aerocity, our Delhi Escort team reaches your door within 25 minutes. Book directly on WhatsApp, pay cash after arrival, and enjoy five-star manners wrapped in Indian spice. That’s why guests call us the smoothest Delhi escort service in town—luxury made simple, prices kept sensible.
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
<section className="bg-gradient-to-br from-fuchsia-50 to-purple-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        {/* Left: Image + Overlaid Card */}
        <div className="relative">
          <img
            src="/images/Wantto.webp"
            alt="Elite Companion"
            className="rounded-3xl shadow-xl w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 max-w-[220px]">
            <span className="text-3xl">✨</span>
            <div>
              <p className="text-xs text-zinc-500">Starting at</p>
              <p className="font-bold text-zinc-900">₹ 8 k / hour</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl font-extrabold text-zinc-900 mb-4">
            Feel Delhi Escorts Magic – Premium Escort Service in Delhi from CP to Aerocity
          </h2>
          <p className="text-zinc-700 leading-relaxed mb-6">
            Experience Delhi like never before with our Delhi escorts who turn every boring trip into a hot story you’ll WhatsApp your bestie. Each girl is hand-picked, selfie-checked and trained to fit any scene—five-star gala in Connaught Place, quiet wine dinner at The Lodhi, or a wild night inside your Aerocity suite. You set the pace, we bring the passion; our escort service in Delhi makes sure she walks in within thirty minutes, no advance, no cab drama.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-6">
            Starting at 8k an hour, you get high-profile escorts in Delhi who speak English, Hindi and even a bit of French if you like. From vibrant clubs of CP to luxury hotels near IGI, your female escort arrives dressed to kill, smelling awesome and ready to explore the city—or just explore you behind locked doors. Transparent pricing means the number quoted is the number you pay; we hate hidden extras more than you do.
          </p>
          <p>We cover full NCR—Noida escorts, Gurgaon escorts and Aerocity escorts reach your lobby just as fast as central Delhi escorts. Midnight landing or lunch-break date, our 24×7 live support keeps a real human on chat who tracks every step: selfie → cab → arrival → smile. Pay cash only after she knocks, and if plans change last minute we kill the booking free of cost.</p>

          {/* Icon perks */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-xl p-3 shadow">
              <span className="text-2xl">🔒</span>
              <p className="text-xs mt-1">Discreet</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow">
              <span className="text-2xl">⏱️</span>
              <p className="text-xs mt-1">30-min arrival</p>
            </div>
            <div className="bg-white rounded-xl p-3 shadow">
              <span className="text-2xl">💳</span>
              <p className="text-xs mt-1">Pay later</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-full hover:bg-zinc-800 transition"
            >
              <span>📞</span> Call Now
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-3xl font-bold text-neutral-900 mb-8">
          Delhi Escort Service for VIP Gentlemen – High Profile Escorts in Delhi Available Now
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-neutral-700 leading-relaxed">
          <div>
            <p>
             Our Delhi escort service is for the guy who wants a smart, good-looking girl on his arm—someone who can talk English, laugh at your jokes and walk into a fancy hotel without anyone guessing. These high-profile escorts in Delhi are real models, air-hostess types or bold college girls, 21 to 28, fully checked and happy to sign a hush paper if you want. We fix the meet in safe places—Pullman, Novotel, DLF flats or your own room—so no tension, no drama. No hurry-purry;
            </p>
          </div>

          <div>
            <p>
               the Delhi escorts like long dinners, full nights or even a quick road-trip to Neemrana. Chat about movies, money or music—they listen and answer back sweetly. Landing at IGI at 2 a.m.? Just WhatsApp, pick your girl and she’ll be in the lobby in 25 minutes, cash only after you say hi. Every bill is blank, every chat is deleted, so your wife or boss never knows. First visit only ₹1499, then normal rate.
            </p>
          </div>
        </div>

        <p className="mt-6 text-neutral-700 leading-relaxed">
         Repeat customers say the girls feel like real girlfriends, not workers. So stop scrolling cheap ads, save our number and try once—you’ll see why big-shot visitors call our Delhi escort service the city’s safest fun and keep coming back whenever they land in the capital.
        </p>
      </div>
    </section>
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-4xl md:text-4xl font-extrabold text-neutral-900 mb-4 text-center">
          Travel Companions - Delhi Escorts for Manali, Goa & Rishikesh Trips
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-5xl mx-auto">
          Ready to turn your next long weekend into the adventure of a lifetime? Our travel-dedicated Delhi escort service team is online 24/7 to design a custom Manali, Goa or Rishikesh escape. Simply WhatsApp “TRIP” and receive an instant portfolio featuring Russian escorts in Delhi, bubbly college girls and verified Insta-models—each with passport, Covid certificate and bikini-ready Instagram stories. Tell us your dates, hotel vibe and desired mood; within minutes we share clear packages that include your Delhi escort’s travel, stay, meals and discreet company, so no hidden costs spoil the road. Want wheels today? Our partnered vendors deliver sanitized SUVs with dark-tinted windows to your Delhi doorstep, stocked with champagne and mountain snacks. Payment is flexible: 20% advance locks your companion, balance when she hops in. Message now, pick your dream co-pilot from our premium Delhi escort service, and wake up to sunrise in the hills, beach or Ganga ghats with the most gorgeous Russian escorts in Delhi by your side. 
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
                {/* <span className="font-semibold text-amber-600">Who chooses this:</span>  */}
                {s.clients}
              </p>
              {/* <p className="mt-3 text-neutral-600 leading-relaxed">
                <span className="font-semibold text-amber-600">Experience focus:</span> {s.experience}
              </p> */}
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
          Why Delhi & NCR Pick Our Escort Service in Delhi Over the Rest
        </h2>
        {/* <p className="text-center text-neutral-400 mb-10">
          We don’t chase volume—we protect your peace of mind.
        </p> */}

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 text-neutral-300">
          {/* 1 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            {/* <h3 className="text-amber-400 font-semibold mb-2">Verified & Genuine</h3> */}
            <p className="text-sm leading-relaxed">
           We don’t chase numbers—we protect your peace. Every photo you see is shot last week in our own studio, no five-year-old selfies, no catfish. One click on WhatsApp and you get a fresh live selfie of the real Noida escorts, Aerocity escorts or Gurgaon escorts you chose; if she isn’t free we tell you upfront, not after you’ve checked in. Rates quoted are final—no hidden “cab fee,” no surprise overtime. Your bank statement shows only a neutral UPI code, and we sign an NDA if you ask, so your concierge, accountant or wife never knows.
The same chat window gives you a time-stamped trail: profile → selfie → room confirmation → location share → arrival. No shadow managers, no extra calls. Whether you book Delhi escorts for a quick CP lunch date or Aerocity escorts for a midnight landing at IGI, a real human replies in 90 seconds in clear Hindi or English and stays online till the girl knocks.
We’re local Delhi boys, so we know which hotels allow guests without key-card drama, when the Dwarka expressway is jammed, and which Gurgaon escorts can reach Sector-29 in twenty minutes. Big-agency polish, neighbourhood speed—that’s why busy CEOs, returning NRIs and curious couples keep our escort service in Delhi on speed-dial. Still comparing? Ask for a live selfie right now and watch how fast we deliver it; others send excuses, we send confirmation.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-neutral-300 mt-10">
          {/* 1 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Verified & Real profiles</h3>
            <p className="text-sm leading-relaxed">
            Demand a live selfie and receive it within 30 seconds; every Delhi escort, genuine college girl and high profile girl matches the gallery pixel to pixel. If the call girl services image feels outdated we refund before the cab rolls, so you only meet the real escort girl you selected.
            </p>
          </div>

          {/* 2 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Privacy & Discretion</h3>
            <p className="text-sm leading-relaxed">
          Cash or UPI, your bank sees only “consultancy,” never “call girl services.” Whether you book a massage girl for a quick stress-buster or a Noida escort for overnight fun, digital breadcrumbs vanish in 24 hours, keeping spouses and auditors blissfully unaware.
            </p>
          </div>

          {/* 3 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">No advance & No hidden Charges</h3>
            <p className="text-sm leading-relaxed">
              Gurgaon escort delayed by traffic? We confess before you open Google Pay—zero taxi surprises, zero cancellation penalties. From a simple massage girl to a full-night high profile girl, the quote is the final invoice, making our Delhi girl experience the most transparent in town.
            </p>
          </div>

          {/* 4 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Friendly 24×7 Support</h3>
            <p className="text-sm leading-relaxed">
             One WhatsApp number answers Aerocity escort questions at 3 a.m.—no bots, no hold music. Need a college girl after last-call? Want to switch from hourly to overnight? Our human team toggles availability faster than you can spell “call girl services.”
            </p>
          </div>

          {/* 5 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">Transparent Process</h3>
            <p className="text-sm leading-relaxed">
            Pick profile, get selfie, share location, track arrival—no secret cab fee, no last-minute “night-stay” upsell. Whether you choose a South Delhi high profile girl or a Dwarka college girl, the map and meter are live-streamed so you watch every kilometre and minute.
            </p>
          </div>

          {/* 6 */}
          <div className="border border-neutral-700 rounded-xl p-6">
            <h3 className="text-amber-400 font-semibold mb-2">corporative girls</h3>
            <p className="text-sm leading-relaxed">
             Neighbourhood speed, five-star polish—our escort girl squad knows which hotel lifts need key-cards, which lobbies ignore walk-ins, and how to smile at security while whisking you to paradise. From a shy massage girl to a cat-walk service girl, every Delhi girl is briefed to blend, bend and never offend.
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
          Prime Locations of Delhi Escorts
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-3xl mx-auto">
          Our elite Delhi escort services cover all major locations across Delhi NCR. From Aerocity escorts at luxury airport hotels to CP escorts in central Delhi, South Delhi escorts in premium colonies, plus Noida escorts and Gurgaon escorts - we bring verified independent escorts in Delhi to your location.
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
           Delhi Escorts- Your Privacy, Our Priority
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
          Delhi Escorts Reviews – Real Words from Happy Clients of Our Escort Service in Delhi
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
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Book Premium Delhi Escorts Today – Contact Us Now
        </h2>

        <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Ready to meet exceptional Delhi escorts? Your journey toward extraordinary experiences begins here. Contact us to discuss preferences for independent escorts in Delhi, high profile escorts in Delhi, or specific requirements for Aerocity escorts, Noida escorts, or Gurgaon escorts.
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
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
         Premium Independent Delhi Escorts – Verified High-Profile Escort Service in Delhi.
        </h1>

        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
           Welcome to DelhiEscorts.in, the capital’s most selective stop for premium Delhi escorts who are 100 % independent, university-educated and selfie-verified every single month. When you book through our escort service in Delhi you never deal with brokers or fake photos; the girl who knocks on your Aerocity suite door is the exact high-profile escort you liked online, right down to the dimple and perfume. We hand-pick only Independent escorts in Delhi who mix brainy talk with warm hearts, so whether you are a tired CEO landing at IGIA at 2 a.m. or a couple celebrating an anniversary in Gurugram, the chemistry feels real, not rented.
          </p>

          <p>
            Browse high-res portfolios of Delhi escorts, Noida escorts, Aerocity escorts and Gurgaon escorts, read honest client reviews and chat on end-to-end encrypted WhatsApp—no upsells, no awkward surprises. Prefer a quiet wine evening at The Lodhi, a spontaneous drive to Neemrana Fort for sunset selfies, or a behind-closed-doors strawberries-and-laughter session? Our female escorts in Delhi tailor every meet around your mood, schedule and safe-words before the first kiss.
          </p>

          <p>
            Discretion is baked into every step of our Delhi escort service: your credit-card slip shows a neutral name, cabs drop at side lobbies, and any selfies taken together auto-delete when the date ends. Rates are crystal-clear—hourly or overnight—with complimentary refreshments, lingerie styling and fresh flowers included. Many of our high-profile escorts in Delhi speak fluent English, Hindi and French, hold degrees in fashion or psychology and can fly tomorrow for a destination wedding in Udaipur or a weekend escape to Goa.
          </p>
          <p>
            Repeat clients enjoy priority booking, loyalty discounts and access to our private Telegram channel where new tours are dropped first. From bubbly college girls to jet-set models, our escorts in Delhi cover the full map of fantasies without ever rushing the clock. So if you’re googling “best Delhi escort near me” at midnight, stop scrolling. Click the green WhatsApp button now, pick your favourite Delhi escort, Noida escort or Aerocity escort and let us arrange an encounter that leaves you relaxed, respected and smiling for days. Delhi after dark has never felt this welcoming, this safe, this deliciously addictive—come see why our Delhi escort service is the name high-fliers whisper in five-star lifts.
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
               {city}
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
