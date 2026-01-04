// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top row */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500 mb-2">
              DelhiEscort
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Premium, discreet companionship across Delhi-NCR. Verified profiles, zero-trace bookings, 24×7 friendly support.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social icons */}
              {['wa', 'tg'].map((ic) => (
                <a key={ic} href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-amber-500 flex items-center justify-center transition">
                  <span className="text-xs font-bold">{ic}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-amber-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/price" className="hover:text-white transition">Price</a></li>
              <li><a href="/outlets" className="hover:text-white transition">Outlets</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-amber-400">Contact</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>📞 <a href="tel:+91XXXXXXXXXX" className="hover:text-white transition">+91 XXXXX XXXXX</a></li>
              <li>📱 <a href="https://wa.me/91XXXXXXXXXX" className="hover:text-white transition">WhatsApp</a></li>
              <li>✉️ <a href="mailto:hello@delhielite.in" className="hover:text-white transition">hello@delhielite.in</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-neutral-800 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-neutral-500">
          <p>© 2024 DelhiElite. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}