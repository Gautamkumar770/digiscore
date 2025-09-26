import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import NotificationBanner from "@/components/NotificationBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Important Notifications Section */}
        <section className="bg-gradient-patriot py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                📢 Important Notifications
              </h2>
              <NotificationBanner />
            </div>
          </div>
        </section>

        {/* Main Content - Centered Login */}
        <div className="container mx-auto px-4 py-12">
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
