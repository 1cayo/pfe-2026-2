import MiniBio from '../components/MiniBio';

export default function Home() {
  return (
    <main className="page-container">
      <MiniBio 
        name="Cayo"
        photoUrl="/foto-cayo.jpeg"
        phrase="Olá! Sou o Cayo, apaixonado por tecnologia e por aprender coisas novas a cada dia."
      />
    </main>
  );
}
