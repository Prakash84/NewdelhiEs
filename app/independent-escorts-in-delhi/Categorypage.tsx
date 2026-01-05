// app/HeroAboveFold.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


type Escort = {
  id: number;
  name: string;
  age: number;
  location: string;
  price: number;
  rating: number;
  img: string;
  available: boolean;
};

const mockData: Escort[] = [
  { id: 1, name: 'Anika', age: 23, location: 'South Delhi', price: 15000, rating: 4.9, img: '/images/download (44).webp', available: true },
  { id: 2, name: 'Rhea', age: 25, location: 'Connaught Place', price: 18000, rating: 4.8, img: '/images/download (49).webp', available: true },
  { id: 3, name: 'Simran', age: 24, location: 'Aerocity', price: 20000, rating: 5.0, img: '/images/download (39).webp', available: false },
  { id: 4, name: 'Kavya', age: 22, location: 'Gurgaon', price: 16000, rating: 4.7, img: '/images/download (31).webp', available: true },
  { id: 5, name: 'Tara', age: 26, location: 'Dwarka', price: 17000, rating: 4.9, img: '/images/download (27).webp', available: true },
  { id: 6, name: 'Zoya', age: 24, location: 'Noida', price: 19000, rating: 4.8, img: '/images/image1.webp', available: true },
];

export default function Categorypage() {
  const [list, setList] = useState(mockData);
  const [page, setPage] = useState(1);

  // simple filters
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [available, setAvailable] = useState('');

  const applyFilters = () => {
    let filtered = mockData;
    if (price === 'low') filtered = filtered.sort((a, b) => a.price - b.price);
    if (price === 'high') filtered = filtered.sort((a, b) => b.price - a.price);
    if (location) filtered = filtered.filter((e) => e.location === location);
    if (available === 'yes') filtered = filtered.filter((e) => e.available);
    setList(filtered);
    setPage(1);
  };
  const points = [
  {
    icon: '✅',
    title: 'Verified Profiles',
    desc: 'Every companion is ID-checked & selfie-verified before going live.',
  },
  {
    icon: '🔒',
    title: 'Discreet Service',
    desc: 'No stored chats, no caller-ID leaks—100 % confidentiality guaranteed.',
  },
  {
    icon: '⏰',
    title: 'Flexible Booking',
    desc: 'Same-day, late-night, short-notice or extended dates—your schedule, your rules.',
  },
  {
    icon: '🤝',
    title: 'Professional Behavior',
    desc: 'Punctual, well-spoken & dressed for the occasion—expect corporate-level etiquette.',
  },
  {
    icon: '💳',
    title: 'No Hidden Charges',
    desc: 'Quoted price = final price. Tips optional, surprises zero.',
  },
  {
    icon: '🛡️',
    title: 'Mutual Safety',
    desc: 'Two-way ID masking keeps both client & companion identities secure.',
  },
];
const areas = [
  { slug: 'aerocity', name: 'Aerocity' },
  { slug: 'connaught-place', name: 'Connaught Place' },
  { slug: 'south-delhi', name: 'South Delhi' },
  { slug: 'noida', name: 'Noida' },
  { slug: 'gurgaon', name: 'Gurgaon' },
];
const safeguards = [
  {
    icon: '🔐',
    title: 'Confidential Booking',
    desc: 'No real names, no saved cards—just nicknames and crypto-friendly UPI.',
  },
  {
    icon: '📱',
    title: 'Secure Communication',
    desc: 'End-to-end encrypted WhatsApp & VoIP; chats auto-delete after 24 h.',
  },
  {
    icon: '🚫',
    title: 'Zero Data Sharing',
    desc: 'We don’t sell, log or leak any info to third parties or advertisers.',
  },
  {
    icon: '🤝',
    title: 'Respectful Experience',
    desc: 'Mutual-consent guidelines ensure both client & companion feel safe.',
  },
];
const categories = [
  {
    slug: 'high-profile-escorts-in-delhi',
    title: 'High Profile Escorts in Delhi',
    desc: 'Elite, well-travelled companions for luxury events & 5-star evenings.',
    img: '/images/eyeofgigi.webp',
  },
  {
    slug: 'vip-escorts',
    title: 'VIP Escorts',
    desc: 'Red-carpet charmers experienced with diplomats & celebrities.',
    img: '/images/download27.webp',
  },
  {
    slug: 'college-escorts',
    title: 'College Escorts',
    desc: 'Young, energetic students bringing playful vibes to your date.',
    img: '/images/HD Videos.webp',
  },
  {
    slug: 'independent-escorts',
    title: 'Independent Escorts',
    desc: 'Direct, flexible & verified—no agency fees, just real chemistry.',
    img: '/images/Messaging Women with.webp',
  },
];
const faqs = [
  {
    q: 'Is this category suitable for first-time clients?',
    a: 'Absolutely. Independent escorts communicate directly, so you can ask questions, set boundaries and move at your own pace without agency pressure.',
  },
  {
    q: 'Same-day booking possible?',
    a: 'Yes. Most independents keep a few slots open each day; WhatsApp your preferred time and get confirmation within minutes.',
  },
  {
    q: 'Hotel visits allowed?',
    a: 'Definitely. They meet at 3-5-star hotels, serviced apartments or your home—just share the location pin once confirmed.',
  },
  {
    q: 'Are profiles genuine?',
    a: 'Every profile is selfie-verified and cross-checked with government ID; blurred face photos protect privacy while proving authenticity.',
  },
  {
    q: 'How is payment handled?',
    a: 'Transparent cash or UPI at meeting start—no hidden extras, no last-minute upsells.',
  },
  {
    q: 'Can I extend the time during the meeting?',
    a: 'If her schedule allows, simply pay the additional hourly rate agreed on chat.',
  },
  {
    q: 'Is my personal information safe?',
    a: '100%. Chats auto-delete after 24h and no data is stored or shared with third parties.',
  },
  {
    q: 'Do independents travel outside Delhi?',
    a: 'Most do—NCR (Gurgaon, Noida, Faridabad) is free; longer out-station trips require travel expenses.',
  },
];
const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
    <section
  className="relative text-white"
  style={{
    backgroundImage: `
      url('/images/SexyWomen.webp')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5">
      Independent Escorts in Delhi
    </h1>

    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
      Discover verified Independent Escorts in Delhi offering premium
      companionship with complete privacy and discretion. Whether you need a
      charming date for an event or a relaxed evening behind closed doors,
      our hand-picked companions guarantee a safe, memorable experience
      tailored to your preferences.
    </p>

    <a
      href="https://wa.me/91XXXXXXXXXX"
      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg transition transform hover:scale-105"
    >
      <span className="text-2xl">💬</span>
      WhatsApp / Call Now
    </a>
  </div>
</section>

    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          What Are Independent Escorts in Delhi?
        </h2>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p>
            Independent escorts are self-employed companions who manage their own schedules, profiles, and client interactions—no agency middle-man. This direct line creates a more personal, authentic, and flexible experience compared to traditional agency models. You communicate straight with the companion, discuss preferences openly, and tailor every detail to your mood and calendar.
          </p>

          <p>
            Ideal for discerning gentlemen, solo travellers, busy executives, and curious first-timers who value discretion, intelligent conversation, and genuine chemistry. Whether you need a plus-one for a luxury dinner at ITC Maurya, a fun guide to explore Delhi’s nightlife, or a quiet evening cuddled with wine and Netflix, independent escorts adapt effortlessly—dressing to the nines or keeping it cozy in joggers.
          </p>

          <p>
            Expect a vibe that’s equal parts friendly girlfriend and polished professional: punctual, well-spoken, and dressed impeccably for the occasion. Rates are transparent, services are clearly discussed, and boundaries are respected, ensuring a stress-free, upscale encounter that feels organic, not transactional. In short, you get premium companionship minus the red tape—just pure, uncomplicated connection.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-slate-50 dark:bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 text-center">
          Available Independent Escorts
        </h2>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <select
            className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>

          <select
            className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option>South Delhi</option>
            <option>Connaught Place</option>
            <option>Aerocity</option>
            <option>Gurgaon</option>
            <option>Dwarka</option>
            <option>Noida</option>
          </select>

          <select
            className="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
            value={available}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="yes">Available Now</option>
          </select>

          <button
            onClick={applyFilters}
            className="px-6 py-2 rounded-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold"
          >
            Apply
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.slice(0, page * 6).map((e) => (
            <div
              key={e.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              <div className="relative h-72">
                <Image
                  src={e.img}
                  alt={e.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
                {e.available && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-bold">
                    Available Now
                  </span>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {e.name}, <span className="text-sm font-normal text-slate-500">({e.age})</span>
                  </h3>
                  <div className="flex items-center gap-1 text-amber-500 text-sm">
                    <span>⭐</span>
                    <span className="text-slate-700 dark:text-slate-300">{e.rating}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{e.location}</p>

                <div className="flex items-center justify-between">
                  <p className="text-fuchsia-600 dark:text-fuchsia-400 font-extrabold text-lg">
                    ₹{e.price.toLocaleString()}
                  </p>
                  <Link
                    href={`https://wa.me/91XXXXXXXXXX?text=Hi, interested in ${e.name}`}
                    className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-black font-bold text-sm"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {page * 6 < list.length && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-12">
          Why Choose Independent Escorts?
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="group flex items-start gap-4 bg-white dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-3xl group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {p.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-50 dark:bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-2">
          Available Across Delhi NCR
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-300 mb-10">
          Click any area to see Independent Escorts ready to meet there.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/independent-escorts-in-${a.slug}`}
              className="px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold shadow hover:shadow-lg hover:scale-105 transition"
            >
              Independent Escorts in {a.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
     <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Who Should Pick Independent Escorts?
        </h2>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none text-left">
          <p>
            <strong>Business travellers</strong> landing at 2 a.m. who need a jet-lag cure and a dinner-plus-company without the small-talk fatigue of dating apps.
          </p>

          <p>
            <strong>Solo visitors</strong> exploring Delhi for the first time and wanting a local guide who doubles as arm-candy at India Gate or Cyber-Hub after-dark.
          </p>

          <p>
            <strong>Regular clients</strong> tired of agency mark-ups and craving direct communication—same-day reschedules, favourite playlists, inside jokes.
          </p>

          <p>
            <strong>Event companionship seekers</strong> attending weddings, conferences or rooftop launches and needing a polished plus-one who can glide from English to Hindi, sip champagne and handle selfies without tagging locations.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-slate-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Safety, Privacy & Discretion
        </h2>
        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
          Escort niche me ye section mandatory hota hai. Your peace of mind is
          built into every step.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {safeguards.map((s) => (
            <div
              key={s.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-500/10 text-green-300 border border-green-500/30 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            100 % Discretion Guaranteed
          </span>
        </div>
      </div>
    </section>
    <section className="bg-slate-50 dark:bg-slate-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-10">
          Explore More Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5 h-64 flex flex-col justify-end text-white">
                <h3 className="text-lg font-bold mb-1">{c.title}</h3>
                <p className="text-sm opacity-90">{c.desc}</p>
              </div>
            </Link>
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
    <section className="bg-gradient-to-br from-fuchsia-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ready to Meet Your Perfect Companion?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          24/7 live support • Fast response • Same-day bookings • Zero hidden fees
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg transition transform hover:scale-105"
          >
            <span className="text-2xl">💬</span>
            WhatsApp Now
          </Link>

          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-fuchsia-700 font-extrabold text-lg hover:bg-opacity-90 transition transform hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            Call Now
          </a>
        </div>

        <p className="text-sm text-white/80 mt-6">
          Discreet, secure, and confidential — your privacy is always protected.
        </p>
      </div>
    </section>
    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 dark:text-white mb-10">
          Independent Escorts – FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 py-4 text-left flex items-center justify-between font-semibold text-slate-900 dark:text-white"
              >
                {faq.q}
                <span
                  className={`ml-4 text-fuchsia-600 dark:text-fuchsia-400 transition-transform ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 pb-4 text-slate-600 dark:text-slate-300 text-sm">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
    
    
  );
}