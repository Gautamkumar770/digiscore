import Header from "@/components/Header";
import LoginPanel from "@/components/LoginPanel";
import NotificationBanner from "@/components/NotificationBanner";
import QuickAccess from "@/components/QuickAccess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-patriot py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Welcome to DIGIscore Portal
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your comprehensive Digital Demerit Points System for transparent 
                and efficient traffic violation management across India.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Login Panel */}
            <div className="lg:col-span-1">
              <LoginPanel />
            </div>

            {/* Right Column - Services and Notifications */}
            <div className="lg:col-span-2 space-y-8">
              {/* Notification Banner */}
              <div>
                <h2 className="text-xl font-semibold text-primary mb-4">
                  📢 Important Notifications
                </h2>
                <NotificationBanner />
              </div>

              {/* Quick Access Services */}
              <QuickAccess />

              {/* Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-government border">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    What is DIGIScore?
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    DIGIScore is India's revolutionary digital demerit points system that tracks 
                    traffic violations and promotes safe driving practices. It provides transparent 
                    penalty management and helps create better road safety awareness.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-government border">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Core Benefits
                  </h3>
                  <ul className="text-muted-foreground text-sm space-y-2">
                    <li>• Transparent penalty tracking</li>
                    <li>• Real-time status updates</li>
                    <li>• Improved road safety</li>
                    <li>• Digital record management</li>
                    <li>• Easy grievance redressal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
