import Header from "@/components/Header";
import PageContent from "@/components/PageContent";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <PageContent />
      <Footer />
    </main>
  );
}
