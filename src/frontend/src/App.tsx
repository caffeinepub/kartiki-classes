import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";
import { AdminPage } from "@/pages/AdminPage";
import { HomePage } from "@/pages/HomePage";
import { OpenSectionPage } from "@/pages/OpenSectionPage";
import { ProtectedSectionPage } from "@/pages/ProtectedSectionPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

type PageState =
  | { page: "home" }
  | { page: "protected"; section: string }
  | { page: "open"; section: string }
  | { page: "admin" };

function AppInner() {
  const [nav, setNav] = useState<PageState>({ page: "home" });

  const handleNavigate = (page: string, params?: Record<string, string>) => {
    if (page === "home") {
      setNav({ page: "home" });
    } else if (page === "protected" && params?.section) {
      setNav({ page: "protected", section: params.section });
    } else if (page === "open" && params?.section) {
      setNav({ page: "open", section: params.section });
    } else if (page === "admin") {
      setNav({ page: "admin" });
    }
  };

  const handleBack = () => setNav({ page: "home" });

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={nav.page} onNavigate={handleNavigate} />

      {nav.page === "home" && <HomePage onNavigate={handleNavigate} />}
      {nav.page === "protected" && (
        <ProtectedSectionPage section={nav.section} onBack={handleBack} />
      )}
      {nav.page === "open" && (
        <OpenSectionPage section={nav.section} onBack={handleBack} />
      )}
      {nav.page === "admin" && <AdminPage onBack={handleBack} />}

      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppInner />
    </QueryClientProvider>
  );
}
