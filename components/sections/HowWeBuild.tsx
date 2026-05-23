export function HowWeBuild() {
  return (
    <section id="how">
      <div className="si">
        <span className="stag">Engineering Philosophy</span>
        <h2 className="stitle">How We Build</h2>
        <p className="sdesc">
          Performance-critical paths in Rust. Intelligence in Python. Interfaces in React and Next.js.
          Data in PostgreSQL. Everything runs offline-first.
        </p>
        <div className="stack-grid">
          <div className="stack-card">
            <div className="stack-icon">R</div>
            <h4>Rust + PyO3</h4>
            <p>Detection engine, P2P gossip, and XDP policy evaluation with memory safety.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">K</div>
            <h4>eBPF / XDP</h4>
            <p>Kernel programs for NIC-level packet processing and enforcement.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">ML</div>
            <h4>Python + ONNX</h4>
            <p>Feature extraction and offline inference with sub-millisecond scoring.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">W</div>
            <h4>React / Next.js</h4>
            <p>Web interfaces, admin panels, and dashboard experiences.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">DB</div>
            <h4>PostgreSQL</h4>
            <p>Threat logs and audit trails with JSONB event schemas.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">Q</div>
            <h4>QUIC / P2P Mesh</h4>
            <p>Decentralized gossip for fast ban propagation across nodes.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">AG</div>
            <h4>Air-Gap First</h4>
            <p>Offline mode by default, no external API dependency required.</p>
          </div>
          <div className="stack-card">
            <div className="stack-icon">OS</div>
            <h4>Private Enterprise Platform</h4>
            <p>Aeon Sentinel is delivered as a proprietary platform with enterprise support.</p>
          </div>
        </div>
        <div className="approach-wrap">
          <span className="stag">Development Approach</span>
          <h3 className="approach-title">How a Feature Goes from Idea to Production</h3>
          <div className="approach-steps">
            <div className="step" data-step="01">
              <h4>Threat Modeling</h4>
              <p>STRIDE analysis and attack surface review before implementation.</p>
            </div>
            <div className="step" data-step="02">
              <h4>Kernel + Rust Core</h4>
              <p>Performance path in Rust with eBPF benchmarks before merge.</p>
            </div>
            <div className="step" data-step="03">
              <h4>ML Pipeline</h4>
              <p>Training, ONNX export, and offline runtime validation on traffic traces.</p>
            </div>
            <div className="step" data-step="04">
              <h4>Ship and Monitor</h4>
              <p>Docker/systemd packaging, telemetry, and hardening checks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
