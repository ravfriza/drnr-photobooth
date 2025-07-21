import WebcamComponent from "@/components/WebcamComponents";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-10">
        <h1 className="text-xl md:text-4 font-bold text-center mb-8">
          DRNR Photobooth
        </h1>
          <WebcamComponent />
      </main>
    </div>
  );
}
