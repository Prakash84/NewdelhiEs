export default function BlogPage() {
  const blogs = [
    {
      title: "Why Escort Services in Delhi Are Gaining Popularity",
      desc: "Learn why modern professionals prefer safe and premium escort services in Delhi.",
      tag: "Delhi Escorts",
    //   image: "/images/blog/delhi-escort-lifestyle.jpg"
    },
    {
      title: "Escort Service in Gurgaon – A Premium Lifestyle Choice",
      desc: "Discover how Gurgaon escort services match luxury and professionalism.",
      tag: "Gurgaon Escorts",
    //   image: "/images/blog/gurgaon-escort-premium.jpg"
    },
    {
      title: "Noida Escorts – Comfort, Privacy & Convenience",
      desc: "Why Noida escort services are perfect for calm and private experiences.",
      tag: "Noida Escorts",
    //   image: "/images/blog/noida-escort-comfort.jpg"
    },
    {
      title: "How to Choose a Safe & Reliable Escort Service",
      desc: "Essential tips for choosing trusted and discreet escort services.",
      tag: "Safety Guide",
    //   image: "/images/blog/escort-safety-guide.jpg"
    },
    {
      title: "Luxury Escort Experience in Delhi NCR",
      desc: "Explore high-end escort experiences across Delhi NCR.",
      tag: "Luxury Escorts",
    //   image: "/images/blog/delhi-ncr-luxury-escort.jpg"
    }
  ];

  return (
    <>
    <section
  className="relative text-white"
  style={{
    backgroundImage: "url('/images/download34.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative container mx-auto px-6 py-20 text-center max-w-3xl">

    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
     Delhi Escorts | Premium Escort Service
    </h1>

    <p className="text-lg md:text-xl text-zinc-300 mb-6">
      Delhi escorts deliver high-profile independent female escort service across NCR.
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
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Our Blog
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Read lifestyle guides, city insights, and expert tips for premium escort
          services in Delhi NCR.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-pink-500 transition"
            >
              {/* Blog Image */}
              {/* <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              /> */}

              <div className="p-6">
                <span className="text-sm text-pink-500">{blog.tag}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {blog.desc}
                </p>
                <button className="text-pink-500 text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    

    </>
    
  );
}
