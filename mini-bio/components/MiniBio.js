import Profile from './Profile';

export default function MiniBio({ 
  name = "Cayo",
  photoUrl = "/foto-cayo.jpeg",
  phrase = "Olá! Sou o Cayo, apaixonado por tecnologia e por aprender coisas novas a cada dia."
}) {
  return (
    <div className="bio-card">
      {/* Componente Profile (Foto + Nome) */}
      <Profile 
        name={name} 
        photoUrl={photoUrl} 
      />

      {/* 1 Frase sobre mim */}
      <div className="bio-content">
        <p className="bio-phrase">
          {phrase}
        </p>
      </div>
    </div>
  );
}
