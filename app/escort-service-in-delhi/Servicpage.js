// app/HeroSection.tsx
"use client";
import Link from 'next/link';
import Image from "next/image";
import { FaCrown, FaUserFriends, FaGraduationCap, FaStar, FaPlane } from 'react-icons/fa';

export default function Servicpage() {
    const services = [
  {
    icon: FaCrown,
    title: 'High Profile Escorts in Delhi',
    desc: 'Elegant, confident aur well-spoken companions jo premium lifestyle ko represent karti hain.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: FaUserFriends,
    title: 'Independent Escorts',
    desc: 'Natural, friendly aur easy-going companionship ke liye best option.',
    color: 'from-sky-400 to-cyan-500',
  },
  {
    icon: FaGraduationCap,
    title: 'College Girl Escorts',
    desc: 'Young, energetic aur cheerful personality ke saath engaging company.',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: FaStar,
    title: 'VIP & Celebrity Style Escorts',
    desc: 'Luxury events, parties aur elite gatherings ke liye suitable companions.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: FaPlane,
    title: 'Travel & Tour Companions',
    desc: 'Delhi NCR ghoomne ya business trips ke liye ideal choice.',
    color: 'from-rose-500 to-pink-600',
  },
];
const locations = [
  { name: 'Aerocity', emoji: '✈️' },
  { name: 'Connaught Place', emoji: '🏙️' },
  { name: 'South Delhi', emoji: '🌳' },
  { name: 'Karol Bagh', emoji: '🛍️' },
  { name: 'Dwarka', emoji: '🏢' },
  { name: 'Noida', emoji: '🏙️' },
  { name: 'Gurgaon', emoji: '🏢' },
];
const points = [
  {
    title: '100% Privacy & Discretion',
    desc: 'Your identity and details remain completely confidential.',
    icon: '🔒',
  },
  {
    title: 'Verified & Genuine Profiles',
    desc: 'Every companion is personally screened and ID-verified.',
    icon: '✅',
  },
  {
    title: 'Easy Booking Process',
    desc: 'Three-step online form—no calls or lengthy forms required.',
    icon: '⚡',
  },
  {
    title: 'No Hidden Charges',
    desc: 'Transparent pricing; pay only what you see.',
    icon: '💳',
  },
  {
    title: 'Professional Support Team',
    desc: '24×7 live chat & WhatsApp assistance before, during & after.',
    icon: '💬',
  },
];
const steps = [
  { num: 1, title: 'Profile select karein', icon: '👤' },
  { num: 2, title: 'WhatsApp par availability check karein', icon: '💬' },
  { num: 3, title: 'Time & location confirm karein', icon: '📍' },
  { num: 4, title: 'Relax and enjoy premium companionship', icon: '✨' },
];
const pillars = [
  {
    emoji: '🔐',
    title: 'Secure Communication',
    desc: 'All chats & calls are end-to-end encrypted; no data is stored.',
  },
  {
    emoji: '🧑‍💻',
    title: 'Anonymous Bookings',
    desc: 'Use initials or nicknames—real names never required.',
  },
  {
    emoji: '🚫',
    title: 'Zero Data Leakage',
    desc: 'No screenshots, no logs, no third-party sharing. Ever.',
  },
  {
    emoji: '🛡️',
    title: 'Mutual Protection',
    desc: 'Both client & companion IDs are verified yet kept hidden from each other.',
  },
];
 // End Features
  const services2 = [
  {
    title: "Busty Boobs",
    description:
      "Craving cups that spill over your palms? Our busty escorts in Delhi wear lace bras two sizes small just for you. Imagine slow body-worship: oil dripping between cleavage, tongue tracing stretch-marks, nipples hardening under ice cubes. They love boob-play and encourage long, sloppy tit-jobs that end only when you say stop. Sizes range from 34D to 38F, all natural, all hungry for attention. Request “busty” when you WhatsApp and we’ll send verified selfies cupping their gifts—no push-up padding, no Photoshop.",
    icon: "/path-to-your-icon1.svg",
    image: "/images/client-1.webp",
  },
  {
    title: "CUM IN MOUTH",
    description:
      "Our escort service in South Delhi understands the need for a confident finale. Every companion carries mint-flavoured dams and colour-coded condoms. Signal “CIM” during booking and your date will maintain eye contact while swallowing every drop, followed by a smile and warm towel. No extra fee, no awkward negotiation—just clear consent and hygiene.",
    icon: "/path-to-your-icon2.svg",
    image: "/images/client-2.webp",
  },
  {
    title: "GIRL FOR DATE",
    description:
      "Tired of robotic escorts? Our escort service in Noida sends university grads who actually read fiction, watch Netflix and can debate Succession vs. Breaking Bad. Meet at Cyber-Hub brewery, share butter chicken, then slip into the car where she slides her hand into yours—natural girlfriend energy, zero clock-watching. Midnight conversion is seamless: spit-heavy kisses, whispered fantasies, sleep-over cuddles. She’ll even order morning chai wearing your shirt.",
    icon: "/path-to-your-icon3.svg",
    image: "/images/client-3.webp",
  },
  {
    title: "ANAL SEX",
    description:
      "Double-penetration or gentle initiation—state your level when ordering. Your escort in Dwarka arrives with travel-size lube, tapered plugs and calming music. She controls depth with breathing cues, ensures warm-up with rimming and fingers, then rocks back until you’re balls-deep. Safe-word “red” stops everything; after-care includes cuddles and chocolate.",
    icon: "/path-to-your-icon4.svg",
    image: "/images/client-4.webp",
  },
  {
    title: "RUSSIAN GIRL",
    description:
      "Blonde, 5-8, cheekbones sharp enough to slice bread—premium Russian call girls are the signature of the best escort service in Delhi NCR. Rates start ₹6k per hour and include authentic Slavic accent, C-cup naturals, and genuine GFE conversation. Many hold hospitality degrees; they’ll discuss Dostoevsky while riding you reverse-cowgirl. Visa, Covid jab and hotel security pass checked weekly.",
    icon: "/path-to-your-icon5.svg",
    image: "/images/client-5.webp",
  },
  {
    title: "PAY PER HOUR",
    description:
      "No hidden charges, no upsells, no “taxi fee” surprises. Our hourly escort service in Mahipalpur, Gurgaon or anywhere in Delhi NCR bills in 60-minute blocks. Extend in 30-minute slices at pro-rata rates—decide on the spot. Receipts sent via encrypted PDF; line-items show only “consultation” for bank discretion.",
    icon: "/path-to-your-icon6.svg",
    image: "/images/client-6.webp",
  },
];
  const faqs = [
    {
      q: "Is escort service in Delhi legal?",
      a: "We charge for time & companionship; anything else is consensual adult decision—100% legal."
    },
    {
      q: "Do you offer escort service in Gurgaon at budget hotels?",
      a: "Yes—Oyo, Treebo, Ibis, PGs; small security deposit may apply."
    },
    {
      q: "Can I cancel last-minute?",
      a: "20% advance refunded if cancelled 2 hours before meet; driver en-route forfeits it."
    },
    {
      q: "Are condoms compulsory for CIM?",
      a: "Dental dam available; bare CIM requires fresh STI slip from both sides—no exceptions."
    },
    {
      q: "Do Russian escorts speak Hindi?",
      a: "Basic Hindi; fluent English. Google Translate on standby."
    },
    {
      q: "How discreet is the escort service in Noida?",
      a: "Girl uses guest stairs, no ID at desk, WhatsApp chat auto-deletes after 24 h."
    },
    {
      q: "Do you store my data?",
      a: "Zero logs. Phone numbers hash-scrambled every midnight."
    },
    {
      q: "Can I extend hours mid-session?",
      a: "Text “+30” or “+60”; girl clocks new time, you pay pro-rata rate, continue."
    },
    {
      q: "Are photos real?",
      a: " Verified against live selfie within 60 seconds—no Photoshop, no bait-and-switch."
    },
    {
      q: "What makes you the best escort service in Delhi?",
      a: "Verified girls, transparent pricing, 30-minute delivery across Delhi NCR, 24/7 live support, legal compliance, zero-data policy."
    },
  ];
  const services1= [
  {
    title: "Airhostess Escorts",
    description:
      "Slim, multi-lingual and passport-ready—our ex-cabin-crew companions bring first-class hospitality to your hotel room. Book an air-hostess escort service in Mahipalpur near the airport and she’ll land at your door in uniform, heels and a cheeky smile within 25 minutes.",
    image: "/images/IA BY @MUNNDLY (1).webp", // Add your image path here
  },
  {
    title: "College Girls Escorts",
    description:
      "19–23 yrs, fresh on the scene and naturally curious. These university students are the reason clients call us the best escort service in Delhi for young, energetic girlfriend experiences. Real college ID shown in private chat—no bait-and-switch.",
    image: "/images/download (31).webp", // Add your image path here
  },
  {
    title: "Hign Profile Escorts",
    description:
      "Page-3 faces, Instagram influencers and luxury-travel companions. Discretion is guaranteed when you order a high-profile escort service in South Delhi or Gurgaon for five-star stays. NDAs available on request.",
    image: "/images/imagee.webp", // Add your image path here
  },
  {
    title: "Housewife Escorts",
    description:
      "Mature, busty and skilled in every trick a husband wishes for. Our unsatisfied housewife escort service in Dwarka offers real women who love long afternoons of pampering, home-cooked stories and slow, oily back-rubs.",
    image: "/images/housewife.webp", // Add your image path here
  },
  {
    title: "Independent Escorts",
    description:
      "No agency middle-man—chat directly with verified independents who set their own rates and rules. Choose an independent escort service in Noida for flexible, one-to-one chemistry and negotiable overnight discounts.",
    image: "/images/image2.webp", // Add your image path here
  },
  {
    title: "Model Escorts",
    description:
      "Cat-walk height, cheek-bone shadows, portfolio shots on request. Our model escort service in Delhi supplies Vogue-height companions for yacht parties and luxury car launches.",
    image: "/images/I Held Her Tight.webp", // Add your image path here
  },
  {
    title: "Party Girl Escorts",
    description:
      "Bottle-service beauties who know every DJ in Connaught Place. Book a party-girl escort service in South Delhi and hit the clubs with a plus-one who dances like she’s on your private playlist, then slips into the back-seat for after-hours fun.",
    image: "/images/Evie Lee Mikomin.webp", // Add your image path here
  },
  {
    title: "Russian Escorts",
    description:
      "Accent, attitude and ice-blonde glamour. Our Russian escort service in Gurgaon and Mahipalpur ships real Moscow models to your hotel within 30 minutes—no fake profiles, no Photoshop. Immigration stamps shown on arrival.",
    image: "/images/download (7).webp", // Add your image path here
  },
  {
    title: "Strip Escorts",
    description:
      "Curious about a one-on-one lap dance that ends exactly where you want? Reserve a strip-escort service in Dwarka and she’ll bring LED lights, Bluetooth speaker and three costume changes to turn your suite into a private showroom.",
    image: "/images/download (12).webp", // Add your image path here
  },
  {
    title: "VIP Escorts",
    description:
      "Red-carpet ready, NDAs signed on request. When only the best escort service in Delhi will do, our VIP tier supplies Bollywood-level stunners for corporate galas, destination weddings and yacht weekends. Prices from ₹25 k/hour, includes body-guard driver and encrypted chat.",
    image: "/images/download (13).webp", // Add your image path here
  },
  // Add more categories as needed
];
  return (
    <>
    <section
  className="relative text-white bg-cover bg-center"
  style={{
    backgroundImage:
      "url('/images/Waarom ik dit álle.webp')",
  }}
>
  {/* Dark + gradient overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-rose-500/80 via-fuchsia-600/80 to-indigo-700/80" /> */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
      Escort Service in Delhi – Premium & Trusted Delhi Escorts
    </h1>

    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
      Our escort service in Delhi is fully safe and private—no broker, no leak. Be it Aerocity, Dwarka, South Delhi or Mahipalpur, a verified girl reaches you within 30 min. We send live photo first; if you like, book—cash only after she knocks. First-visit discount running, just WhatsApp now and enjoy the best escort service in Delhi.
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
 {/* hOT Service */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 gap-6 p-6">
      {services2.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 text-center hover:shadow-xl transition duration-300 ease-in-out"
        >
          <div className="w-16 h-16 mx-auto mb-4">
            <Image
              src={service.image}
              alt={service.title}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
        {/* hOT End Service */}
        {/* Service */}
        <div className="max-w-6xl mx-auto space-y-6">
      {services1.map((service, index) => (
        <div key={index} className="flex items-start space-x-4 p-4 border-b border-gray-300">
          <div className="w-14 h-14 flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
            <p className="mt-2 text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
<section className="relative bg-neutral-950 text-white py-24 overflow-hidden">
  {/* subtle background glow */}
  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/30 via-purple-900/20 to-indigo-900/30" />

  <div className="relative max-w-7xl mx-auto px-6">
    
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        Why We’re the Best Escort Service in Delhi NCR
      </h2>
      <p className="mt-5 text-gray-300 text-lg leading-relaxed">
        Hum sirf escort service nahi dete — hum ek refined, discreet aur premium
        companionship experience create karte hain jo trust aur comfort par based hota hai.
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* Card 1 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Professionally Trained Companions
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Every woman on our roster is coached in etiquette, conversation and discretion—whether you book an escort service in South Delhi or a quick lunchtime escape in Mahipalpur, she arrives polished and prepared.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Flexible & Reliable Services
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Flight delayed? Meeting running late? Tell us and we reshuffle instantly. Our escort service in Gurgaon, Noida or Dwarka reaches your door within 30 minutes—no excuses, no cancellations.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Customized Client Experience
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Prefer a slow GFE dinner followed by overnight cuddles? Or a 90-minute strip-lap session? Check the menu, mix the ingredients; the best escort service in Delhi is the one that feels like you wrote the script.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Discretion & Privacy Guaranteed
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Encrypted bookings, cash or UPI, no names stored. From five-star hotels to private apartments, your identity stays sealed—that’s why VIPs choose our escort service in Delhi NCR for repeat, risk-free fun.
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Transparent & Honest Approach
        </h3>
        <p className="text-gray-300 leading-relaxed">
          ₹6 k to ₹25 k brackets published on every profile. No hidden taxi charges, no last-minute “upgrade” calls. Clients call us the most trusted escort service in Delhi because the invoice always matches the quote.
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-fuchsia-500 transition">
        <h3 className="text-xl font-bold mb-4 text-fuchsia-400">
          Long-Term Trust & Relationships
        </h3>
        <p className="text-gray-300 leading-relaxed">
          60 % of our monthly slots are pre-booked by returning guests. When you find the perfect Russian escort in Delhi or a busty housewife in Dwarka, her direct contact is saved—so next time you skip the agency queue.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-slate-50 dark:bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-4">
          Our Escort Service Categories
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          Har category ko different preferences aur comfort levels ke according design kiya gaya hai.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-2xl shadow-md`}
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {s.desc}
                </p>

                {/* Hover accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          Book Tonight – Premium Escort Service in Delhi Covering Gurgaon, Noida, Dwarka, Mahipalpur & South Delhi
        </h2>

        {/* Sub-text */}
        <p className="text-slate-300 mb-10 max-w-4xl mx-auto">
         Why limit pleasure to one pin-code? Our premium escort service in Delhi operates a NCR-wide relay network: Gurgaon cyber-hub girls reach Sector 18 Noida in 35 minutes; Dwarka MILFs cross into Mahipalpur terminals in 15; South Delhi models glide to Khan Market suites in 20. One central dispatch hub tracks traffic, flight delays and hotel security lines live, so your call girl in Delhi arrives before ice melts in your whisky. Book anytime after 7 p.m. for same-night delivery; advance booking unlocks complimentary airport pickup and breakfast-in-bed. Pricing stays consistent across regions—no “Gurgaon surcharge” or “Noida toll” gimmicks. Pay per hour, extend on location, or lock an overnight package and save 25%. Whether you need a sultry escort service in Gurgaon for a corporate gala, a playful escort service in Noida for a house-party, or discreet Mahipalpur fun during a layover, one message secures the premium escort service in Delhi that covers the entire map—tonight, tomorrow, whenever desire calls.
        </p>

        {/* Location Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {locations.map((loc) => (
            <span
              key={loc.name}
              className="px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold flex items-center gap-2 hover:bg-white/20 transition"
            >
              <span className="text-xl">{loc.emoji}</span>
              {loc.name}
            </span>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black dark:text-white mb-4">
          What Makes Us a Trusted Choice
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto">
          Hum client ki safety aur comfort ko top priority dete hain. Booking ke baad
          bhi humara support available rehta hai.
        </p>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                {p.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {p.desc}
              </p>
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
    <section className="bg-gradient-to-br from-fuchsia-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Simple & Quick Booking Steps
        </h2>
        <p className="text-white/90 mb-12 max-w-2xl mx-auto">
          Booking process simple aur transparent hai, bina kisi unnecessary complication ke.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="relative">
              {/* Connector line (hidden on last item) */}
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-white/30 -translate-x-1/2" />

              <div className="mx-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-3xl mb-4">
                {s.icon}
              </div>

              <h3 className="text-lg font-bold mb-1">Step {s.num}</h3>
              <p className="text-white/90 text-sm">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
         Best Escort Service in Delhi NCR – Real Girls, Real Prices, 30-Min Delivery
        </h1>
        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
            When midnight hunger strikes, you order food; when desire strikes, you deserve the best escort service in Delhi that delivers faster than your favourite pizza. We stock 200+ verified profiles across Delhi NCR, Gurgaon, Noida, Dwarka, Mahipalpur and South Delhi, so a real call girl in Delhi is never more than 30 minutes away. Every companion is selfie-verified minutes before dispatch—no vintage photos, no look-alikes. Transparent per-hour pricing starts at ₹7 k for South Delhi and ₹6 k for Mahipalpur/Dwarka, including discreet cab fare. Extend on-the-spot without haggling; the meter simply continues. GPS tracking lets you watch the driver approach while you freshen up, and encrypted WhatsApp keeps your booking invisible to curious partners. Whether you crave a busty college teen or a Russian accent whispering “privet” at your hotel door, the best escort service in Delhi guarantees arrival in half an hour or the first hour is free. Save our number once, and you’ll never scramble through fake ads again.
          </p>
        </div>
      </div>
    </section>
     <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
         Transparent Escort Service in Delhi With Zero Hidden Fees
        </h1>

        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
           Hidden charges kill the mood faster than a flat tyre. Our escort service in Delhi pioneered flat-rate honesty: the price quoted on WhatsApp is the final price you pay—taxi, condoms, costumes, even mild role-play props included. Check our dynamic price grid: escort service in Gurgaon and Noida start at ₹7 k per hour, escort service in Dwarka and Mahipalpur at ₹6 k, premium South Delhi locales at ₹8 k. Extend in 30-minute slices at exactly 50% of the hourly rate; no surprise “night-stay” upsell appears at 3 a.m. Invoices carry the neutral line “consultancy,” so bank statements stay spouse-proof. Tips are optional, never solicited. If the call girl in Delhi arrives and you feel she’s not the same person as her live selfie, we’ll UPI refund your advance before she turns around. That zero-risk transparency is why repeat clients label us the most transparent escort service in Delhi NCR—we put our money where your pleasure is.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
          Your Privacy Is Our Responsibility
        </h2>
        <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
          Hum samajhte hain ki discretion escort services ka sabse important part hai.
          Isliye hum secure communication, private bookings aur strict confidentiality
          follow karte hain. Client aur escort dono ki identity protected rehti hai.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-slate-800/50 rounded-2xl p-6 text-center border border-slate-700 hover:border-fuchsia-500 transition-colors"
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom stamp */}
        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
            100 % Discretion Guaranteed
          </span>
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