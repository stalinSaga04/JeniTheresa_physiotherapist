export const SYMPTOM_AREAS = [
  {
    id: "cervical",
    name: "Neck Pain & Cervical Stiffness",
    tagline: "Relief from computer desk posture & neck tightness",
    symptomSummary: "Stiffness around the neck and upper shoulders, headaches after long working hours, or a tingling sensation extending down your arm. Common among software and office professionals.",
    rootCauses: [
      "Leaning forward toward laptop or mobile screens for prolonged periods during desk work",
      "Overworking shoulder and neck muscles due to unsupported sitting posture",
      "Stiffness in upper back joints from long drives or two-wheeler commuting"
    ],
    commonMistakes: "Relying only on pain balm, painkiller tablets, or heating pads without gently relaxing the stiff muscles and strengthening your posture.",
    jeniTreatment: [
      "Hands-on joint therapy to release neck tension and restore smooth movement",
      "Targeted gentle trigger point release for knotted shoulder muscles",
      "Simple nerve gliding exercises to relieve arm tingling and numbness",
      "Customized 5-minute desk exercises to keep your neck strong all day"
    ],
    sessionEstimate: "3–5 Sessions for complete comfort and improved mobility",
    urgencyLevel: "Recommended promptly if you notice any numbness or tingling in your hands."
  },
  {
    id: "rotator",
    name: "Shoulder Pain & Joint Restriction",
    tagline: "Treatment for arm lifting pain and shoulder stiffness",
    symptomSummary: "Pain or discomfort when lifting your arm, stiffness in reaching overhead, or ache when sleeping on your shoulder. Very common in active adults and badminton or sports players.",
    rootCauses: [
      "Strained shoulder tendons from excessive overhead reaching, throwing, or heavy lifting",
      "Tight shoulder joint muscles limiting natural shoulder arm movement",
      "Poor alignment of the upper shoulder blades during routine daily work"
    ],
    commonMistakes: "Stopping all movement completely (which makes muscles weaker and stiffer) or relying solely on injections without restoring natural shoulder mobility.",
    jeniTreatment: [
      "Guided gentle shoulder joint mobilization to improve reaching flexibility",
      "Progressive rubber band and resistance exercises to strengthen shoulder tendons",
      "Hands-on muscle relaxation for shoulder tightness",
      "Clear guidance on safe arm lifting techniques for sports and housework"
    ],
    sessionEstimate: "4–6 Sessions with simple structured home exercises",
    urgencyLevel: "Recommended if you have trouble lifting your arm after a slip or fall."
  },
  {
    id: "lumbar",
    name: "Lower Back Pain & Sciatica",
    tagline: "Effective relief for slip disc ache, hip pain & sciatica",
    symptomSummary: "A ache in your lower back after sitting for long periods, discomfort when bending forward, or sharp pain shooting down into your thigh and leg (sciatica).",
    rootCauses: [
      "Sitting continuously without back support, which strains lower spinal muscles",
      "Lifting heavy objects or bending suddenly without bending your knees and hips",
      "Muscle spasms and tiredness from weakened stomach and back supporting muscles"
    ],
    commonMistakes: "Wearing rigid back belts all day or staying in bed for weeks without doing gentle guided back movements and core exercises.",
    jeniTreatment: [
      "Gentle physical therapy adjustments to relieve lower back nerve pressure",
      "Simple step-by-step stretching to eliminate sciatic leg pain",
      "Core muscle strengthening to support your lower back during travel and work",
      "Personalized daily posture guidance for office chairs and car rides"
    ],
    sessionEstimate: "4–7 Sessions to restore strong back flexibility",
    urgencyLevel: "Immediate checkup advised if you experience persistent leg weakness."
  },
  {
    id: "patellar",
    name: "Knee Pain & Joint Arthritis",
    tagline: "Comfortable recovery for staircase walking & squatting",
    symptomSummary: "Discomfort or swelling in your knee when climbing stairs, standing up after sitting for hours, walking long distances, or visiting temples.",
    rootCauses: [
      "Weaker hip and thigh muscles putting extra pressure directly on the knee joint",
      "Tight thigh muscles pulling the kneecap slightly off its center walking groove",
      "Sudden increases in prolonged walking or intense jumping without warm-up"
    ],
    commonMistakes: "Fearing that exercise will hurt your bones, or relying solely on ice packs and ointments instead of strengthening your thigh muscles.",
    jeniTreatment: [
      "Thigh and hip strengthening exercises to absorb pressure away from your knee",
      "Guided physical therapy stretching to make walking up and down stairs easy",
      "Supportive clinical taping to immediately reduce joint discomfort",
      "Personalized advice on comfortable footwear and walking habits"
    ],
    sessionEstimate: "4–6 Sessions to walk and climb stairs with confidence",
    urgencyLevel: "Moderate — Early physical therapy stops joint stiffness before it grows."
  },
  {
    id: "achilles",
    name: "Heel & Foot Pain (Ankle Strain)",
    tagline: "Relief for morning foot pain and tight calf muscles",
    symptomSummary: "Sharp stabbing discomfort under your heel on your first steps out of bed in the morning, or ankle ache after walking or running on hard surfaces.",
    rootCauses: [
      "Tight calf muscles pulling on the heel ligament (plantar fascia) overnight",
      "Walking on hard floors with unsupportive thin slippers or completely barefoot",
      "Sudden long walking routines without gently stretching your calf and ankle muscles"
    ],
    commonMistakes: "Ignoring morning foot pain or only using soft gel cushions without gently stretching and strengthening your calf muscles.",
    jeniTreatment: [
      "Hands-on therapy to loosen tight ankle tendons and calf muscles",
      "Simple step-up strengthening exercises for foot arch support",
      "Comfortable morning stretch routines to make waking up painless",
      "Expert guidance on correct daily footwear for comfortable walking"
    ],
    sessionEstimate: "3–5 Sessions for lasting daily walking comfort",
    urgencyLevel: "Low to Moderate — Consistent simple stretching brings permanent relief."
  }
];

export const TIMELINE_STAGES = [
  {
    week: "Weeks 1–2",
    title: "Immediate Relief & Reducing Muscle Spasm",
    passiveApproach: {
      action: "Only taking temporary painkiller tablets or relying solely on electrical massage beds without doctor assessment.",
      result: "Pain disappears for a few hours but returns quickly once medication wears off because the weakened muscle remains unchanged."
    },
    honestApproach: {
      action: "One-on-one consultation with Dr. Jeni Theresa, hands-on therapy, and gentle targeted pain relief treatments.",
      result: "Immediate reduction in muscle stiffness and inflammation, allowing your joint to move safely without sharp pain."
    },
    tissueAdaptation: 35,
    painLevel: 5
  },
  {
    week: "Weeks 3–4",
    title: "Building Muscle Strength & Flexibility",
    passiveApproach: {
      action: "Stopping all exercises and treatment the exact day the sharp pain subsides.",
      result: "Muscles remain weak and tight, leaving your joints vulnerable to immediate re-injury during routine travel or work."
    },
    honestApproach: {
      action: "Guided customized resistance exercises, balance training, and steady joint mobility practice.",
      result: "Muscles become visibly stronger and naturally support your joints during bending, walking, and desk hours."
    },
    tissueAdaptation: 75,
    painLevel: 2
  },
  {
    week: "Weeks 5+",
    title: "Full Active Recovery & Lasting Prevention",
    passiveApproach: {
      action: "Returning immediately to poor posture habits and relying on clinic visits every month.",
      result: "An endless cycle of recurring back aches and neck stiffness whenever work gets busy."
    },
    honestApproach: {
      action: "Mastering simple 5-minute home exercises and good everyday posture habits.",
      result: "Complete physical independence and confidence in your active daily lifestyle without needing ongoing therapy visits."
    },
    tissueAdaptation: 100,
    painLevel: 0
  }
];

export const ERGO_TIPS = {
  highRisk: {
    scoreRange: "75% - 100%",
    status: "HIGH POSTURAL STRAIN",
    color: "bg-[#C2593B]/15 text-[#C2593B] border-[#C2593B]/40",
    summary: "Your daily sitting hours and symptoms show that prolonged desk posture is straining your neck and back muscles. This is very common, and simple physical therapy can resolve it quickly.",
    prescription: [
      "Every 45 minutes: Stand up, raise your arms gently overhead, and do 5 comfortable shoulder rolls.",
      "Position your laptop monitor so the top edge is at eye level—this removes extra weight and stress from your neck.",
      "Schedule a thorough clinical evaluation with Dr. Jeni Theresa for a simple, effective recovery plan."
    ]
  },
  medRisk: {
    scoreRange: "45% - 74%",
    status: "MODERATE MUSCLE TENSION",
    color: "bg-[#D2A13E]/15 text-[#9A7326] border-[#D2A13E]/40",
    summary: "Your muscles are working hard to support your sitting routine. Minor stiffness at the end of the day is a signal that your body needs supportive stretching.",
    prescription: [
      "Stand up when talking on mobile calls during your working afternoon.",
      "Perform gentle neck shoulder stretching 2 to 3 times daily to relax upper back tension.",
      "Practice simple back-strengthening bridges for 5 minutes in the evening."
    ]
  },
  lowRisk: {
    scoreRange: "0% - 44%",
    status: "HEALTHY JOINT MOBILITY",
    color: "bg-[#163029]/15 text-[#163029] border-[#163029]/40",
    summary: "You maintain good movement posture and exercise routine. Your daily active habits are keeping your muscles flexible and strong—keep up the great work!",
    prescription: [
      "Maintain active daily hydration and simple walks during your work breaks.",
      "Continue regular stretching for your ankles, calves, and shoulder muscles.",
      "Consult us for expert preventative advice if you plan to start new high-intensity sports or marathon training."
    ]
  }
};

export const MODALITIES = [
  {
    title: "Orthopedic & Sports Physical Therapy",
    subtitle: "Effective care for bones, muscles, and joint recovery",
    iconName: "Activity",
    description: "Personalized hands-on treatment for lower back pain, knee arthritis, shoulder stiffness, neck discomfort, and athletic sports strains. Dr. Jeni carefully treats your stiff joints to restore natural, easy movement without uncomfortable forcing.",
    whyItWorks: "Immediately eases muscle stiffness, relieves nerve tension, and restores comfortable joint mobility."
  },
  {
    title: "Neurological & Stroke Rehabilitation",
    subtitle: "Dedicated care for brain & nervous system disorders",
    iconName: "Compass",
    description: "Expert therapeutic guidance for patients recovering from stroke, Parkinson's disease, nervous system injuries, and balance issues. We focus on rebuilding muscular endurance, improving walking balance, and regaining independence in everyday tasks.",
    whyItWorks: "Retrains muscles and nerves to work together smoothly, helping patients walk and stand with safety and confidence."
  },
  {
    title: "Post-Surgical Joint Rehabilitation",
    subtitle: "Safe recovery after knee, hip & ligament surgery",
    iconName: "ShieldCheck",
    description: "Specialized recovery guidance after orthopedic surgery, such as total knee replacement, hip joint replacement, and ligament (ACL) repair surgery. We help rebuild tissue strength, heal surgical tightness, and safely return you to walking without pain.",
    whyItWorks: "Prevents muscle weakness after surgery and ensures surgical joints regain full functional strength and motion."
  },
  {
    title: "Pediatric Physiotherapy & Care",
    subtitle: "Gentle physical therapy for infants & children",
    iconName: "Zap",
    description: "Compassionate movement therapy for children experiencing physical developmental delays, cerebral palsy, muscular conditions, or posture concerns. Dr. Jeni creates engaging therapy exercises that encourage strength, balance, and coordination in a joyful environment.",
    whyItWorks: "Supports growing children in building essential motor skills and comfortable physical movement."
  }
];

export const CASE_STUDIES = [
  {
    patient: "Karthik R. (36) — IT Software Engineer, Chennai",
    injury: "Severe Neck Stiffness & Arm Tingling (12 months persistence)",
    previousFailedTx: "Took regular painkiller tablets and used heating gels, but the burning pain returned whenever he worked on his computer.",
    jeniIntervention: "Identified poor seating posture putting pressure on neck nerves. Applied gentle hands-on therapy to loosen stiff neck shoulder muscles, followed by practical simple daily ergonomic guidance.",
    outcome: "Neck pain completely disappeared within 3 weeks. Able to work comfortable full workdays without shoulder ache or headaches.",
    metric: "100% Pain-Free Working Hours"
  },
  {
    patient: "Lakshmi M. (62) — Retired School Teacher, Anna Nagar",
    injury: "Chronic Knee Arthritis & Staircase Discomfort",
    previousFailedTx: "Was advised to avoid climbing stairs entirely and wear rigid knee braces, which made her thigh muscles feel much weaker over 6 months.",
    jeniIntervention: "Removed rigid knee bandages. Started gentle hip and thigh strengthening exercises to take weight off the knee joint along with calming manual therapy.",
    outcome: "Able to walk to nearby temple and comfortably climb stairs without knee swelling or joint ache.",
    metric: "Smooth Stair Climbing Returned"
  },
  {
    patient: "Anand S. (51) — Business Manager, Chennai",
    injury: "Post-Surgical Lower Back Recovery & Sciatica",
    previousFailedTx: "Experiencing stiffness and fear of bending forward after prolonged lower back muscle spasm and prolonged rest.",
    jeniIntervention: "Provided clear, reassuring guidance on safe bending techniques, gentle spinal flexibility stretches, and core stabilization exercises.",
    outcome: "Resumed traveling and driving comfortable distances without back braces or leg discomfort.",
    metric: "Full Spinal Confidence Rebuilt"
  }
];

export const CREDENTIALS = [
  "Doctor of Physical Therapy (DPT) & Clinical Specialist",
  "5+ Years Dedicated Experience in Orthopedic, Neuro & Pediatric Rehab",
  "Certified Specialist in Manual Therapy & Exercise Rehabilitation",
  "100% One-on-One Personalized Doctor Consultation Guarantee"
];

export const CLINIC_INFO = {
  doctorName: "Dr. Jeni Theresa",
  credentials: "PT, DPT",
  specialty: "Orthopedics, Neuro Rehab & Pediatric Physiotherapy",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "clinic@drjenitheresa.in",
  clinicName: "Dr. Jeni Theresa Physiotherapy Clinic & Rehab",
  address: "Anna Nagar East, Chennai — Tamil Nadu",
  city: "Chennai",
  state: "Tamil Nadu",
  hours: "Mon–Sat 8:00 AM – 7:30 PM IST",
  teleRehabHours: "Online Consultations Available Daily",
  googleMapsUrl: "https://maps.google.com/?q=Anna+Nagar+Chennai",
  seo: {
    title: "Dr. Jeni Theresa, PT, DPT — Best Physiotherapist in Chennai | Ortho, Neuro & Pediatric Rehab",
    description: "Specialised physiotherapy clinic in Chennai, Tamil Nadu. Dr. Jeni Theresa offers expert care in Orthopedic rehabilitation, Neurological stroke care, Post-surgical joint therapy, and Pediatric physiotherapy with 100% one-on-one personalized consultation.",
    keywords: [
      "best physiotherapist in Chennai",
      "physiotherapist in Anna Nagar",
      "orthopedic physiotherapy Chennai",
      "stroke neurological rehab Chennai",
      "post surgery rehabilitation Chennai",
      "pediatric physiotherapy Tamil Nadu",
      "knee pain physiotherapy",
      "back pain doctor Chennai",
      "sciatica treatment Chennai",
      "home physiotherapist near me",
      "physiotherapy clinic Anna Nagar Chennai"
    ],
    ogImage: "/images/dr-jeni-portrait.png",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "Dr. Jeni Theresa — Physiotherapy Clinic & Rehabilitation Studio",
      "description": "Evidence-based physiotherapy and rehabilitation clinic in Chennai specializing in Orthopedics, Neuro Rehab, Post-Surgical therapy, and Pediatric care.",
      "url": "https://jeni-theresa-physiotherapist.vercel.app",
      "telephone": "+91-98765-43210",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Anna Nagar East",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600102",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2707"
      },
      "openingHours": "Mo-Sa 08:00-19:30",
      "priceRange": "₹₹",
      "medicalSpecialty": "Physical Therapy & Rehabilitation",
      "availableService": [
        { "@type": "MedicalTherapy", "name": "Orthopedic Physiotherapy" },
        { "@type": "MedicalTherapy", "name": "Neurological Rehabilitation" },
        { "@type": "MedicalTherapy", "name": "Post-Surgical Joint Rehab" },
        { "@type": "MedicalTherapy", "name": "Pediatric Physical Therapy" },
        { "@type": "MedicalTherapy", "name": "Online Tele-Rehabilitation Consultation" }
      ]
    }
  }
};
