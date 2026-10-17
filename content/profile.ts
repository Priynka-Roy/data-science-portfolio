export type SkillGroup = { title: string; items: string[] };
export type Education = {
  degree: string;
  university: string;
  location: string;
  period: string;
  specialization?: string;
  details?: string;
};

export const profile = {
  name: "Priynka Roy",
  headline: "Statistics • Data Science • Machine Learning • Analytics",
  location: "Turku, Finland",
  email: "priynka470@gmail.com",
  intro: "I apply statistical modeling, machine learning, and data analytics to solve complex problems and support informed decisions. My work combines rigorous analysis, predictive modeling, and practical application development, with a focus on reliable, interpretable, and actionable results.",
  about: [
    "My work is grounded in statistical reasoning, data analysis, and quantitative problem-solving. I use statistical and machine learning methods to investigate complex data, evaluate models, and turn analytical findings into practical insights.",
    "I have developed end-to-end portfolio applications across industrial monitoring, energy optimization, credit risk, and insurance analytics. These projects have strengthened my experience in predictive modeling, statistical validation, uncertainty analysis, simulation, and analytical communication.",
    "I also work with modern AI-assisted development tools and prompt-driven workflows to accelerate research, prototyping, and application development, while emphasizing clear requirements, analytical validation, and reproducible results.",
  ],
  interests: ["Statistical modeling", "Data analytics", "Machine learning", "Quantitative problem-solving"],
  github: "https://github.com/Priynka-Roy",
  linkedin: "https://linkedin.com/in/priynka-roy-b37757342",
  scholar: "https://scholar.google.com/citations?user=ykybeRMAAAAJ&hl=en",
  portrait: {
    src: "/images/priynka-roy.jpg",
    alt: "Priynka Roy standing against a brick background",
  },
};

export const skillGroups: SkillGroup[] = [
  { title: "Programming & Computing", items: ["Python", "R", "SQL (Basic)", "pandas", "NumPy", "SPSS"] },
  { title: "Data Preparation & Analytics", items: ["Data cleaning", "Exploratory data analysis", "Feature engineering", "Data preprocessing", "Data validation", "Data integration", "Data preparation pipelines"] },
  { title: "Statistics & Predictive Modeling", items: ["Statistical inference", "Regression analysis", "Generalized linear models", "Time-series forecasting", "Probability calibration", "Bootstrap inference", "Statistical model validation"] },
  { title: "Machine Learning", items: ["scikit-learn", "Supervised learning", "Unsupervised learning", "Gradient boosting", "Anomaly detection", "Explainable AI", "Model evaluation"] },
  { title: "Optimization & Quantitative Risk", items: ["Linear programming", "Scenario analysis", "Monte Carlo simulation", "Credit risk analytics", "Insurance pricing", "Portfolio risk analysis"] },
  { title: "Visualization & Development Tools", items: ["Power BI", "Plotly", "Streamlit", "Microsoft Excel", "Git", "GitHub"] },
];

export const education: Education[] = [
  {
    degree: "Master of Science in Mathematics and Statistics",
    university: "University of Turku",
    location: "Turku, Finland",
    period: "August 2025 – Present",
    specialization: "Statistics",
    details: "Current master's studies; interests include statistical inference, time-series analysis, machine learning, and statistical computing.",
  },
  {
    degree: "Bachelor of Science in Statistics",
    university: "Mawlana Bhashani Science and Technology University",
    location: "Tangail, Bangladesh",
    period: "January 2016 – December 2020",
  },
];

export const awards = [
  { title: "Merit Scholarship", institution: "Faculty of Exact Science, University of Turku, Finland" },
  { title: "Research Scholarship", institution: "Mawlana Bhashani Science and Technology University, Bangladesh" },
];

export const research = {
  publication: {
    title: "Exploring determinants of basic childhood vaccination coverage in Bangladesh: A generalized Poisson regression analysis.",
    authors: "Roy, P., Chowdhury, M. H., & Ahmed, A.",
    journal: "Discover Public Health, 21, Article 179",
    year: 2024,
    doi: "https://doi.org/10.1186/s12982-024-00311-w",
  },
  undergraduateTopic: "Factors Associated with Stunting Among Under-Five Years Children in Rangpur Division, Bangladesh.",
  mastersTitle: "Privacy Risks in Synthetic Longitudinal Data: Disclosure Scenarios and Empirical Evaluation",
  mastersPeriod: "September 2026 – Present",
  mastersStatus: "Ongoing master's thesis",
  mastersDescription: "My master's research investigates privacy risks in synthetic longitudinal data, focusing on potential disclosure scenarios and empirical evaluation of privacy risks. The work connects statistical disclosure control with longitudinal data analysis and the assessment of synthetic data.",
};
