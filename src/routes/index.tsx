import { useState, useEffect } from "react";
import {
  Menu,
  X,
  BedDouble,
  Waves,
  Wifi,
  Sparkles,
  Coffee,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Quote,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Dumbbell,
  Bath,
  HeartPulse,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
} from "lucide-react";

const GOLD = "#D4AF37";
const BOOKING_EMAIL = "sonukumarteg245@gmail.com";

const HERO_IMGS = [
  "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80",
];
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80";
const ABOUT_IMGS = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80",
];

const ALL_ROOMS = [
  {
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    type: "Family Room",
    price: "₹3,499",
  },
  {
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80",
    type: "Double Room",
    price: "₹3,499",
  },
  {
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
    type: "Family Room",
    price: "₹3,499",
  },
  {
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    type: "Deluxe Suite",
    price: "₹4,999",
  },
  {
    img: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&w=1000&q=80",
    type: "Presidential Suite",
    price: "₹7,999",
  },
  {
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    type: "Single Room",
    price: "₹2,499",
  },
];

const ALL_TESTIMONIALS = [
  {
    name: "Emily Riddiks",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "An absolutely magical stay. The service was impeccable and the rooms were stunning. Will definitely be coming back!",
  },
  {
    name: "Michael Chen",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "Five-star experience from check-in to check-out. The infinity pool and spa were highlights of our trip.",
  },
  {
    name: "Lisa Rodriguez",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    text: "Luxury at its finest. Every detail was perfect, and the staff made us feel like royalty throughout our stay.",
  },
  {
    name: "James Patterson",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "Best hotel experience I've ever had. The breakfast spread was incredible and the city views were breathtaking.",
  },
  {
    name: "Sophia Martinez",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "Grandeur truly lives up to its name. The attention to detail and personalized service exceeded all expectations.",
  },
  {
    name: "David Kim",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    text: "Perfect blend of luxury and comfort. The spa treatments were rejuvenating and the food was world-class.",
  },
];

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function smoothScrollTo(hash: string) {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Index() {
  const [bookingRoom, setBookingRoom] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (target && target.getAttribute("href")?.startsWith("#")) {
        const href = target.getAttribute("href")!;
        if (href.length > 1 && document.querySelector(href)) {
          e.preventDefault();
          smoothScrollTo(href);
          history.replaceState(null, "", href);
        }
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  useEffect(() => {
    const cursor = document.createElement("div");
    const ring = document.createElement("div");
    cursor.className = "g-cursor-dot";
    ring.className = "g-cursor-ring";
    document.body.append(cursor, ring);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const isHoverTarget = (target: Element | null) =>
      !!target?.closest("a,button,input,.g-room-card,.g-testi-card");

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest("a,button,input,.g-room-card,.g-testi-card");
      if (target) ring.classList.add("g-cursor-ring-hover");
    };

    const onOut = (e: MouseEvent) => {
      const target = (e.relatedTarget as Element | null);
      if (!isHoverTarget(target)) ring.classList.remove("g-cursor-ring-hover");
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    animate();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("g-reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll(".g-reveal").forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      observer.disconnect();
      cursor.remove();
      ring.remove();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Hero onBook={() => setBookingRoom("General Reservation")} />
      <About />
      <Rooms onBook={(r) => setBookingRoom(r)} />
      <Services />
      <Testimonials />
      <Footer />
      <ScrollToTop />
      {bookingRoom && <BookingModal roomType={bookingRoom} onClose={() => setBookingRoom(null)} />}
    </div>
  );
}

function Navbar({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        <a
          href="#home"
          className="font-display text-2xl md:text-3xl font-bold tracking-wider"
          style={{ color: GOLD }}
        >
          GRANDEUR
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-white/90 hover:text-[color:var(--color-gold)] transition-colors text-sm font-medium"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button onClick={onBook} className="hidden md:inline-flex btn-gold text-sm">
          Book Now
        </button>
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur px-6 py-4 space-y-4">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-white/90 text-base"
            >
              {n.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="btn-gold w-full"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_IMGS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      {HERO_IMGS.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Luxury hotel"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <Navbar onBook={onBook} />
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6">
        <h1
          className="font-display font-bold text-white text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl drop-shadow-lg g-hero-title g-reveal"
          style={{ animationDelay: "0.25s" }}
        >
          Book With Best Luxury Hotel
        </h1>
        <p
          className="mt-5 text-white/90 text-base md:text-lg font-medium g-hero-subtitle g-reveal"
          style={{ animationDelay: "0.5s" }}
        >
          Where Elegance Meets Extraordinary Service
        </p>
        <button
          onClick={onBook}
          className="btn-gold mt-10 text-base px-8 py-3 g-hero-cta g-reveal"
          style={{ animationDelay: "0.75s" }}
        >
          Reserve Now
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {HERO_IMGS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + HERO_IMGS.length) % HERO_IMGS.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % HERO_IMGS.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </section>
  );
}

function About() {
  const features = [
    { icon: BedDouble, label: "24/7 Room Service" },
    { icon: Sparkles, label: "Luxury Spa & Wellness Center" },
    { icon: Waves, label: "Infinity Pool" },
    { icon: Coffee, label: "Complimentary Breakfast" },
    { icon: Wifi, label: "Free High-Speed Wi-Fi" },
    { icon: Building2, label: "City View Suites" },
  ];
  return (
    <section id="about" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Carousel images={ABOUT_IMGS} />
        <div>
          <span
            className="inline-block font-display font-semibold text-sm px-4 py-1.5 rounded g-reveal"
            style={{ backgroundColor: GOLD, color: "#1a1a1a", animationDelay: "0.2s" }}
          >
            About grandeur
          </span>
          <h2
            className="mt-6 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight g-reveal"
            style={{ animationDelay: "0.3s" }}
          >
            World Class Luxury Hotel and Resort Near City
          </h2>
          <p
            className="mt-6 text-white/70 leading-relaxed max-w-xl g-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
          </p>
          <div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 g-reveal"
            style={{ animationDelay: "0.45s" }}
          >
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3" style={{ color: GOLD }}>
                <f.icon className="w-5 h-5 shrink-0" />
                <span className="text-sm md:text-base font-medium">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Rooms({ onBook }: { onBook: (room: string) => void }) {
  const [current, setCurrent] = useState(0);
  const perViewCount = 3;
  const maxIndex = Math.max(0, ALL_ROOMS.length - perViewCount);

  return (
    <section id="rooms" className="py-20 lg:py-28" style={{ backgroundColor: "#2E2E2E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span
              className="inline-block font-display font-semibold text-sm px-4 py-1.5 rounded"
              style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
            >
              Room Type
            </span>
            <h2 className="mt-6 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight max-w-xl">
              The Best Luxury Rooms and Suites
            </h2>
          </div>
        </div>

        <div className="relative mt-14">
          <div
            id="rooms-carousel"
            className="flex gap-8 lg:gap-10 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`#rooms-carousel::-webkit-scrollbar { display: none; }`}</style>
            {ALL_ROOMS.map((r, i) => (
              <article
                key={i}
                className="text-white g-room-card g-reveal snap-start shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
                style={{ animationDelay: `${0.2 + i * 0.05}s` }}
              >
                <div className="relative">
                  <img src={r.img} alt={r.type} className="w-full h-70 object-cover" />
                  <div className="g-room-card-overlay">
                    <button
                      onClick={() => onBook(`${r.type} — ${r.price}/Night`)}
                      className="btn-gold text-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mt-5">
                    <span className="font-display text-2xl font-bold" style={{ color: GOLD }}>
                      {r.price}/
                    </span>
                    <span className="text-white/80 text-sm">Night</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl">{r.type}</h3>
                  <div className="mt-4 grid grid-cols-2 gap-y-3 gap-x-4" style={{ color: GOLD }}>
                    {["1-2 Persons", "Bathtub", "King Size Bed", "Free Wifi"].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-white/70 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit aliquet et vivamus nostra
                    torquent porttito
                  </p>
                </div>
              </article>
            ))}
          </div>
          
          {current > 0 && (
            <button
              onClick={() => {
                const container = document.getElementById("rooms-carousel");
                if (container) {
                  container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" });
                }
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center hover:bg-gold-soft transition shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          {current < maxIndex && (
            <button
              onClick={() => {
                const container = document.getElementById("rooms-carousel");
                if (container) {
                  container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
                }
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gold text-black flex items-center justify-center hover:bg-gold-soft transition shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
          
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = document.getElementById("rooms-carousel");
                  if (container) {
                    const cardWidth = container.offsetWidth / perViewCount + 40;
                    container.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-gold w-8" : "bg-white/30 w-2 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Dumbbell, title: "Fitness Center" },
    { icon: Bath, title: "Jacuzzi" },
    { icon: Waves, title: "Swimming Pool" },
    { icon: HeartPulse, title: "SPA Treatments" },
  ];
  return (
    <section id="services" className="bg-black py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="g-reveal" style={{ animationDelay: "0.15s" }}>
          <span
            className="inline-block font-display font-semibold text-sm px-4 py-1.5 rounded"
            style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
          >
            Hotel Serices
          </span>
          <h2 className="mt-6 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
            Get The Best Hotel Grandeur Services
          </h2>
          <p className="mt-6 text-white/70 leading-relaxed max-w-md">
            Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
            dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus
          </p>
          <a href="#rooms" className="btn-gold mt-8 inline-flex items-center gap-2">
            View All <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 g-reveal" style={{ animationDelay: "0.25s" }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="g-service-card bg-white rounded-2xl p-6 text-center shadow-lg"
            >
              <s.icon className="w-10 h-10 mx-auto" style={{ color: "#1a1a1a" }} />
              <h3 className="mt-4 font-display font-semibold text-lg" style={{ color: GOLD }}>
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a,
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const scrollItems = [...ALL_TESTIMONIALS, ...ALL_TESTIMONIALS];
  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#2E2E2E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center g-reveal" style={{ animationDelay: "0.15s" }}>
        <span
          className="inline-block font-display font-semibold text-sm px-4 py-1.5 rounded"
          style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
        >
          Testimonials
        </span>
        <h2 className="mt-6 font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl">
          What Client's Say?
        </h2>
      </div>

      <div className="g-marquee mt-14 px-6 lg:px-10">
        <div className="g-marquee-track">
          {scrollItems.map((t, i) => (
            <div key={`${t.name}-${i}`} className="g-testi-card bg-white rounded-2xl p-7 text-left min-w-[320px]">
              <Quote className="w-8 h-8" style={{ color: GOLD }} />
              <p className="mt-4 text-neutral-700 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-6 flex items-center gap-3 pt-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <span className="font-display font-semibold text-neutral-900">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="g-marquee-fade g-marquee-fade-left" />
        <div className="g-marquee-fade g-marquee-fade-right" />
      </div>
    </section>
  );
}

function Footer() {
  const [email, setEmail] = useState("");
  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const subject = encodeURIComponent("New Newsletter Subscription — Grandeur");
    const body = encodeURIComponent(`New subscriber email: ${email}`);
    window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
    setEmail("");
  };
  return (
    <footer id="contact" className="bg-black pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display font-bold text-2xl" style={{ color: GOLD }}>
            GRANDEUR
          </h3>
          <p className="mt-6 text-white font-semibold text-sm leading-relaxed max-w-xs">
            Experience luxury and comfort at its finest with our world-class accommodations and
            services.
          </p>
          <h4 className="mt-8 font-display font-semibold" style={{ color: GOLD }}>
            Follow Us
          </h4>
          <div className="mt-3 flex gap-3">
            {[Facebook, Twitter, Instagram].map((Ic, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80"
              >
                <Ic className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg" style={{ color: GOLD }}>
            Contact Us
          </h4>
          <ul className="mt-5 space-y-4 text-white text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4" style={{ color: GOLD }} /> +1 (555) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4" style={{ color: GOLD }} /> info@grandeurluxury.com
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1" style={{ color: GOLD }} /> 123 Luxury Avenue, NY
              10001
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg" style={{ color: GOLD }}>
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-white text-sm font-medium">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Rooms", href: "#rooms" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-[color:var(--color-gold)]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg" style={{ color: GOLD }}>
            Newsletter
          </h4>
          <p className="mt-5 text-white font-semibold text-sm">
            Subscribe to receive updates and special offers
          </p>
          <form onSubmit={onSubscribe} className="mt-5 flex flex-col gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/60 outline-none focus:border-[color:var(--color-gold)]"
            />
            <button
              type="submit"
              className="w-full rounded-full px-5 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}

function BookingModal({ roomType, onClose }: { roomType: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    requests: "",
  });
  const update = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      _subject: `New Booking Request — ${roomType}`,
      _cc: form.email,
      Room: roomType,
      Name: form.name,
      Email: form.email,
      Phone: form.phone,
      "Check-in": form.checkIn,
      "Check-out": form.checkOut,
      Guests: form.guests,
      "Special Requests": form.requests || "None",
    };

    try {
      await fetch("https://formsubmit.co/sonukumarteg245@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Booking submit failed:", err);
    }

    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white text-neutral-900 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="p-6 border-b flex items-center justify-between"
          style={{ borderColor: "#eee" }}
        >
          <div>
            <h3 className="font-display text-2xl font-bold" style={{ color: GOLD }}>
              Reserve Your Stay
            </h3>
            <p className="text-sm text-neutral-600 mt-1">{roomType}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-neutral-500 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {!submitted ? (
          <form onSubmit={onSubmit} className="p-6 space-y-4">
            <Field label="Full Name">
              <input
                required
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputCls}
              />
            </Field>
            <Field label="Phone">
              <input
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={inputCls}
              />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Check-in">
                <input
                  required
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => update("checkIn", e.target.value)}
                  className={inputCls}
                />
              </Field>
              <Field label="Check-out">
                <input
                  required
                  type="date"
                  value={form.checkOut}
                  onChange={(e) => update("checkOut", e.target.value)}
                  className={inputCls}
                />
              </Field>
            </div>
            <Field label="Guests">
              <select
                value={form.guests}
                onChange={(e) => update("guests", e.target.value)}
                className={inputCls}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Guest{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Special Requests (optional)">
              <textarea
                value={form.requests}
                onChange={(e) => update("requests", e.target.value)}
                rows={3}
                className={inputCls}
              />
            </Field>
            <button
              type="submit"
              className="w-full rounded-full px-6 py-3 font-semibold mt-2"
              style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
            >
              Confirm Booking
            </button>
            <p className="text-xs text-neutral-500 text-center">
              Your booking details will be sent to our reservations team.
            </p>
          </form>
        ) : (
          <div className="p-10 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-16 h-16 mb-4" style={{ color: "#16a34a" }} />
            <h3 className="font-display text-2xl font-bold mb-2">Your booking is confirmed!</h3>
            <p className="text-neutral-600 text-sm max-w-xs">
              Thank you, {form.name}. We have received your booking request for {roomType}. A
              confirmation email will be sent to {form.email}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 rounded-full px-6 py-2.5 text-sm font-semibold"
              style={{ backgroundColor: GOLD, color: "#1a1a1a" }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[color:var(--color-gold)] focus:ring-1 focus:ring-[color:var(--color-gold)]";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function Carousel({
  images,
  interval = 4000,
}: {
  images: string[];
  interval?: number;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % images.length),
      interval,
    );
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative g-about-img-wrapper g-reveal" style={{ animationDelay: "0.15s", height: "500px" }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Hotel gallery"
          className={`w-full h-full object-cover g-about-img absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <span className="g-about-pill">★ 5-STAR LUXURY</span>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
