import MiniBio from '../components/MiniBio';

export default function Home() {
  return (
    <main className="page-container">
      {/* Header */}
      <header className="main-header">
        <h1 className="main-title">Mini Bio</h1>
        <p className="main-subtitle">
          Layout construído com React &amp; Next.js seguindo a arquitetura do quadro
        </p>
      </header>

      {/* Main Wrapper matching the layout structure */}
      <div className="blueprint-wrapper">
        <span className="component-badge">app/page.js</span>
        
        {/* Render MiniBio Component */}
        <MiniBio 
          name="Cayo"
          role="Desenvolvedor Web"
          photoUrl="/avatar.jpg"
          phrase="Apaixonado por criar interfaces modernas, intuitivas e de alta performance com React e Next.js."
        />
      </div>

      {/* Legend showing component architecture matching whiteboard diagram */}
      <footer className="diagram-legend">
        <div className="legend-item">
          <span className="legend-color page"></span>
          <span><strong>app/page.js</strong> (Página principal)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color minibio"></span>
          <span><strong>MiniBio.js</strong> (Container &amp; Frase)</span>
        </div>
        <div className="legend-item">
          <span className="legend-color profile"></span>
          <span><strong>Profile.js</strong> (Foto &amp; Nome)</span>
        </div>
      </footer>
    </main>
  );
}
