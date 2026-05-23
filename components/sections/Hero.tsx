export function Hero() {
  return (
    <section className="hero">
      <span className="badge">Est. 2026 - Gurugram, India</span>
      <h1>
        We Build <em>Sovereign Security</em>
        <br />
        for Critical Infrastructure
      </h1>
      <p className="hero-sub">
        Aeon8 Systems is a kernel-level network security company and cybersecurity education institute
        developing eBPF/XDP enforcement platforms and training India&apos;s next generation of security
        engineers.
      </p>
      <div className="hero-ctas">
        <a href="#products" className="cta-pri">
          Our Products
        </a>
        <a href="#contact" className="cta-sec">
          Request Demo
        </a>
      </div>
      <div className="stat-bar">
        <div className="stat">
          <span className="stat-n">
            less than <span>1us</span>
          </span>
          <span className="stat-l">XDP Enforcement</span>
        </div>
        <div className="stat">
          <span className="stat-n">
            22<span>-feat</span>
          </span>
          <span className="stat-l">ONNX ML Model</span>
        </div>
        <div className="stat">
          <span className="stat-n">
            0<span> Cloud</span>
          </span>
          <span className="stat-l">Fully Air-Gapped</span>
        </div>
        <div className="stat">
          <span className="stat-n">
            Enterprise<span> Ready</span>
          </span>
          <span className="stat-l">Private Product</span>
        </div>
      </div>
    </section>
  );
}
