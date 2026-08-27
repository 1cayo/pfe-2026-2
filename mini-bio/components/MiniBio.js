import Profile from './Profile';

export default function MiniBio({ 
  name = "Cayo",
  role = "Desenvolvedor Full Stack",
  photoUrl = "/avatar.jpg",
  phrase = "Apaixonado por criar experiências web modernas, intuitivas e de alta performance com React e Next.js."
}) {
  return (
    <div className="minibio-container">
      <span className="component-badge">MiniBio.js</span>

      {/* Profile Component (Foto + Nome) */}
      <Profile 
        name={name} 
        role={role} 
        photoUrl={photoUrl} 
      />

      {/* 3. 1 Frase sobre você */}
      <div className="minibio-phrase-box">
        <p className="minibio-phrase">
          &ldquo;{phrase}&rdquo;
        </p>
      </div>

      {/* Habilidades / Tags */}
      <div className="tags-wrapper">
        <span className="tag-pill">⚛️ React</span>
        <span className="tag-pill">▲ Next.js</span>
        <span className="tag-pill">💻 JavaScript</span>
        <span className="tag-pill">🎨 CSS3</span>
      </div>
    </div>
  );
}
