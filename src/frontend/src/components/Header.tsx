import { Button } from "@/components/ui/button";
import { useIsAdmin } from "@/hooks/useQueries";
import { BookOpen, GraduationCap, Shield } from "lucide-react";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { data: isAdmin } = useIsAdmin();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shadow-xs">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          type="button"
          data-ocid="nav.link"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 section-stripe rounded-lg flex items-center justify-center shadow-warm">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              कार्तिकी क्लासेस
            </span>
            <span className="text-[10px] text-muted-foreground font-body tracking-wide uppercase">
              Kartiki Classes
            </span>
          </div>
        </button>

        <nav className="flex items-center gap-2">
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => onNavigate("home")}
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              currentPage === "home"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            होम
          </button>

          {isAdmin && (
            <Button
              data-ocid="nav.admin.link"
              variant="outline"
              size="sm"
              onClick={() => onNavigate("admin")}
              className="flex items-center gap-1.5 border-primary/30 text-primary hover:bg-primary/10"
            >
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Admin</span>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
}
