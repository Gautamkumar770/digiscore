import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GrievanceSystem from "./pages/GrievanceSystem";
import StatusDetails from "./pages/StatusDetails";
import NotFound from "./pages/NotFound";
import LearnRules from "./pages/LearnRules";
import DLStatus from "./pages/DLStatus";
import PenaltyHistory from "./pages/PenaltyHistory";
import LicenceRenewal from "./pages/LicenceRenewal";
import TicketStatus from "./pages/TicketStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/grievance" element={<GrievanceSystem />} />
          <Route path="/status-details" element={<StatusDetails />} />
          <Route path="/learn-rules" element={<LearnRules />} />
          <Route path="/dl-status" element={<DLStatus />} />
          <Route path="/penalty-history" element={<PenaltyHistory />} />
          <Route path="/licence-renewal" element={<LicenceRenewal />} />
          <Route path="/ticket-status" element={<TicketStatus />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
