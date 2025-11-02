import bg_image from '@/public/bg_image.png'
import LoginPage from '@/app/components/login';
import Image from 'next/image';
export default async function Home() {
  return (
     <main className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden bg-black">
      <Image
        src={bg_image}
        alt="Fondo de la página de inicio de sesión"
        fill
        priority
        className="object-cover z-0 opacity-60 blur-sm" 
      />

      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 w-screen max-w-md p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-[0px_8px_24px_-4px_rgba(255,_255,_255,_0.4)] border border-white/20">
        <LoginPage />
      </div>
    </main>
  );
}
