export function About() {
  return (
    <section id="about">
      <div className="si">
        <span className="stag">Who We Are</span>
        <h2 className="stitle">Aeon8 Systems - Company Overview</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Aeon8 Systems is a deep-tech cybersecurity company based in Gurugram, Haryana, India. We
              sit at the intersection of kernel engineering, applied machine learning, and sovereign
              infrastructure - building tools that work where foreign SaaS is not an option.
            </p>
            <p>
              We operate two arms: a product engineering team building Aeon Sentinel (an
              eBPF/XDP-native network enforcement platform) and an education institute, Aeon8 Academy,
              delivering hands-on cybersecurity and software training from Gurugram.
            </p>
            <p>
              Our engineering philosophy is Rust-first for performance-critical paths, Python plus ONNX
              for ML inference, and enterprise-first private deployment. Every product we ship must run
              completely offline where required.
            </p>
            <p className="mission">Mission: Secure. Empower. Sovereign.</p>
          </div>
          <div className="about-stats">
            <div className="astat">
              <span className="astat-n">2026</span>
              <span className="astat-l">Founded</span>
            </div>
            <div className="astat">
              <span className="astat-n">v1 beta</span>
              <span className="astat-l">Sentinel</span>
            </div>
            <div className="astat">
              <span className="astat-n">Private</span>
              <span className="astat-l">Enterprise Product</span>
            </div>
            <div className="astat">
              <span className="astat-n">Batch 1</span>
              <span className="astat-l">Academy Launch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
