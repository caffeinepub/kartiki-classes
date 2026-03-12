import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(window.location.hostname);

  return (
    <footer className="mt-auto border-t border-border/60 bg-card/50 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1.5 flex-wrap">
          © {year} कार्तिकी क्लासेस | Built with
          <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
          using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
