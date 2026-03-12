import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookMarked, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface QA {
  q: string;
  a: string;
}

const scienceQA: QA[] = [
  {
    q: "What is excretion? Name the excretory organs in humans.",
    a: "Excretion is the removal of metabolic waste products from the body. Excretory organs: kidneys (urine), lungs (CO₂), skin (sweat), liver (bile).",
  },
  {
    q: "What is a reflex action? Give an example.",
    a: "A sudden, automatic response to a stimulus without conscious thought. Example: withdrawing hand from a hot object. Controlled by the spinal cord.",
  },
  {
    q: "State Mendel's Law of Segregation.",
    a: "During gamete formation, the two alleles of a gene separate (segregate) so each gamete carries only one allele. Also called Law of Purity of Gametes.",
  },
  {
    q: "What is the difference between aerobic and anaerobic respiration?",
    a: "Aerobic: uses oxygen, produces CO₂, water, and more ATP (38 ATP). Anaerobic: no oxygen, produces lactic acid or ethanol, less energy (2 ATP).",
  },
  {
    q: "What is natural selection? Who proposed it?",
    a: "Charles Darwin proposed it. Organisms with favourable variations survive and reproduce better. Over generations, these variations accumulate leading to evolution.",
  },
  {
    q: "What are the functions of the kidney?",
    a: "1. Filtration of blood. 2. Reabsorption of useful substances. 3. Excretion of urine. 4. Regulation of water and salt balance. 5. Maintenance of blood pH.",
  },
  {
    q: "What is photosynthesis? Write the equation.",
    a: "Process by which green plants make food using sunlight, CO₂, and water. Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in presence of sunlight and chlorophyll).",
  },
  {
    q: "What is a neuron? Name its parts.",
    a: "Neuron is the structural and functional unit of the nervous system. Parts: Cell body (cyton), Dendrites (receive signals), Axon (transmit signals), Synaptic knob.",
  },
  {
    q: "What is biodiversity? Why is it important?",
    a: "Biodiversity is the variety of living organisms on Earth. Importance: maintains ecological balance, provides food and medicine, supports climate regulation and pollination.",
  },
  {
    q: "What is the ozone layer? How is it depleted?",
    a: "Ozone (O₃) layer in the stratosphere protects Earth from UV rays. Depleted by CFCs (chlorofluorocarbons) used in refrigerators and aerosols.",
  },
  {
    q: "Explain the structure of DNA.",
    a: "DNA is a double helix made of two polynucleotide strands. Each strand has sugar (deoxyribose), phosphate, and nitrogenous bases (A, T, G, C). A pairs with T; G pairs with C.",
  },
  {
    q: "What is fermentation? Give its uses.",
    a: "Anaerobic breakdown of sugar by microorganisms (yeast/bacteria) producing alcohol or lactic acid. Uses: bread making, wine/beer production, curd formation, biofuel production.",
  },
  {
    q: "What is acid rain? What causes it?",
    a: "Rain with pH below 5.6 due to dissolved SO₂ and NO₂. Causes: burning fossil fuels, industries. Effects: damages forests, corrodes buildings, harms aquatic life.",
  },
  {
    q: "What is mitosis? Where does it occur?",
    a: "Cell division producing two genetically identical daughter cells with same chromosome number as parent. Occurs in somatic (body) cells. Stages: Prophase, Metaphase, Anaphase, Telophase.",
  },
  {
    q: "What is a food chain? Give an example.",
    a: "A linear sequence showing flow of energy from producers to consumers. Example: Grass → Grasshopper → Frog → Snake → Eagle. Energy decreases at each level.",
  },
  {
    q: "What is solar energy? State its advantages.",
    a: "Energy from the sun. Advantages: renewable, pollution-free, inexhaustible, low maintenance cost, suitable for remote areas.",
  },
  {
    q: "What is biogas? What is it made of?",
    a: "Biogas is a mixture of methane (CH₄, ~65%) and CO₂ produced by anaerobic decomposition of organic waste (cow dung, agricultural waste). Used as fuel for cooking and electricity.",
  },
  {
    q: "What is the difference between arteries and veins?",
    a: "Arteries: carry oxygenated blood away from heart, thick walls, no valves. Veins: carry deoxygenated blood to heart, thin walls, have valves to prevent backflow.",
  },
  {
    q: "What is AIDS? How does HIV spread?",
    a: "AIDS (Acquired Immunodeficiency Syndrome) is caused by HIV virus. Spread: unprotected sex, infected blood transfusion, sharing needles, mother to child during birth/breastfeeding.",
  },
  {
    q: "What is an earthquake? What causes it?",
    a: "Sudden shaking of Earth's surface due to release of energy in the crust. Caused by movement of tectonic plates, volcanic eruptions, or underground explosions. Measured on Richter scale.",
  },
  {
    q: "What is cloning? Give an example.",
    a: "Cloning is producing genetically identical copies of an organism. Example: Dolly the sheep (1996) was the first mammal cloned from a somatic cell using nuclear transfer technique.",
  },
  {
    q: "What is balanced diet? Name its components.",
    a: "A diet containing all nutrients in correct proportions. Components: carbohydrates, proteins, fats, vitamins, minerals, water, and roughage/fibre.",
  },
  {
    q: "What is transpiration? What are its types?",
    a: "Loss of water vapour from plant surfaces. Types: Stomatal (through stomata – 90%), Cuticular (through cuticle), Lenticular (through lenticels). Helps in water absorption and cooling.",
  },
  {
    q: "What is tsunami? How is it formed?",
    a: "A series of huge ocean waves caused by underwater earthquakes, volcanic eruptions, or landslides. Waves travel at high speed and cause massive destruction on coastlines.",
  },
  {
    q: "What is the function of hormones? Name two human hormones.",
    a: "Hormones are chemical messengers secreted by endocrine glands that regulate body functions. Examples: Insulin (regulates blood sugar, secreted by pancreas), Adrenaline (emergency hormone, secreted by adrenal gland).",
  },
];

const historyQA: QA[] = [
  {
    q: "राष्ट्रसंघाची स्थापना केव्हा व का झाली?",
    a: "1920 साली, पहिल्या महायुद्धानंतर जागतिक शांतता प्रस्थापित करण्यासाठी.",
  },
  {
    q: "पहिले महायुद्ध कोणत्या घटनेने सुरू झाले?",
    a: "28 जून 1914 रोजी ऑस्ट्रियाचे युवराज आर्कड्यूक फ्रांझ फर्डिनांड यांच्या हत्येमुळे.",
  },
  { q: "पहिले महायुद्ध कधी झाले?", a: "1914 ते 1918." },
  { q: "दुसरे महायुद्ध कधी झाले?", a: "1939 ते 1945." },
  {
    q: "दुसरे महायुद्ध कोणत्या घटनेने सुरू झाले?",
    a: "1 सप्टेंबर 1939 रोजी जर्मनीने पोलंडवर हल्ला केल्यामुळे.",
  },
  {
    q: "संयुक्त राष्ट्रसंघाची स्थापना कधी झाली?",
    a: "24 ऑक्टोबर 1945 रोजी. मुख्यालय: न्यूयॉर्क (अमेरिका).",
  },
  {
    q: "शीतयुद्ध म्हणजे काय?",
    a: "दुसऱ्या महायुद्धानंतर अमेरिका व सोव्हिएत रशिया यांच्यातील प्रत्यक्ष युद्धाशिवाय राजकीय, वैचारिक व आर्थिक संघर्ष.",
  },
  {
    q: "नाटो (NATO) म्हणजे काय?",
    a: "North Atlantic Treaty Organization – 1949 साली स्थापन. अमेरिकेच्या नेतृत्वाखाली पश्चिम देशांची लष्करी संघटना.",
  },
  {
    q: "वॉर्सा करार म्हणजे काय?",
    a: "1955 साली सोव्हिएत रशियाच्या नेतृत्वाखाली पूर्व युरोपीय देशांचा लष्करी करार. NATO ला प्रत्युत्तर.",
  },
  {
    q: "भारतीय राष्ट्रीय काँग्रेसची स्थापना कधी व कोणी केली?",
    a: "1885 साली ए. ओ. ह्युम यांनी मुंबईत.",
  },
  {
    q: "असहकार आंदोलन कधी व कोणी सुरू केले?",
    a: "1920 साली महात्मा गांधींनी. ब्रिटिश वस्तू, नोकऱ्या व संस्थांवर बहिष्कार.",
  },
  {
    q: "सविनय कायदेभंग आंदोलन कधी सुरू झाले?",
    a: "मार्च 1930 साली दांडी यात्रेने (मिठाचा सत्याग्रह). महात्मा गांधींच्या नेतृत्वाखाली.",
  },
  {
    q: "भारत छोडो आंदोलन कधी सुरू झाले?",
    a: "9 ऑगस्ट 1942 रोजी. 'करेंगे या मरेंगे' – गांधीजींचे आवाहन.",
  },
  { q: "भारताला स्वातंत्र्य कधी मिळाले?", a: "15 ऑगस्ट 1947." },
  { q: "भारतीय संविधान कधी अंमलात आले?", a: "26 जानेवारी 1950." },
  {
    q: "लोकमान्य टिळकांचे पूर्ण नाव व योगदान?",
    a: "बाळ गंगाधर टिळक. 'स्वराज हा माझा जन्मसिद्ध हक्क आहे' – घोषणा. गणपती उत्सव व शिवजयंती लोकोत्सव सुरू केले.",
  },
  {
    q: "स्वदेशी चळवळ म्हणजे काय?",
    a: "1905 सालच्या बंगाल फाळणीला विरोध म्हणून परदेशी मालावर बहिष्कार व स्वदेशी मालाचा वापर.",
  },
  {
    q: "जालियनवाला बाग हत्याकांड कधी झाले?",
    a: "13 एप्रिल 1919 रोजी. जनरल डायरने निःशस्त्र जमावावर गोळीबार केला.",
  },
  {
    q: "सुभाषचंद्र बोस यांनी कोणती संघटना स्थापन केली?",
    a: "आझाद हिंद सेना (Indian National Army – INA), 1943 साली.",
  },
  {
    q: "भारत-पाकिस्तान फाळणी कधी झाली?",
    a: "14-15 ऑगस्ट 1947. माउंटबॅटन योजनेनुसार.",
  },
  {
    q: "महात्मा गांधींची हत्या कधी झाली?",
    a: "30 जानेवारी 1948 रोजी, नथुराम गोडसेने.",
  },
  {
    q: "अलिप्ततावादी चळवळ (NAM) म्हणजे काय?",
    a: "शीतयुद्धाच्या काळात अमेरिका व सोव्हिएत रशिया दोन्ही गटांपासून स्वतंत्र राहण्याची धोरण. नेहरू, नासेर, टिटो यांनी सुरू केली.",
  },
  {
    q: "संयुक्त राष्ट्रसंघाचे मुख्य अंग कोणते?",
    a: "सुरक्षा परिषद, महासभा, आंतरराष्ट्रीय न्यायालय, सचिवालय, आर्थिक व सामाजिक परिषद.",
  },
];

const geographyQA: QA[] = [
  {
    q: "मान्सून म्हणजे काय?",
    a: "ऋतुनुसार दिशा बदलणारे वारे. उन्हाळ्यात समुद्राकडून जमिनीकडे येतात व पाऊस आणतात.",
  },
  {
    q: "खरीप पिके म्हणजे काय? उदाहरणे द्या.",
    a: "पावसाळ्यात (जून-सप्टेंबर) पिकवली जाणारी पिके. उदा: भात, ज्वारी, बाजरी, कापूस, सोयाबीन.",
  },
  {
    q: "रब्बी पिके म्हणजे काय? उदाहरणे द्या.",
    a: "हिवाळ्यात (ऑक्टोबर-मार्च) पिकवली जाणारी पिके. उदा: गहू, हरभरा, मका, द्राक्षे.",
  },
  {
    q: "जलसिंचनाचे प्रकार सांगा.",
    a: "विहीर सिंचन, कालवा सिंचन, तलाव सिंचन, ठिबक सिंचन, तुषार सिंचन.",
  },
  {
    q: "महाराष्ट्रातील प्रमुख नदी कोणती?",
    a: "गोदावरी नदी (महाराष्ट्राची गंगा). इतर: कृष्णा, भीमा, तापी, वर्धा.",
  },
  {
    q: "पश्चिम घाट (सह्याद्री) म्हणजे काय?",
    a: "अरबी समुद्राला समांतर पर्वतरांग. महाराष्ट्राची नैसर्गिक सीमा. कळसुबाई (1646 मी.) सर्वोच्च शिखर.",
  },
  {
    q: "काळी माती कुठे आढळते व काय पिक घेतात?",
    a: "विदर्भ, मराठवाडा, पश्चिम महाराष्ट्र. कापूस पिकासाठी सर्वोत्तम. 'कापसाची माती' म्हणूनही ओळखतात.",
  },
  {
    q: "लाल माती कुठे आढळते?",
    a: "कोकण किनारपट्टी, सातपुडा परिसर. भात, नाचणी पिके घेतात.",
  },
  {
    q: "नैसर्गिक वनस्पती म्हणजे काय?",
    a: "मानवी हस्तक्षेपाशिवाय नैसर्गिकरित्या वाढणारी झाडे-झुडपे. हवामान व मातीनुसार वेगळी असते.",
  },
  {
    q: "भरती-ओहोटी कशामुळे येते?",
    a: "चंद्र व सूर्याच्या गुरुत्वाकर्षणामुळे. दिवसातून दोनदा भरती व दोनदा ओहोटी.",
  },
  {
    q: "मृदा संधारण म्हणजे काय?",
    a: "मातीची धूप थांबवण्यासाठी केलेले उपाय. उदा: वृक्षारोपण, बांध घालणे, समोच्च नांगरणी.",
  },
  { q: "भारतातील सर्वात मोठे राज्य कोणते (क्षेत्रफळाने)?", a: "राजस्थान." },
  { q: "भारतातील सर्वाधिक लोकसंख्येचे राज्य कोणते?", a: "उत्तर प्रदेश." },
  {
    q: "कोयना धरण कोणत्या नदीवर आहे?",
    a: "कोयना नदीवर, सातारा जिल्हा, महाराष्ट्र.",
  },
  {
    q: "खनिज संपत्ती म्हणजे काय?",
    a: "जमिनीत नैसर्गिकरित्या आढळणारे पदार्थ. उदा: लोखंड, मँगेनीज, कोळसा, बॉक्साइट.",
  },
  {
    q: "लोकसंख्येची घनता म्हणजे काय?",
    a: "प्रति चौरस किलोमीटर क्षेत्रफळात राहणाऱ्या लोकांची संख्या.",
  },
  {
    q: "हवामानावर परिणाम करणारे घटक कोणते?",
    a: "अक्षांश, समुद्रापासून अंतर, उंची, वाऱ्याची दिशा, समुद्रप्रवाह.",
  },
  {
    q: "सागरी प्रवाह म्हणजे काय?",
    a: "समुद्राच्या पाण्याचे एकाच दिशेने नियमित वाहणे. हवामानावर परिणाम करते.",
  },
  {
    q: "महाराष्ट्राच्या प्रमुख बंदरांची नावे सांगा.",
    a: "मुंबई (सर्वात मोठे), न्हावाशेवा (JNPT), रत्नागिरी, रेवदंडा.",
  },
  {
    q: "नदीखोरे म्हणजे काय?",
    a: "एखाद्या नदीचे व तिच्या उपनद्यांचे पाणी ज्या भागातून वाहते ते क्षेत्र.",
  },
];

function QACard({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-border/60 rounded-xl overflow-hidden bg-card"
      data-ocid={`notes.qa.item.${index}`}
    >
      <button
        type="button"
        className="w-full flex items-start justify-between gap-3 p-4 text-left hover:bg-muted/40 transition-colors"
        onClick={() => setOpen((v) => !v)}
        data-ocid={`notes.qa.toggle.${index}`}
      >
        <span className="text-sm font-medium text-foreground leading-relaxed">
          <span className="inline-block mr-2 text-primary font-bold">
            Q{index}.
          </span>
          {qa.q}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 border-t border-border/40 bg-primary/5">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold text-primary mr-1">Ans:</span>
                {qa.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface NotesPageProps {
  onBack: () => void;
}

type Subject = "science" | "history" | "geography";

export function NotesPage({ onBack }: NotesPageProps) {
  const [subject, setSubject] = useState<Subject>("science");

  const qaList =
    subject === "science"
      ? scienceQA
      : subject === "history"
        ? historyQA
        : geographyQA;

  const tabs: { id: Subject; label: string }[] = [
    { id: "science", label: "Science Part 2" },
    { id: "history", label: "इतिहास" },
    { id: "geography", label: "भूगोल" },
  ];

  return (
    <main className="flex-1 container mx-auto px-4 py-6 max-w-2xl">
      <button
        type="button"
        data-ocid="notes.back.button"
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
        className="mb-6"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow">
            <BookMarked className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">
              बोर्ड परीक्षा नोट्स
            </h1>
            <p className="text-xs text-muted-foreground">
              महाराष्ट्र बोर्ड · 2018–2025 वारंवार येणारे प्रश्न
            </p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-800">
          📌 हे प्रश्न 2018 ते 2025 च्या बोर्ड परीक्षांमध्ये वारंवार विचारले गेले आहेत. प्रत्येक
          प्रश्नावर क्लिक करा — उत्तर दिसेल.
        </div>
      </motion.div>

      {/* Subject Tabs */}
      <div className="flex gap-2 mb-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            data-ocid={`notes.${tab.id}.tab`}
            onClick={() => setSubject(tab.id)}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              subject === tab.id
                ? "bg-primary text-primary-foreground shadow"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-foreground">
          {subject === "science"
            ? "Science Part 2 — 3 Marks Important Q&A"
            : subject === "history"
              ? "इतिहास — महत्त्वाचे प्रश्न"
              : "भूगोल — महत्त्वाचे प्रश्न"}
        </p>
        <Badge variant="secondary" className="text-xs">
          {qaList.length} प्रश्न
        </Badge>
      </div>

      <motion.div
        key={subject}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-2"
      >
        {qaList.map((qa, i) => (
          <QACard key={qa.q} qa={qa} index={i + 1} />
        ))}
      </motion.div>
    </main>
  );
}
