
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import Loading from "./components/Loading";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <BackToTop />
          <Loading />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
