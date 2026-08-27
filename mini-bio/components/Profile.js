import Image from 'next/image';

export default function Profile({ 
  name = "Cayo", 
  photoUrl = "/foto-cayo.jpeg" 
}) {
  return (
    <div className="profile-wrapper">
      <Image 
        src={photoUrl} 
        alt={`Foto de ${name}`}
        width={130}
        height={130}
        className="profile-photo"
        style={{ borderRadius: '50%' }}
        priority
      />
      <h1 className="profile-name">{name}</h1>
    </div>
  );
}
