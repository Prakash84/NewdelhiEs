"use client";
import { useState } from "react";
import { FaCheck, FaStar, FaCrown, FaPlane, FaGraduationCap, FaGlobeAsia, FaSpa } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Pricpage() {
  const plans = [
    {
      name: "Hourly Companion Plan",
      duration: "1 – 2 Hours",
      price: "₹ 8,000 onwards",
      desc: "Quick, discreet meet-up at your hotel or our place.",
      icon: "⏳",
    },
    {
      name: "Evening Companion Plan",
      duration: "4 – 5 Hours",
      price: "₹ 15,000 onwards",
      desc: "Dinner date + private time; perfect for social events.",
      icon: "🌆",
    },
    {
      name: "Overnight Companion Plan",
      duration: "8 – 10 Hours",
      price: "₹ 25,000 onwards",
      desc: "Full-night company; relax without any rush.",
      icon: "🌙",
    },
  ];
  const categories = [
    {
      title: "Independent Companions",
      price: "₹ 8,000 – ₹ 15,000",
      level: "Experienced & verified individuals",
      clients: "Budget-conscious, quick meets, first-timers",
      badge: "Popular",
      color: "bg-blue-50 border-blue-200 text-blue-900",
    },
    {
      title: "Premium / VIP Companions",
      price: "₹ 15,000 – ₹ 30,000",
      level: "Professional models & pageant finalists",
      clients: "Business travellers, dinner dates, longer outings",
      badge: "Best Value",
      color: "bg-purple-50 border-purple-200 text-purple-900",
    },
    {
      title: "Elite Companions",
      price: "₹ 30,000 – ₹ 60,000+",
      level: "Celebs, runway models, air-hostesses",
      clients: "Luxury seekers, VIP events, overnight stays",
      badge: "Luxury",
      color: "bg-amber-50 border-amber-200 text-amber-900",
    },
    {
      title: "Couple-Friendly Companions",
      price: "₹ 12,000 – ₹ 25,000",
      level: "Open-minded, experienced with couples",
      clients: "Couples exploring fantasies, safe environment",
      badge: "Discreet",
      color: "bg-rose-50 border-rose-200 text-rose-900",
    },
  ];
  const zones = [
    {
      area: "Central Delhi",
      coverage: "Connaught Place, Karol Bagh, Paharganj",
      impact: "No extra travel fee",
      color: "bg-green-50 border-green-200 text-green-900",
    },
    {
      area: "South Delhi",
      coverage: "Hauz Khas, Saket, Green Park, Defence Colony",
      impact: "₹ 500 – ₹ 1,000 travel",
      color: "bg-blue-50 border-blue-200 text-blue-900",
    },
    {
      area: "Aerocity & Mahipalpur",
      coverage: "All 5-star hotels near IGI Airport",
      impact: "₹ 0 – ₹ 500 travel",
      color: "bg-sky-50 border-sky-200 text-sky-900",
    },
    {
      area: "Noida",
      coverage: "Sector 18, Sector 62, Greater Noida",
      impact: "₹ 1,000 – ₹ 1,500 travel",
      color: "bg-orange-50 border-orange-200 text-orange-900",
    },
    {
      area: "Gurgaon",
      coverage: "MG Road, Cyber Hub, Golf Course Road",
      impact: "₹ 1,000 – ₹ 2,000 travel",
      color: "bg-purple-50 border-purple-200 text-purple-900",
    },
  ];
   const inclusions = [
    { icon: "✅", text: "100 % verified companion — real photos & details" },
    { icon: "🤝", text: "Professional behaviour & punctual arrival" },
    { icon: "🤫", text: "Complete discreet service — no calls after meet" },
    { icon: "💬", text: "Friendly interaction & respect for your boundaries" },
    { icon: "⏰", text: "Full time commitment as discussed (no early exit)" },
  ];
   const notIncluded = [
    { icon: "🚫", text: "No hidden charges — everything quoted upfront" },
    { icon: "🚫", text: "No forced upgrades — you choose only what you want" },
    { icon: "🚫", text: "No last-minute surprises — rate locked before meet" },
    { icon: "🚫", text: "No advance payment — pay only when companion arrives" },
    { icon: "🚫", text: "No personal data sharing — complete privacy always" },
  ];
  const faqs = [
    {
      q: "Are prices negotiable?",
      a: "We offer the best possible first quote. Small adjustments possible on longer bookings (4 hrs+) or repeat clients—ask politely and we’ll try to match your budget.",
    },
    {
      q: "Is advance payment required?",
      a: "Zero advance. You pay only when the companion arrives and you are satisfied. No wallet links, no QR codes beforehand—ever.",
    },
    {
      q: "Does price vary by location?",
      a: "Yes. Central & south Delhi incur little or no travel fee; Noida & Gurgaon add ₹ 1-2 k depending on distance. Exact amount quoted before you confirm.",
    },
    {
      q: "Are there any hidden charges?",
      a: "None. Hotel cost (if outcall) and travel (if applicable) are shown upfront. No surprise ‘service tax’, ‘tip’, or ‘agent fee’ later.",
    },
    {
      q: "How do I confirm final pricing?",
      a: "Send your area, preferred time & duration on WhatsApp. We reply with companion options and locked total price. Reply ‘Yes’ to confirm—done.",
    },
  ];
  {/* pricing */}
        const [selectedDuration, setSelectedDuration] = useState('session'); // 'session', 'two', 'night'
      
      const pricingPlans = [
      {
        id: 'spa',
        title: 'Spa Staff',
        icon: <FaSpa className="text-pink-500" />,
        description: 'Professional spa therapists for ultimate relaxation',
        color: 'from-pink-500 to-rose-500',
        pricing: {
          session: '5k',
          two: '10k',
          night: '15k'
        },
        features: [ 'Delhi Local Girls', 'Complete satisfaction', 'Girlfriend Experience', 'Full Body To Body Nuru massage - Nude']
      },
      {
        id: 'college',
        title: 'College Girls',
        icon: <FaGraduationCap className="text-blue-500" />,
        description: 'Energetic and vibrant companions',
        color: 'from-blue-500 to-indigo-600',
        pricing: {
          session: '10k',
          two: '20k',
          night: '30k'
        },
        features: ['5 Star Hotel', 'Girlfriend Experience', 'Deep French Kiss', 'Blow Job (BJ)']
      },
      {
        id: 'airhostess',
        title: 'Airhostess',
        icon: <FaPlane className="text-teal-500" />,
        description: 'Professional and sophisticated companions',
        color: 'from-teal-500 to-emerald-600',
        pricing: {
          session: '15k',
          two: '30k',
          night: '45k'
        },
        features: ['5 Star Hotel', 'High Profile Airhostess', 'Girlfriend Experience', 'Deep French Kiss']
      },
      {
        id: 'foreigner',
        title: 'Foreigner',
        icon: <FaGlobeAsia className="text-amber-500" />,
        description: 'International companions for cultural exchange',
        color: 'from-amber-500 to-orange-500',
        pricing: {
          session: '20k',
          two: '40k',
          night: '60k'
        },
        features: ['5 Star Hotel', 'Foreigner Staff', 'Girlfriend Experience', 'Deep French Kiss']
      },
      {
        id: 'celebrity',
        title: 'Celebrity',
        icon: <FaCrown className="text-purple-500" />,
        description: 'Exclusive high-profile companions',
        color: 'from-purple-600 to-fuchsia-600',
        pricing: {
          session: '30k',
          two: '60k',
          night: '90k'
        },
        features: ['5 Star Hotel', 'Insta Model', 'Girlfriend Experience', 'Celebrity Profile']
      }
    ];
        {/* end pricing */}


  return (
    <>
    <section
  className="relative text-white"
  style={{
    backgroundImage: "url('/images/eyeofgigi.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative container mx-auto px-6 py-20 text-center max-w-3xl">

    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
      Pricing for Escort Services in Delhi
    </h1>

    <p className="text-lg md:text-xl text-zinc-300 mb-6">
      Transparent pricing, no hidden charges, discreet service
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

    <section className="bg-gradient-to-r from-amber-50 via-orange-50 to-yellow-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Top headline + icon */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white rounded-full p-4 shadow-lg mb-4">
            <span className="text-4xl">🌟</span>
          </span>
          <h2 className="text-4xl font-extrabold text-zinc-900">
            Why Our Moments Feel Different
          </h2>
          <p className="text-zinc-600 mt-2">Luxury, laughter and zero logistics.</p>
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
              Step into a world where every glance, giggle and gentle touch is curated for your mood. Our companions are more than beautiful—they’re cultured conversationalists who can discuss Bordeaux vintages one minute and dance to lo-fi beats the next. Forget awkward small talk; we match you with someone who actually gets your jokes and remembers your favourite whisky.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-5">
              From the moment you confirm, our concierge quietly handles restaurant reservations, room ambience and even the Spotify playlist if you ask. No paperwork, no waiting in lobbies, no side-eye from hotel staff—just seamless entry into an evening that feels like a secret society built for two. And because every rupee is declared beforehand, the only surprise you’ll get is how quickly she learns the way you like your coffee the next morning.
            </p>
            <p className="text-zinc-700 leading-relaxed mb-6">
              We call it the “invisible service” — you feel every luxury, yet never see the gears turning. That’s why 82 % of our guests come back. One taste of effortless chemistry and you’ll understand why ordinary feels too small a word.
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

    
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-6 max-w-4xl">

        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-4">
          Transparent Pricing — No Surprises
        </h2>
        <p className="text-center text-zinc-600 mb-10">
          Every quote is shared upfront; you approve before you pay.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-zinc-800">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-pink-600 text-2xl mb-3">⏱️</div>
            <h3 className="font-semibold mb-2">Duration</h3>
            <p className="text-sm text-zinc-600">
              1 Hr, 2 Hr, Overnight or Weekend — choose only what you need.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-pink-600 text-2xl mb-3">👤</div>
            <h3 className="font-semibold mb-2">Companion Type</h3>
            <p className="text-sm text-zinc-600">
              College, Model, Air-hostess, etc. Rates shared for each profile.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-pink-600 text-2xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-zinc-600">
              Incall, outcall or 5-star — travel & room cost shown separately.
            </p>
          </div>
        </div>

        {/* Trust points */}
        <ul className="mt-10 space-y-3 text-zinc-700 max-w-2xl mx-auto">
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>No forced commitments — you can refuse after hearing the quote.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Clear communication on phone/WhatsApp before any booking is locked.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-500 mt-1">✓</span>
            <span>Payment only when you meet the companion — no advance scams.</span>
          </li>
        </ul>

      </div>
    </section>
    {/* pricing */}
         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
              >
                Premium Companionship Services
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select from our exclusive range of premium companionship experiences tailored to your preferences
              </p>
            </div>
    
            {/* Duration Selector */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12 p-4 bg-white rounded-2xl shadow-lg max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {[
                { id: 'session', label: 'One Session' },
                { id: 'two', label: 'Two Sessions' },
                { id: 'night', label: 'Full Night' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedDuration(option.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                    selectedDuration === option.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                  {selectedDuration === option.id && (
                    <FaStar className="ml-2 text-yellow-300 animate-pulse" />
                  )}
                </button>
              ))}
            </motion.div>
    
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 group ${
                    plan.id === 'celebrity' ? 'ring-2 ring-purple-500 ring-offset-4' : ''
                  }`}
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">{plan.icon}</div>
                        <h3 className="text-xl font-bold">{plan.title}</h3>
                      </div>
                      {plan.id === 'celebrity' && (
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center">
                          <FaStar className="mr-1" /> Premium
                        </div>
                      )}
                    </div>
                    <p className="mt-2 text-sm opacity-90">{plan.description}</p>
                  </div>
                  
                  {/* Pricing */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                        {/* ₹{plan.pricing[selectedDuration]} */}
                      </div>
                      <div className="text-gray-500 mt-1">
                        {selectedDuration === 'session' && 'Per 2-hour session'}
                        {selectedDuration === 'two' && 'For two sessions'}
                        {selectedDuration === 'night' && 'Full night experience'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`mt-6 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.id === 'celebrity' 
                        ? 'bg-gradient-to-r from-purple-700 to-pink-700 text-white hover:from-purple-800 hover:to-pink-800' 
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300'
                    }`}>
                      Select Package
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
    
            {/* Additional Info */}
            <motion.div 
              className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Premium Experience Guarantee</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Discreet and professional service</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Verified and background-checked companions</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Flexible scheduling options</li>
                      <li className="flex items-center"><FaCheck className="text-green-400 mr-2" /> Custom experiences available upon request</li>
                    </ul>
                  </div>
                  <div className="bg-gray-700/50 rounded-xl p-6 min-w-[300px]">
                    <h4 className="font-bold text-lg mb-3">Why choose us?</h4>
                    <div className="flex items-center mb-4">
                      <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">98%</div>
                      <div className="ml-3 text-gray-300">Client Satisfaction Rate</div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">24/7</div>
                      <div className="ml-3 text-gray-300">Support Availability</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* end pricing */} 
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          Choose Your Plan
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className="border border-zinc-200 rounded-2xl p-6 flex flex-col hover:shadow-xl transition"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                {p.name}
              </h3>
              <p className="text-sm text-zinc-500 mb-1">{p.duration}</p>
              <p className="text-2xl font-bold text-pink-600 mb-3">
                {p.price}
              </p>
              <p className="text-zinc-600 text-sm mb-6 flex-1">{p.desc}</p>
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to check availability for the *{{p.name}}*."
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white text-center py-3 rounded-full font-medium transition"
              >
                Check Availability
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-400 mt-8">
          Final quote depends on companion profile & location; no hidden charges.
        </p>
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
          <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">
            Experience Delhi Like Never Before
          </h2>
          <p className="text-zinc-700 leading-relaxed mb-6">
            Whether you are in town for business or leisure, our premium
            companions turn ordinary moments into unforgettable memories. Each
            profile is hand-picked, fully verified and trained to blend into any
            social setting—be it a five-star gala, a quiet dinner, or a private
            evening behind closed doors. You set the pace; we deliver the
            passion, discretion and warmth that make every minute count.
          </p>
          <p className="text-zinc-700 leading-relaxed mb-6">
            From the vibrant clubs of Connaught Place to the luxury suites of
            Aerocity, your companion arrives impeccably dressed, conversation-ready
            and eager to explore the city—or simply explore you. Transparent
            pricing, zero advance, and 24/7 live support mean you can focus on
            pleasure while we handle the details.
          </p>

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
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          Pick the Companion That Fits You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`relative border rounded-2xl p-5 ${cat.color}`}
            >
              {cat.badge && (
                <span className="absolute -top-3 left-4 bg-zinc-900 text-white text-xs px-3 py-1 rounded-full">
                  {cat.badge}
                </span>
              )}
              <h3 className="font-semibold text-lg mb-2">{cat.title}</h3>
              <p className="text-sm font-bold mb-3">{cat.price}</p>
              <p className="text-xs mb-2">
                <span className="font-medium">Experience:</span> {cat.level}
              </p>
              <p className="text-xs">
                <span className="font-medium">Ideal for:</span> {cat.clients}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Ranges shown are for 2-hour meets; final quote shared after profile selection.
        </p>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          Location-Based Pricing (Delhi NCR)
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((z) => (
            <div
              key={z.area}
              className={`border rounded-2xl p-5 ${z.color}`}
            >
              <h3 className="font-semibold text-lg mb-2">{z.area}</h3>
              <p className="text-xs text-zinc-600 mb-3">{z.coverage}</p>
              <p className="text-sm font-medium">
                Travel surcharge: <span className="font-bold">{z.impact}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-zinc-100 rounded-2xl p-6 text-center text-zinc-700">
          <p className="text-sm">
            <span className="font-semibold">Tip:</span> Choosing incall near
            our base location saves travel time & money. Exact travel fee
            quoted before booking confirmation.
          </p>
        </div>
      </div>
    </section>
     <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          What’s Included in the Price
        </h2>

        <ul className="space-y-4">
          {inclusions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-zinc-800">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <span>💬</span> Ask Anything on WhatsApp
          </a>
        </div>
      </div>
    </section>
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          What’s NOT Included (We Keep It Clear)
        </h2>

        <ul className="space-y-4">
          {notIncluded.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <span className="text-2xl text-red-500">{item.icon}</span>
              <span className="text-zinc-800">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <span>📞</span> Call Now to Confirm Details
          </a>
        </div>
      </div>
    </section>
     <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-6 max-w-4xl text-zinc-800">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          Booking & Payment — Simple & Safe
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* How to Book */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-600">📅</span> How to Book
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Call or WhatsApp your preferred time & location.</li>
              <li>Choose companion category & duration.</li>
              <li>Receive final quote with travel (if any).</li>
              <li>Confirm by replying “Yes” — no advance needed.</li>
              <li>Share hotel/address; companion leaves in 30-45 min.</li>
            </ol>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-green-600">💳</span> Payment Methods
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><span>✅</span> Cash on arrival (most preferred)</li>
              <li className="flex items-center gap-2"><span>✅</span> UPI (PayTM, GPay, PhonePe) after meet starts</li>
              <li className="flex items-center gap-2"><span>❌</span> No advance, no wallet links, no crypto</li>
            </ul>
          </div>

          {/* Confirmation & Support */}
          <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="text-blue-600">✉️</span> Confirmation & Support
            </h3>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <li className="flex items-center gap-2"><span>📲</span> Instant booking confirmation on WhatsApp</li>
              <li className="flex items-center gap-2"><span>📍</span> Live location shared when companion departs</li>
              <li className="flex items-center gap-2"><span>🕒</span> Support available 10 AM – 2 AM, 7 days</li>
              <li className="flex items-center gap-2"><span>🔄</span> Free reschedule 2 hrs before meet time</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to book. Please share available options."
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <span>💬</span> Start Booking on WhatsApp
          </a>
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
     <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Ready to Book Today?
        </h2>
        <p className="text-lg opacity-90 mb-8">
          Speak with our support team and get exact pricing instantly — no
          waiting, no confusion.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+91XXXXXXXXXX"
            className="flex items-center gap-2 bg-white text-zinc-900 px-6 py-3 rounded-full font-bold hover:opacity-90 transition"
          >
            <span>📞</span> Call Now
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi, I want to check availability and get exact pricing."
            className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition"
          >
            <span>💬</span> WhatsApp Chat
          </a>
        </div>

        <p className="text-xs opacity-80 mt-6">
          Available 10 AM – 2 AM | 7 days a week | Discreet & confidential
        </p>
      </div>
    </section>
    <section className="bg-zinc-50 py-16">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-10">
          FAQ – Pricing
        </h2>

        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <details
              key={idx}
              className="bg-white rounded-2xl shadow-sm px-6 py-4 open:pb-6"
            >
              <summary className="cursor-pointer font-semibold text-zinc-900 list-none flex justify-between items-center">
                {item.q}
                <span className="text-pink-600 text-xl">+</span>
              </summary>
              <p className="text-zinc-600 text-sm mt-3">{item.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            <span>💬</span> Ask More on WhatsApp
          </a>
        </div>
      </div>
    </section>


    </>
  );
}
