// Central Data Store for Serene Stalwarts - RIMS Srikakulam 2008 Inaugural Batch

export const BATCH_INFO = {
  name: "Serene Stalwarts",
  institution: "Rajiv Gandhi Institute of Medical Sciences (RIMS), Srikakulam",
  currentName: "Government Medical College (GMC), Srikakulam",
  batchYear: 2008,
  legacy: "The Founding Pioneer Batch — First 100 MBBS doctors who built the tradition and legacy of GMC Srikakulam.",
  motto: "First by Merit. Stalwarts by Bond. Healers by Heart.",
  yearsActive: "2008 – Forever",
};

export const STALWARTS = [
  {
    id: "dinesh",
    name: "Dr. Dinesh Goli",
    nickname: "Potti",
    roleClinical: "Endocrine & Breast Surgeon",
    roleHostel: "The Mastermind & Thyroid Whisperer",
    qualifications: "MBBS, DNB (Gen Surgery), MCh (Endocrine Surgery)",
    hospital: "Apollo Hospitals (Health City, Vizag) & VizagEndoSurgeon",
    location: "Visakhapatnam, AP",
    avatar: "./photos/doctors/dinesh_potti.jpeg",
    funAvatar: "./photos/reunions/dinesh_murali_acrsi_conf.jpg",
    theme: {
      color: "emerald",
      primaryText: "text-emerald-400",
      accentBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
      border: "border-emerald-500/40 hover:border-emerald-400",
      gradient: "from-emerald-500 via-teal-600 to-cyan-700",
      glow: "shadow-emerald-500/25",
      ring: "ring-emerald-400",
    },
    clinicalSummary:
      "One of Andhra Pradesh's premier Endocrine & Oncoplastic Breast Surgeons. Pioneer in scarless Transoral Endoscopic Thyroidectomy (TOETVA), complex parathyroid and adrenal surgeries, delivering world-class endocrine surgical precision.",
    hostelSummary:
      "Proof that genius comes in compact packages! Nicknamed 'Potti' in the hostel, he was the strategic mastermind who survived every anatomy viva, knew every shortcut on campus, and now operates on millimeters in the neck like an absolute maestro.",
    superpower: "Zero Scar Thyroid Precision & Infinite Academic Brainpower",
    hostelBadge: "Compact Dynamiter 💥",
    clinicalBadge: "MCh Endocrine Surgeon 🩺",
    quote: "Precision isn't just about surgery; it's how we turned 2008 hostel dreams into 2026 super-specialties.",
    dialogue: "Neck lo 2mm thyroid nodule unna sare... scarless ga baitaki theestam!",
    dialogueEnglish: "Even if there's a 2mm nodule in the neck, we remove it with zero visible scar!",
    statsClinical: [
      { label: "Surgical Precision", value: 99 },
      { label: "Scarless Tech (TOETVA)", value: 98 },
      { label: "Patient Care Index", value: 96 },
      { label: "Viva Speed", value: 95 }
    ],
    statsHostel: [
      { label: "Strategic Planning", value: 100 },
      { label: "Height-to-Brain Ratio", value: 100 },
      { label: "Late Night OT Stamina", value: 95 },
      { label: "Hostel Chai Attendance", value: 90 }
    ],
    tags: ["Endocrine Surgery", "MCh", "Apollo Vizag", "TOETVA Specialist"]
  },
  {
    id: "murali",
    name: "Dr. Murali Krishna",
    nickname: "Murali (The Boss)",
    roleClinical: "Consultant General & Laparoscopic Surgeon",
    roleHostel: "The Hospital Tycoon & Surgical Heavyweight",
    qualifications: "MBBS, MS / DNB (General Surgery), FIAGES / FMAS",
    hospital: "Managing Director, Sai Spurthi Multi Speciality Hospital",
    location: "Jangareddygudem, Eluru Dist, AP",
    avatar: "./photos/doctors/murali.jpeg",
    funAvatar: "./photos/reunions/dinesh_murali_acrsi_conf.jpg",
    theme: {
      color: "amber",
      primaryText: "text-amber-400",
      accentBg: "bg-amber-500/20 text-amber-300 border-amber-500/40",
      border: "border-amber-500/40 hover:border-amber-400",
      gradient: "from-amber-500 via-rose-600 to-red-700",
      glow: "shadow-amber-500/25",
      ring: "ring-amber-400",
    },
    clinicalSummary:
      "A renowned surgical powerhouse heading Sai Spurthi Multi Speciality Hospital in Jangareddygudem. Master of laparoscopic interventions, trauma, gastrointestinal surgery, and rural surgical empowerment.",
    hostelSummary:
      "No nickname needed because his presence command is naturally 100%! While everyone else was figuring out post-graduation, Murali built his own multi-speciality hospital and runs the surgical ecosystem in Jangareddygudem with supreme authority.",
    superpower: "Hospital Empire Builder & Laparoscopic Wizardry",
    hostelBadge: "The Don / Boss Man 👑",
    clinicalBadge: "Hospital MD & Lap Surgeon 🏥",
    quote: "Why work for someone else's hospital when you can build your own fortress for your people?",
    dialogue: "Jangareddygudem lo hospital manade... OT lo rule manade!",
    dialogueEnglish: "The hospital in Jangareddygudem is ours, and the rule in the OT is ours!",
    statsClinical: [
      { label: "Laparoscopic Dexterity", value: 98 },
      { label: "Hospital Leadership", value: 100 },
      { label: "Emergency Resection", value: 96 },
      { label: "Community Trust", value: 99 }
    ],
    statsHostel: [
      { label: "Sheer Boss Energy", value: 100 },
      { label: "Gym & Mirror Selfie Game", value: 96 },
      { label: "Hospitality & Feasts", value: 95 },
      { label: "Command Authority", value: 98 }
    ],
    tags: ["Sai Spurthi Hospital", "Laparoscopy", "General Surgery", "MD"]
  },
  {
    id: "sandeep",
    name: "Dr. Sandeep",
    nickname: "Sandy",
    roleClinical: "General Physician & Medical Officer",
    roleHostel: "The Legendary Dancer & Charismatic Playboy",
    qualifications: "MBBS, Senior Medical Officer",
    hospital: "Community Health Centre (CHC), Pendurthi",
    location: "Visakhapatnam, AP",
    avatar: "./photos/doctors/sandy.jpeg",
    funAvatar: "./photos/reunions/hostel_drinks_cheers.jpg",
    theme: {
      color: "rose",
      primaryText: "text-rose-400",
      accentBg: "bg-rose-500/20 text-rose-300 border-rose-500/40",
      border: "border-rose-500/40 hover:border-rose-400",
      gradient: "from-rose-500 via-pink-600 to-purple-700",
      glow: "shadow-rose-500/25",
      ring: "ring-rose-400",
    },
    clinicalSummary:
      "The frontline diagnostic bedrock at CHC Pendurthi. Handling rapid clinical triages, acute outpatient volumes, and acute adult medical stabilization with effortless composure and diagnosis.",
    hostelSummary:
      "Give him a dance floor or a college fest stage, and Sandy steals the entire show! The undisputed playboy and dance icon of RIMS 2008 batch — he treats patients with cool bedside charm by day, and dances like Allu Arjun by night.",
    superpower: "Instant Heart-Stealing Charm & Dance Floor Domination",
    hostelBadge: "Michael Jackson of GMC 🕺",
    clinicalBadge: "CHC Diagnostic Ace 🩺",
    quote: "Medicine cures the body, but rhythm cures the soul. And yes, steps look better in scrubs.",
    dialogue: "Beats vinapadithe aagadam impossible... stage clear cheyyandi mowa!",
    dialogueEnglish: "When the beat drops, stopping is impossible... clear the stage, brothers!",
    statsClinical: [
      { label: "Rapid OP Triage", value: 96 },
      { label: "Bedside Empathy", value: 95 },
      { label: "Emergency Calmness", value: 92 },
      { label: "Patient Popularity", value: 99 }
    ],
    statsHostel: [
      { label: "Dance Floor Fire", value: 100 },
      { label: "Playboy Charisma", value: 100 },
      { label: "Hair & Beard Styling", value: 98 },
      { label: "College Fest Screams", value: 99 }
    ],
    tags: ["CHC Pendurthi", "Dancer", "General Medicine", "Charisma Icon"]
  },
  {
    id: "seshagiri",
    name: "Dr. Seshagiri",
    nickname: "Seshu",
    roleClinical: "In-Service General Surgery Resident (Final Year)",
    roleHostel: "The OT Endurance Beast & Bhajan Maestro",
    qualifications: "MBBS, MS (General Surgery - Final Year AMC)",
    hospital: "Andhra Medical College (AMC) / King George Hospital (KGH)",
    location: "Visakhapatnam, AP",
    avatar: "./photos/doctors/seshu.jpeg",
    funAvatar: "./photos/reunions/towel_laugh_fun.jpg",
    theme: {
      color: "orange",
      primaryText: "text-orange-400",
      accentBg: "bg-orange-500/20 text-orange-300 border-orange-500/40",
      border: "border-orange-500/40 hover:border-orange-400",
      gradient: "from-orange-500 via-amber-600 to-red-600",
      glow: "shadow-orange-500/25",
      ring: "ring-orange-400",
    },
    clinicalSummary:
      "Currently dominating the surgical wards and OTs of Andhra Medical College in his final year of in-service General Surgery. Clocking hundreds of complex emergency laparatomy and elective procedures at KGH.",
    hostelSummary:
      "Whether standing through an 8-hour laparotomy or holding the most hilarious prayer poses in a traditional lungi (caught doing full ear-touching sit-ups on camera!), Seshu brings pure laughter, religious devotion, and relentless surgical stamina.",
    superpower: "12-Hour Continuous OT Stamina & Ultimate Comic Timing",
    hostelBadge: "Surgical Swami 🧘‍♂️",
    clinicalBadge: "AMC Surgery Finalist 🔪",
    quote: "When the OT bell rings at KGH, fatigue is an illusion and suture speed is the only reality.",
    dialogue: "KGH OT lo 12 hours nunchondi chudu... debbaki meditation arthamavthundi!",
    dialogueEnglish: "Stand for 12 hours in KGH OT... you'll understand what true meditation feels like!",
    statsClinical: [
      { label: "OT Stamina", value: 98 },
      { label: "KGH Emergency Reflexes", value: 96 },
      { label: "Tissue Handling", value: 94 },
      { label: "Final Year Focus", value: 97 }
    ],
    statsHostel: [
      { label: "Traditional Poses", value: 100 },
      { label: "Banter Quotient", value: 95 },
      { label: "Late Night Parotta Runs", value: 94 },
      { label: "Punctuality", value: 78 }
    ],
    tags: ["Andhra Medical College", "KGH Vizag", "General Surgery", "Final Year"]
  },
  {
    id: "satyendra",
    name: "Dr. Satyendra",
    nickname: "Satya",
    roleClinical: "Radiologist & Diagnostic Centre Founder",
    roleHostel: "The X-Ray King & Three Lamps Mogul",
    qualifications: "MBBS, DMRD / MD (Radiodiagnosis)",
    hospital: "Founder & Director, Citi Scans & Diagnostics",
    location: "Vizianagaram, AP",
    avatar: "./photos/doctors/satya.jpeg",
    funAvatar: "./photos/reunions/towel_laugh_fun.jpg",
    theme: {
      color: "cyan",
      primaryText: "text-cyan-400",
      accentBg: "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
      border: "border-cyan-500/40 hover:border-cyan-400",
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
      glow: "shadow-cyan-500/25",
      ring: "ring-cyan-400",
    },
    clinicalSummary:
      "Founder and Chief Radiologist at Citi Scans & Diagnostics in Vizianagaram. The diagnostic backbone for thousands of clinicians across the district, deciphering CT, MRI, ultrasound, and Doppler with millimeter accuracy.",
    hostelSummary:
      "You can't hide anything from Satya — both inside the body and in the hostel! Always sharp, stylish, rocking the microphone at batch reunions, and holding the towel-pulling laughing record with unmatched glee.",
    superpower: "Supersonic Cross-Sectional Vision & Clinical Diagnosis",
    hostelBadge: "Microphone Commander 🎙️",
    clinicalBadge: "Citi Scans Director 🔬",
    quote: "A surgeon opens to see, a physician talks to see, but a radiologist sees without opening anything.",
    dialogue: "Slice thickness 0.5mm lo chustam... em daagina dorikipothundi!",
    dialogueEnglish: "We view at 0.5mm slice thickness... whatever is hidden will be spotted immediately!",
    statsClinical: [
      { label: "CT/MRI Diagnosis", value: 99 },
      { label: "Diagnostic Accuracy", value: 98 },
      { label: "Scan Report Turnaround", value: 95 },
      { label: "Interventional Guidance", value: 92 }
    ],
    statsHostel: [
      { label: "Reunion Stage Presence", value: 98 },
      { label: "Mischief Orchestration", value: 96 },
      { label: "Towel Pulling Skill", value: 100 },
      { label: "Business Sense", value: 97 }
    ],
    tags: ["Citi Scans", "Vizianagaram", "Radiologist", "Imaging Expert"]
  },
  {
    id: "raviteja",
    name: "Dr. Raviteja",
    nickname: "Gajji / RT",
    roleClinical: "Consultant Orthopedic Surgeon",
    roleHostel: "The Bone Re-architect & Style Icon",
    qualifications: "MBBS, MS / DNB (Orthopedics)",
    hospital: "Dr. K.V. Rama Rao Hospital",
    location: "Vizianagaram, AP",
    avatar: "./photos/doctors/rt.jpeg",
    funAvatar: "./photos/reunions/college_bench_friends.jpg",
    theme: {
      color: "lime",
      primaryText: "text-lime-400",
      accentBg: "bg-lime-500/20 text-lime-300 border-lime-500/40",
      border: "border-lime-500/40 hover:border-lime-400",
      gradient: "from-lime-500 via-emerald-600 to-teal-700",
      glow: "shadow-lime-500/25",
      ring: "ring-lime-400",
    },
    clinicalSummary:
      "Renowned orthopedic surgeon in Vizianagaram practicing at Dr. K.V. Rama Rao Hospital. Renowned for joint trauma reconstruction, fracture fixation, arthroplasty, and getting patients back on their feet fast.",
    hostelSummary:
      "Affectionately tagged 'Gajji' or 'RT' since 2008, he had the best curly hair, funky glasses, and effortless attitude. Now he works with heavy orthopedic drills, hammers, and titanium plates like an absolute orthopedic rockstar.",
    superpower: "Titanium Bone Alignment & Effortless Hostel Cool",
    hostelBadge: "Gajji The Great 🦴",
    clinicalBadge: "Rama Rao Ortho Chief 🔨",
    quote: "Give me an open fracture, a good set of titanium implants, and 45 minutes — and you'll walk out smiling.",
    dialogue: "Entha pedda fracture aina titanium drill tho alignment set!",
    dialogueEnglish: "No matter how bad the fracture, with our titanium drill the alignment is set!",
    statsClinical: [
      { label: "Fracture Alignment", value: 98 },
      { label: "Orthopedic Hardware", value: 97 },
      { label: "Trauma Response", value: 95 },
      { label: "Joint Mobility", value: 94 }
    ],
    statsHostel: [
      { label: "Cool Glasses Swag", value: 99 },
      { label: "Hostel Chill Factor", value: 98 },
      { label: "Backbench Laughs", value: 97 },
      { label: "Chai Debates", value: 94 }
    ],
    tags: ["Rama Rao Hospital", "Orthopedics", "Vizianagaram", "Trauma"]
  },
  {
    id: "trimurthulu",
    name: "Dr. Trimurthulu",
    nickname: "Timmu",
    roleClinical: "DM Critical Care Specialist (Intensivist)",
    roleHostel: "The ICU Guardian & Zen Master",
    qualifications: "MBBS, MD (Anaesthesia/Medicine), DM (Critical Care)",
    hospital: "Medicover Hospital Vizag ➔ GITAM Medical College",
    location: "Visakhapatnam, AP",
    avatar: "./photos/doctors/timmu.jpeg",
    funAvatar: "./photos/reunions/two_friends_garden.jpg",
    theme: {
      color: "purple",
      primaryText: "text-purple-400",
      accentBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
      border: "border-purple-500/40 hover:border-purple-400",
      gradient: "from-purple-500 via-indigo-600 to-sky-600",
      glow: "shadow-purple-500/25",
      ring: "ring-purple-400",
    },
    clinicalSummary:
      "DM Critical Care super-specialist on the cutting edge of modern critical medicine. Safeguarding the critically ill at Medicover Vizag and now stepping up to GITAM Medical College to shape medical postgraduates and ICU care.",
    hostelSummary:
      "When monitors are beeping like crazy and arterial pressures crash, Timmu is calmer than an ancient rishi. In the hostel, he's the warm-hearted 'Timmu' with sandalwood on his forehead, radiating positivity and brotherhood everywhere.",
    superpower: "Sub-Second Intubation & Calm in the Midst of ICU Storms",
    hostelBadge: "Zen Master Timmu 🧘",
    clinicalBadge: "DM Critical Care Super-Spec ⚡",
    quote: "The ICU is where science meets courage. Keep the airway secured, the pulse steady, and never lose hope.",
    dialogue: "Ventilator beeps entha gattiga unna... Timmu unte tension vaddu!",
    dialogueEnglish: "No matter how loud the ventilator alarms, when Timmu is there, zero tension!",
    statsClinical: [
      { label: "Critical Care Resuscitation", value: 99 },
      { label: "Arterial Lines & Intubation", value: 98 },
      { label: "Hemodynamic Control", value: 97 },
      { label: "ICU Crisis Calmness", value: 100 }
    ],
    statsHostel: [
      { label: "Zen Composure", value: 100 },
      { label: "Pure Sweetness", value: 99 },
      { label: "Biryani Appreciation", value: 96 },
      { label: "Friendship Reliability", value: 100 }
    ],
    tags: ["DM Critical Care", "Medicover", "GITAM", "ICU Specialist"]
  },
  {
    id: "aravind",
    name: "Dr. Aravind",
    nickname: "Aru",
    roleClinical: "Public Health Medical Officer (Govt. of AP)",
    roleHostel: "The Grassroots Legend & People's Doctor",
    qualifications: "MBBS, Civil Assistant Surgeon / Medical Officer",
    hospital: "Primary Health Centre (PHC), Government of Andhra Pradesh",
    location: "Andhra Pradesh",
    avatar: "./photos/doctors/aru.jpeg",
    funAvatar: "./photos/reunions/cafe_hangout.jpg",
    theme: {
      color: "green",
      primaryText: "text-green-400",
      accentBg: "bg-green-500/20 text-green-300 border-green-500/40",
      border: "border-green-500/40 hover:border-green-400",
      gradient: "from-green-500 via-emerald-600 to-teal-800",
      glow: "shadow-green-500/25",
      ring: "ring-green-400",
    },
    clinicalSummary:
      "The true frontline guardian of public health in Andhra Pradesh. Leading maternal-child immunization, viral outbreak containment, rural emergency medical services, and government healthcare outreach.",
    hostelSummary:
      "Affectionately called 'Aru', he has a smile that can cure fifty ailments before writing a prescription! From devout temple visits to being the moral anchor of the 2008 gang, Aru is the unsung real-world superhero.",
    superpower: "Mass Medical Outreach & Heartfelt Empathy",
    hostelBadge: "Aru The Angel 😇",
    clinicalBadge: "AP Govt Health Champion 🌿",
    quote: "True medicine lives where the farthest patient walks into a government clinic and receives dignity and care.",
    dialogue: "Pedala kosam seva cheyyadam lo vache trupthi veru mowa!",
    dialogueEnglish: "The satisfaction of serving people at the grassroots is unmatched, brother!",
    statsClinical: [
      { label: "Grassroots Clinical Triage", value: 98 },
      { label: "Maternal & Child Care", value: 97 },
      { label: "Community Leadership", value: 99 },
      { label: "Epidemic Surveillance", value: 95 }
    ],
    statsHostel: [
      { label: "Temple Devotion", value: 100 },
      { label: "Unshakable Loyalty", value: 100 },
      { label: "Gentle Smile", value: 98 },
      { label: "Mess Food Tolerance", value: 95 }
    ],
    tags: ["PHC Doctor", "Govt of AP", "Public Health", "Aru"]
  },
  {
    id: "amarnath",
    name: "Dr. Amarnath",
    nickname: "Amar",
    roleClinical: "Orthopedic Surgeon (Indian Railways)",
    roleHostel: "The Railway Traumatologist & Interstate Bone Fixer",
    qualifications: "MBBS, MS / DNB (Orthopedics)",
    hospital: "Railway Hospital, West Central Railway (WCR)",
    location: "Jabalpur, Madhya Pradesh",
    avatar: "./photos/reunions/doctor_clinic_stethoscope.jpg",
    funAvatar: "./photos/reunions/college_flag_day.jpg",
    theme: {
      color: "yellow",
      primaryText: "text-yellow-500",
      accentBg: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
      border: "border-yellow-500/40 hover:border-yellow-400",
      gradient: "from-yellow-600 via-amber-700 to-stone-800",
      glow: "shadow-yellow-500/25",
      ring: "ring-yellow-400",
    },
    clinicalSummary:
      "Specialist Orthopedic Surgeon serving Indian Railways at West Central Railway headquarters in Jabalpur. Tackling complex train trauma, occupational orthopedic injuries, and joint reconstructions for railway personnel.",
    hostelSummary:
      "The only stalwart who ventured north to conquer the Indian Railways in Madhya Pradesh! Known as 'Amar', he combined quiet determination with a wicked sense of humor in hostel room sessions and flag hoisting days.",
    superpower: "High-Velocity Railway Trauma Fixation & Iron Will",
    hostelBadge: "Amar The Locomotive 🚂",
    clinicalBadge: "Railway Orthopedic Ace 🛠️",
    quote: "The Indian Railways moves the nation; our orthopedic hands keep the workforce moving without pain.",
    dialogue: "Railways lo emergency unte speed 120 kmph... mana reduction kooda anthe fast!",
    dialogueEnglish: "When there's an emergency in Railways, it's 120 kmph... our orthopedic fixation is just as fast!",
    statsClinical: [
      { label: "Railway Trauma Care", value: 97 },
      { label: "Fracture Reduction", value: 96 },
      { label: "Orthopedic Rehabilitation", value: 94 },
      { label: "Interstate Medical Service", value: 98 }
    ],
    statsHostel: [
      { label: "Cross-Country Journeying", value: 99 },
      { label: "Hostel Quiet Confidence", value: 95 },
      { label: "National Pride", value: 98 },
      { label: "Reunion Fly-Ins", value: 96 }
    ],
    tags: ["Indian Railways", "Jabalpur", "Orthopedics", "WCR"]
  }
];

export const HOSTEL_DIALOGUES = [
  {
    doctor: "Dr. Dinesh",
    nickname: "Potti",
    telugu: "Mowa, viva lo em adigina confident ga cheppali... remainingantha magic!",
    english: "Bro, whatever they ask in viva, speak with pure confidence... the rest is magic!",
    tag: "Exam Wisdom",
    icon: "🧠"
  },
  {
    doctor: "Dr. Sandeep",
    nickname: "Sandy",
    telugu: "Sound penchandi boss! Stage ekkithe Allu Arjun step padalsindhe!",
    english: "Crank up the volume! Once I hit the stage, that Allu Arjun step is mandatory!",
    tag: "Dance Floor Rule",
    icon: "🕺"
  },
  {
    doctor: "Dr. Murali",
    nickname: "Murali (The Boss)",
    telugu: "Hospital pettam ante standard international ga undali... Jangareddygudem lo history create chesam!",
    english: "If we build a hospital, standards must be international... we made history in Jangareddygudem!",
    tag: "Tycoon Mindset",
    icon: "🏥"
  },
  {
    doctor: "Dr. Satyendra",
    nickname: "Satya",
    telugu: "Reunion lo towel lagakapothe adi batch meet ela avtundi mowa?!",
    english: "If someone doesn't pull a towel at the reunion, how can it even be called a batch meet?!",
    tag: "Towel Gate Lore",
    icon: "🤣"
  },
  {
    doctor: "Dr. Seshagiri",
    nickname: "Seshu",
    telugu: "OT lo 10 hours continuous ga standing... KGH lo training ante mamulga undadu!",
    english: "10 hours continuous standing in OT... KGH training is not for the faint of heart!",
    tag: "OT Endurance",
    icon: "💪"
  },
  {
    doctor: "Dr. Trimurthulu",
    nickname: "Timmu",
    telugu: "Airway secure aipoindi... arterial line in place... ICU calm aipoindi!",
    english: "Airway secured... arterial line in place... the ICU is now calm!",
    tag: "Zen Intensivist",
    icon: "🧘"
  },
  {
    doctor: "Dr. Raviteja",
    nickname: "Gajji / RT",
    telugu: "Drill speed set cheyyandi... titanium plate tho bone alignment 100% perfect!",
    english: "Set the drill speed... with the titanium plate, bone alignment is 100% perfect!",
    tag: "Ortho Swagger",
    icon: "🔨"
  },
  {
    doctor: "Dr. Aravind",
    nickname: "Aru",
    telugu: "First year dissection hall lo start aina friendship... 16 years aina intact!",
    english: "A brotherhood that started in first-year dissection hall... 16 years later, still intact!",
    tag: "Pure Nostalgia",
    icon: "❤️"
  },
  {
    doctor: "Dr. Amarnath",
    nickname: "Amar",
    telugu: "Srikakulam beach nunchi Jabalpur Railway Hospital varaku... journey super mowa!",
    english: "From Srikakulam beach to Jabalpur Railway Hospital... what a journey, brother!",
    tag: "Railway Mission",
    icon: "🚂"
  }
];

export const WHEEL_PROMPTS = [
  "Who is treating the gang to Biryani today? 🍗",
  "Who must do a dance step right now? 🕺",
  "Who will give a 10-minute lecture on health? 🩺",
  "Who is most likely to answer a late-night phone call? 📞",
  "Who pulled the towel at the reunion? 🤣",
  "Who had the highest attendance in college? 🎓",
  "Who had the lowest attendance in 8 AM Anatomy? 😴",
  "Who will sponsor the next batch reunion party? 🍾"
];

export const VAULT_PHOTOS = [
  {
    src: "./photos/reunions/wedding_suits_stalwarts.jpg",
    title: "The Wedding Suits Gala — Dressed to Kill",
    category: "Reunion",
    year: "2024",
    tilt: "-2.2deg",
    description: "The boys looking dashing in sharp kurtas and formal shirts at the grand marriage hall reunion."
  },
  {
    src: "./photos/reunions/turf_match_night.jpg",
    title: "Box Cricket Night Match — Stalwarts XI",
    category: "Sports & Fun",
    year: "2024",
    tilt: "1.8deg",
    description: "Under the floodlights on the turf pitch! Bowling bouncers and hitting sixes like college first-year days."
  },
  {
    src: "./photos/reunions/cricket_turf_squad.jpg",
    title: "Cricket Squad After-Match Huddle",
    category: "Sports & Fun",
    year: "2024",
    tilt: "-1.5deg",
    description: "Sweaty, smiling, and laughing off missed catches — sports brotherhood at its absolute peak."
  },
  {
    src: "./photos/reunions/kids_daughters_daddys.jpg",
    title: "Little Princesses & Proud Doctor Dads",
    category: "Family",
    year: "2024",
    tilt: "2.2deg",
    description: "The doctors holding their adorable little daughters in their arms. The next generation of Stalwarts!"
  },
  {
    src: "./photos/reunions/birthday_party_reunion.jpg",
    title: "Mermaid Theme Birthday Bash",
    category: "Family",
    year: "2024",
    tilt: "-2deg",
    description: "Families united around the birthday cake — laughing, celebrating, and showering love on the little ones."
  },
  {
    src: "./photos/reunions/sweets_shop_family.jpg",
    title: "Sweet Cravings & Family Outing",
    category: "Family",
    year: "2024",
    tilt: "1.5deg",
    description: "Buying boxes of sweets and celebrating togetherness with spouses and kids in Vizag."
  },
  {
    src: "./photos/reunions/classroom_batch_2008.jpg",
    title: "RIMS Srikakulam 2008 — Classroom Hall",
    category: "College 2008",
    year: "2009",
    tilt: "-1.8deg",
    description: "Standing together in the college demonstration room — the fresh-faced pioneer batch of GMC Srikakulam."
  },
  {
    src: "./photos/reunions/college_batch_auditorium.jpg",
    title: "Full Batch Memories at RIMS",
    category: "College 2008",
    year: "2010",
    tilt: "2deg",
    description: "The historic group picture of the 2008 batch with all friends united in the college hall."
  },
  {
    src: "./photos/reunions/river_boat_gang.jpg",
    title: "River Boat Cruise with Timmu",
    category: "Trips",
    year: "2024",
    tilt: "-2.4deg",
    description: "Cruising the holy waters with orange life jackets, wind in hair, and scenic ghats in the backdrop."
  },
  {
    src: "./photos/reunions/room_bed_hangout.jpg",
    title: "The Big Bed Hostel Chillout",
    category: "Hostel Banter",
    year: "2024",
    tilt: "1.6deg",
    description: "Piled onto one bed in the hotel room — late-night gossips, college stories, and belly laughs."
  },
  {
    src: "./photos/reunions/medical_expo_trio.jpg",
    title: "Medical Expo & Surgical Delegates",
    category: "Conferences",
    year: "2024",
    tilt: "-1.7deg",
    description: "Dr. Murali and fellow surgical delegates exploring the latest colon and laparoscopic surgical tech."
  },
  {
    src: "./photos/reunions/doctor_clinic_stethoscope.jpg",
    title: "Young Doctor with Stethoscope",
    category: "College 2008",
    year: "2013",
    tilt: "2.1deg",
    description: "Stethoscope slung over the shoulder, deep in thought checking clinical notes — the intern days."
  },
  {
    src: "./photos/reunions/reunion_dinner_full_gang.jpg",
    title: "The High Table Feast — All 9 Reunited",
    category: "Reunion",
    year: "2024",
    tilt: "-2deg",
    description: "The complete brotherhood around the dinner table, recounting 16 years of memories, food, and endless banter."
  },
  {
    src: "./photos/reunions/towel_laugh_fun.jpg",
    title: "The Epic Towel Pull Incident",
    category: "Hostel Banter",
    year: "Classic",
    tilt: "2.5deg",
    description: "Satya in a sharp blue suit pulling the towel while Seshu collapses in pure, uncontrollable laughter. True hostel madness!"
  },
  {
    src: "./photos/reunions/reunion_cheers_toast.jpg",
    title: "To 16+ Years of Brotherhood & Beyond",
    category: "Reunion",
    year: "2024",
    tilt: "-1.5deg",
    description: "Raising glasses to the memories of 2008 RIMS Srikakulam and the bright future ahead for all stalwarts."
  },
  {
    src: "./photos/reunions/five_friends_outdoor.jpg",
    title: "The Frontline Squad Reunion",
    category: "Reunion",
    year: "2024",
    tilt: "1.8deg",
    description: "Five stalwarts gathered under the open sky — smiles that have not changed since first year dissection hall."
  },
  {
    src: "./photos/reunions/dinesh_murali_acrsi_conf.jpg",
    title: "Dr. Dinesh & Dr. Murali at ACRSICON",
    category: "Conferences",
    year: "2024",
    tilt: "-2.2deg",
    description: "Representing RIMS 2008 with pride at the National Association of Colon and Rectal Surgeons of India."
  },
  {
    src: "./photos/reunions/hostel_drinks_cheers.jpg",
    title: "Room Hangout & Mountain Dew Cheers",
    category: "Hostel Banter",
    year: "Throwback",
    tilt: "1.2deg",
    description: "Paper glasses, crispy chicken on plates, bed snacks, and late-night life debates. Pure nostalgia."
  },
  {
    src: "./photos/reunions/beach_trip_2008.jpg",
    title: "Srikakulam Coast — First Year Days",
    category: "College 2008",
    year: "2009",
    tilt: "-1.8deg",
    description: "Golden sands and roaring waves of the Srikakulam coastline when 8 AM anatomy lectures were the only worry."
  },
  {
    src: "./photos/reunions/college_flag_day.jpg",
    title: "Patriotic Day at RIMS Srikakulam",
    category: "College 2008",
    year: "2010",
    tilt: "2deg",
    description: "Flag badges pinned on crisp shirts, youthful smiles, and the dreams of becoming doctors in the making."
  },
  {
    src: "./photos/reunions/cafe_hangout.jpg",
    title: "Sweet Cravings & Cafe Rendezvous",
    category: "Reunion",
    year: "2023",
    tilt: "-2deg",
    description: "Catching up over brownies, pastries, and green soda — discussing surgeries, clinics, and life."
  },
  {
    src: "./photos/reunions/home_gathering.jpg",
    title: "Family, Kids & Warm Welcomes",
    category: "Family",
    year: "2024",
    tilt: "1.5deg",
    description: "When college friends become family, and the next generation joins the Stalwart legacy."
  },
  {
    src: "./photos/reunions/two_friends_garden.jpg",
    title: "Sandy & Timmu: Sunshine & Greenery",
    category: "Reunion",
    year: "2024",
    tilt: "-1deg",
    description: "Casual weekend moments under the shade of trees, unwinding away from hospital beepers."
  },
  {
    src: "./photos/reunions/college_bench_friends.jpg",
    title: "Lecture Hall Backbenches",
    category: "College 2008",
    year: "2010",
    tilt: "2.5deg",
    description: "Phones in hand, red glasses on, and plotting who will answer roll calls for the absent buddies."
  }
];

export const ODYSSEY_NODES = [
  {
    name: "RIMS Srikakulam (Origin)",
    coords: { x: 80, y: 35 },
    role: "The Genesis (2008)",
    description: "Where all 9 met in 2008 as the historic Inaugural 100-student batch 'Serene Stalwarts'.",
    doctors: "All 9 Stalwarts"
  },
  {
    name: "Visakhapatnam (Vizag Hub)",
    coords: { x: 74, y: 46 },
    role: "Super-Specialty Epicenter",
    description: "Apollo Hospitals (Dr. Dinesh), Andhra Medical College (Dr. Seshu), CHC Pendurthi (Dr. Sandy), Medicover & GITAM (Dr. Timmu).",
    doctors: "Dr. Dinesh, Dr. Seshu, Dr. Sandy, Dr. Timmu"
  },
  {
    name: "Vizianagaram (Diagnostic & Ortho Hub)",
    coords: { x: 77, y: 41 },
    role: "Clinical Stronghold",
    description: "Citi Scans & Diagnostics (Dr. Satya) and Dr. K.V. Rama Rao Hospital (Dr. Raviteja).",
    doctors: "Dr. Satya, Dr. Raviteja"
  },
  {
    name: "Jangareddygudem (Eluru)",
    coords: { x: 60, y: 60 },
    role: "Surgical Fortress",
    description: "Sai Spurthi Multi Speciality Hospital, headed by Managing Director Dr. Murali Krishna.",
    doctors: "Dr. Murali Krishna"
  },
  {
    name: "Jabalpur (Madhya Pradesh)",
    coords: { x: 42, y: 15 },
    role: "Interstate Railway Mission",
    description: "West Central Railway Hospital, staffed by Orthopedic Specialist Dr. Amarnath.",
    doctors: "Dr. Amarnath"
  },
  {
    name: "Andhra Pradesh PHC Grid",
    coords: { x: 68, y: 55 },
    role: "Grassroots Lifeline",
    description: "Primary Health Centre network serving rural and semi-urban communities with Dr. Aravind.",
    doctors: "Dr. Aravind"
  }
];

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Who is most likely to break into an Allu Arjun hook-step in the hospital corridor?",
    options: ["Dr. Dinesh (Potti)", "Dr. Sandeep (Sandy)", "Dr. Murali", "Dr. Aravind (Aru)"],
    correctIndex: 1,
    funFact: "Sandy's dance energy is legendary across RIMS 2008 history — he brings the dance floor with him wherever he goes!"
  },
  {
    id: 2,
    question: "Who will spot a 3mm thyroid nodule and remove it without leaving a single mark on the neck?",
    options: ["Dr. Dinesh (Potti)", "Dr. Satya", "Dr. Seshu", "Dr. Amarnath"],
    correctIndex: 0,
    funFact: "Dr. Dinesh is an MCh Endocrine Surgeon specializing in scarless transoral thyroid surgery (TOETVA)!"
  },
  {
    id: 3,
    question: "Who owns and runs an entire Multi-Speciality Hospital like a total boss in Jangareddygudem?",
    options: ["Dr. Murali Krishna", "Dr. Raviteja", "Dr. Timmu", "Dr. Sandy"],
    correctIndex: 0,
    funFact: "Dr. Murali Krishna is the founder and Managing Director of Sai Spurthi Multi Speciality Hospital!"
  },
  {
    id: 4,
    question: "Who is the ICU Zen Master capable of calmly securing an airway while the whole monitor is beeping?",
    options: ["Dr. Trimurthulu (Timmu)", "Dr. Potti", "Dr. Seshu", "Dr. Amar"],
    correctIndex: 0,
    funFact: "Dr. Timmu has a DM in Critical Care and manages high-stakes emergencies at Medicover & GITAM Medical College!"
  },
  {
    id: 5,
    question: "Who can see through human bones and organs at Citi Scans Vizianagaram without touching a scalpel?",
    options: ["Dr. Satyendra (Satya)", "Dr. Gajji", "Dr. Aru", "Dr. Seshu"],
    correctIndex: 0,
    funFact: "Satya is the mastermind behind Citi Scans & Diagnostics in Vizianagaram, deciphering CTs & MRIs day in and day out."
  },
  {
    id: 6,
    question: "Who is fixing fractured bones for locomotive drivers and railway passengers all the way in Jabalpur?",
    options: ["Dr. Amarnath (Amar)", "Dr. Raviteja", "Dr. Dinesh", "Dr. Timmu"],
    correctIndex: 0,
    funFact: "Dr. Amar is an Orthopedic Surgeon with the Indian Railways (West Central Railway) stationed in Jabalpur, MP!"
  },
  {
    id: 7,
    question: "Who can stand on his feet for a marathon 10-hour emergency surgery at AMC/KGH without breaking a sweat?",
    options: ["Dr. Seshagiri (Seshu)", "Dr. Sandy", "Dr. Satya", "Dr. Amar"],
    correctIndex: 0,
    funFact: "Dr. Seshu is completing his final year General Surgery residency at the historic Andhra Medical College / KGH!"
  },
  {
    id: 8,
    question: "Who is the orthopedic bone-drilling wizard practicing at Dr. K.V. Rama Rao Hospital Vizianagaram?",
    options: ["Dr. Raviteja (Gajji / RT)", "Dr. Dinesh", "Dr. Aravind", "Dr. Sandy"],
    correctIndex: 0,
    funFact: "Dr. Raviteja (RT) is the orthopedic pillar of Rama Rao Hospital in Vizianagaram!"
  }
];
