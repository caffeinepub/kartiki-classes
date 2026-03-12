import { DocumentCard } from "@/components/DocumentCard";
import { DocumentSkeleton } from "@/components/LoadingSkeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { class8Subjects } from "@/data/class8Questions";
import { class9Subjects } from "@/data/class9Questions";
import { class10Subjects } from "@/data/class10Questions";
import type { Subject } from "@/data/class10Questions";
import {
  useDocumentsBySection,
  useRequestOTP,
  useVerifyOTP,
} from "@/hooks/useQueries";
import {
  AlertCircle,
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Eye,
  Info,
  KeyRound,
  Loader2,
  Lock,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const sectionLabels: Record<string, { hi: string; en: string }> = {
  "8": { hi: "8वीं कक्षा", en: "Class 8th" },
  "9": { hi: "9वीं कक्षा", en: "Class 9th" },
  "10": { hi: "10वीं कक्षा", en: "Class 10th" },
};

const sectionSubjects: Record<string, Subject[]> = {
  "8": class8Subjects,
  "9": class9Subjects,
  "10": class10Subjects,
};

interface ProtectedSectionPageProps {
  section: string;
  onBack: () => void;
}

function QuestionItem({
  question,
  idx,
}: { question: { q: string; a?: string; marks?: number }; idx: number }) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="rounded-lg bg-muted/30 border border-border/30 overflow-hidden">
      {/* Question row — stacks on very small screens */}
      <div className="flex gap-3 items-start p-3">
        <span className="shrink-0 w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
          {idx + 1}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground leading-relaxed font-medium break-words">
            {question.q}
          </p>
          {/* Actions below question text on mobile, inline on sm+ */}
          {(question.marks !== undefined || question.a) && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              {question.marks !== undefined && (
                <Badge
                  variant="secondary"
                  className="text-xs bg-primary/10 text-primary border-primary/20 shrink-0"
                >
                  {question.marks}M
                </Badge>
              )}
              {question.a && (
                <button
                  type="button"
                  onClick={() => setShowAnswer((v) => !v)}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium transition-colors border shrink-0 ${
                    showAnswer
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-muted text-muted-foreground border-border hover:bg-primary/5 hover:text-primary hover:border-primary/30"
                  }`}
                >
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${showAnswer ? "rotate-180" : ""}`}
                  />
                  {showAnswer ? "Hide" : "Answer"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {question.a && showAnswer && (
        <div className="px-3 pb-3 ml-9">
          <div className="p-3 rounded-lg bg-green-50/80 border border-green-200/60">
            <p className="text-xs font-semibold text-green-700 mb-1.5 uppercase tracking-wide">
              Answer
            </p>
            <p className="text-sm text-green-900 leading-relaxed break-words">
              {question.a}
            </p>
          </div>
        </div>
      )}
    </li>
  );
}

function ChapterWiseQuestions({ subjects }: { subjects: Subject[] }) {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);
  const subject = subjects.find((s) => s.id === activeSubject) ?? subjects[0];

  return (
    <div className="space-y-5">
      {/* Subject Selector */}
      <div data-ocid="questions.subject_tabs" className="flex flex-wrap gap-2">
        {subjects.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActiveSubject(s.id)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all border ${
              activeSubject === s.id
                ? "bg-primary text-primary-foreground border-primary shadow-warm"
                : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Chapter Accordion */}
      <Accordion
        type="single"
        collapsible
        className="space-y-2"
        data-ocid="questions.chapter.accordion"
      >
        {subject.chapters.map((chapter, chIdx) => (
          <AccordionItem
            key={`${subject.id}-ch-${chIdx}`}
            value={`ch-${chIdx}`}
            data-ocid={`questions.chapter.item.${chIdx + 1}`}
            className="border border-border/60 rounded-xl overflow-hidden bg-card shadow-sm"
          >
            <AccordionTrigger className="px-3 py-3 text-sm font-semibold text-foreground hover:no-underline hover:bg-muted/40 transition-colors">
              <span className="flex items-center gap-2 text-left min-w-0 flex-1 pr-2">
                <span className="w-6 h-6 rounded-md bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  {chIdx + 1}
                </span>
                <span className="min-w-0 break-words line-clamp-2 leading-snug">
                  {chapter.title}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-3 pb-4 pt-1">
              <ol className="space-y-3">
                {chapter.questions.map((question, qIdx) => (
                  <QuestionItem
                    key={question.q.slice(0, 40)}
                    question={question}
                    idx={qIdx}
                  />
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function ProtectedSectionPage({
  section,
  onBack,
}: ProtectedSectionPageProps) {
  const [step, setStep] = useState<"regNo" | "otp" | "verified">("regNo");
  const [regNo, setRegNo] = useState("");
  const [otpInput, setOtpInput] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState<string | null>(null);
  const [error, setError] = useState("");

  const label = sectionLabels[section] ?? { hi: section, en: section };
  const subjects = sectionSubjects[section] ?? [];
  const requestOTP = useRequestOTP();
  const verifyOTP = useVerifyOTP();
  const { data: documents, isLoading: docsLoading } = useDocumentsBySection(
    section,
    step === "verified",
  );

  const handleRequestOTP = async () => {
    if (!regNo.trim()) {
      setError("कृपया पंजीकरण संख्या दर्ज करें।");
      return;
    }
    setError("");
    try {
      const entry = await requestOTP.mutateAsync({
        regNo: regNo.trim(),
        classSection: section,
      });
      setGeneratedOtp(entry.otp);
      setStep("otp");
      toast.success("OTP सफलतापूर्वक जनरेट हुआ!");
    } catch {
      setError("OTP जनरेट करने में त्रुटि हुई। कृपया पुनः प्रयास करें।");
    }
  };

  const handleVerifyOTP = async () => {
    if (otpInput.trim().length < 4) {
      setError("कृपया सही OTP दर्ज करें।");
      return;
    }
    setError("");
    try {
      const success = await verifyOTP.mutateAsync({
        regNo: regNo.trim(),
        otp: otpInput.trim(),
      });
      if (success) {
        setStep("verified");
        toast.success("सत्यापन सफल! अध्ययन सामग्री लोड हो रही है...");
      } else {
        setError("गलत OTP। कृपया पुनः प्रयास करें।");
      }
    } catch {
      setError("सत्यापन में त्रुटि हुई। कृपया पुनः प्रयास करें।");
    }
  };

  return (
    <main className="flex-1 w-full min-w-0 container mx-auto px-3 sm:px-4 py-6 max-w-2xl">
      <button
        type="button"
        data-ocid="section.back.button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        वापस जाएं
      </button>

      {/* Section Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 section-stripe rounded-xl flex items-center justify-center shadow-warm shrink-0">
            <Lock className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="min-w-0">
            <h1 className="font-display font-bold text-xl sm:text-2xl text-foreground truncate">
              {label.hi}
            </h1>
            <p className="text-xs text-muted-foreground truncate">
              {label.en} · संरक्षित सामग्री
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step !== "verified" ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="border-border/70 shadow-warm">
              <CardHeader className="pb-3">
                <CardTitle className="font-display text-lg flex items-center gap-2">
                  {step === "regNo" ? (
                    <>
                      <KeyRound className="w-5 h-5 text-primary shrink-0" />
                      पंजीकरण सत्यापन
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5 text-primary shrink-0" />
                      OTP सत्यापन
                    </>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === "regNo" ? (
                  <div className="space-y-3">
                    <div>
                      <Label
                        htmlFor="reg-no"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        पंजीकरण संख्या{" "}
                        <span className="text-muted-foreground">
                          (Registration Number)
                        </span>
                      </Label>
                      <Input
                        id="reg-no"
                        data-ocid="auth.reg_no.input"
                        value={regNo}
                        onChange={(e) => setRegNo(e.target.value)}
                        placeholder="जैसे: KCL-2024-001"
                        className="font-mono"
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleRequestOTP()
                        }
                      />
                    </div>

                    {error && (
                      <Alert
                        data-ocid="auth.error_state"
                        variant="destructive"
                        className="py-2"
                      >
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <Button
                      data-ocid="auth.otp_request.button"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm"
                      onClick={handleRequestOTP}
                      disabled={requestOTP.isPending}
                    >
                      {requestOTP.isPending ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                      {requestOTP.isPending ? "OTP भेज रहे हैं..." : "OTP प्राप्त करें"}
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {generatedOtp && (
                      <Alert
                        data-ocid="auth.otp_display"
                        className="border-primary/30 bg-primary/5"
                      >
                        <Info className="h-4 w-4 text-primary shrink-0" />
                        <AlertDescription className="text-sm min-w-0">
                          <span className="font-medium text-foreground">
                            आपका OTP:{" "}
                          </span>
                          <span className="font-mono font-bold text-base sm:text-lg text-primary tracking-widest break-all">
                            {generatedOtp}
                          </span>
                          <span className="block text-xs text-muted-foreground mt-1">
                            (इस OTP को नीचे दर्ज करें)
                          </span>
                        </AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <Label
                        htmlFor="otp-input"
                        className="text-sm font-medium mb-1.5 block"
                      >
                        OTP दर्ज करें
                      </Label>
                      <Input
                        id="otp-input"
                        data-ocid="auth.otp.input"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value)}
                        placeholder="6-अंकीय OTP"
                        className="font-mono text-lg tracking-widest text-center"
                        maxLength={6}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleVerifyOTP()
                        }
                      />
                    </div>

                    {error && (
                      <Alert
                        data-ocid="auth.error_state"
                        variant="destructive"
                        className="py-2"
                      >
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="flex gap-2">
                      <Button
                        data-ocid="auth.back_to_reg.button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => {
                          setStep("regNo");
                          setError("");
                          setOtpInput("");
                        }}
                      >
                        वापस
                      </Button>
                      <Button
                        data-ocid="auth.verify_otp.button"
                        className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm"
                        onClick={handleVerifyOTP}
                        disabled={verifyOTP.isPending}
                      >
                        {verifyOTP.isPending ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : null}
                        {verifyOTP.isPending
                          ? "सत्यापित कर रहे हैं..."
                          : "सत्यापित करें"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-green-50 border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <span className="text-sm font-medium text-green-800 leading-snug">
                सत्यापन सफल! अध्ययन सामग्री नीचे उपलब्ध है।
              </span>
            </div>

            {subjects.length > 0 ? (
              <Tabs defaultValue="docs" data-ocid={`class${section}.tabs`}>
                <TabsList className="w-full mb-5 grid grid-cols-2 h-auto min-h-[2.75rem]">
                  <TabsTrigger
                    value="docs"
                    data-ocid={`class${section}.docs.tab`}
                    className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs sm:text-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">सामग्री</span>
                    <span className="hidden sm:inline truncate"> (Study)</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="questions"
                    data-ocid={`class${section}.questions.tab`}
                    className="flex items-center justify-center gap-1.5 py-2 px-2 text-xs sm:text-sm"
                  >
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">प्रश्न</span>
                    <span className="hidden sm:inline truncate">
                      {" "}
                      (Q&amp;A)
                    </span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="docs">
                  {docsLoading ? (
                    <div data-ocid="docs.loading_state">
                      <DocumentSkeleton />
                    </div>
                  ) : !documents || documents.length === 0 ? (
                    <div
                      data-ocid="docs.empty_state"
                      className="text-center py-12 border border-dashed border-border rounded-xl"
                    >
                      <div className="w-14 h-14 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">
                        इस कक्षा के लिए अभी कोई सामग्री उपलब्ध नहीं है।
                      </p>
                      <p className="text-muted-foreground/60 text-xs mt-1">
                        No materials available for this section yet.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {documents.map((doc, i) => (
                        <DocumentCard
                          key={doc.id.toString()}
                          doc={doc}
                          index={i + 1}
                        />
                      ))}
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="questions">
                  <ChapterWiseQuestions subjects={subjects} />
                </TabsContent>
              </Tabs>
            ) : (
              <>
                <h2 className="font-display font-bold text-lg text-foreground mb-4">
                  {label.hi} — अध्ययन सामग्री
                </h2>
                {docsLoading ? (
                  <div data-ocid="docs.loading_state">
                    <DocumentSkeleton />
                  </div>
                ) : !documents || documents.length === 0 ? (
                  <div
                    data-ocid="docs.empty_state"
                    className="text-center py-12 border border-dashed border-border rounded-xl"
                  >
                    <div className="w-14 h-14 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
                      <Lock className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      इस कक्षा के लिए अभी कोई सामग्री उपलब्ध नहीं है।
                    </p>
                    <p className="text-muted-foreground/60 text-xs mt-1">
                      No materials available for this section yet.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {documents.map((doc, i) => (
                      <DocumentCard
                        key={doc.id.toString()}
                        doc={doc}
                        index={i + 1}
                      />
                    ))}
                  </div>
                )}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
