import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink, FileText } from "lucide-react";
import type { Document } from "../backend.d";

interface DocumentCardProps {
  doc: Document;
  index: number;
  onDelete?: (id: bigint) => void;
  isAdmin?: boolean;
}

const sectionLabels: Record<string, string> = {
  "8": "8वीं कक्षा",
  "9": "9वीं कक्षा",
  "10": "10वीं कक्षा",
  general: "सामान्य",
  notes: "नोट्स",
  science: "विज्ञान",
  maths: "गणित",
};

export function DocumentCard({
  doc,
  index,
  onDelete,
  isAdmin,
}: DocumentCardProps) {
  const label = sectionLabels[doc.section] ?? doc.section;

  return (
    <Card
      data-ocid={`docs.item.${index}`}
      className="card-hover bg-card border-border/70 overflow-hidden"
    >
      <div className="h-1.5 section-stripe" />
      <CardHeader className="pb-2 pt-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
              <FileText className="w-4.5 h-4.5 text-primary" />
            </div>
            <CardTitle className="text-base font-display font-semibold leading-tight">
              {doc.title}
            </CardTitle>
          </div>
          <Badge
            variant="secondary"
            className="shrink-0 text-xs bg-muted text-muted-foreground"
          >
            {label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        {doc.description && (
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {doc.description}
          </p>
        )}
        <div className="flex items-center gap-2">
          <Button
            data-ocid={`docs.item.${index}.button`}
            asChild
            size="sm"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm"
          >
            <a href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
              <Download className="w-3.5 h-3.5 mr-1.5" />
              देखें / डाउनलोड करें
              <ExternalLink className="w-3 h-3 ml-1.5 opacity-70" />
            </a>
          </Button>
          {isAdmin && onDelete && (
            <Button
              data-ocid={`docs.item.${index}.delete_button`}
              variant="destructive"
              size="sm"
              onClick={() => onDelete(doc.id)}
            >
              हटाएं
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
