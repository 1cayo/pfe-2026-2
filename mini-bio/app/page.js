// Mini Bio App - Next.js
import MiniBio from '../components/MiniBio';

export default function Home() {
  return (
    <main className="page-container">
      <MiniBio
        name="Cayo"
        photoUrl="/foto-cayo.jpeg"
        phrase="Olá! Sou Cayo, apaixonado por tecnologia, cuscuz e Santa Cruz!"
      />
    </main>
  );
}
