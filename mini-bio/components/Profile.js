import Image from 'next/image';

export default function Profile({ 
  name = "Cayo", 
  role = "Desenvolvedor Frontend", 
  photoUrl = "/avatar.jpg" 
}) {
  return (
    <div className="profile-container">
      <span className="component-badge">Profile.js</span>
      
      {/* 1. Sua Foto */}
      <div className="profile-avatar-wrapper">
        <Image 
          src={photoUrl} 
          alt={`Foto de ${name}`}
          width={120}
          height={120}
          className="profile-avatar"
          priority
        />
      </div>

      {/* 2. Seu Nome */}
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <span className="profile-role">{role}</span>
      </div>
    </div>
  );
}
