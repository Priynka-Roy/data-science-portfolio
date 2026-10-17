export type TrainingRecord = {
  id: string;
  title: string;
  provider: string;
  credentialType: string;
  status: string;
  completedDate: string;
  duration: string;
  certificateNumber: string;
  description: string;
  skills: string[];
  certificateUrl: string;
  courseUrl: string;
  preview?: { src: string; alt: string; width: number; height: number };
};

export const trainingRecords: TrainingRecord[] = [
  {
    id: "datacamp-power-bi-career-track",
    title: "Data Analyst in Power BI",
    provider: "DataCamp",
    credentialType: "DataCamp Statement of Accomplishment",
    status: "Completed career track",
    completedDate: "2026-09-23",
    duration: "50 hours",
    certificateNumber: "947,041",
    description:
      "Completed a 50-hour DataCamp career track covering Power BI data preparation, transformation, modeling, DAX calculations, interactive dashboards, and business intelligence reporting.",
    skills: [
      "Power BI",
      "Power Query",
      "DAX",
      "Data transformation",
      "Data modeling",
      "Data visualization",
      "Interactive dashboards",
      "Business intelligence reporting",
    ],
    certificateUrl: "/certificates/datacamp-power-bi-career-track.pdf",
    courseUrl: "https://www.datacamp.com/tracks/data-analyst-in-power-bi",
    preview: {
      src: "/images/datacamp-power-bi-career-track.jpg",
      alt: "Original DataCamp Statement of Accomplishment awarded to Priynka Roy for Data Analyst in Power BI, completed September 23, 2026",
      width: 1200,
      height: 692,
    },
  },
];
