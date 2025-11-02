import bg_image from '@/public/bg_image.png'
import Login from '@/app/components/login';
export default async function Home() {
  return (
    <main className="p-4 bg-black min-h-screen min-w-screen flex flex-col justify-center"
    /* style={{
      backgroundImage: `url(${bg_image.src})`,
      backgroundSize:"",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
    }} */
    >
      <Login/>
    </main>
  );
}
