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
  headline: "MSc Statistics Student · Data Science & Machine Learning",
  location: "Turku, Finland",
  email: "priynka470@gmail.com",
  intro: "I study Mathematics and Statistics at the University of Turku, specializing in Statistics. I bring statistical thinking to machine learning, time-series analysis, and practical industrial questions.",
  about: [
    "My background in Statistics has given me a foundation in inference, modeling, and quantitative research. During my master's studies in Finland, I am developing that foundation through statistical computing and independent data science projects.",
    "I use Python and R to explore data, evaluate models, and communicate findings. My recent work connects real industrial telemetry with explainable monitoring, energy forecasting, and mathematical optimization.",
    "I am interested in data science and analytics opportunities where careful evaluation and clear communication can support practical decisions.",
  ],
  interests: ["Statistical modeling", "Time-series analysis", "Machine learning", "Industrial analytics"],
  github: "https://github.com/Priynka-Roy",
  linkedin: "https://linkedin.com/in/priynka-roy-b37757342",
  scholar: "https://scholar.google.com/citations?user=ykybeRMAAAAJ&hl=en",
  cvUrl: "/resume/priynka-roy-cv.pdf",
  portrait: {
    src: "/images/priynka-roy.jpg",
    alt: "Priynka Roy standing against a brick background",
  },
};

export const skillGroups: SkillGroup[] = [
  { title: "Programming & Data Analysis", items: ["Python", "R", "pandas", "NumPy", "SPSS"] },
  { title: "Statistics & Modeling", items: ["Statistical inference", "Regression analysis", "Time-series analysis", "Statistical modeling", "Forecast evaluation", "Probability calibration", "Bootstrap inference", "Credit risk modeling", "Generalized linear models", "Insurance pricing"] },
  { title: "Machine Learning", items: ["scikit-learn", "Supervised learning", "Unsupervised learning", "Anomaly detection", "Gradient boosting", "Explainability", "Model validation"] },
  { title: "Optimization & Simulation", items: ["Linear programming", "SciPy HiGHS", "Scenario analysis", "Finite-scenario robust optimization", "Decision support", "Monte Carlo simulation"] },
  { title: "Visualization & Tools", items: ["Power BI", "Plotly", "Streamlit", "Git", "GitHub", "Microsoft Excel"] },
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
  { title: "Research Scholarship", institution: "Mawlana Bhashani Science and Technology University, Bangladesh" },
  { title: "Merit Scholarship", institution: "Faculty of Exact Science, University of Turku, Finland" },
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
  mastersDescription: "Ongoing master's research involving statistical disclosure control, privacy, and longitudinal statistical data. The public thesis title is not yet confirmed.",
};
