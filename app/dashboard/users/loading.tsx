export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      <p className="ml-3 text-lg text-white">Cargando usuarios...</p>
    </div>
  );
}