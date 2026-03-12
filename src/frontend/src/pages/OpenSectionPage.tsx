import { DocumentCard } from "@/components/DocumentCard";
import { DocumentSkeleton } from "@/components/LoadingSkeleton";
import { useDocumentsBySection } from "@/hooks/useQueries";
import { ArrowLeft, BookOpen } from "lucide-react";
import { motion } from "motion/react";

const sectionConfig: Record<string, { hi: string; en: string; desc: string }> =
  {
    general: {
      hi: "सामान्य नोट्स",
      en: "General Notes",
      desc: "सभी के लिए मुफ्त अध्ययन सामग्री",
    },
    notes: { hi: "नोट्स", en: "Notes", desc: "महत्वपूर्ण नोट्स और सामग्री" },
    science: { hi: "विज्ञान", en: "Science", desc: "विज्ञान के महत्वपूर्ण अध्याय" },
    maths: { hi: "गणित", en: "Mathematics", desc: "गणित के सूत्र और अभ्यास" },
  };

interface OpenSectionPageProps {
  section: string;
  onBack: () => void;
}

export function OpenSectionPage({ section, onBack }: OpenSectionPageProps) {
  const config = sectionConfig[section] ?? {
    hi: section,
    en: section,
    desc: "",
  };
  const {
    data: documents,
    isLoading,
    isError,
  } = useDocumentsBySection(section);

  return (
    <main className="flex-1 container mx-auto px-4 py-6">
      <button
        type="button"
        data-ocid="section.back.button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        वापस जाएं
      </button>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shadow-navy">
          <BookOpen className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            {config.hi}
          </h1>
          <p className="text-xs text-muted-foreground">
            {config.en} · {config.desc}
          </p>
        </div>
      </motion.div>

      {/* Content */}
      {isLoading ? (
        <div data-ocid="docs.loading_state">
          <DocumentSkeleton />
        </div>
      ) : isError ? (
        <div
          data-ocid="docs.error_state"
          className="text-center py-12 border border-dashed border-destructive/30 rounded-xl"
        >
          <p className="text-destructive text-sm">सामग्री लोड करने में त्रुटि हुई।</p>
        </div>
      ) : !documents || documents.length === 0 ? (
        <div
          data-ocid="docs.empty_state"
          className="text-center py-12 border border-dashed border-border rounded-xl"
        >
          <div className="w-14 h-14 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-muted-foreground" />
          </div>
          <p className="text-muted-foreground text-sm">
            इस सेक्शन में अभी कोई सामग्री उपलब्ध नहीं है।
          </p>
          <p className="text-muted-foreground/60 text-xs mt-1">
            No materials available yet.
          </p>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {documents.map((doc, i) => (
            <DocumentCard key={doc.id.toString()} doc={doc} index={i + 1} />
          ))}
        </motion.div>
      )}
    </main>
  );
}
