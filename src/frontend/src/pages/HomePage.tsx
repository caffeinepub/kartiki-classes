import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookMarked,
  BookOpen,
  ChevronRight,
  Lock,
  Sparkles,
} from "lucide-react";
import type { Variants } from "motion/react";
import { motion } from "motion/react";

interface HomePageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

const classes = [
  {
    id: "class-8",
    title: "8वीं कक्षा",
    subtitle: "Class 8th",
    section: "8",
    page: "protected",
    protected: true,
    color: "from-orange-500 to-amber-500",
    description: "गणित, विज्ञान, हिंदी, अंग्रेजी और सामाजिक विज्ञान के नोट्स",
    subjects: ["गणित", "विज्ञान", "हिंदी"],
  },
  {
    id: "class-9",
    title: "9वीं कक्षा",
    subtitle: "Class 9th",
    section: "9",
    page: "protected",
    protected: true,
    color: "from-red-500 to-orange-500",
    description: "NCERT आधारित अध्ययन सामग्री और महत्वपूर्ण प्रश्नोत्तर",
    subjects: ["गणित", "विज्ञान", "इतिहास"],
  },
  {
    id: "class-10",
    title: "10वीं कक्षा",
    subtitle: "Class 10th",
    section: "10",
    page: "protected",
    protected: true,
    color: "from-amber-600 to-yellow-500",
    description: "बोर्ड परीक्षा की तैयारी के लिए विशेष अध्ययन सामग्री",
    subjects: ["गणित", "विज्ञान", "अंग्रेजी"],
  },
  {
    id: "general",
    title: "सामान्य नोट्स",
    subtitle: "General Notes",
    section: "general",
    page: "open",
    protected: false,
    color: "from-blue-600 to-indigo-600",
    description: "सभी छात्रों के लिए मुफ्त अध्ययन सामग्री और सामान्य ज्ञान",
    subjects: ["सामान्य ज्ञान", "करंट अफेयर्स"],
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern" />
        <div className="relative">
          <img
            src="/assets/generated/kartiki-hero.dim_1200x400.jpg"
            alt="कार्तिकी क्लासेस"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                कार्तिकी क्लासेस में आपका स्वागत है
              </h1>
              <p className="text-white/80 text-sm sm:text-base">
                श्रेष्ठ शिक्षा · बेहतर भविष्य
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Grid */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex items-center gap-2 mb-6"
        >
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-display font-bold text-xl text-foreground">
            अपनी कक्षा चुनें
          </h2>
          <span className="text-muted-foreground text-sm ml-1">
            Select Your Class
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {classes.map((cls) => (
            <motion.div key={cls.id} variants={cardVariants}>
              <Card
                data-ocid={`home.${cls.id}.card`}
                className="card-hover cursor-pointer border-border/70 overflow-hidden group"
                onClick={() => onNavigate(cls.page, { section: cls.section })}
              >
                <div className={`h-2 bg-gradient-to-r ${cls.color}`} />
                <CardContent className="p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-lg text-foreground">
                          {cls.title}
                        </h3>
                        {cls.protected && (
                          <Badge
                            variant="outline"
                            className="text-xs border-primary/40 text-primary bg-primary/5"
                          >
                            <Lock className="w-3 h-3 mr-1" />
                            OTP
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {cls.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {cls.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {cls.subjects.map((sub) => (
                          <span
                            key={sub}
                            className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="ml-3 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Board Exam Notes Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="mt-5"
        >
          <Card
            data-ocid="home.board-notes.card"
            className="card-hover cursor-pointer border-border/70 overflow-hidden group"
            onClick={() => onNavigate("notes")}
          >
            <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500" />
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <BookMarked className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-bold text-lg text-foreground">
                        बोर्ड परीक्षा नोट्स
                      </h3>
                      <Badge className="text-xs bg-emerald-100 text-emerald-800 border-0">
                        FREE
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      Board Exam Notes · महाराष्ट्र बोर्ड
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      इतिहास और भूगोल के 2018–2025 के वारंवार येणारे प्रश्न-उत्तर (मराठी
                      में)
                    </p>
                  </div>
                </div>
                <div className="ml-3 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-emerald-700 transition-colors" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="mt-4 p-4 rounded-xl bg-muted/60 border border-border/60 flex items-start gap-3"
        >
          <div className="w-8 h-8 section-stripe rounded-lg flex items-center justify-center shrink-0">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-0.5">
              नोट्स कैसे एक्सेस करें?
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              8वीं, 9वीं और 10वीं कक्षा के नोट्स के लिए अपना पंजीकरण नंबर और OTP आवश्यक है।
              सामान्य नोट्स और बोर्ड परीक्षा नोट्स सभी के लिए मुफ्त में उपलब्ध हैं।
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
