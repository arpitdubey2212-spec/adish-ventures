export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-adish-green to-adish-dark py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-serif font-bold text-white mb-4">
            Our Story
          </h1>
          <p className="text-xl text-adish-beige max-w-2xl">
            Bridging 2,000 years of Himalayan wisdom with modern performance science
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-adish-dark mb-8">
            The Philosophy
          </h2>
          <div className="space-y-6 text-lg text-adish-green leading-relaxed">
            <p>
              <strong className="text-adish-dark">Adish Ventures</strong> is built on a singular belief: nature holds the most profound answers to modern health challenges.
            </p>
            <p>
              For 2,000 years, Himalayan herders discovered that Cordyceps Militaris delivered something extraordinary—sustained energy without collapse, clarity without stimulant jitters, vitality at the systemic level.
            </p>
            <p>
              Today, we're not chasing wellness trends. We're curating them through science. Every product is engineered for measurable biological outcomes using dual-extract methodology that captures both water-soluble and fat-soluble bioactives.
            </p>
          </div>
        </div>
      </section>

      {/* Values with Image */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #e8dcc8 0%, #f5f1e8 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-8">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Built on three foundational pillars: Purity in sourcing, Purpose in outcomes, and Potency in formulation. Every product embodies this architecture.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/about/architecture.png"
                alt="The Foundational Architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border-l-4 border-yellow-600 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purity</h3>
              <p className="text-gray-700">
                Zero unnecessary additives, fillers, or compromises in sourcing. Unadulterated botanical material, engineered for maximum potency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-green-700 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Purpose</h3>
              <p className="text-gray-700">
                A rigorous commitment to physiological health outcomes, rejecting superficial wellness aesthetics in favor of real, measurable efficacy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg border-l-4 border-blue-600 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Potency</h3>
              <p className="text-gray-700">
                Engineered formulations designed for real, measurable biological effect. Every compound selected for synergistic intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-adish-dark mb-8">
            The Science Behind Dual-Extract Technology
          </h2>
          <div className="bg-adish-beige p-8 rounded-lg mb-8">
            <p className="text-adish-green text-lg leading-relaxed mb-6">
              While most cordyceps supplements use single-extract methodology (capturing only water-soluble or fat-soluble compounds), our dual-extract honors the complete biochemical intelligence of Cordyceps Militaris.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-adish-dark mb-3">Hot Water Extraction</h4>
                <p className="text-adish-green text-sm">
                  Captures Beta-D-glucans and immune-modulating polysaccharides. Essential for bidirectional immune regulation.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-adish-dark mb-3">Alcohol Extraction</h4>
                <p className="text-adish-green text-sm">
                  Captures Cordycepin, Adenosine, and key metabolic actives. Drives ATP synthesis and energy metabolism.
                </p>
              </div>
            </div>
          </div>
          <p className="text-adish-green text-lg">
            The result: A full-spectrum tincture that honors the entire biochemical profile of nature's most potent adaptogen.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 bg-adish-green text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-adish-beige leading-relaxed mb-8">
            To deliver elite botanical performance tools backed by rigorous science and 2,000 years of traditional knowledge. Not for wellness trends—for those seeking real, measurable vitality.
          </p>
          <div className="inline-block bg-adish-gold text-adish-dark px-8 py-4 rounded-lg font-bold">
            In a market hungry for authenticity, scientific integrity, and natural efficacy, Adish Ventures is positioned not just to compete, but to lead.
          </div>
        </div>
      </section>

      {/* The Cordyceps Advantage */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-adish-dark mb-12 text-center">
            The Cordyceps Advantage
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-adish-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-adish-dark mb-6">For Athletes</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Enhanced VO2 max and endurance capacity</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Improved lactate threshold and recovery</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Natural energy without stimulant jitters</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Supports muscle recovery and adaptation</span>
                </li>
              </ul>
            </div>

            <div className="bg-adish-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-adish-dark mb-6">For Knowledge Workers</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Sustained cognitive endurance for deep work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Eliminates brain fog and mental fatigue</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Enhanced focus and attention span</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Stress resilience and emotional balance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-adish-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-adish-dark mb-6">For Wellness Seekers</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Immune system optimization and resilience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Respiratory health and oxygen utilization</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Metabolic balance and energy regulation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-gold font-bold">✓</span>
                  <span className="text-adish-green">Holistic vitality and longevity support</span>
                </li>
              </ul>
            </div>

            <div className="bg-adish-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-adish-dark mb-6">Our Promise</h3>
              <p className="text-adish-green leading-relaxed mb-4">
                Every product we create is engineered with three commitments:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-adish-dark font-bold">1.</span>
                  <span className="text-adish-green"><strong>Scientific Rigor:</strong> Backed by research, not marketing claims</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-dark font-bold">2.</span>
                  <span className="text-adish-green"><strong>Purity:</strong> Zero fillers, zero compromises in sourcing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-adish-dark font-bold">3.</span>
                  <span className="text-adish-green"><strong>Results:</strong> Measurable, real biological outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
