import { useState, useEffect } from "react";
import {
  Clock,
  MapPin,
  Star,
  ChevronDown,
  Phone,
  MessageCircle,
  ExternalLink,
  HelpCircle,
  Check,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import WhatsAppLink from "./components/WhatsAppLink";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuUtama = [
    {
      name: "Bakso Biasa",
      price: "Rp 10.000",
      desc: "Bakso babi kenyal pilihan disajikan dalam kuah kaldu bening yang gurih. Simple, nikmat, dan bikin nagih!",
      badge: null,
      image: "/images/bakso_biasa.webp",
      imgBg: "bg-warm-100",
    },
    {
      name: "Bakso Balung Biasa",
      price: "Rp 10.000",
      desc: "Menu basic legendaris. Kombinasi bakso babi kenyal berpadu sempurna dengan kuah kaldu hangat dan balung babi pilihan.",
      badge: null,
      image: "/images/bakso_balung_biasa.webp",
      imgBg: "bg-warm-50",
    },
    {
      name: "Balung Biasa",
      price: "Rp 15.000",
      desc: "Porsi khusus buat kamu yang pengen fokus menikmati kelembutan daging balung babi yang gurih tanpa bakso.",
      badge: null,
      image: "/images/balung_biasa.webp",
      imgBg: "",
    },
    {
      name: "Bakso Balung Beranak",
      price: "Rp 20.000",
      desc: "Kombinasi super puas! Bakso jumbo isi daging cincang + telur puyuh + limpahan balung ekstra empuk.",
      badge: "Best Seller",
      image: "/images/bakso_balung_beranak+coloring.webp",
      imgBg: "bg-teal-600",
    },
    {
      name: "Bakso Balung Spesial",
      price: "Rp 20.000",
      desc: "Varian eksklusif untuk pencinta kuliner babi sejati. Porsi balung pilihan dan tetelan melimpah memanjakan lidah.",
      badge: "Spesial",
      image: "/images/bakso_balung_spesial+coloring.webp",
      imgBg: "bg-warm-100",
    },
  ];

  const menuTambahan = [
    { name: "Rujak Bali", price: "Rp 6.000" },
    { name: "Tipat Cantok", price: "Rp 7.000" },
  ];

  const minuman = [
    { name: "Teh (Panas/Dingin)", price: "Rp 5.000", badge: null },
    { name: "Jeruk (Panas/Dingin)", price: "Rp 5.000", badge: null },
    { name: "Es Temulawak", price: "Rp 5.000", badge: "Tradisional" },
    { name: "Es Teh Botol", price: "Rp 5.000", badge: null },
    { name: "Es Gula", price: "Rp 5.000", badge: null },
    { name: "Air Mineral (Aqua)", price: "Rp 5.000", badge: null },
    { name: "Es Buah", price: "Rp 7.000", badge: null },
    { name: "Es Juice", price: "Rp 7.000", badge: null },
  ];

  const testimonials = [
    {
      name: "Putu Dian",
      rating: 5,
      text: "Bakso non halal ya guyss, bakso babi dengan balung.. Saya pesan bakso balung beranak dapat satu bakso sedang satu bakso beranak yang didalamnya ada daging cincang, telur puyuh, dan satu bakso kecil.. Rasa kuahnya gurih, daging baksonya lembut dan tidak alot.. Untuk lokasinya ada dipinggir jalan dengan pemandangan sawah.",
    },
    {
      name: "Mocca __29",
      rating: 5,
      text: "Pertama kali kesini rasa baksonya enakk banget, suasana nyaman dan sejuk.. Harganya murah bin banget, makan bertiga sama anak cuma habis 57rb doang, sudah dapat bakso, snack, es, rujak dan yg lainnya... Rekomended buat yang suka lewat area ini.",
    },
    {
      name: "Gek Diwa",
      rating: 5,
      text: "Suasananya nyaman, makanan enak.. enak banget... Harga sangat murah... Recomend untuk bakso balung dengan citarasa khas bumbu bali... Perfect.",
    },
    {
      name: "Anton",
      rating: 5,
      text: "Rasa baksonya enak! Dengan tambahan daging dan paru. Harga hanya 15k untuk bakso beranak dan 10k untuk bakso biasa.",
    },
    {
      name: "Mei Nissa",
      rating: 4,
      text: "Rasanya enak banget banget, penjual sangat ramah, harga makanan juga tidak ada yang mahal. Semua masih harga wajar... Pertahankan kualitas dan rasa!",
    },
    {
      name: "Naomi Yurika",
      rating: 5,
      text: "Makanan enak, karyawan ramah.",
    },
  ];

  const faqs = [
    {
      q: "Apakah menu di Bakso Balung Majesty halal?",
      a: "Semua menu utama kami 100% Non-Halal karena menggunakan daging dan kaldu babi murni khas bumbu Bali.",
    },
    {
      q: "Apakah bisa memesan secara online?",
      a: "Bisa! Kami sudah tersedia di GoFood, GrabFood, dan ShopeeFood. Cukup cari: Bakso Balung Majesty.",
    },
    {
      q: "Apa bedanya Bakso Balung Beranak dan Spesial?",
      a: "Beranak fokus pada sensasi bakso jumbo isi daging cincang + telur puyuh, sedangkan Spesial fokus pada porsi potongan balung babi pilihan dan tetelan melimpah.",
    },
    {
      q: "Apakah melayani pesanan porsi besar / acara?",
      a: "Ya, kami menerima pesanan katering untuk odalan, syukuran, atau ulang tahun. Hubungi WA kami minimal H-3.",
    },
  ];

  return (
    <div className="min-h-screen bg-warm-50 font-body text-dark-800">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/96 backdrop-blur-md shadow-lg shadow-primary-900/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.webp"
                alt="Bakso Balung Majesty"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-gold-400 shadow-lg"
              />
              <div>
                <h1
                  className={`font-display font-bold text-lg md:text-xl transition-colors ${isScrolled ? "text-dark-900" : "text-white"}`}
                >
                  Bakso Balung
                </h1>
                <p
                  className={`text-xs font-bold tracking-wide -mt-0.5 transition-colors ${isScrolled ? "text-primary-600" : "text-gold-300"}`}
                >
                  MAJESTY
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {[
                ["Menu", "menu"],
                ["Testimoni", "testimoni"],
                ["Lokasi", "lokasi"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className={`font-semibold transition-colors hover:text-primary-500 ${isScrolled ? "text-dark-600" : "text-white/90"}`}
                >
                  {label}
                </a>
              ))}
              <WhatsAppLink
                message={
                  "Halo, saya ingin bertanya tentang menu Bakso Balung Majesty"
                }
                className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-600/30"
              >
                <MessageCircle className="w-4 h-4" />
                Hubungi Kami
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 8deg, rgba(255,255,255,0.08) 8deg, rgba(255,255,255,0.08) 10deg)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-primary-900/40 to-primary-950/30" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gold-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
          <div className="inline-flex items-center gap-2 bg-dark-900/80 backdrop-blur-sm border border-gold-500/40 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-gold-300 font-bold text-sm tracking-wider">
              NON-HALAL
            </span>
            <span className="text-white/60 text-sm">|</span>
            <span className="text-white/80 text-sm">
              100% Kuliner Babi Khas Bali
            </span>
          </div>

          <div className="flex justify-center mb-6">
            <img
              src="/Logo.webp"
              alt="Bakso Balung Majesty Logo"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-gold-400 shadow-2xl shadow-gold-500/30 animate-float"
            />
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Juara Gurihnya, Rajanya
            <br />
            <span className="bg-gradient-to-r from-gold-300 via-orange-400 to-gold-400 bg-clip-text text-transparent">
              Bakso Balung Babi
            </span>
            <br />
            di Abiansemal!
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-3xl mx-auto mb-8 leading-relaxed">
            Nikmati sensasi kuah kaldu babi murni yang kental, gurih alami,
            dipadukan dengan kelembutan daging bakso pilihan dan balung babi
            yang melimpah.{" "}
            <span className="text-gold-300 font-semibold">
              Sekali coba, langsung ketagihan!
            </span>
          </p>

          <div className="flex items-center justify-center gap-2 text-white/60 mb-10">
            <Clock className="w-5 h-5 text-gold-400" />
            <span className="text-base">
              Buka Setiap Hari:{" "}
              <strong className="text-white">10.00 – 22.00 WITA</strong>
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="group bg-gradient-to-r from-orange-500 to-primary-600 hover:from-orange-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:shadow-2xl hover:shadow-primary-700/40 hover:scale-105"
            >
              Lihat Menu Premium
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#lokasi"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/25 hover:border-gold-400/60 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:bg-white/15"
            >
              <MapPin className="w-5 h-5 text-gold-300" />
              Petunjuk Arah
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-950 to-dark-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 rounded-full px-4 py-2 mb-4 border border-gold-500/30">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-sm tracking-wide">
                MENU PALING DICARI
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Bakso Balung Beranak <span className="text-gold-400">👑</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Sensasi makan bakso yang luar biasa! Bakso babi berukuran jumbo
              dengan kejutan spesial di dalamnya.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative bg-teal-700 flex items-center justify-center overflow-hidden min-h-[280px]">
                  <img
                    src="/images/bakso_balung_beranak+coloring.webp"
                    alt="Bakso Balung Beranak"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-gradient-to-r from-orange-500 to-primary-600 text-white px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-1.5 shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Best Seller
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gold-500/20 text-gold-300 border border-gold-500/30 px-3 py-1 rounded-full text-sm font-medium">
                        Daging Cincang
                      </span>
                      <span className="bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1 rounded-full text-sm font-medium">
                        Telur Puyuh
                      </span>
                      <span className="bg-primary-500/20 text-primary-300 border border-primary-500/30 px-3 py-1 rounded-full text-sm font-medium">
                        Balung Empuk
                      </span>
                    </div>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Bakso jumbo berisi kejutan daging cincang premium, telur
                      puyuh, dan bakso kecil. Disajikan lengkap dengan potongan
                      balung babi yang empuk dan kuah kaldu super gurih.
                    </p>
                    <div className="items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="text-white/40 text-sm">Hanya</p>
                        <p className="text-3xl font-bold text-gold-400  mb-4">
                          Rp 20.000
                        </p>
                      </div>
                      <WhatsAppLink
                        message={"Halo, saya ingin pesan Bakso Balung Beranak"}
                        className="bg-gradient-to-r from-orange-500 to-primary-600 hover:from-orange-600 hover:to-primary-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary-600/30"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Pesan Sekarang
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
              <ShoppingBag className="w-4 h-4" />
              <span className="font-semibold text-sm">Menu Lengkap</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Pilihan Menu Kami
            </h2>
            <p className="text-lg text-dark-600">
              Dari yang basic legendaris hingga varian eksklusif
            </p>
          </div>

          {/* Menu Utama Cards */}
          <div className="mb-16">
            <h3 className="flex items-center gap-3 text-2xl font-bold text-dark-900 mb-8">
              <span className="bg-primary-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg">
                🐷
              </span>
              Menu Utama (Bakso &amp; Balung)
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {menuUtama.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-warm-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary-100/60 transition-all duration-300 hover:border-primary-200 flex flex-row"
                >
                  {/* Image — fixed width on left */}
                  <div
                    className={`relative w-36 flex-shrink-0 ${item.imgBg || "bg-gradient-to-br from-warm-100 to-warm-200"} flex items-center justify-center overflow-hidden`}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-5xl opacity-25">🍖</span>
                    )}
                    {item.badge && (
                      <div className="absolute top-2 left-0 right-0 flex justify-center">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold shadow-md ${
                            item.badge === "Best Seller"
                              ? "bg-gradient-to-r from-orange-500 to-primary-600 text-white"
                              : "bg-gradient-to-r from-gold-500 to-orange-500 text-white"
                          }`}
                        >
                          {item.badge === "Best Seller" && (
                            <Star className="w-3 h-3 fill-current" />
                          )}
                          {item.badge}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text — fills remaining width on right */}
                  <div className="flex flex-col flex-1 p-4 min-w-0">
                    <h4 className="font-bold text-base text-dark-900 mb-1 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-dark-500 text-xs leading-relaxed flex-1">
                      {item.desc}
                    </p>
                    <div className="mt-3 pt-3 border-t border-warm-100 flex items-center justify-between gap-2">
                      <span className="text-xl font-bold text-primary-600 whitespace-nowrap">
                        {item.price}
                      </span>
                      <WhatsAppLink
                        message={`Halo, saya ingin pesan ${item.name}`}
                        className="text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 border border-primary-200 px-3 py-1.5 rounded-full font-semibold transition-colors flex items-center gap-1 whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Pesan
                      </WhatsAppLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Menu Tambahan */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-dark-900 mb-6">
                <span className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg">
                  🥗
                </span>
                Menu Tambahan
              </h3>
              <div className="space-y-3">
                {menuTambahan.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white border border-warm-200 rounded-xl px-5 py-4 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <span className="font-semibold text-dark-800">
                      {item.name}
                    </span>
                    <span className="text-primary-600 font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minuman */}
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-dark-900 mb-6">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg">
                  🍹
                </span>
                Pilihan Minuman
              </h3>
              <div className="space-y-3">
                {minuman.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center bg-white border border-warm-200 rounded-xl px-5 py-4 hover:border-primary-200 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-dark-800">
                        {item.name}
                      </span>
                      {item.badge && (
                        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-primary-600 font-bold">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-green-600/30"
            >
              <ExternalLink className="w-5 h-5" />
              GoFood
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-green-500/30"
            >
              <ExternalLink className="w-5 h-5" />
              GrabFood
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-full font-bold transition-all hover:shadow-xl hover:shadow-orange-500/30"
            >
              <ExternalLink className="w-5 h-5" />
              ShopeeFood
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimoni"
        className="py-20 md:py-28 bg-gradient-to-br from-primary-950 via-dark-900 to-primary-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-300 rounded-full px-4 py-2 mb-4 border border-gold-500/30">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-sm tracking-wide">
                ULASAN GOOGLE MAPS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-white/50">
              Ulasan jujur apa adanya langsung dari pelanggan setia kami
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? "text-gold-400 fill-current" : "text-gray-600"}`}
                    />
                  ))}
                  <span className="ml-2 text-white/40 text-sm">
                    {item.rating}.0
                  </span>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {item.name[0]}
                  </div>
                  <span className="font-semibold text-white">{item.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://maps.google.com/?q=Bakso+Balung+Majesty+Abiansemal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-gold-400/30 text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Lihat Semua Ulasan di Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
              <HelpCircle className="w-4 h-4" />
              <span className="font-semibold text-sm">FAQ</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-warm-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <span className="font-semibold text-lg text-dark-900 leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeFaq === idx
                        ? "bg-primary-600 text-white rotate-180"
                        : "bg-warm-100 text-dark-600"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ${
                    activeFaq === idx
                      ? "max-h-64 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="flex items-start gap-3 pt-4 border-t border-warm-100">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-dark-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="lokasi" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="font-semibold text-sm">Lokasi Kami</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-dark-900 mb-4">
              Mampir ke Kedai Kami!
            </h2>
            <p className="text-lg text-dark-600">
              Dua lokasi yang mudah dijangkau di kawasan Abiansemal
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 text-white overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 8deg, rgba(255,255,255,0.15) 8deg, rgba(255,255,255,0.15) 10deg)",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-gold-400/30 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold mb-5 text-gold-200 border border-gold-400/30">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Cabang Utama
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Bakso Balung Majesty
                </h3>
                <p className="text-white/80 mb-5 leading-relaxed">
                  Jl. Raya Angantaka - Sibang Gede, Angantaka, Kec. Abiansemal,
                  Kabupaten Badung, Bali 80352
                </p>
                <div className="flex items-center gap-2 text-white/60 mb-6 text-sm">
                  <MapPin className="w-4 h-4" />
                  Plus Code: C6CF+59C
                </div>
                <a
                  href="https://maps.google.com/?q=C6CF+59C+Abiansemal+Bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary-700 px-5 py-2.5 rounded-full font-bold hover:bg-gold-50 transition-colors shadow-lg"
                >
                  <MapPin className="w-4 h-4" />
                  Buka Google Maps
                </a>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl p-8 text-white overflow-hidden border border-white/5">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #f59e0b 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold mb-5 text-white/70 border border-white/15">
                  <MapPin className="w-3.5 h-3.5" />
                  Cabang Kedua
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                  Bakso Balung Majesty Jr.
                </h3>
                <p className="text-white/80 mb-5 leading-relaxed">
                  Jl. Raya Sibanggede, Darmasaba, Kec. Abiansemal, Kabupaten
                  Badung, Bali 80352
                </p>
                <div className="flex items-center gap-2 text-white/60 mb-6 text-sm">
                  <MapPin className="w-4 h-4" />
                  Plus Code: C688+G3R
                </div>
                <a
                  href="https://maps.google.com/?q=C688+G3R+Darmasaba+Bali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-full font-bold transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Buka Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-600 to-orange-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-conic-gradient(from 0deg, transparent 0deg, transparent 8deg, rgba(255,255,255,0.15) 8deg, rgba(255,255,255,0.15) 10deg)",
          }}
        />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Siap Menikmati Sensasi Gurih Tak Terlupakan?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Langsung datang ke kedai kami atau pesan online via GoFood,
            GrabFood, dan ShopeeFood!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <WhatsAppLink
              message={
                "Halo, saya ingin bertanya tentang menu Bakso Balung Majesty"
              }
              className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all hover:shadow-2xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Chat via WhatsApp
            </WhatsAppLink>
            <a
              href="tel:+6287760216223"
              className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all"
            >
              <Phone className="w-5 h-5" />
              Telepon
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/Logo.jpeg"
                alt="Bakso Balung Majesty"
                className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/50"
              />
              <div>
                <h3 className="font-display font-bold text-xl">
                  Bakso Balung Majesty
                </h3>
                <p className="text-white/40 text-sm">
                  Gurihnya Nampol, Balungnya Mantap!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white/50">
              {["menu", "testimoni", "lokasi"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="capitalize hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/30 text-sm">
            &copy; 2026 Bakso Balung Majesty. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
