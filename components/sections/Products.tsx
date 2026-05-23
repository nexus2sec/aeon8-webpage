export function Products() {
  return (
    <section id="products" className="products-sec">
      <div className="si">
        <span className="stag">Our Products</span>
        <h2 className="stitle">Two Pillars of Aeon8</h2>
        <p className="sdesc">
          A kernel-grade enforcement platform and a world-class cybersecurity training institute built
          under one roof.
        </p>
        <div className="prod-grid">
          <div className="prod-card c-orange">
            <div className="picon o">S</div>
            <h3>
              Aeon Sentinel <span className="prod-tag tag-beta">v1 beta</span>
            </h3>
            <p>
              India&apos;s first eBPF/XDP-native autonomous network enforcement engine. Runs in the Linux
              kernel with sub-microsecond packet decisions and zero cloud dependency.
            </p>
            <ul className="feat-list">
              <li>XDP/eBPF enforcement at NIC with less than 1us drop latency</li>
              <li>Rust detection engine (PyO3) plus ONNX ML inference (22 features)</li>
              <li>P2P gossip mesh via QUIC for swarm-wide ban propagation</li>
              <li>TLS 1.3 JA3 fingerprinting for C2 malware detection</li>
              <li>MISP and CSV offline threat intel integration</li>
              <li>Air-gapped deployment and CERT-In aligned operations</li>
            </ul>
            <div className="prod-links">
              <a href="#contact" className="plink lo">
                Request Enterprise Access
              </a>
              <a href="#contact" className="plink lt">
                Request Pilot
              </a>
            </div>
          </div>
          <div className="prod-card c-teal">
            <div className="picon t">A</div>
            <h3>
              Aeon8 Academy <span className="prod-tag tag-soon">Batch 1: Q3 2026</span>
            </h3>
            <p>
              Hands-on cybersecurity and software engineering training spanning kernel security,
              eBPF, network forensics, ML threat detection, ICS/SCADA, and Red Team tracks.
            </p>
            <ul className="feat-list">
              <li>Frontend, Backend, Database, and Full-Stack engineering tracks</li>
              <li>AI and ML app development plus secure software engineering</li>
              <li>Cybersecurity: SOC, forensics, pentesting, and ICS/SCADA</li>
              <li>Global certifications: CompTIA, EC-Council, Cisco, AWS, OffSec</li>
              <li>Kernel security and eBPF/XDP live lab course</li>
              <li>Batch 1 launching in Gurugram, Q3 2026</li>
            </ul>
            <div className="prod-links">
              <a href="#contact" className="plink lt">
                Join Waitlist
              </a>
              <a href="#contact" className="plink lo">
                View Courses
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
