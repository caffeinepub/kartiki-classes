import { class10GeographyChapters } from "./class10GeographyQuestions";
import { class10HistoryChapters } from "./class10HistoryQuestions";

export interface Question {
  q: string;
  a?: string;
  marks?: number;
}

export interface Chapter {
  title: string;
  questions: Question[];
}

export interface Subject {
  name: string;
  id: string;
  chapters: Chapter[];
}

export const class10Subjects: Subject[] = [
  {
    name: "Science Part 2",
    id: "science2",
    chapters: [
      {
        title: "Chapter 1: Life Processes in Living Organisms (Part 2)",
        questions: [
          {
            q: "What is excretion? Explain the process of excretion in humans.",
            a: "Excretion is the process of removal of metabolic waste products from the body. In humans, excretion mainly occurs through the kidneys. Blood enters the kidney through the renal artery, gets filtered in the nephron (the functional unit). Useful substances are reabsorbed, and waste (urea, excess water, salts) forms urine. Urine passes through the ureter to the urinary bladder and is expelled through the urethra.",
            marks: 3,
          },
          {
            q: "Draw a labelled diagram of the structure of the kidney (Nephron).",
            a: "A nephron consists of: (1) Bowman's capsule – cup-shaped structure surrounding the glomerulus. (2) Glomerulus – a network of blood capillaries where filtration occurs. (3) Proximal convoluted tubule (PCT) – reabsorption of glucose, amino acids. (4) Loop of Henle – reabsorption of water. (5) Distal convoluted tubule (DCT) – selective reabsorption and secretion. (6) Collecting duct – collects urine. [Draw and label these parts for full marks.]",
            marks: 3,
          },
          {
            q: "Draw a labelled diagram of a neuron and write its functions.",
            a: "A neuron (nerve cell) has: (1) Cell body (Cyton) – contains nucleus and cytoplasm. (2) Dendrites – receive nerve impulses. (3) Axon – long fibre that transmits impulses away from cell body. (4) Myelin sheath – insulates the axon. (5) Nodes of Ranvier – gaps in myelin sheath. (6) Axon terminals – pass impulse to next neuron. Function: To receive and transmit nerve impulses from one part of the body to another. [Draw and label the diagram.]",
            marks: 4,
          },
          {
            q: "State the types of nervous system.",
            a: "The nervous system is divided into: (1) Central Nervous System (CNS) – brain and spinal cord; controls most body functions. (2) Peripheral Nervous System (PNS) – cranial nerves and spinal nerves; connects CNS to organs. (3) Autonomic Nervous System (ANS) – controls involuntary functions (heartbeat, digestion); divided into sympathetic and parasympathetic systems.",
            marks: 2,
          },
          {
            q: "Differentiate between endocrine glands and exocrine glands.",
            a: "Endocrine Glands: (1) Ductless glands. (2) Secrete hormones directly into the bloodstream. (3) Examples: pituitary, thyroid, adrenal glands. Exocrine Glands: (1) Have ducts. (2) Secrete substances (enzymes, sweat, saliva) through ducts to target areas. (3) Examples: salivary glands, sweat glands, liver (bile).",
            marks: 2,
          },
          {
            q: "What is the function of insulin hormone? Which gland secretes it?",
            a: "Insulin is secreted by the beta cells of the Islets of Langerhans in the pancreas. Function: Insulin regulates blood glucose levels by promoting the uptake of glucose by body cells for energy and stimulating the liver to convert excess glucose into glycogen (glycogenesis). Deficiency of insulin causes diabetes mellitus.",
            marks: 2,
          },
          {
            q: "Name the parts of the human brain and write the function of any one part.",
            a: "The human brain has three main parts: (1) Forebrain (Cerebrum) – controls thinking, memory, speech, voluntary movements, senses. (2) Midbrain – controls eye movements and visual/auditory reflexes. (3) Hindbrain – includes cerebellum (balance and coordination), pons (breathing regulation), and medulla oblongata (controls heartbeat, breathing, and other involuntary actions). Function of Cerebrum: It is the seat of intelligence, consciousness, memory, and voluntary muscle control.",
            marks: 3,
          },
          {
            q: "What is a reflex action? Explain with an example.",
            a: "A reflex action is an involuntary and instantaneous response to a stimulus, controlled by the spinal cord without involving the brain. The pathway taken is called the reflex arc. Example: When you accidentally touch a hot object, sensory nerves send a signal to the spinal cord, which immediately sends a motor signal back to the hand muscles to withdraw the hand, even before the brain registers pain. This protects the body from injury.",
            marks: 2,
          },
          {
            q: "What is the importance of nephron in the kidney?",
            a: "The nephron is the structural and functional unit of the kidney. Importance: (1) It filters blood and removes waste products like urea, uric acid, and excess salts. (2) It reabsorbs useful substances like glucose, amino acids, and water back into the blood. (3) It regulates water balance and blood pressure. (4) It maintains pH of the blood. Each kidney contains about 1 million nephrons.",
            marks: 2,
          },
          {
            q: "What is dialysis? When is it required?",
            a: "Dialysis is an artificial process of filtering waste products from the blood, performed when the kidneys fail to function properly. In dialysis, the patient's blood is passed through a dialysis machine (artificial kidney) which has a semi-permeable membrane. Waste products diffuse out while blood cells and proteins remain in the blood. It is required in cases of: (1) Chronic kidney failure, (2) Acute renal failure, (3) When kidney transplant is awaited.",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 2: Heredity and Evolution",
        questions: [
          {
            q: "What is heredity? Write the importance of Mendel's experiments.",
            a: "Heredity is the transmission of genetic traits (characteristics) from parents to offspring through genes. Gregor Mendel's experiments on pea plants are important because: (1) He established the basic laws of inheritance. (2) He introduced the concept of dominant and recessive traits. (3) He showed that traits are inherited in a predictable ratio. (4) His work laid the foundation of modern genetics.",
            marks: 3,
          },
          {
            q: "State Mendel's laws of heredity.",
            a: "Mendel proposed three laws: (1) Law of Dominance: When two different alleles are present, only the dominant allele expresses itself; the recessive is masked. (2) Law of Segregation: During gamete formation, the two alleles of a gene separate so each gamete carries only one allele. (3) Law of Independent Assortment: Genes for different traits are inherited independently of each other during gamete formation.",
            marks: 3,
          },
          {
            q: "Draw a labelled diagram of the structure of DNA.",
            a: "DNA (Deoxyribonucleic Acid) has a double helix structure (proposed by Watson and Crick). It consists of: (1) Two sugar-phosphate backbone strands running antiparallel. (2) Nitrogenous bases – Adenine (A) pairs with Thymine (T); Cytosine (C) pairs with Guanine (G) – held by hydrogen bonds. (3) Deoxyribose sugar and phosphate groups form the backbone. [Draw the double helix with labeled base pairs, sugar-phosphate backbone, and hydrogen bonds.]",
            marks: 3,
          },
          {
            q: "What is a gene? How does it affect the characteristics of an organism?",
            a: "A gene is a segment of DNA that codes for a specific protein or trait. Genes are located on chromosomes in the cell nucleus. Each gene controls the synthesis of a specific protein (enzyme or structural protein), which in turn determines a particular characteristic of the organism (e.g., eye colour, blood group, height). Genes are inherited from both parents, and their combination determines the organism's phenotype.",
            marks: 2,
          },
          {
            q: "What is mutation? State its types.",
            a: "Mutation is a sudden, heritable change in the DNA sequence of an organism. Types: (1) Gene Mutation (Point Mutation) – change in a single base pair in the DNA. (2) Chromosomal Mutation – change in the structure or number of chromosomes. Example: Down syndrome (extra chromosome 21). Causes: radiation, chemicals (mutagens), errors in DNA replication. Mutations can be harmful, neutral, or (rarely) beneficial.",
            marks: 2,
          },
          {
            q: "What is Darwin's theory of Natural Selection?",
            a: "Darwin's theory of Natural Selection states: (1) Organisms produce more offspring than can survive. (2) There is natural variation among individuals. (3) Individuals with favourable variations are better adapted to the environment and survive (survival of the fittest). (4) Survivors reproduce and pass on favourable traits to offspring. (5) Over many generations, favourable traits accumulate, leading to evolution of new species.",
            marks: 3,
          },
          {
            q: "Write the evidences of organic evolution.",
            a: "Evidences of organic evolution: (1) Fossil Evidence – fossils show ancestors of modern organisms. (2) Comparative Anatomy – homologous and analogous organs show common ancestry. (3) Embryological Evidence – embryos of different vertebrates are similar in early stages. (4) Biochemical Evidence – similar proteins and DNA sequences in related organisms. (5) Biogeography – distribution of species on Earth supports common ancestry.",
            marks: 3,
          },
          {
            q: "Differentiate between homologous and analogous organs with examples.",
            a: "Homologous Organs: (1) Have the same basic structure and evolutionary origin. (2) Perform different functions. (3) Example: forelimbs of humans, bats, and whales. Analogous Organs: (1) Have different structure and evolutionary origin. (2) Perform the same function. (3) Example: wings of birds and insects. Homologous organs indicate divergent evolution; analogous organs indicate convergent evolution.",
            marks: 2,
          },
          {
            q: "How is sex determination done? Write the importance of XX and XY chromosomes.",
            a: "Sex determination in humans is based on sex chromosomes. Females have two X chromosomes (XX) and males have one X and one Y chromosome (XY). During gamete formation, females always produce X-bearing eggs, while males produce both X-bearing and Y-bearing sperm. If a Y-bearing sperm fertilises the egg, the offspring is male (XY); if an X-bearing sperm fertilises the egg, the offspring is female (XX). So, the father determines the sex of the child.",
            marks: 3,
          },
          {
            q: "What is the Human Genome Project?",
            a: "The Human Genome Project (HGP) was an international scientific research project launched in 1990 and completed in 2003. Its goal was to identify, map, and sequence all the approximately 3 billion base pairs of human DNA and all the genes (~20,000–25,000). Importance: (1) Helps understand genetic diseases. (2) Enables development of gene therapy. (3) Helps in drug design. (4) Provides insights into human evolution.",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 3: The Wonderful World of Microorganisms",
        questions: [
          {
            q: "What are microorganisms? State their types.",
            a: "Microorganisms are microscopic living organisms that cannot be seen with the naked eye. Types: (1) Bacteria – single-celled prokaryotes (e.g., Lactobacillus). (2) Viruses – non-cellular particles (e.g., influenza virus). (3) Fungi – eukaryotes, some microscopic (e.g., yeast). (4) Protozoa – single-celled eukaryotes (e.g., Amoeba, Plasmodium). (5) Algae – photosynthetic microorganisms (e.g., Chlamydomonas).",
            marks: 2,
          },
          {
            q: "Draw a labelled diagram of the structure of a bacterium.",
            a: "A typical bacterium has: (1) Cell wall – provides shape and protection. (2) Cell membrane – regulates entry/exit of substances. (3) Cytoplasm – contains ribosomes, enzymes. (4) Nucleoid region – contains circular DNA (no nucleus). (5) Flagella – for movement. (6) Pili – for attachment. (7) Capsule – protective outer layer (in some bacteria). [Draw and label these parts.]",
            marks: 3,
          },
          {
            q: "Differentiate between viruses and bacteria.",
            a: "Bacteria: (1) Living organisms. (2) Unicellular, prokaryotic. (3) Have cell wall, cell membrane, ribosomes. (4) Can reproduce independently by binary fission. (5) Sensitive to antibiotics. Viruses: (1) Non-living outside host; show life only inside host. (2) Acellular (no cell structure). (3) Contain only DNA or RNA covered by a protein coat (capsid). (4) Can only reproduce inside a living host cell. (5) Not affected by antibiotics.",
            marks: 2,
          },
          {
            q: "Write the beneficial uses of microorganisms.",
            a: "Beneficial uses of microorganisms: (1) Food production – bacteria (Lactobacillus) for curd; yeast for bread and wine. (2) Medicine – Penicillium for penicillin antibiotic; production of vaccines. (3) Agriculture – nitrogen-fixing bacteria (Rhizobium) improve soil fertility. (4) Decomposition – decompose dead matter and recycle nutrients. (5) Industry – used in production of vinegar, alcohol, cheese. (6) Sewage treatment – microbes break down organic waste.",
            marks: 3,
          },
          {
            q: "What are antibiotics? Who discovered them?",
            a: "Antibiotics are chemical substances produced by microorganisms (mainly fungi and bacteria) that kill or inhibit the growth of other harmful bacteria. The first antibiotic, Penicillin, was discovered by Sir Alexander Fleming in 1928 from the fungus Penicillium notatum. Antibiotics are used to treat bacterial infections. They are ineffective against viral infections. Overuse can lead to antibiotic resistance.",
            marks: 2,
          },
          {
            q: "Explain the process of fermentation.",
            a: "Fermentation is the process in which microorganisms (especially yeast and bacteria) break down organic compounds (like glucose) in the absence of oxygen (anaerobic conditions) to produce simpler compounds and energy. Example: Yeast converts glucose → ethanol + carbon dioxide + energy. This process is used in: (1) Bread making (CO₂ makes bread rise). (2) Wine and beer production. (3) Curd making (Lactobacillus converts lactose → lactic acid).",
            marks: 2,
          },
          {
            q: "What is the importance of vaccination?",
            a: "Vaccination is the process of introducing a weakened or killed form of a pathogen (vaccine) into the body to stimulate the immune system to produce antibodies. Importance: (1) Provides immunity against specific diseases. (2) Prevents epidemic spread of diseases. (3) Has eradicated diseases like smallpox and nearly eliminated polio. (4) Protects children from diphtheria, tetanus, measles, etc. (5) Reduces infant and child mortality rates.",
            marks: 2,
          },
          {
            q: "Name two diseases caused by pathogenic microorganisms and write their symptoms.",
            a: "(1) Tuberculosis (TB) – caused by Mycobacterium tuberculosis (bacteria). Symptoms: persistent cough (sometimes with blood), chest pain, weight loss, fever, night sweats, fatigue. (2) Malaria – caused by Plasmodium (protozoa) transmitted by Anopheles mosquito. Symptoms: high fever with chills, shivering, sweating, headache, body ache, nausea, and in severe cases, coma.",
            marks: 2,
          },
          {
            q: "What is the contribution of microorganisms to the environment?",
            a: "Microorganisms play a vital role in the environment: (1) Decomposers – break down dead organisms, returning nutrients to soil. (2) Nitrogen fixation – Rhizobium and Azotobacter fix atmospheric nitrogen into soil, improving fertility. (3) Oxygen production – algae and cyanobacteria carry out photosynthesis, releasing oxygen. (4) Bioremediation – bacteria clean up oil spills and pollutants. (5) Food chains – they form the base of aquatic food chains.",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 4: Environmental Management",
        questions: [
          {
            q: "Why is environmental management necessary? Explain.",
            a: "Environmental management is necessary because: (1) Human activities like deforestation, industrialisation, and pollution are degrading the environment. (2) Loss of biodiversity threatens ecosystems. (3) Climate change due to greenhouse gases affects agriculture and weather. (4) Depletion of natural resources threatens future generations. (5) It ensures sustainable development – meeting present needs without compromising future generations. Proper management maintains ecological balance and human well-being.",
            marks: 3,
          },
          {
            q: "What is biodiversity? Write the measures for its conservation.",
            a: "Biodiversity refers to the variety of living organisms (plants, animals, microorganisms) found in a particular region or on Earth. Conservation measures: (1) Establishment of national parks and wildlife sanctuaries. (2) Biosphere reserves – protect entire ecosystems. (3) Ex-situ conservation – zoos, botanical gardens, gene banks. (4) Banning poaching and illegal wildlife trade. (5) Afforestation and reforestation. (6) Awareness and education programs. (7) International agreements like CITES.",
            marks: 3,
          },
          {
            q: "Write a note on the importance of forests.",
            a: "Forests are important because: (1) They are the lungs of the Earth – absorb CO₂ and release oxygen. (2) Maintain water cycle and regulate rainfall. (3) Prevent soil erosion and landslides. (4) Provide habitat for wildlife and support biodiversity. (5) Source of timber, medicine, food, and raw materials. (6) Act as carbon sinks, reducing global warming. (7) Provide livelihood to tribal and forest-dependent communities.",
            marks: 2,
          },
          {
            q: "Write the causes and effects of climate change.",
            a: "Causes: (1) Burning of fossil fuels releasing CO₂ and other greenhouse gases. (2) Deforestation reducing CO₂ absorption. (3) Industrial emissions. (4) Agriculture (methane from livestock). Effects: (1) Rise in global temperatures (global warming). (2) Melting of polar ice caps and rising sea levels. (3) Extreme weather events (floods, droughts, cyclones). (4) Loss of biodiversity. (5) Threats to food and water security.",
            marks: 3,
          },
          {
            q: "Why is the ozone layer depleting? Write its effects.",
            a: "The ozone layer in the stratosphere absorbs harmful UV radiation. It is depleting due to: (1) Release of chlorofluorocarbons (CFCs) from refrigerators, ACs, and aerosol sprays. (2) Nitrous oxide from fertilisers. (3) Halons from fire extinguishers. Effects of ozone depletion: (1) Increased UV radiation reaching Earth. (2) Higher incidence of skin cancer and cataracts. (3) Damage to marine ecosystems (phytoplankton). (4) Reduced crop yields. (5) Weakened immune systems in humans.",
            marks: 3,
          },
          {
            q: "Explain the importance of recycling.",
            a: "Recycling is the process of converting waste materials into new products. Importance: (1) Reduces the amount of waste sent to landfills. (2) Conserves natural resources (e.g., recycling paper saves trees). (3) Reduces energy consumption compared to producing from raw materials. (4) Decreases pollution (air, water, soil). (5) Reduces greenhouse gas emissions. (6) Creates employment in the recycling industry. Examples: recycling paper, plastic, glass, and metals.",
            marks: 2,
          },
          {
            q: "Write the measures for wildlife conservation.",
            a: "Measures for wildlife conservation: (1) Establishment of national parks, wildlife sanctuaries, and biosphere reserves. (2) Legal protection through Wildlife Protection Act. (3) Anti-poaching laws and strict enforcement. (4) Project Tiger, Project Elephant – special government programs. (5) Captive breeding programs for endangered species. (6) Reforestation to restore habitats. (7) Educating the public about the importance of wildlife.",
            marks: 2,
          },
          {
            q: "What is acid rain? State its causes.",
            a: "Acid rain is precipitation (rain, snow, fog) with a pH lower than 5.6, caused by dissolved pollutants. Causes: (1) Burning of fossil fuels releases sulphur dioxide (SO₂) and nitrogen oxides (NOₓ). (2) These gases react with water vapour in the atmosphere to form sulphuric acid and nitric acid, which fall as acid rain. Effects: damages forests, acidifies lakes (kills aquatic life), corrodes buildings and monuments (e.g., Taj Mahal), and harms soil fertility.",
            marks: 2,
          },
          {
            q: "Explain the ecosystem.",
            a: "An ecosystem is a community of living organisms (biotic components) interacting with each other and with the non-living (abiotic) components of their environment (sunlight, water, soil, air). Types: terrestrial (forest, grassland, desert) and aquatic (pond, river, ocean). Components: (1) Producers – plants that make food by photosynthesis. (2) Consumers – animals that eat plants or other animals. (3) Decomposers – microorganisms that break down dead matter. Energy flows through food chains and webs within the ecosystem.",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 5: Towards Green Energy",
        questions: [
          {
            q: "What is green energy? Name its sources.",
            a: "Green energy (renewable energy) is energy obtained from natural sources that are replenished continuously and do not cause significant environmental pollution. Sources: (1) Solar energy – from sunlight using solar panels. (2) Wind energy – from wind using wind turbines. (3) Hydroelectric energy – from flowing water. (4) Biomass energy – from organic matter (wood, crop waste, biogas). (5) Tidal energy – from ocean tides. (6) Geothermal energy – from Earth's internal heat.",
            marks: 2,
          },
          {
            q: "Write the uses and advantages of solar energy.",
            a: "Uses of solar energy: (1) Solar water heaters for domestic and industrial use. (2) Solar cookers for cooking food. (3) Solar panels/photovoltaic cells for generating electricity. (4) Solar street lights. (5) Solar-powered water pumps for irrigation. Advantages: (1) Inexhaustible and freely available. (2) No air pollution or greenhouse gases. (3) Low maintenance cost after installation. (4) Can be used in remote areas. (5) Reduces dependence on fossil fuels.",
            marks: 3,
          },
          {
            q: "How is wind energy utilised?",
            a: "Wind energy is harnessed using wind turbines or windmills. When wind blows, it rotates the blades of the turbine; this rotation drives a generator to produce electricity. Uses: (1) Generating electricity in wind farms. (2) Pumping water from wells (windmills). (3) Grinding grain (traditional windmills). India has significant wind energy capacity, especially in states like Tamil Nadu, Gujarat, Rajasthan, and Maharashtra. Wind energy is clean, renewable, and does not emit pollutants.",
            marks: 2,
          },
          {
            q: "Differentiate between fossil fuels and renewable energy.",
            a: "Fossil Fuels: (1) Non-renewable – formed over millions of years. (2) Examples: coal, petroleum, natural gas. (3) Cause air pollution and greenhouse gas emissions. (4) Will eventually be exhausted. (5) Cheap and easily available currently. Renewable Energy: (1) Renewable – replenished naturally. (2) Examples: solar, wind, hydro, biomass. (3) Environment-friendly, little or no pollution. (4) Inexhaustible. (5) Higher initial cost but lower long-term cost.",
            marks: 2,
          },
          {
            q: "What is biogas? How is it prepared?",
            a: "Biogas is a mixture of gases (mainly methane ~60%, CO₂, and small amounts of H₂S) produced by the anaerobic decomposition of organic waste by microorganisms. Preparation: Organic waste (cow dung, kitchen waste, agricultural waste) is fed into a biogas plant (digester). In the absence of oxygen, anaerobic bacteria decompose the waste, producing biogas. The gas is collected and used as fuel for cooking, lighting, and generating electricity. The leftover slurry is used as manure.",
            marks: 3,
          },
          {
            q: "Write the advantages and disadvantages of nuclear energy.",
            a: "Advantages: (1) Produces large amounts of energy from small amounts of fuel. (2) No greenhouse gas emissions during operation. (3) Reliable and consistent energy supply. (4) Reduces dependence on fossil fuels. Disadvantages: (1) Risk of nuclear accidents (e.g., Chernobyl, Fukushima). (2) Radioactive waste is hazardous and difficult to dispose of. (3) High cost of building and decommissioning plants. (4) Uranium (fuel) is also a limited resource. (5) Risk of nuclear weapons proliferation.",
            marks: 2,
          },
          {
            q: "Write the measures for energy conservation.",
            a: "Energy conservation measures: (1) Use energy-efficient appliances (LED bulbs, BEE-rated appliances). (2) Switch off electrical devices when not in use. (3) Use public transport, carpool, or cycle. (4) Insulate buildings to reduce heating/cooling needs. (5) Use solar water heaters instead of electric geysers. (6) Avoid wastage of water (pumping water uses energy). (7) Plant trees – they reduce the need for air conditioning. (8) Government policies and public awareness campaigns.",
            marks: 2,
          },
          {
            q: "How is hydroelectric power generated?",
            a: "Hydroelectric power is generated by using the kinetic energy of flowing or falling water. Process: (1) A dam is constructed across a river to store water in a reservoir. (2) Water is released in a controlled manner through pipes (penstocks). (3) The falling water strikes the blades of a turbine, causing it to rotate. (4) The rotating turbine drives a generator that produces electricity. The electricity is then transmitted through power lines. Hydroelectric power is clean, renewable, and India has many major hydro projects (e.g., Bhakra Nangal, Tehri Dam).",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 6: Animal Classification",
        questions: [
          {
            q: "What is the basis of classification of animals?",
            a: "Animals are classified on the following bases: (1) Body organisation – unicellular or multicellular. (2) Symmetry – radial or bilateral. (3) Presence or absence of coelom (body cavity). (4) Level of organisation – cellular, tissue, organ, organ system level. (5) Type of skeleton – notochord/backbone (vertebrate vs. invertebrate). (6) Reproduction and development. (7) Evolutionary relationships and genetic similarities. The two main groups are: Invertebrates (no backbone) and Vertebrates (with backbone).",
            marks: 2,
          },
          {
            q: "Differentiate between Porifera and Coelenterata.",
            a: "Porifera: (1) Body is full of pores (ostia). (2) Diploblastic (two cell layers). (3) No true tissues or organs. (4) Sessile (fixed). (5) Examples: Sycon, Sponge. Coelenterata: (1) Have a single body cavity (gastrovascular cavity) with one opening. (2) Diploblastic. (3) Have tentacles with stinging cells (nematocysts). (4) Show radial symmetry. (5) Examples: Hydra, Jellyfish, Coral.",
            marks: 2,
          },
          {
            q: "Differentiate between vertebrates and invertebrates with examples.",
            a: "Vertebrates: (1) Have a vertebral column (backbone). (2) Possess an endoskeleton. (3) Have a well-developed nervous system with brain. (4) Examples: fish, frog, lizard, pigeon, human. Invertebrates: (1) Do not have a backbone. (2) May have exoskeleton or no skeleton. (3) More diverse – comprise ~95% of all animals. (4) Examples: earthworm (Annelida), cockroach (Arthropoda), snail (Mollusca), starfish (Echinodermata).",
            marks: 3,
          },
          {
            q: "Name the classes of fishes and state their characteristics.",
            a: "Fishes belong to phylum Chordata and are divided into: (1) Chondrichthyes (Cartilaginous fish) – skeleton made of cartilage, no scales, 5–7 pairs of gill slits. Examples: shark, stingray. (2) Osteichthyes (Bony fish) – skeleton made of bone, scales present, operculum covers gills, swim bladder for buoyancy. Examples: rohu, catla, tuna. Characteristics of all fish: aquatic, cold-blooded (ectotherms), breathe through gills, two-chambered heart.",
            marks: 2,
          },
          {
            q: "Write the characteristics of mammals.",
            a: "Characteristics of mammals (Class Mammalia): (1) Warm-blooded (endotherms). (2) Have mammary glands – females feed young with milk. (3) Body covered with hair or fur. (4) Four-chambered heart. (5) Breathe through lungs. (6) Most give birth to live young (viviparous), except platypus and echidna (oviparous). (7) Highly developed brain and nervous system. (8) External ears (pinnae) present. Examples: dog, whale, bat, human.",
            marks: 2,
          },
          {
            q: "Write the characteristics of Amphibia with examples.",
            a: "Characteristics of Amphibia: (1) Can live both in water and on land (amphibious). (2) Cold-blooded (ectotherms). (3) Moist, scaleless skin used for cutaneous respiration. (4) Three-chambered heart. (5) Larvae (tadpoles) breathe through gills; adults breathe through lungs and skin. (6) Lay eggs in water (external fertilisation). (7) Undergo metamorphosis (larva to adult). Examples: Frog (Rana), Toad (Bufo), Salamander, Caecilian.",
            marks: 2,
          },
          {
            q: "Write the main characteristics of Arthropoda phylum.",
            a: "Arthropoda is the largest phylum in the animal kingdom. Characteristics: (1) Body is segmented and covered with a hard exoskeleton made of chitin. (2) Have jointed appendages (legs, antennae). (3) Bilateral symmetry. (4) Open circulatory system. (5) Breathe through gills (aquatic) or tracheae (terrestrial) or book lungs (spiders). (6) Compound eyes in many species. Examples: insect (cockroach, butterfly), spider, crab, centipede, prawn.",
            marks: 2,
          },
          {
            q: "Name the major phyla of the animal kingdom.",
            a: "Major phyla of the animal kingdom: (1) Porifera – sponges. (2) Coelenterata (Cnidaria) – Hydra, jellyfish. (3) Platyhelminthes – flatworms (tapeworm, Planaria). (4) Nematoda – roundworms (Ascaris). (5) Annelida – earthworm, leech. (6) Arthropoda – insects, crabs, spiders. (7) Mollusca – snails, octopus, clams. (8) Echinodermata – starfish, sea urchin. (9) Chordata – all vertebrates (fish, amphibia, reptiles, birds, mammals).",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 7: Cell Biology and Biotechnology",
        questions: [
          {
            q: "What is biotechnology? Write its uses.",
            a: "Biotechnology is the use of living organisms, cells, or biological processes to develop products and technologies for human benefit. Uses: (1) Medicine – production of insulin, vaccines, antibiotics, and gene therapy. (2) Agriculture – development of pest-resistant and high-yield GM crops (e.g., Bt cotton). (3) Food industry – fermentation, production of cheese, yoghurt, bread. (4) Environment – bioremediation (using microbes to clean up pollution). (5) Forensic science – DNA fingerprinting. (6) Industrial – production of enzymes and biofuels.",
            marks: 3,
          },
          {
            q: "What is recombinant DNA technology? Write its importance.",
            a: "Recombinant DNA technology (genetic engineering) is the process of combining DNA from two different sources to create a new DNA molecule (recombinant DNA). Process: (1) The desired gene is cut using restriction enzymes. (2) The gene is inserted into a vector (usually a plasmid). (3) The vector is introduced into a host cell. (4) The host cell expresses the gene and produces the desired protein. Importance: (1) Production of human insulin by bacteria. (2) Development of vaccines. (3) Gene therapy for genetic diseases. (4) Production of transgenic organisms.",
            marks: 3,
          },
          {
            q: "What are transgenic plants and organisms? Give examples.",
            a: "Transgenic plants and organisms are those whose genetic material has been altered by introducing a gene from another organism using genetic engineering. Examples of transgenic plants: (1) Bt cotton – has a gene from Bacillus thuringiensis bacteria that makes it resistant to bollworm pest. (2) Golden Rice – engineered to produce beta-carotene (Vitamin A). Examples of transgenic animals: (1) Dolly the sheep – first cloned mammal. (2) Transgenic mice used in medical research. (3) Cows engineered to produce human proteins in milk.",
            marks: 2,
          },
          {
            q: "State the types of cell division.",
            a: "Cell division is of three types: (1) Amitosis – direct cell division without spindle formation; occurs in lower organisms (e.g., Amoeba, bacteria). (2) Mitosis – indirect cell division producing two genetically identical daughter cells with the same number of chromosomes; occurs in somatic (body) cells for growth and repair. Phases: prophase, metaphase, anaphase, telophase. (3) Meiosis – cell division producing four genetically diverse haploid cells; occurs in reproductive cells (gonads) for gamete formation.",
            marks: 2,
          },
          {
            q: "What is cloning? Write its advantages and disadvantages.",
            a: "Cloning is the process of producing genetically identical copies of an organism, cell, or DNA molecule. Types: gene cloning, reproductive cloning, therapeutic cloning. Example: Dolly – first mammal cloned from a somatic cell (1996). Advantages: (1) Can save endangered species. (2) Produces organ transplants that won't be rejected. (3) Useful for medical research. (4) Can preserve traits of valuable animals. Disadvantages: (1) Reduces genetic diversity. (2) Ethical and moral concerns. (3) High failure rate. (4) Cloned animals may have shorter lifespan and health problems.",
            marks: 3,
          },
          {
            q: "What is gene therapy?",
            a: "Gene therapy is a technique of treating genetic diseases by inserting, altering, or replacing a defective gene within a person's cells with a correct copy of the gene. Process: A normal copy of the defective gene is delivered into the patient's cells using a vector (usually a modified virus). The corrected gene begins producing the right protein, treating the disease. Applications: (1) Treatment of SCID (Severe Combined Immunodeficiency). (2) Potential treatment for cystic fibrosis, haemophilia, certain cancers. Currently still largely in experimental stages.",
            marks: 2,
          },
          {
            q: "Differentiate between mitosis and meiosis.",
            a: "Mitosis: (1) Occurs in somatic (body) cells. (2) One division producing two daughter cells. (3) Daughter cells are diploid (same chromosome number as parent). (4) Daughter cells are genetically identical. (5) Purpose: growth, repair, and asexual reproduction. Meiosis: (1) Occurs in reproductive cells (gonads). (2) Two divisions producing four daughter cells. (3) Daughter cells are haploid (half the chromosome number). (4) Daughter cells are genetically diverse (due to crossing over). (5) Purpose: gamete (sperm/egg) formation for sexual reproduction.",
            marks: 3,
          },
        ],
      },
      {
        title: "Chapter 8: Social Health",
        questions: [
          {
            q: "Define health. Write the signs of good health.",
            a: "Health is a state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity (WHO definition). Signs of good health: (1) Normal body weight. (2) Good appetite and digestion. (3) Restful sleep. (4) Good physical and mental energy. (5) Disease-free body. (6) Positive mental attitude. (7) Healthy social relationships. (8) Regular, normal bowel movements. (9) Bright, clear eyes and healthy skin.",
            marks: 2,
          },
          {
            q: "Write the causes, symptoms and prevention of AIDS.",
            a: "AIDS (Acquired Immunodeficiency Syndrome) is caused by HIV (Human Immunodeficiency Virus). Causes/Transmission: (1) Unprotected sexual contact with an infected person. (2) Contaminated blood transfusion. (3) Sharing of needles/syringes. (4) Mother to child during pregnancy/breastfeeding. Symptoms: weight loss, fever, diarrhoea, swollen lymph nodes, frequent infections. Prevention: (1) Safe sex (use of condoms). (2) Screening of blood before transfusion. (3) Use of disposable needles. (4) Avoid sharing personal items. (5) Awareness programs.",
            marks: 3,
          },
          {
            q: "Write the ill-effects of drug addiction.",
            a: "Ill-effects of drug addiction: (1) Physical effects – damage to liver (cirrhosis from alcohol), lungs (from smoking), heart disease, malnutrition. (2) Mental effects – depression, anxiety, hallucinations, memory loss, personality changes. (3) Social effects – breakdown of family relationships, loss of job, criminal behaviour, social isolation. (4) Economic effects – financial ruin due to spending on drugs. (5) Increased risk of HIV/AIDS through shared needles. (6) Can lead to death from overdose.",
            marks: 2,
          },
          {
            q: "Write the changes that occur during adolescence.",
            a: "Adolescence is the period of transition from childhood to adulthood (roughly 10–19 years). Changes: (1) Physical changes – increase in height, development of secondary sexual characteristics (breast development in girls; voice change, facial hair in boys). (2) Hormonal changes – increased secretion of sex hormones (oestrogen in girls, testosterone in boys). (3) Reproductive maturity – onset of menstruation (girls), sperm production (boys). (4) Psychological changes – mood swings, curiosity, self-consciousness. (5) Social changes – interest in peer groups, relationships.",
            marks: 3,
          },
          {
            q: "What is mental health? How can it be maintained?",
            a: "Mental health refers to a state of well-being in which a person can cope with the normal stresses of life, work productively, and contribute to their community. How to maintain mental health: (1) Regular physical exercise. (2) Adequate sleep. (3) Balanced, nutritious diet. (4) Positive thinking and stress management. (5) Maintaining good social relationships. (6) Pursuing hobbies and leisure activities. (7) Seeking professional help when needed. (8) Avoiding alcohol, drugs, and tobacco. (9) Practising yoga and meditation.",
            marks: 2,
          },
          {
            q: "Differentiate between communicable and non-communicable diseases.",
            a: "Communicable Diseases: (1) Caused by pathogens (bacteria, viruses, fungi, parasites). (2) Spread from person to person through air, water, food, contact, or vectors. (3) Can be prevented by vaccination, hygiene, and sanitation. (4) Examples: tuberculosis, cholera, malaria, influenza, COVID-19. Non-communicable Diseases: (1) Not caused by pathogens. (2) Cannot spread from person to person. (3) Caused by lifestyle, genetics, or environment. (4) Examples: diabetes, hypertension, heart disease, cancer, asthma.",
            marks: 2,
          },
          {
            q: "Write the importance of a balanced diet.",
            a: "A balanced diet contains all essential nutrients in the right proportions: carbohydrates, proteins, fats, vitamins, minerals, fibre, and water. Importance: (1) Provides energy for daily activities. (2) Supports growth and repair of body tissues. (3) Maintains a healthy immune system. (4) Prevents deficiency diseases (e.g., scurvy, rickets, anaemia). (5) Maintains healthy body weight. (6) Reduces risk of lifestyle diseases like diabetes and heart disease. (7) Promotes mental health and overall well-being.",
            marks: 2,
          },
        ],
      },
      {
        title: "Chapter 9: Disaster Management",
        questions: [
          {
            q: "What are natural disasters? State their types.",
            a: "A natural disaster is a sudden, destructive event caused by natural forces that results in loss of life, damage to property, and disruption of the environment. Types: (1) Geological – earthquake, volcanic eruption, landslide, tsunami. (2) Hydrological – flood, drought. (3) Meteorological – cyclone, hurricane, tornado, blizzard. (4) Biological – epidemic, locust attack. (5) Climatic – extreme heat/cold waves. India is highly vulnerable to earthquakes, floods, cyclones, and droughts.",
            marks: 2,
          },
          {
            q: "What precautions should be taken during an earthquake?",
            a: "During an earthquake: (1) Stay calm. (2) If indoors – take cover under a sturdy table or desk; hold on until shaking stops. Stay away from windows, glass, and heavy objects. (3) If outdoors – move to an open area away from buildings, trees, and power lines. (4) If in a vehicle – stop safely away from bridges and buildings. After the earthquake: (5) Check for injuries and damage. (6) Avoid damaged buildings. (7) Check for gas leaks. (8) Listen to emergency broadcasts. (9) Be prepared for aftershocks.",
            marks: 2,
          },
          {
            q: "Write the causes and preventive measures of floods.",
            a: "Causes of floods: (1) Heavy and prolonged rainfall. (2) Overflow of rivers due to excessive rain. (3) Melting of snow and glaciers. (4) Deforestation and loss of vegetation (reduces water absorption). (5) Poor drainage systems in urban areas. Preventive measures: (1) Construction of dams and embankments. (2) Reforestation to improve water absorption. (3) Improved urban drainage systems. (4) Flood warning systems and early evacuation. (5) Floodplain zoning – restricting construction in flood-prone areas. (6) Dredging rivers to increase capacity.",
            marks: 3,
          },
          {
            q: "Write the phases of disaster management.",
            a: "Disaster management has four phases forming the Disaster Management Cycle: (1) Mitigation – reducing the long-term risk of disasters (e.g., building earthquake-proof structures, planting trees). (2) Preparedness – preparing communities to respond effectively (e.g., drills, stockpiling supplies, training rescue teams). (3) Response – immediate actions taken during and after a disaster (e.g., rescue, first aid, evacuation, emergency relief). (4) Recovery – long-term rebuilding of infrastructure, livelihoods, and communities after a disaster.",
            marks: 3,
          },
          {
            q: "What is a landslide? How can it be prevented?",
            a: "A landslide is the rapid movement of rock, soil, and debris down a slope, triggered by gravity. Causes: heavy rainfall, earthquakes, deforestation, soil erosion, construction on unstable slopes. Prevention: (1) Afforestation – tree roots bind the soil. (2) Constructing retaining walls on slopes. (3) Avoiding construction on steep, unstable slopes. (4) Proper drainage to prevent water seepage into soil. (5) Terraced farming on hillsides. (6) Early warning systems and monitoring of vulnerable areas. (7) Restricting deforestation.",
            marks: 2,
          },
          {
            q: "How is a tsunami generated? Write the preventive measures.",
            a: "A tsunami is a series of huge ocean waves generated by sudden displacement of large volumes of seawater, usually caused by undersea earthquakes, volcanic eruptions, or landslides. Process: When an earthquake occurs on the ocean floor, it displaces water upward, creating waves that travel at high speeds (up to 800 km/h) across the ocean and increase in height near the coast. Preventive measures: (1) Tsunami early warning systems (TEWS). (2) Coastal mangrove forests as natural barriers. (3) Construction of sea walls. (4) Public awareness and evacuation drills. (5) Coastal zoning to restrict buildings near the shore.",
            marks: 3,
          },
          {
            q: "Give examples of man-made disasters.",
            a: "Man-made disasters are caused by human activities, negligence, or industrial accidents. Examples: (1) Bhopal Gas Tragedy (1984) – leakage of methyl isocyanate (MIC) gas from Union Carbide pesticide plant; thousands died. (2) Chernobyl Nuclear Disaster (1986) – explosion at a nuclear power plant in Ukraine, causing widespread radioactive contamination. (3) Oil spills – accidental release of petroleum into oceans, harming marine life. (4) Industrial fires. (5) Chemical explosions in factories. (6) Deforestation and desertification due to overexploitation of resources.",
            marks: 2,
          },
        ],
      },
    ],
  },
  {
    name: "भूगोल",
    id: "geography",
    chapters: class10GeographyChapters as Chapter[],
  },
  {
    name: "इतिहास",
    id: "history",
    chapters: class10HistoryChapters as Chapter[],
  },
];
