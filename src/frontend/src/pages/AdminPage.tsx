import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  useAddDocument,
  useDeleteDocument,
  useDocumentsBySection,
  usePendingOTPs,
} from "@/hooks/useQueries";
import {
  ArrowLeft,
  ChevronDown,
  Loader2,
  Plus,
  RefreshCw,
  Shield,
  Trash2,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const SECTIONS = [
  { value: "8", label: "8वीं कक्षा" },
  { value: "9", label: "9वीं कक्षा" },
  { value: "10", label: "10वीं कक्षा" },
  { value: "general", label: "सामान्य नोट्स" },
  { value: "notes", label: "नोट्स" },
  { value: "science", label: "विज्ञान" },
  { value: "maths", label: "गणित" },
];

interface AdminPageProps {
  onBack: () => void;
}

function AddDocumentForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [section, setSection] = useState("");
  const addDoc = useAddDocument();

  const handleSubmit = async () => {
    if (!title.trim() || !fileUrl.trim() || !section) {
      toast.error("कृपया सभी आवश्यक फ़ील्ड भरें।");
      return;
    }
    try {
      await addDoc.mutateAsync({
        title: title.trim(),
        description: description.trim(),
        fileUrl: fileUrl.trim(),
        section,
      });
      toast.success("दस्तावेज़ सफलतापूर्वक जोड़ा गया!");
      setTitle("");
      setDescription("");
      setFileUrl("");
      setSection("");
    } catch {
      toast.error("दस्तावेज़ जोड़ने में त्रुटि हुई।");
    }
  };

  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="font-display text-base flex items-center gap-2">
          <Plus className="w-4 h-4 text-primary" />
          नई अध्ययन सामग्री जोड़ें
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Label
              htmlFor="doc-title"
              className="text-xs font-medium mb-1 block"
            >
              शीर्षक <span className="text-destructive">*</span>
            </Label>
            <Input
              id="doc-title"
              data-ocid="admin.doc_title.input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="दस्तावेज़ का शीर्षक"
            />
          </div>
          <div>
            <Label
              htmlFor="doc-section"
              className="text-xs font-medium mb-1 block"
            >
              कक्षा / सेक्शन <span className="text-destructive">*</span>
            </Label>
            <Select value={section} onValueChange={setSection}>
              <SelectTrigger data-ocid="admin.section.select" id="doc-section">
                <SelectValue placeholder="सेक्शन चुनें" />
              </SelectTrigger>
              <SelectContent>
                {SECTIONS.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="doc-url" className="text-xs font-medium mb-1 block">
            फ़ाइल URL <span className="text-destructive">*</span>
          </Label>
          <Input
            id="doc-url"
            data-ocid="admin.file_url.input"
            value={fileUrl}
            onChange={(e) => setFileUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
        <div>
          <Label htmlFor="doc-desc" className="text-xs font-medium mb-1 block">
            विवरण
          </Label>
          <Textarea
            id="doc-desc"
            data-ocid="admin.description.textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="दस्तावेज़ का विवरण (वैकल्पिक)"
            rows={2}
          />
        </div>
        <Button
          data-ocid="admin.add_doc.submit_button"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm"
          onClick={handleSubmit}
          disabled={addDoc.isPending}
        >
          {addDoc.isPending ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Plus className="mr-2 h-4 w-4" />
          )}
          {addDoc.isPending ? "जोड़ रहे हैं..." : "सामग्री जोड़ें"}
        </Button>
      </CardContent>
    </Card>
  );
}

function DocumentsTable({ section }: { section: string }) {
  const { data: docs, isLoading, refetch } = useDocumentsBySection(section);
  const deleteDoc = useDeleteDocument();

  const handleDelete = async (id: bigint) => {
    if (!confirm("क्या आप इस दस्तावेज़ को हटाना चाहते हैं?")) return;
    try {
      await deleteDoc.mutateAsync(id);
      toast.success("दस्तावेज़ हटाया गया!");
    } catch {
      toast.error("हटाने में त्रुटि हुई।");
    }
  };

  if (isLoading)
    return (
      <div
        data-ocid="admin.docs.loading_state"
        className="text-center py-8 text-muted-foreground text-sm"
      >
        <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2" />
        लोड हो रहा है...
      </div>
    );

  return (
    <div>
      <div className="flex justify-end mb-3">
        <Button
          data-ocid="admin.refresh.button"
          variant="outline"
          size="sm"
          onClick={() => refetch()}
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> रिफ्रेश
        </Button>
      </div>
      {!docs || docs.length === 0 ? (
        <div
          data-ocid="admin.docs.empty_state"
          className="text-center py-8 border border-dashed border-border rounded-lg"
        >
          <p className="text-muted-foreground text-sm">
            इस सेक्शन में कोई दस्तावेज़ नहीं है।
          </p>
        </div>
      ) : (
        <div
          data-ocid="admin.docs.table"
          className="rounded-lg border border-border/70 overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs">शीर्षक</TableHead>
                <TableHead className="text-xs hidden sm:table-cell">
                  विवरण
                </TableHead>
                <TableHead className="text-xs w-20">क्रिया</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {docs.map((doc, i) => (
                <TableRow
                  key={doc.id.toString()}
                  data-ocid={`admin.docs.row.${i + 1}`}
                >
                  <TableCell className="text-sm font-medium">
                    {doc.title}
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground hidden sm:table-cell max-w-xs truncate">
                    {doc.description || "—"}
                  </TableCell>
                  <TableCell>
                    <Button
                      data-ocid={`admin.docs.delete_button.${i + 1}`}
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(doc.id)}
                      disabled={deleteDoc.isPending}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

function OTPTable() {
  const { data: otps, isLoading, refetch } = usePendingOTPs();

  return (
    <div>
      <div className="flex justify-end mb-3">
        <Button
          data-ocid="admin.otp_refresh.button"
          variant="outline"
          size="sm"
          onClick={() => refetch()}
        >
          <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> रिफ्रेश
        </Button>
      </div>
      {isLoading ? (
        <div
          data-ocid="admin.otp.loading_state"
          className="text-center py-8 text-muted-foreground text-sm"
        >
          <Loader2 className="w-5 h-5 animate-spin mx-auto mb-2" />
          लोड हो रहा है...
        </div>
      ) : !otps || otps.length === 0 ? (
        <div
          data-ocid="admin.otp.empty_state"
          className="text-center py-8 border border-dashed border-border rounded-lg"
        >
          <p className="text-muted-foreground text-sm">
            अभी कोई पेंडिंग OTP नहीं है।
          </p>
        </div>
      ) : (
        <div
          data-ocid="admin.otp.table"
          className="rounded-lg border border-border/70 overflow-hidden"
        >
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-xs">पंजीकरण संख्या</TableHead>
                <TableHead className="text-xs">कक्षा</TableHead>
                <TableHead className="text-xs">OTP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {otps.map((entry, i) => (
                <TableRow
                  key={entry.registrationNumber}
                  data-ocid={`admin.otp.row.${i + 1}`}
                >
                  <TableCell className="text-sm font-mono font-medium">
                    {entry.registrationNumber}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {entry.classSection}वीं
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-mono font-bold text-primary tracking-widest">
                      {entry.otp}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export function AdminPage({ onBack }: AdminPageProps) {
  const [docsSection, setDocsSection] = useState("8");

  return (
    <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl">
      <button
        type="button"
        data-ocid="admin.back.button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-5 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        वापस जाएं
      </button>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-3 mb-6"
      >
        <div className="w-10 h-10 navy-stripe rounded-xl flex items-center justify-center shadow-navy">
          <Shield className="w-5 h-5 text-secondary-foreground" />
        </div>
        <div>
          <h1 className="font-display font-bold text-2xl text-foreground">
            Admin Panel
          </h1>
          <p className="text-xs text-muted-foreground">कार्तिकी क्लासेस प्रबंधन</p>
        </div>
      </motion.div>

      <Tabs defaultValue="add" className="space-y-5">
        <TabsList data-ocid="admin.tabs" className="grid w-full grid-cols-3">
          <TabsTrigger data-ocid="admin.add.tab" value="add">
            सामग्री जोड़ें
          </TabsTrigger>
          <TabsTrigger data-ocid="admin.manage.tab" value="manage">
            सामग्री प्रबंधन
          </TabsTrigger>
          <TabsTrigger data-ocid="admin.otps.tab" value="otps">
            पेंडिंग OTP
          </TabsTrigger>
        </TabsList>

        <TabsContent value="add">
          <AddDocumentForm />
        </TabsContent>

        <TabsContent value="manage">
          <Card className="border-border/70">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <CardTitle className="font-display text-base">
                  सेक्शन अनुसार सामग्री
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={docsSection} onValueChange={setDocsSection}>
                    <SelectTrigger
                      data-ocid="admin.filter.select"
                      className="w-36"
                    >
                      <SelectValue />
                      <ChevronDown className="w-4 h-4" />
                    </SelectTrigger>
                    <SelectContent>
                      {SECTIONS.map((s) => (
                        <SelectItem key={s.value} value={s.value}>
                          {s.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <DocumentsTable section={docsSection} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="otps">
          <Card className="border-border/70">
            <CardHeader className="pb-3">
              <CardTitle className="font-display text-base">
                पेंडिंग OTP सूची
              </CardTitle>
            </CardHeader>
            <CardContent>
              <OTPTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
