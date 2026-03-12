import { DocumentCard } from "@/components/DocumentCard";
import { DocumentSkeleton } from "@/components/LoadingSkeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useDocumentsBySection,
  useRequestOTP,
  useVerifyOTP,
} from "@/hooks/useQueries";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle,
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

interface ProtectedSectionPageProps {
  section: string;
  onBack: () => void;
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
    <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
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
          <div className="w-10 h-10 section-stripe rounded-xl flex items-center justify-center shadow-warm">
            <Lock className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl text-foreground">
              {label.hi}
            </h1>
            <p className="text-xs text-muted-foreground">
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
                      <KeyRound className="w-5 h-5 text-primary" />
                      पंजीकरण सत्यापन
                    </>
                  ) : (
                    <>
                      <Eye className="w-5 h-5 text-primary" />
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
                        <Info className="h-4 w-4 text-primary" />
                        <AlertDescription className="text-sm">
                          <span className="font-medium text-foreground">
                            आपका OTP:{" "}
                          </span>
                          <span className="font-mono font-bold text-lg text-primary tracking-widest">
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
            <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-green-50 border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-800">
                सत्यापन सफल! अध्ययन सामग्री नीचे उपलब्ध है।
              </span>
            </div>

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
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
