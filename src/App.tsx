import { useEffect, useState } from "react"

function Icon({ name, size = 20 }: { name: string ;size?: number }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    tooth: (
      <path d="M12 4.5C8 1 4 4.5 4.5 9.5c.5 4.5 2 10.5 4.5 10.5 2 0 1-7.5 3-7.5s1 7.5 3 7.5c2.5 0 4-6 4.5-10.5C20 4.5 16 1 12 4.5Z" />
    ),
    sparkle: (
      <>
        <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z" />
        <path d="M20 2v4M18 4h4" />
      </>
    ),
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    heart: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    ),
    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pin: (
      <>
        <path d="M19 10c0 6-7 11-7 11S5 16 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="m5 3 4 4-2 3c1 3 4 6 7 7l3-2 4 4c-5 7-23-11-16-16Z" />,
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </>
    ),
    calendar: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    zoom: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),
    coffee: (
      <>
        <path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </>
    ),
    headphones: (
      <>
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
      </>
    ),
    tv: (
      <>
        <rect width="20" height="15" x="2" y="7" rx="2" />
        <polyline points="17 2 12 7 7 2" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] || paths.tooth}
    </svg>
  )
}

const services = [
  {
    icon: "tooth",
    title: "General & Preventive Care",
    text: "Gentle cleanings, comprehensive 3D digital exams, and proactive care to keep your natural smile flourishing.",
    detail:
      "Our preventive visits combine gentle ultrasonic scaling, air polishing, oral microbiome assessments, and low-dose digital imaging. We believe in protecting natural tooth enamel with zero shame and complete transparency.",
    duration: "60 mins",
    steps: [
      "Low-radiation 3D optical scan & gum health mapping",
      "Gentle ultrasonic cleaning with warm water & natural polish",
      "Personalized preventive oral health blueprint",
    ],
    idealFor: ["Routine Check-ups", "Enamel Health", "Cleanings"],
  },
  {
    icon: "sparkle",
    title: "Cosmetic Smile Artistry",
    text: "Handcrafted porcelain veneers, gentle in-office whitening, and artistic composite bonding tailored to you.",
    detail:
      "We specialize in ultra-natural aesthetic enhancements that honor your unique facial structure. Using master-crafted ceramic veneers and enamel-safe whitening protocols, we deliver luminous, lasting smiles.",
    duration: "60 - 90 mins",
    steps: [
      "Digital smile preview & facial symmetry consultation",
      "Custom shade matching & minimal-prep trial mockup",
      "Precision bonding with long-lasting ceramic polish",
    ],
    idealFor: ["Smile Makeovers", "Porcelain Veneers", "Gentle Whitening"],
  },
  {
    icon: "shield",
    title: "Restorative Care & Implants",
    text: "Bio-compatible ceramic crowns, mercury-free composite restorations, and precision dental implants engineered for life.",
    detail:
      "From replacing a single missing tooth with a titanium implant to rebuilding a compromised tooth with ceramic crowns, our restorative treatments restore natural chewing comfort, strength, and confidence.",
    duration: "45 - 90 mins",
    steps: [
      "Digital impression without messy goop or gagging",
      "Biocompatible color-matched ceramic fabrication",
      "Pain-free gentle placement & bite balance check",
    ],
    idealFor: ["Ceramic Crowns", "Dental Implants", "Pain Relief"],
  },
  {
    icon: "heart",
    title: "Invisalign & Clear Aligners",
    text: "Discreet orthodontic alignment tailored for busy adults and teens, with digital 3D progress tracking from day one.",
    detail:
      "Straighten your teeth seamlessly and invisibly. As Platinum Invisalign providers, our doctors design your aligners with pinpoint precision so you can preview your final smile before starting treatment.",
    duration: "Initial scan 45 mins",
    steps: [
      "3D iTero optical scan with instant smile simulator",
      "Custom medical-grade aligners delivered to your hands",
      "Virtual or in-office check-ins every 6-8 weeks",
    ],
    idealFor: ["Teeth Straightening", "Bite Alignment", "Discreet Care"],
  },
  {
    icon: "leaf",
    title: "Periodontal Wellness & Laser",
    text: "Gentle diode laser therapy and non-surgical gum rejuvenation to reverse inflammation and preserve bone support.",
    detail:
      "Healthy gums are the foundation of vibrant teeth. Our painless laser-assisted therapy eliminates harmful bacteria beneath the gum line while stimulating cellular regeneration without cutting or sutures.",
    duration: "45 - 60 mins",
    steps: [
      "Microscopic pocket depth & bacterial evaluation",
      "Non-surgical targeted diode laser decontamination",
      "Nourishing herbal gum massage & home maintenance regimen",
    ],
    idealFor: ["Gum Health", "Bleeding Gums", "Holistic Wellness"],
  },
  {
    icon: "sun",
    title: "Pediatric & Gentle Family Care",
    text: "Warm, anxiety-free dental visits for little ones and growing smiles, creating positive memories that last a lifetime.",
    detail:
      "We cultivate a playful, calming atmosphere that turns dental check-ups into an adventure. From show-tell-do gentle introductions to cavity-prevention sealants, we help kids love visiting the dentist.",
    duration: "30 - 45 mins",
    steps: [
      "Friendly welcome & interactive tool discovery",
      "Gentle count and fun cleaning with child-chosen flavor",
      "Smile champion reward and personalized kid coaching",
    ],
    idealFor: ["First Visits", "Kids & Teens", "Cavity Prevention"],
  },
]

const doctors = [
  {
    name: "Dr. Elena Vance, DDS",
    role: "Founder & Clinical Director",
    credentials: "Harvard School of Dental Medicine · 14+ Years",
    experience: "14+ Years Experience",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    specialties: ["Cosmetic Veneers", "Smile Design", "Anxiety-Free Care"],
    bio: "Dr. Vance founded Bloom Dental to combine aesthetic precision with the tranquility of a modern retreat. Her empathetic approach has helped hundreds of dental-anxious patients look forward to their visits.",
    quote:
      "“Dentistry should feel restorative and gentle from the moment you sit down. You are always in control.”",
  },
  {
    name: "Dr. Marcus Chen, DMD",
    role: "Restorative & Implant Specialist",
    credentials: "UCSF School of Dentistry · Fellow ICOI · 11+ Years",
    experience: "11+ Years Experience",
    photo:
      "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80",
    specialties: [
      "Biocompatible Crowns",
      "Dental Implants",
      "Minimally Invasive",
    ],
    bio: "Specializing in biological tooth restoration and dental implants, Dr. Chen emphasizes techniques that preserve natural tooth structure while restoring full chewing comfort and durability.",
    quote:
      "“Preserving natural structure and restoring your smile with zero pain is our clinic's daily commitment.”",
  },
  {
    name: "Dr. Maya Patel, DDS",
    role: "Orthodontics & Preventive Care",
    credentials: "Columbia University College of Dental Medicine · 9+ Years",
    experience: "9+ Years Experience",
    photo:
      "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?auto=format&fit=crop&w=800&q=80",
    specialties: ["Invisalign Platinum", "Airway Dentistry", "Gentle Hygiene"],
    bio: "Dr. Patel approaches dentistry as a cornerstone of whole-body wellness. Her clear aligner programs and preventive protocols are crafted to create balanced smiles that look effortlessly natural.",
    quote:
      "“A harmonious smile enhances not just your photos, but how you breathe, sleep, and experience daily life.”",
  },
]

const galleryItems = [
  {
    id: 1,
    category: "sanctuary",
    categoryLabel: "The Sanctuary",
    title: "Sunlit Treatment Suite",
    desc: "Ergonomic memory-foam patient lounge bathed in soft natural daylight, acoustic ceiling dampening, and streaming entertainment.",
    photo:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    category: "smiles",
    categoryLabel: "Smile Transformations",
    title: "Natural Porcelain Veneer Artistry",
    desc: "Subtle alignment and luminosity enhancement preserving organic tooth translucency and bespoke texture.",
    photo:
      "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    category: "sanctuary",
    categoryLabel: "The Sanctuary",
    title: "Tea & Relaxation Lounge",
    desc: "A calming welcome lounge crafted from warm sustainable white oak with complimentary organic herbal infusions.",
    photo:
      "https://images.unsplash.com/photo-1648775507324-b48dd3791fa5?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    category: "smiles",
    categoryLabel: "Smile Transformations",
    title: "Invisalign Clear Aligner Journey",
    desc: "9-month discreet orthodontic transformation creating facial symmetry, optimal bite function, and lasting confidence.",
    photo:
      "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    category: "tech",
    categoryLabel: "Comfort & Technology",
    title: "3D Digital Optical Scanner",
    desc: "Instant, goop-free digital impressions providing real-time 3D smile simulations in under 60 seconds.",
    photo:
      "https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    category: "smiles",
    categoryLabel: "Smile Transformations",
    title: "Enamel-Safe In-Office Whitening",
    desc: "Gentle bio-compatible whitening delivering 4 shades brighter results with zero post-treatment temperature sensitivity.",
    photo:
      "https://images.unsplash.com/photo-1562337404-3044c84ac061?auto=format&fit=crop&w=1000&q=85",
  },
]

const testimonials = [
  {
    name: "Sarah M.",
    treatment: "Ceramic Crown Restoration",
    text: "For the first time in my life, I did not grip the armrests in panic. The noise-cancelling headphones and gentle touch of Dr. Chen made my crown procedure completely serene.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
  {
    name: "James L.",
    treatment: "Cosmetic Veneer Refresh",
    text: "Dr. Vance and her team treated me like family. The space feels more like an upscale Japanese tea sanctuary than a dentist. The cosmetic results look completely natural.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
  {
    name: "Emily R.",
    treatment: "Invisalign Aligner Journey",
    text: "I put off orthodontic care for over 10 years because I dreaded braces. Bloom's Invisalign program was seamless, discreet, and finished two months early with wonderful results!",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
  {
    name: "David K.",
    treatment: "Preventive & Hygiene Care",
    text: "As someone with sensitive teeth, regular cleanings used to be torture. Their warm water ultrasonic tool and gentle hands made it completely painless. Highly recommend!",
    avatar:
      "https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?w=100&h=100&fit=crop&crop=faces",
    rating: 5,
  },
]

const faqs = [
  {
    q: "Do you accept dental insurance and PPO plans?",
    a: "Yes, we accept and directly bill all major PPO dental insurance providers on your behalf. Our team verifies your benefits before your appointment so you have complete transparency regarding coverage.",
  },
  {
    q: "What if I experience severe dental anxiety or fear?",
    a: "Over 60% of our new patients felt anxious before finding us. We provide comfort amenities including noise-cancelling headphones, weighted blankets, warm organic tea, and full autonomy to pause whenever you raise your hand.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your initial visit is a relaxed, unhurried 60 minutes. We conduct a gentle 3D digital scan, examine your oral health, answer all your questions, and craft a personalized care blueprint together.",
  },
  {
    q: "How quickly can I be seen for an urgent issue?",
    a: "We reserve daily priority slots for emergencies and prompt tooth relief. If you are experiencing pain, call our direct line at (415) 555-0128 for same-day triage.",
  },
]

export default function App() {
  const [menu, setMenu] = useState(false)
  const [booking, setBooking] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [selectedDoctor, setSelectedDoctor] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedSlot, setSelectedSlot] = useState(
    "Morning (8:00 AM – 11:00 AM)",
  )
  const [patientName, setPatientName] = useState("")
  const [patientEmail, setPatientEmail] = useState("")
  const [patientPhone, setPatientPhone] = useState("")
  const [detail, setDetail] = useState<number | null>(null)
  const [galleryFilter, setGalleryFilter] = useState("all")
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    if (!booking && detail === null && lightbox === null) return
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setBooking(false)
        setDetail(null)
        setLightbox(null)
      }
    }
    document.addEventListener("keydown", listener)
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", listener)
      document.body.style.overflow = original
    }
  }, [booking, detail, lightbox])

  function openBooking(service = "", doctor = "") {
    if (service) setSelectedService(service)
    if (doctor) setSelectedDoctor(doctor)
    setSubmitted(false)
    setDetail(null)
    setLightbox(null)
    setBooking(true)
    setMenu(false)
  }

  const filteredGallery =
    galleryFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === galleryFilter)

  return (
    <>
      {/* Top Announcement Strip */}
      {/* <div className="announcement">
        <span>A little care. A lifetime of smiles.</span>
        <a
          href="tel:+14155550128"
          aria-label="Call Bloom Dental at (415) 555-0128"
        >
          <Icon name="phone" size={13} /> (415) 555-0128
        </a>
      </div> */}

      {/* Main Navigation Bar */}
      <header className="header wrap" id="top">
        <a className="brand" href="home" aria-label="Bloom Dental home">
          <span className="brand-icon">
            <Icon name="tooth" size={28} />
          </span>
          bloom
          <span className="brand-sub">DENTAL</span>
        </a>

        <nav
          className={menu ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <a href="home" onClick={() => setMenu(false)}>
            Home
          </a>
          <a href="about" onClick={() => setMenu(false)}>
            About
          </a>
          <a href="services" onClick={() => setMenu(false)}>
            Services
          </a>
          <a href="doctors" onClick={() => setMenu(false)}>
            Doctors
          </a>
          <a href="gallery" onClick={() => setMenu(false)}>
            Gallery
          </a>
          <a href="testimonials" onClick={() => setMenu(false)}>
            Testimonials
          </a>
          <a href="contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </nav>

        <button
          className="button header-book"
          onClick={() => openBooking()}
          aria-label="Book an appointment"
        >
          Book an appointment <Icon name="arrow" size={16} />
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <Icon name={menu ? "close" : "menu"} size={22} />
        </button>
      </header>

      <main>
        {/* 1. Home / Hero Section */}
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              {/* <span className="little-line" /> A FRESH APPROACH TO DENTAL CARE */}
            </div>
            <h1>
              A healthier smile.
              <br />A happier <em>you.</em>
            </h1>
            <p>
              Great dentistry. Genuine care. A space where you feel at ease.
              Welcome to a dental experience designed thoughtfully around you.
            </p>
            <div className="hero-actions">
              <button className="button" onClick={() => openBooking()}>
                Find your smile <Icon name="arrow" size={18} />
              </button>
              <a className="text-link" href="about">
                Get to know us <span>↗</span>
              </a>
            </div>
            <div className="social-proof">
              <div className="avatars">
                {[
                  "photo-1544005313-94ddf0286df2",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1506794778202-cad84cf45f1d",
                  "photo-1548382131-e0ebb1f0cdea",
                ].map((id) => (
                  <img
                    key={id}
                    src={`https://images.unsplash.com/${id}?w=80&h=80&fit=crop&crop=faces`}
                    alt=""
                  />
                ))}
                <span>2.4k+</span>
              </div>
              <div>
                <div className="rating-stars">
                  ★★★★★ <span>4.9 / 5.0</span>
                </div>
                <div className="proof-caption">
                  Kind words. Genuine care. Real people.
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=85"
              alt="A woman sharing a radiant, confident smile"
            />
            <div className="image-grain" />
            <div className="floating-note">
              <span className="note-icon">
                <Icon name="shield" size={24} />
              </span>
              <div>
                <strong>Care you can feel good about.</strong>
                <span>Gentle hands. Zero judgment. Calming visits.</span>
              </div>
            </div>
            {/* <div className="smile-stamp">
              <Icon name="sparkle" size={20} />
              <span>
                MORE REASONS
                <br />
                TO SMILE
              </span>
            </div> */}
          </div>
        </section>

        {/* Trust Banner */}
        <section className="trust-strip">
          <div className="wrap trust-inner">
            <span>
              <Icon name="heart" /> People-first, always
            </span>
            <span>
              <Icon name="sparkle" /> Modern care, gentle touch
            </span>
            <span>
              <Icon name="shield" /> Transparent & honest
            </span>
            <span>
              <Icon name="clock" /> Your time, respected
            </span>
          </div>
        </section>

        {/* 2. About Section */}
        <section className="about-section wrap" id="about">
          <div className="about-art">
            <Icon name="tooth" size={68} />
            <span>
              A calmer kind
              <br />
              of dental care.
            </span>
            <div className="art-caption">GOOD PEOPLE. GREAT DENTISTRY.</div>
          </div>

          <div className="about-copy">
            <div className="eyebrow">DENTISTRY, WITH A HUMAN TOUCH</div>
            <h2>
              You are a person.
              <br />
              Not just a patient.
            </h2>
            <p>
              We believe feeling at peace with your dentist matters just as much
              as feeling confident in your smile. That is why we listen first,
              walk you through every step before we begin, and honor your pace.
            </p>

            <div className="about-checks">
              <span>
                <Icon name="check" size={17} /> No judgment. Just warm, honest
                support.
              </span>
              <span>
                <Icon name="check" size={17} /> Clear plans with zero surprise
                billing.
              </span>
              <span>
                <Icon name="check" size={17} /> Gentle technology & comfort
                amenities.
              </span>
            </div>

            <div className="about-amenities-row">
              <span className="about-amenity-chip">
                <Icon name="coffee" size={14} /> Organic Tea Lounge
              </span>
              <span className="about-amenity-chip">
                <Icon name="headphones" size={14} /> Noise-Cancelling Audio
              </span>
              <span className="about-amenity-chip">
                <Icon name="tv" size={14} /> Streaming Ceilings
              </span>
            </div>

            <button className="button-outline" onClick={() => openBooking()}>
              Let&apos;s get to know each other <Icon name="arrow" size={16} />
            </button>
          </div>
        </section>

        {/* 3. Services Section */}
        <section className="services-section wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CARE FOR EVERY KIND OF SMILE</div>
              <h2>A little care goes a long way.</h2>
            </div>
            <p>
              From your everyday gentle check-up to complex smile makeovers, our
              clinicians combine clinical precision with an artistic, calming
              touch.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, i) => (
              <button
                className="service-card"
                key={service.title}
                onClick={() => setDetail(i)}
                aria-label={`View details for ${service.title}`}
              >
                <span className="service-icon">
                  <Icon name={service.icon} size={26} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-card-meta">
                  <Icon name="clock" size={14} /> {service.duration}
                </div>
                <span className="card-link">
                  Explore care <Icon name="arrow" size={16} />
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 4. Doctors Section */}
        <section className="doctors-section" id="doctors">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">MEET OUR COMPASSIONATE CARE TEAM</div>
                <h2>Kind hands. Thoughtful minds.</h2>
              </div>
              <p>
                Our doctors are clinicians, artists, and patient advocates
                dedicated to gentle, personalized care that puts your comfort
                first.
              </p>
            </div>

            <div className="doctor-grid">
              {doctors.map((doctor) => (
                <div className="doctor-card" key={doctor.name}>
                  <div className="doctor-photo-wrap">
                    <img
                      className="doctor-photo"
                      src={doctor.photo}
                      alt={doctor.name}
                    />
                    <span className="doctor-experience-tag">
                      {doctor.experience}
                    </span>
                  </div>
                  <div className="doctor-content">
                    <span className="doctor-role">{doctor.role}</span>
                    <h3>{doctor.name}</h3>
                    <div className="doctor-credentials">
                      {doctor.credentials}
                    </div>
                    <p className="doctor-bio">{doctor.bio}</p>
                    <div className="doctor-quote">{doctor.quote}</div>
                    <div className="doctor-badges">
                      {doctor.specialties.map((s) => (
                        <span className="doctor-badge" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <button
                      className="doctor-book-btn"
                      onClick={() => openBooking("", doctor.name)}
                    >
                      Book with {doctor.name.split(" ")[1]}{" "}
                      <Icon name="arrow" size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Gallery Section */}
        <section className="gallery-section" id="gallery">
          <div className="wrap">
            <div className="section-heading">
              <div>
                <div className="eyebrow">SANCTUARY & SMILE STORIES</div>
                <h2>A glimpse inside our calm space.</h2>
              </div>
              <p>
                Designed with warm white oak, natural daylight, and modern
                comforts to make every dental visit feel like a peaceful
                retreat.
              </p>
            </div>

            <div
              className="gallery-filters"
              role="tablist"
              aria-label="Gallery filters"
            >
              <button
                className={`gallery-filter-btn ${
                  galleryFilter === "all" ? "is-active" : ""
                }`}
                onClick={() => setGalleryFilter("all")}
              >
                All spaces & smiles
              </button>
              <button
                className={`gallery-filter-btn ${
                  galleryFilter === "sanctuary" ? "is-active" : ""
                }`}
                onClick={() => setGalleryFilter("sanctuary")}
              >
                The Sanctuary
              </button>
              <button
                className={`gallery-filter-btn ${
                  galleryFilter === "smiles" ? "is-active" : ""
                }`}
                onClick={() => setGalleryFilter("smiles")}
              >
                Smile Transformations
              </button>
              <button
                className={`gallery-filter-btn ${
                  galleryFilter === "tech" ? "is-active" : ""
                }`}
                onClick={() => setGalleryFilter("tech")}
              >
                Comfort & Technology
              </button>
            </div>

            <div className="gallery-grid">
              {filteredGallery.map((item) => (
                <div
                  className="gallery-card"
                  key={item.id}
                  onClick={() => setLightbox(item.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setLightbox(item.id)
                  }}
                >
                  <img src={item.photo} alt={item.title} />
                  <div className="gallery-card-overlay">
                    <span className="gallery-card-tag">
                      {item.categoryLabel}
                    </span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                  <div className="gallery-card-zoom" aria-hidden="true">
                    <Icon name="zoom" size={16} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Testimonials Section */}
        <section className="reviews wrap" id="testimonials">
          <div className="eyebrow">SMILES SAY IT BEST</div>
          <h2>A place you will feel good coming back to.</h2>

          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Google & Yelp Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.4%</div>
              <div className="stat-label">Patient Recommendation</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,400+</div>
              <div className="stat-label">Confident Smiles Cared For</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Biocompatible & Toxin-Free</div>
            </div>
          </div>

          <div className="review-grid">
            {testimonials.map((r) => (
              <article className="review" key={r.name}>
                <span className="review-tag">{r.treatment}</span>
                <div className="rating-stars">★★★★★</div>
                <p>&ldquo;{r.text}&rdquo;</p>
                <div className="review-author-row">
                  <img className="review-avatar" src={r.avatar} alt={r.name} />
                  <div>
                    <strong>{r.name}</strong>
                    <span className="verified-badge">
                      <Icon name="check" size={12} /> Verified Patient
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="demo-note">
            Patient stories and experiences illustrative of care received at
            Bloom Dental.
          </p>
        </section>

        {/* 7. Contact & Visit Section */}
        <section className="visit-section" id="contact">
          <div className="wrap visit-inner">
            <div>
              <div className="eyebrow">
                YOUR NEXT CHAPTER STARTS WITH A SMILE
              </div>
              <h2>Let&apos;s make you feel at home.</h2>
              <div className="live-badge">
                <span className="live-dot" /> Open today · 8:00 AM – 6:00 PM
              </div>
              <p>
                Your smile deserves good company. Whether you need a gentle
                check-up or are ready for a complete smile transformation, we
                would love to welcome you to our sanctuary.
              </p>
              <button className="button" onClick={() => openBooking()}>
                Book your first visit <Icon name="arrow" size={18} />
              </button>

              <div className="amenities-group">
                <div className="amenities-title">
                  Complimentary Comfort Amenities
                </div>
                <div className="amenities-grid">
                  <span className="amenity-chip">
                    <Icon name="headphones" size={14} /> Noise-cancelling
                    headphones
                  </span>
                  <span className="amenity-chip">
                    <Icon name="coffee" size={14} /> Herbal tea & warm towels
                  </span>
                  <span className="amenity-chip">
                    <Icon name="tv" size={14} /> Ceiling streaming screens
                  </span>
                  <span className="amenity-chip">
                    <Icon name="sparkle" size={14} /> Aromatherapy & blankets
                  </span>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div className="faq-section">
                <div className="faq-title">Frequently Asked Questions</div>
                <div className="faq-list">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index
                    return (
                      <div className="faq-item" key={faq.q}>
                        <button
                          className={`faq-trigger ${isOpen ? "is-open" : ""}`}
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          aria-expanded={isOpen}
                        >
                          <span>{faq.q}</span>
                          <Icon name="chevron" size={16} />
                        </button>
                        {isOpen && <div className="faq-answer">{faq.a}</div>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-header">
                <h3>Clinic Information</h3>
                <p>Located in the heart of San Francisco</p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <Icon name="pin" size={20} />
                  <span>
                    <strong>San Francisco Sanctuary</strong>
                    123 California Street, Suite 400
                    <br />
                    San Francisco, CA 94111
                    <br />
                    <span style={{ fontSize: "11px", color: "6e8460" }}>
                      Validated parking at Embarcadero Center. 3-min walk from
                      Montgomery BART.
                    </span>
                  </span>
                </div>

                <div className="contact-info-item">
                  <Icon name="clock" size={20} />
                  <span>
                    <strong>Visiting Hours</strong>
                    Mon – Fri: 8:00 AM – 6:00 PM
                    <br />
                    Saturday: 9:00 AM – 2:00 PM
                    <br />
                    Sunday: Closed
                  </span>
                </div>

                <div className="contact-info-item">
                  <Icon name="phone" size={20} />
                  <span>
                    <strong>Direct Inquiries</strong>
                    <a href="tel:+14155550128">(415) 555-0128</a>
                  </span>
                </div>

                <div className="contact-info-item">
                  <Icon name="mail" size={20} />
                  <span>
                    <strong>Email Concierge</strong>
                    <a href="mailto:hello@bloomdentalcare.com">
                      hello@bloomdentalcare.com
                    </a>
                  </span>
                </div>
              </div>

              <button
                className="button-outline"
                onClick={() => openBooking()}
                style={{ width: "100%" }}
              >
                Schedule online visit <Icon name="arrow" size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <Icon name="tooth" size={25} /> bloom
              <span className="brand-sub">DENTAL</span>
            </a>
            <p>
              Thoughtful dentistry for brighter days, calmer visits, and
              healthier smiles that feel naturally you.
            </p>
          </div>

          <div className="footer-meta">
            <div className="footer-title">Explore</div>
            <div className="footer-nav">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#doctors">Doctors</a>
              <a href="#gallery">Gallery</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-meta">
            <div className="footer-title">Visit</div>
            <div className="footer-contact">
              <span>123 California Street, Suite 400</span>
              <span>San Francisco, CA 94111</span>
              <a href="tel:+14155550128">(415) 555-0128</a>
              <a href="mailto:hello@bloomdentalcare.com">
                hello@bloomdentalcare.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Thoughtful care. Naturally you.</span>
          <small>
            © {new Date().getFullYear()} Bloom Dental · Modern Concept Clinic
          </small>
        </div>
      </footer>

      {/* Modals: Service Detail, Lightbox, and Booking */}
      {(booking || detail !== null || lightbox !== null) && (
        <div
          className="modal-backdrop"
          onClick={() => {
            setBooking(false)
            setDetail(null)
            setLightbox(null)
          }}
        >
          {/* Service Detail Modal */}
          {detail !== null && (
            <section
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                aria-label="Close dialog"
                autoFocus
                onClick={() => setDetail(null)}
              >
                <Icon name="close" size={18} />
              </button>

              <span className="service-icon">
                <Icon name={services[detail].icon} size={28} />
              </span>
              <div className="eyebrow" style={{ marginTop: "12px" }}>
                SERVICE SPOTLIGHT
              </div>
              <h2 id="modal-title">{services[detail].title}</h2>
              <p>{services[detail].detail}</p>

              <div className="detail-meta-pills">
                <span className="detail-meta-pill">
                  <Icon name="clock" size={13} /> {services[detail].duration}
                </span>
                {services[detail].idealFor.map((item) => (
                  <span className="detail-meta-pill" key={item}>
                    <Icon name="check" size={12} /> {item}
                  </span>
                ))}
              </div>

              <div className="form-comfort-title">
                What to Expect During Your Visit
              </div>
              <div className="detail-steps">
                {services[detail].steps.map((step, idx) => (
                  <div className="detail-step-item" key={step}>
                    <span className="detail-step-num">{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <button
                className="button"
                style={{ width: "100%", marginTop: "14px" }}
                onClick={() => openBooking(services[detail].title)}
              >
                Book this treatment <Icon name="arrow" size={16} />
              </button>
            </section>
          )}

          {/* Gallery Lightbox Modal */}
          {lightbox !== null && (
            <section
              className="modal lightbox-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                aria-label="Close dialog"
                autoFocus
                onClick={() => setLightbox(null)}
              >
                <Icon name="close" size={18} />
              </button>

              {(() => {
                const item = galleryItems.find((g) => g.id === lightbox)
                if (!item) return null
                return (
                  <div>
                    <img
                      className="lightbox-image"
                      src={item.photo}
                      alt={item.title}
                    />
                    <div className="lightbox-info">
                      <span
                        className="gallery-card-tag"
                        style={{ color: "244e3e", background: "e8ede0" }}
                      >
                        {item.categoryLabel}
                      </span>
                      <h3 id="lightbox-title">{item.title}</h3>
                      <p>{item.desc}</p>
                    </div>
                    <button
                      className="button"
                      style={{ marginTop: "18px" }}
                      onClick={() => openBooking()}
                    >
                      Experience Bloom in person <Icon name="arrow" size={16} />
                    </button>
                  </div>
                )
              })()}
            </section>
          )}

          {/* Booking Appointment Modal */}
          {booking && (
            <section
              className="modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                aria-label="Close dialog"
                autoFocus
                onClick={() => setBooking(false)}
              >
                <Icon name="close" size={18} />
              </button>

              {submitted ? (
                <>
                  <span
                    className="service-icon"
                    style={{ background: "e3ebd7" }}
                  >
                    <Icon name="check" size={28} />
                  </span>
                  <div className="eyebrow" style={{ marginTop: "14px" }}>
                    RESERVATION REQUEST PREPARED
                  </div>
                  <h2 id="modal-title">A lovely first step.</h2>
                  <p>
                    Thank you, {patientName || "friend"}! Your appointment
                    request has been prepared. Our team will contact you within
                    2 business hours to confirm your visit.
                  </p>

                  <div className="booking-confirmed-card">
                    <div className="confirmed-row">
                      <span>Care Service:</span>
                      <strong>
                        {selectedService || "First visit / Check-up"}
                      </strong>
                    </div>
                    {selectedDoctor && (
                      <div className="confirmed-row">
                        <span>Preferred Doctor:</span>
                        <strong>{selectedDoctor}</strong>
                      </div>
                    )}
                    {selectedDate && (
                      <div className="confirmed-row">
                        <span>Preferred Date:</span>
                        <strong>{selectedDate}</strong>
                      </div>
                    )}
                    <div className="confirmed-row">
                      <span>Time Preference:</span>
                      <strong>{selectedSlot}</strong>
                    </div>
                    {patientEmail && (
                      <div className="confirmed-row">
                        <span>Confirmation Email:</span>
                        <strong>{patientEmail}</strong>
                      </div>
                    )}
                  </div>

                  <a
                    className="button"
                    href="tel:+14155550128"
                    style={{ width: "100%" }}
                  >
                    <Icon name="phone" size={17} /> Call our front desk: (415)
                    555-0128
                  </a>
                </>
              ) : (
                <>
                  <div className="eyebrow">LET&apos;S FIND YOUR SMILE</div>
                  <h2 id="modal-title">Your first visit starts here.</h2>
                  <p>
                    Tell us about your smile goals and preferred timing. We will
                    take care of the rest.
                  </p>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                  >
                    <div className="form-row">
                      <label>
                        Your full name
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          placeholder="e.g. Clara Oswald"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                        />
                      </label>

                      <label>
                        Phone number
                        <input
                          required
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          placeholder="(415) 555-0199"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                        />
                      </label>
                    </div>

                    <label>
                      Email address
                      <input
                        required
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        value={patientEmail}
                        onChange={(e) => setPatientEmail(e.target.value)}
                      />
                    </label>

                    <div className="form-row">
                      <label>
                        I would like to explore
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="First visit / Comprehensive Exam">
                            First visit / Comprehensive Exam
                          </option>
                          {services.map((s) => (
                            <option key={s.title} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Same-Day Emergency Triage">
                            Same-Day Emergency Triage
                          </option>
                        </select>
                      </label>

                      <label>
                        Preferred doctor
                        <select
                          value={selectedDoctor}
                          onChange={(e) => setSelectedDoctor(e.target.value)}
                        >
                          <option value="">
                            No preference / First available
                          </option>
                          {doctors.map((d) => (
                            <option key={d.name} value={d.name}>
                              {d.name}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>

                    <div className="form-row">
                      <label>
                        Preferred date
                        <input
                          required
                          type="date"
                          min={new Date().toLocaleDateString("en-CA")}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </label>

                      <label>
                        Preferred time slot
                        <select
                          value={selectedSlot}
                          onChange={(e) => setSelectedSlot(e.target.value)}
                        >
                          <option value="Morning (8:00 AM – 11:00 AM)">
                            Morning (8:00 AM – 11:00 AM)
                          </option>
                          <option value="Midday (11:00 AM – 2:00 PM)">
                            Midday (11:00 AM – 2:00 PM)
                          </option>
                          <option value="Afternoon (2:00 PM – 6:00 PM)">
                            Afternoon (2:00 PM – 6:00 PM)
                          </option>
                        </select>
                      </label>
                    </div>

                    <div>
                      <div className="form-comfort-title">
                        Comfort & Amenity Preferences (Optional)
                      </div>
                      <div
                        className="form-comfort-options"
                        style={{ marginTop: "8px" }}
                      >
                        <label className="comfort-checkbox-label">
                          <input type="checkbox" />
                          <span>Noise-cancelling headphones</span>
                        </label>
                        <label className="comfort-checkbox-label">
                          <input type="checkbox" />
                          <span>Weighted fleece blanket</span>
                        </label>
                        <label className="comfort-checkbox-label">
                          <input type="checkbox" />
                          <span>I experience dental anxiety</span>
                        </label>
                        <label className="comfort-checkbox-label">
                          <input type="checkbox" />
                          <span>Herbal calming aromatherapy</span>
                        </label>
                      </div>
                    </div>

                    <button
                      className="button"
                      type="submit"
                      style={{ marginTop: "6px" }}
                    >
                      Request an appointment <Icon name="arrow" size={17} />
                    </button>
                    <small className="form-note">
                      Demo booking experience. No private health information is
                      stored or transmitted.
                    </small>
                  </form>
                </>
              )}
            </section>
          )}
        </div>
      )}
    </>
  )
}
