// app/HeroAboveFold.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MessageCircle,
  ShieldCheck,
  CreditCard,
  MapPin,
  Star,
} from "lucide-react";


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
const services1= [
  {
    title: "Airhostess Escorts",
    description:
      "Book Airhostess Escorts through delhi escorts for a first-class experience without leaving the ground. These slim, multi-lingual cabin-crew hotties glide into Mahipalpur, Aerocity or CP hotels within 25 minutes, often in full uniform and heels. Our escort service in delhi pre-loads hotel security passes, so your delhi girl sails past reception. Enjoy champagne service, safety-demo role-play and mile-high fantasies at ground-level prices starting ₹9 k/hour. Search “escort service in delhi” with the keyword Airhostess Escorts and land the most travelled service girl in the capital.",
    image: "/images/IA BY @MUNNDLY (1).webp", // Add your image path here
  },
  {
    title: "College Girls Escorts",
    description:
      "College Girls Escorts on delhi escorts are 19-23 year-old DU, JNU and IP University students who balance tuition with thrilling GFE. Each delhi girl shows real college ID in private chat—no bait-and-switch—making our escort service in delhi the top hit for young energy. Rates start at ₹7 k for two hours, include cab and condoms, and can be extended between lectures. Type “escort service in delhi” plus College Girls Escorts and meet a curious service girl who swaps textbooks for pillow-talk faster than you can Google.",
    image: "/images/download (31).webp", // Add your image path here
  },
  {
    title: "Hign Profile Escorts",
    description:
      "High Profile Escorts listed on delhi escorts cover Page-3 models, Instagram influencers and luxury-travel companions. When you search “escort service in delhi” for five-star events, these delhi girls arrive with designer gowns, NDAs and VIP etiquette. South Delhi, Gurgaon and Aerocity suites are pre-cleared; paparazzi-proof entries keep your image intact. Rates begin at ₹20 k for two hours, include security driver and encrypted chat. Book High Profile Escorts and let our escort service in delhi turn corporate galas into private after-parties.",
    image: "/images/imagee.webp", // Add your image path here
  },
  {
    title: "Housewife Escorts",
    description:
      "Housewife Escorts on delhi escorts offer mature, busty MILFs (28-38) who know every married-man trick. Search “escort service in delhi” for afternoon slots in Dwarka, Noida or South Delhi and enjoy oily back-rubs, home-cooked stories and slow, sensual love-making. Rates start at ₹8 k for 90 minutes; overnight discounts available. Each delhi girl is unsatisfied, discreet and verified, making our escort service in delhi the safest address for experienced pleasure. Type Housewife Escorts + your location and feel the difference maturity makes.",
    image: "/images/housewife.webp", // Add your image path here
  },
  {
    title: "Independent Escorts",
    description:
      "Independent Escorts on delhi escorts cut the middle-man—chat directly with freelancers who set their own rates and rules. Search “escort service in delhi” and choose from 200+ verified profiles: college teens, Russian models, busty MILFs. Negotiate time, music, costume and extension without agency delays. Our escort service in delhi still verifies ID, health and hotel passes, so you enjoy agency safety with freelancer flexibility. Type Independent Escorts + Noida/Gurgaon and lock one-to-one chemistry at unbeatable prices.",
    image: "/images/image2.webp", // Add your image path here
  },
  {
    title: "Model Escorts",
    description:
      "Model Escorts listed on delhi escorts bring Vogue-height beauty to yacht parties and car launches. Search “escort service in delhi” for runway faces with portfolio shots and you’ll find cat-walk queens ready for five-star after-parties. Rates start at ₹15 k for two hours; overnight includes private driver and Instagram-story permission (face hidden). Our escort service in delhi pre-clears South Delhi, Gurgaon and Aerocity hotels, so your model escort girl glides in like a fashion week finale. Book Model Escorts and let delhi escorts dress your night in haute couture pleasure.",
    image: "/images/I Held Her Tight.webp", // Add your image path here
  },
  {
    title: "Party Girl Escorts",
    description:
      "Party Girl Escorts on delhi escorts know every DJ, club and after-hours lounge in Connaught Place and Cyber-Hub. Search “escort service in delhi” for bottle-service beauties who twerk on tables and grind in back-seats. Rates start at ₹8 k for club-hopping plus two hours private fun; includes entry, shots and LED light strip for hotel after-party. Our escort service in delhi provides GPS-tracked drivers so your party girl arrives glitter-ready. Type Party Girl Escorts + South Delhi and turn the city into your private dance-floor.",
    image: "/images/Evie Lee Mikomin.webp", // Add your image path here
  },
  {
    title: "Russian Escorts",
    description:
      "Russian Escorts on delhi escorts deliver Moscow glamour to Mahipalpur, Gurgaon and Aerocity within 30 minutes. Search “escort service in delhi” for blonde, accent-ready delhi girls who land with tourist visas and hotel security passes. Rates start at ₹10 k/hour; overnight includes caviar snack and bilingual dirty talk. Live selfie + immigration stamp shown on arrival—zero Photoshop, zero fake profiles. Our escort service in delhi makes Russian Escorts the fastest import in the capital; type the keyword and welcome real Slavic heat tonight.",
    image: "/images/download (7).webp", // Add your image path here
  },
  {
    title: "Strip Escorts",
    description:
      "Strip Escorts listed on delhi escorts turn your suite into a private showroom. Search “escort service in delhi” for one-on-one lap-dances complete with LED lights, Bluetooth speaker and three costume changes (nurse, police, school). Rates start at ₹8 k for a 15-minute strip plus full hour of whatever follows. Our escort service in delhi provides portable poles and feather boas, so Dwarka, Noida or South Delhi rooms feel like premium clubs. Type Strip Escorts + your hotel name and let the strip escort girl peel away your stress layer by layer.",
    image: "/images/download (12).webp", // Add your image path here
  },
  {
    title: "VIP Escorts",
    description:
      "VIP Escorts on delhi escorts supply red-carpet stunners for corporate galas, yacht weddings and private jet layovers. Search “escort service in delhi” at VIP tier and find Bollywood-level beauties who sign NDAs and travel with body-guard drivers. Rates start at ₹25 k/hour; includes encrypted chat, champagne on ice and backstage entry passes. Our escort service in delhi pre-clears Oberoi, Roseate, Taj and 40 more five-star flags, so your VIP escort girl glides past security like she owns the lobby. Book VIP Escorts and let delhi escorts roll out the velvet rope for your pleasure.",
    image: "/images/download (13).webp", // Add your image path here
  },
  // Add more categories as needed
];
const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
    <section
  className="relative text-white mb-10"
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
       High-Profile Independent Escorts in Delhi – Verified College Girls
    </h1>

    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
      Independent escorts in Delhi are self-managed companions who list directly on DelhiEscorts.in without an agency chain. You chat with the independent girl in Delhi, agree on time, place and extras, and pay only her—no hidden commission. From DU university girls to Russian escorts in Delhi, every profile is selfie-verified in 60 seconds so the face you fancy is the face that arrives.
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

<div className="max-w-6xl mx-auto space-y-6 mt20">
          {/* Header */}
        <div className="text-center mb-10">
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
            Russian, College, Airhostess, High-Profile & Independent Escorts in Delhi Delivered in 30 Minutes
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg">
           Browse Delhi escorts and pick from one verified menu: Slavic blondes, DU campus girls, cabin-crew stunners, Page-3 celebs and curvy MILFs. Each escort services in delhi profile is selfie-checked before dispatch, so the delhi girl you choose is the one who taps your door within thirty minutes across Delhi, Noida, Gurgaon, Mahipalpur or South Delhi. Prices start at ₹7 k for college cuties, ₹10 k for Russian escort, ₹20 k for high-profile elegance; all include discreet cab, hotel pass and extend-by-the-hour flexibility. Search “escort services in delhi” with any category keyword and book the capital’s fastest fantasy delivery now.
          </p>
        </div>
        
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
 <section className="bg-black text-gray-300 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Why Book Independent Escorts Service in Delhi via DelhiEscorts.in?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            A smarter, safer, and more transparent way to connect with verified
            independent escorts across Delhi NCR.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Price */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Price Advantage
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Save up to <span className="text-white">20–30%</span> by booking
              directly with independent escorts. No agencies, no commissions,
              and no hidden charges — you pay only for what you choose.
            </p>
          </div>

          {/* Speed */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Faster Booking
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Direct WhatsApp communication ensures quick responses and smooth
              coordination, with availability across Delhi NCR in as little as
              <span className="text-white"> 30 minutes</span>.
            </p>
          </div>

          {/* Choice */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Wide Choice
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Choose from <span className="text-white">200+ verified freelancers</span>,
              including college companions, mature profiles, public-figure
              lookalikes, and international escorts available in Delhi.
            </p>
          </div>

          {/* Safety */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-semibold text-white mb-2">
              Safety & Verification
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Hotel security access is pre-approved where required, and health
              reports can be shared on request — ensuring peace of mind for all
              parties involved.
            </p>
          </div>

          {/* Privacy */}
          <div className="bg-[#151515] p-8 rounded-2xl border border-white/5 md:col-span-2">
            <h3 className="text-xl font-semibold text-white mb-2">
              Complete Privacy
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your conversations remain confidential with encrypted chats that
              auto-delete within 24 hours. Payments are discreetly labeled as
              “consultancy” to maintain full privacy.
            </p>
          </div>

        </div>

      </div>
    </section>
     <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm uppercase tracking-wide bg-gray-100 text-gray-700 rounded-full">
            Simple • Fast • Private
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
            How to Book Independent Call Girl in Delhi
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg">
            Booking an independent call girl Delhi through DelhiEscorts.in is faster than ordering coffee—no forms, no phone calls, no middle-man mark-up. Follow these four steps and meet your chosen Delhi girl within thirty minutes, anywhere in the capital or NCR.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-px bg-gray-200" />

          {/* STEP 1 */}
          <div className="flex gap-8 mb-16 relative">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center shadow-md">
                <span className="text-xs opacity-70">STEP</span>
                <span className="text-lg font-semibold">1</span>
              </div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                <MessageCircle size={18} />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pick & Ping
              </h3>
              <p>Open DelhiEscorts.in on mobile, tap the floating WhatsApp icon and send three lines only:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Location pin (hotel name or home area)</li>
                <li>Preferred time slot</li>
                <li>Type of companion (“DU independent call girl Delhi 2 hrs” or “Russian escort in Delhi overnight”)</li>
              </ul>
              <p>Our AI bot replies instantly with a live selfie holding today’s newspaper—proof she is awake, dressed and near you.</p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="flex gap-8 mb-16 relative">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center shadow-md">
                <span className="text-xs opacity-70">STEP</span>
                <span className="text-lg font-semibold">2</span>
              </div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                <ShieldCheck size={18} />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Verify & Vivify
              </h3>
              <p>Demand a 10-second video if you want extra surety; we send it within sixty seconds. You can ask for specific outfits—college kurti, air-hostess uniform, red lingerie—so fantasy meets reality at the door. Price flashes on the same screen: ₹7 k for two hours with a Delhi university girl, ₹10 k with a Russian independent escort, ₹8 k with a busty housewife escort in Delhi—all-inclusive, no hidden cab fee.</p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="flex gap-8 mb-16 relative">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center shadow-md">
                <span className="text-xs opacity-70">STEP</span>
                <span className="text-lg font-semibold">3</span>
              </div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                <CreditCard size={18} />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Pay & Play
              </h3>
              <p>Send 20% advance via UPI/card; the QR code is unique to your booking and expires in fifteen minutes. Once payment hits, you receive:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Driver’s live GPS link</li>
                <li>Companion’s direct WhatsApp number</li>
                <li>ETA countdown (average 25 min from South Delhi, 18 min from Mahipalpur)</li>
                {/* <li>Direct WhatsApp contact provided</li> */}
              </ul>
              <p>Track the car like Uber; message the independent call girl Delhi if you need condom brand, extra lube or strawberries sent along.</p>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="flex gap-8 mb-20 relative">
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex flex-col items-center justify-center shadow-md">
                <span className="text-xs opacity-70">STEP</span>
                <span className="text-lg font-semibold">4</span>
              </div>
              <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                <MapPin size={18} />
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm w-full">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Meet & Marvel
              </h3>
              <p>Driver drops her at the lobby entrance; she walks in with a pre-approved visitor pass—no ID photocopy, no reception questions. Pay the remaining 80% cash or UPI after a friendly hello; the timer starts only when the door closes. Extend by scanning the same QR—half-hourly rate auto-calculates.</p>
              {/* <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Arrival with pre-approved visitor pass</li>
                <li>No ID photocopy or reception questions</li>
                <li>Pay remaining amount after meeting</li>
                <li>Timer starts only when door closes</li>
                <li>Easy extension using same QR code</li>
              </ul> */}
            </div>
          </div>

          {/* Post Meet Support */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 flex gap-6">
            <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center">
              <Star size={22} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Post-Meet Support
              </h3>
              <p>We ping you for feedback; if the independent call girl Delhi felt rushed, we offer an instant re-match or partial refund. Night-long WhatsApp stays open for travel extensions, late-night cravings or simply sharing the after-glow.</p>
              {/* <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Feedback follow-up after the meeting</li>
                <li>Instant re-match or partial refund</li>
                <li>24×7 WhatsApp support for extensions</li>
              </ul> */}
            </div>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-black text-gray-300 py-20">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Price Table – Independent Escorts in Delhi (2024)
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Transparent pricing with no hidden charges. All rates are indicative
            and applicable within Delhi NCR.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="min-w-full text-left">
            <thead className="bg-[#151515]">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  Category
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  1 Hr
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  2 Hrs
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-white">
                  Overnight
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/5 bg-[#0f0f0f]">
              <tr>
                <td className="px-6 py-4">
                  DU University Independent Girl
                </td>
                <td className="px-6 py-4">₹7k</td>
                <td className="px-6 py-4">₹12k</td>
                <td className="px-6 py-4">₹25k</td>
              </tr>

              <tr>
                <td className="px-6 py-4">
                  Air Hostess Escorts in Delhi
                </td>
                <td className="px-6 py-4">₹9k</td>
                <td className="px-6 py-4">₹15k</td>
                <td className="px-6 py-4">₹28k</td>
              </tr>

              <tr>
                <td className="px-6 py-4">
                  Russian Independent Escort
                </td>
                <td className="px-6 py-4">₹10k</td>
                <td className="px-6 py-4">₹18k</td>
                <td className="px-6 py-4">₹35k</td>
              </tr>

              <tr>
                <td className="px-6 py-4">
                  Celebrity / Model Indie
                </td>
                <td className="px-6 py-4">₹20k</td>
                <td className="px-6 py-4">₹35k</td>
                <td className="px-6 py-4">₹60k</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          Extend at <span className="text-white">50% of hourly rate</span>.  
          No hidden cab fees within Delhi.
        </p>

      </div>
    </section>

    <section className="bg-white dark:bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
          Why Book Independent Escorts Service in Delhi?
        </h2>

        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          <p>
            Zero commission means lower prices and higher customization. Want a Russian escort in Delhi who speaks fluent English? An air hostess escort in Delhi who brings crew discounts on flights? Or a celebrity escort in Delhi who signs NDAs on request? Independent escorts tailor everything—duration, music, outfit, even the brand of champagne. You can extend at midnight without waiting for “agency approval”; simply re-load the UPI QR and continue. Most independent female escorts in Delhi also maintain Instagram-verified accounts, so you preview their lifestyle before meeting. Direct chat builds trust—she remembers your coffee preference, favourite perfume and safe-word from the last encounter. That one-to-one chemistry is why seasoned clients prefer independent escorts service in Delhi over traditional agencies.
          </p>

        </div>
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
          Independent Escorts in Delhi Hotels – 5-Star
        </h1>

        <div className="prose prose-lg prose-gray mx-auto leading-relaxed text-gray-700">
          <p>
           DelhiEscorts.in holds permanent visitor passes for Independent Escorts in Delhi at Roseate, Pullman, JW Marriott, Taj, Oberoi, Andaz, Radisson Blu, Shangri-La, Le-Meridien, The Park, Hilton, Aloft, Novotel, Mapple Emerald, Country Inn, Crowne Plaza and forty more luxury addresses. Your independent call girl Delhi glides past security with a pre-authorised slip—no ID dump, no awkward questions, no lobby stares.
          </p>

          <p>
           Arriving late? Track her live GPS; she texts when the cab hits the porch so you can open the door the exact second she knocks. Inside, chilled strawberries and complimentary champagne await—billed at cost, zero markup—because DelhiEscorts.in books the suite under corporate rates if you don’t have a reservation. Check-in time is flexible: land at 2 a.m. and still collect a smile at reception.

          </p>

          <p>
           Whether you crave a Russian escort to sip bubbly in a Roseate villa or a bubbly independent girl university student for midnight room-service fries, our delhi girl services wrap luxury around lust. Day-use slots (11 a.m.-5 p.m.) start at ₹6 k including room, perfect for lunch-break indulgence; overnight packages bundle late-checkout and breakfast-in-bed so the night service feels like a mini-honeymoon.
Extend on location by scanning the same QR—half-hourly rate auto-calculates, no front-desk drama. When the clock ends, your call girl in hotel kisses goodbye and exits through the service elevator, leaving only scented sheets and a thank-you note. Five-star comfort, five-star privacy, five-star pleasure—Independent Escorts in Delhi have never been this seamless.
          </p>
        </div>
      </div>
    </section>
    <section className="bg-gradient-to-br from-fuchsia-600 to-indigo-700 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ready to Meet Your Perfect Companion?
        </h2>
        <p>
          Stop scrolling. One WhatsApp message brings verified independent escorts in Delhi to your door in 30 
minutes—Russian, celebrity, DU university girl, busty housewife or air hostess escort in Delhi—you pick, we deliver. No agency mark-up, no hidden fee, no cat-fish. Pay per hour, extend on location, travel together, keep zero trace. Save our number once and lock lifetime access to the largest independent escorts service in Delhi catalogue. Whether you need a high-profile call girl Delhi for a yacht weekend or a foreigner escort in Delhi for overnight GFE, real independent girls in Delhi are one click away. Message now and turn tonight into a private headline.

        </p>
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