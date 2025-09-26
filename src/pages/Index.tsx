import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import Footer from "@/components/Footer";
import CheckStatusButton from "@/components/CheckStatusButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      

      <main className="flex-1">

        {/* Prominent Check Your Status Button */}
        <div className="container mx-auto px-4 py-6 flex justify-start">
          <CheckStatusButton />
        </div>

        {/* Main Content - Centered Login */}
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-center">
            <LoginPanel />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
