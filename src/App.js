import { useEffect, useState } from "react";

function App() {
  const fabrics = [
    {
      img: "organic-cotton.jpg",
      name: "Organic Cotton",
      desc: "Soft, breathable, and ethically produced — perfect for everyday wear with minimal environmental impact.",
    },
    {
      img: "tencel.jpg",
      name: "TENCEL™ Lyocell",
      desc: "Silky smooth and biodegradable — made from sustainably sourced wood pulp using a closed-loop process.",
    },
    {
      img: "hemp.jpg",
      name: "Hemp",
      desc: "Durable, naturally antimicrobial, and carbon-negative — the ultimate eco-friendly fiber for modern apparel.",
    },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-[#f7f7f4]">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#264a2ecc] backdrop-blur-md py-2 shadow-md"
            : "bg-[#264a2e] py-4"
        } text-white pl-8 pr-16 flex justify-between items-center`}
      >
        <div className="flex items-center space-x-3 transition-all duration-300">
          <img
            src="/assets/Rashi Ecolooms.png"
            alt="Rashi Ecolooms Logo"
            className={`rounded-full object-cover transition-all duration-300 ${
              isScrolled ? "h-10 w-10" : "h-14 w-14"
            }`}
          />
          <span
            className={`font-semibold tracking-wide transition-all duration-300 ${
              isScrolled ? "text-xl" : "text-2xl"
            }`}
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.35)",
            }}
          >
            Rashi Ecolooms
          </span>
        </div>
        <nav className="space-x-8 text-lg font-medium hidden md:block">
          <a
            href="#about"
            className="hover:text-[#c4c38a] transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#fabrics"
            className="hover:text-[#c4c38a] transition-colors duration-300"
          >
            Fabrics
          </a>
          <a
            href="#contact"
            className="hover:text-[#c4c38a] transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Just for spacing below fixed header */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative text-center py-28 bg-gradient-to-br from-[#c4c38a] to-[#e2ddc1]">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#264a2e] mb-6 leading-tight">
            We Weave Sustainability into Every Fabric
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            At <span className="font-semibold">Rashi Ecolooms</span>, we provide
            certified, eco-conscious fabrics that empower conscious brands to
            create responsibly — without compromising on beauty or quality.
          </p>
          <div className="mt-8 space-x-4">
            <a
              href="#fabrics"
              className="bg-[#264a2e] text-white px-8 py-3 rounded-xl text-lg font-medium border border-[#264a2e] transition-all duration-300 hover:bg-transparent hover:text-[#264a2e]"
            >
              Explore Fabrics
            </a>
            <a
              href="#contact"
              className="border border-[#264a2e] text-[#264a2e] px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-[#264a2e] hover:text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#264a2e] mb-8">About Us</h2>
          <p className="text-lg mb-6 leading-relaxed text-gray-700">
            At Rashi Ecolooms, we’re redefining how brands approach sustainable
            sourcing. Our mission is simple — to connect creators and
            manufacturers with authentic, certified eco-fabrics that tell a
            story of transparency and care.
          </p>
          <p className="text-lg text-gray-700">
            Born from a deep understanding of the textile industry, we aim to
            eliminate greenwashing by ensuring every fabric we supply carries
            traceable, ethical origins — because sustainability deserves honesty.
          </p>
          <div className="mt-8 font-semibold text-[#264a2e] text-xl">
            Sustainability • Traceability • Trust
          </div>
        </div>
      </section>

      {/* Fabrics Section */}
      <section id="fabrics" className="bg-[#d6bfa0]/40 py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-[#264a2e] mb-12">
          Our Fabric Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {fabrics.map((fabric, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={`/assets/${fabric.img}`}
                alt={fabric.name}
                className="h-52 w-full object-cover rounded-xl"
              />
              <h3 className="text-2xl font-semibold mt-5 text-[#264a2e]">
                {fabric.name}
              </h3>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                {fabric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#264a2e] mb-8">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            Have a question or want to discuss sustainable fabric sourcing?
            We’d love to hear from you.
          </p>

          <form
            action="https://formspree.io/f/mdkpvevz"
            method="POST"
            className="space-y-5 text-left"
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#264a2e] outline-none"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#264a2e] outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#264a2e] outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#264a2e] text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#1f3e27] transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#264a2e] text-white text-center p-5">
        <p className="text-sm">
          © {new Date().getFullYear()} Rashi Ecolooms. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
