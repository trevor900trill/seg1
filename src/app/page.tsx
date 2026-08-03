import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#1a1c1d] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#bba373] via-[#2c3031] to-black"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="text-[#bba373] tracking-[0.2em] text-sm uppercase font-bold mb-4 block">The Classic Legacy</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f5f1e8] mb-6 leading-tight">An Invitation to Define Your Legacy in Africa</h1>
          <a href="#contact" className="inline-block mt-8 border border-[#bba373] text-[#bba373] hover:bg-[#bba373] hover:text-[#1a1c1d] transition-all px-8 py-3 tracking-widest uppercase text-sm">
            Curate Your Journey
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#bba373] mb-8">A Journey Beyond Luxury</h2>
        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
          This is not a safari. This is a life-defining, 13-day odyssey curated for the world’s most discerning travelers. 
          <span className="font-semibold text-foreground"> The Classic Legacy </span> 
          blends ultra-luxury movement across four iconic African nations with a profound, measurable impact on the communities and landscapes you will encounter. It is an exclusive narrative of seamless private aviation, unparalleled access, and a legacy purpose woven into every experience.
        </p>
      </section>

      {/* The Journey Arc */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#bba373] mb-4">The Journey Arc</h2>
            <p className="tracking-widest uppercase text-sm text-foreground/60 font-semibold">13 Days | Masai Mara • Ngorongoro Crater • Cape Town • Winelands • Sossusvlei • Nairobi Gala Finale</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { country: "Kenya", location: "Maasai Mara", desc: "Drift in silence over the golden plains at dawn, followed by a champagne breakfast in the bush." },
              { country: "Tanzania", location: "Ngorongoro Crater", desc: "Enjoy a private, chef-prepared lunch on the floor of this UNESCO World Heritage Site, the world's largest intact caldera." },
              { country: "South Africa", location: "Robben Island Heritage", desc: "A profoundly moving private tour beyond public hours, offering quiet reflection at this symbol of triumph." },
              { country: "South Africa", location: "Winelands", desc: "Become a vintner for a day at a premier estate, blending and bottling your own signature wine with a master." },
              { country: "Namibia", location: "Sossusvlei", desc: "Witness the cosmos from the world's darkest skies with an astronomer, followed by a private sunrise ascent of Sossusvlei's legendary dunes." },
              { country: "Kenya", location: "Nairobi Gala Finale", desc: "Conclude your journey with an exclusive, private gala dinner in Nairobi, celebrating your legacy and the connections forged across the continent." }
            ].map((stop, idx) => (
              <div key={idx} className="border-t border-[#bba373]/30 pt-6">
                <span className="text-xs tracking-widest text-foreground/50 uppercase block mb-2">{stop.country}</span>
                <h3 className="text-2xl font-serif text-[#2c3031] mb-4">{stop.location}</h3>
                <p className="text-foreground/80">{stop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Moments */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#bba373] mb-16">Curated Signature Moments</h2>
        <div className="space-y-12">
          {[
            { title: "Private Aviation", desc: "Journey exclusively via private jet and helicopters, turning vast distances into moments of scenic luxury." },
            { title: "Signature “Legacy Lens” Experiences", desc: "Private balloon flights, star-bedding, after-hours museum access, heritage encounters you cannot purchase — unless you’re here." },
            { title: "Exclusive Lodge Portfolio", desc: "Your sanctuary at each stop is among Africa's finest, including iconic properties like Angama Mara, Ellerman House, and &Beyond lodges." },
            { title: "Curated Cultural Access", desc: "Move beyond tourism with private audiences. Engage with Maasai elders, renowned local artists, and legendary vintners in intimate, meaningful exchanges." },
            { title: "A Dedicated Explorations Team", desc: "Elite travel designers + expert local hosts + private guides orchestrating excellence with quiet precision." },
            { title: "Purpose Built In", desc: "Every journey directly supports local conservation, heritage protection, and community advancement — Verified Impact, not charity optics." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-4 md:gap-8 items-baseline">
              <h3 className="text-xl md:text-2xl font-serif text-[#2c3031] md:w-1/3 shrink-0">{item.title}</h3>
              <p className="text-foreground/80 md:w-2/3 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Legacy */}
      <section className="bg-[#bba373] text-[#2c3031] py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">The Legacy</h2>
          <p className="text-xl mb-12 leading-relaxed font-medium">
            The Classic Legacy is designed to leave a permanent, positive mark. A dedicated $5,000 contribution per guest is seamlessly integrated into your journey, directly funding initiatives in:
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {["Clean Water & Sanitation", "Women's Economic Empowerment", "Wildlife Conservation"].map((impact, i) => (
              <span key={i} className="border border-[#2c3031] px-6 py-2 uppercase tracking-widest text-sm font-bold bg-[#f5f1e8]/20">{impact}</span>
            ))}
          </div>
          <p className="text-lg italic font-serif">
            You will receive a personalized Impact Report and the dedication of a tangible project element in your name, ensuring your journey's legacy endures.
          </p>
        </div>
      </section>

      {/* Invitation Only */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-[#bba373] mb-6">An Invitation-Only Experience</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">
          This journey is offered on a strictly invitation-only basis, limited to 2-6 private guests. It is not advertised, promoted, or available for public booking. Access is granted exclusively by referral or direct invitation from our inner circle.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
