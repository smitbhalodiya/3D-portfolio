import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogLayout from "./components/layout/BlogLayout";
import Building3DPortfolio from "./pages/blog/Building3DPortfolio";
import OptimizingReact from "./pages/blog/OptimizingReact";
import BlogCategory from "./pages/BlogCategory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />

            {/* Individual Blog Posts wrapped in BlogLayout */}
            <Route path="/blog" element={<BlogLayout />}>
              <Route path="building-3d-portfolio" element={<Building3DPortfolio />} />
              <Route path="optimizing-react-performance" element={<OptimizingReact />} />
              <Route path="category/:category" element={<BlogCategory />} />
            </Route>

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
