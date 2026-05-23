export function Field() {
  return (
    <section id="field" className="field-sec">
      <div className="si">
        <span className="stag">Our Field</span>
        <h2 className="stitle">What We Work In</h2>
        <p className="sdesc">
          Aeon8 operates at the deepest layer of the security stack: kernel, network, and
          intelligence.
        </p>
        <div className="fields">
          <div className="field">
            <div className="field-num">01</div>
            <h4>Kernel and eBPF/XDP Engineering</h4>
            <p>
              We write eBPF programs that execute in Linux kernel data paths at NIC receive time.
              XDP drops, rate-limits, and reroutes packets before user space.
            </p>
          </div>
          <div className="field">
            <div className="field-num">02</div>
            <h4>Network Security and Threat Intelligence</h4>
            <p>
              Network forensics, PCAP analysis, JA3 and JA3S TLS fingerprinting, MISP IOC feeds, and
              swarm-distributed ban propagation over QUIC.
            </p>
          </div>
          <div className="field">
            <div className="field-num">03</div>
            <h4>Applied ML for Threat Detection</h4>
            <p>
              22-feature RandomForest anomaly detection with ONNX Runtime. Fully offline behavior
              drift, scan, and DDoS pattern detection.
            </p>
          </div>
          <div className="field">
            <div className="field-num">04</div>
            <h4>ICS/SCADA and OT Security</h4>
            <p>
              OT security for power grids, industrial control systems, and critical infrastructure.
              Air-gap native and low-downtime by design.
            </p>
          </div>
          <div className="field">
            <div className="field-num">05</div>
            <h4>Cybersecurity Education and Training</h4>
            <p>
              Hands-on security training from fundamentals to kernel-level specialization. Red Team,
              SOC, forensics, and ML labs.
            </p>
          </div>
          <div className="field">
            <div className="field-num">06</div>
            <h4>Sovereign Software Development</h4>
            <p>
              Full-stack web, AI/ML apps, and secure coding for teams building and defending India&apos;s
              digital infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
