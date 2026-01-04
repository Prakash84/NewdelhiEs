"use client";

import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ShieldCheck,
  Clock,
  Users,
  Lock
} from "lucide-react";

export default function ContPage() {
  return (
    <main className="bg-neutral-950 text-white">
      
      {/* HERO SECTION */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/download27.webp"
            alt="Contact Us Delhi"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us – Trusted & Discreet Services in Delhi
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe clear communication, privacy, and professionalism are the
            foundation of a premium companionship experience. Our team is always
            available to assist you with respect and discretion.
          </p>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          <ContactCard
            icon={<Phone className="h-8 w-8 text-amber-400" />}
            title="Call Us"
            text="Speak directly with our professional support team for quick assistance and same-day inquiries."
          />

          <ContactCard
            icon={<MessageCircle className="h-8 w-8 text-amber-400" />}
            title="WhatsApp Chat"
            text="The most preferred way to connect. Simple, fast, and completely private communication."
          />

          <ContactCard
            icon={<Mail className="h-8 w-8 text-amber-400" />}
            title="Email Support"
            text="For detailed questions and advance planning, feel free to email our support team."
          />
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Our Service Areas in Delhi NCR
          </h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto mb-12">
            We provide discreet and professional companionship services across
            major locations in Delhi and NCR, ensuring comfort and convenience
            wherever you are staying.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "South Delhi",
              "Central Delhi",
              "Aerocity",
              "Connaught Place",
              "Noida",
              "Gurgaon"
            ].map((area, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-neutral-900 p-5 rounded-xl border border-neutral-800"
              >
                <MapPin className="text-amber-400" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & PRIVACY */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Privacy, Safety & Professionalism
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Every message, call, and inquiry is handled with complete
              confidentiality. We follow strict internal policies to ensure your
              personal information remains protected at all times.
            </p>

            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <Lock className="text-amber-400" /> 100% Confidential Communication
              </li>
              <li className="flex gap-3">
                <ShieldCheck className="text-amber-400" /> Verified & Respectful Process
              </li>
              <li className="flex gap-3">
                <Users className="text-amber-400" /> Professional Support Team
              </li>
              <li className="flex gap-3">
                <Clock className="text-amber-400" /> Quick Response Time
              </li>
            </ul>
          </div>

          <Image
            src="/images/privacy-support.jpg"
            alt="Privacy Support"
            width={600}
            height={450}
            className="rounded-2xl object-cover"
          />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Send Us a Message
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Have a question or need guidance? Fill out the form below and our
            team will get back to you shortly.
          </p>

          <form className="grid gap-6 bg-neutral-900 p-10 rounded-2xl border border-neutral-800">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-neutral-800 p-4 rounded-lg outline-none"
            />
            <input
              type="text"
              placeholder="Phone or WhatsApp Number"
              className="bg-neutral-800 p-4 rounded-lg outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="bg-neutral-800 p-4 rounded-lg outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 transition text-black font-semibold py-4 rounded-lg"
            >
              Submit Message
            </button>
          </form>
        </div>
      </section>
      
      
      <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 text-center">
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
    {/* DISCLAIMER */}
      <section className="bg-neutral-950 py-10 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-400 text-center">
          All services are offered strictly for legal companionship purposes only.
          We operate with full respect for local laws, privacy, and ethical standards.
        </div>
      </section>
    </main>
  );
}

/* COMPONENT */
function ContactCard({ icon, title, text }) {
  return (
    <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-amber-500 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{text}</p>
    </div>
  );
}
