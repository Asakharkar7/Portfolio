export const resumeData = {
  personal: {
    name: "Aniket Sakharkar",
    title: "Data Analyst",
    email: "aniketsakharkar4@gmail.com",
    phone: "857-230-5126",
    location: "Boston, USA",
    linkedin: "https://www.linkedin.com/in/aniketsakharkar/",
    github: "https://github.com/Asakharkar7",
    kaggle: "https://kaggle.com/aniketsakharkar"
  },
  summary: "Passionate Data Analyst who transforms complex datasets into strategic business solutions. I specialize in building scalable data pipelines and creating compelling visualizations that drive decision-making across organizations. My expertise spans the entire data lifecycle - from extraction and cleaning to advanced analytics and machine learning model deployment.",
  education: [
    {
      degree: "Master of Science in Data Analytics Engineering",
      school: "Northeastern University",
      location: "Boston, USA",
      period: "Jan 2022 - Dec 2023",
      gpa: "3.9/4.0",
      coursework: ["Statistical Analysis", "Machine Learning", "Data Visualization", "Business Intelligence"]
    },
    {
      degree: "Bachelor in Mechanical Engineering",
      school: "Mumbai University",
      location: "Mumbai, India", 
      period: "Aug 2017 - May 2021",
      gpa: "3.5/4.0",
      coursework: ["Engineering Mathematics", "Thermodynamics", "Manufacturing Technology", "Project Management"]
    }
  ],
  skills: {
    programming: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 90 },
      { name: "R", level: 85 },
      { name: "MATLAB", level: 80 },
      { name: "SAS", level: 75 },
      { name: "VBA", level: 70 }
    ],
    databases: [
      { name: "MySQL/PostgreSQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "Oracle", level: 75 },
      { name: "Neo4j", level: 70 },
      { name: "SQL Server", level: 85 }
    ],
    visualization: [
      { name: "Tableau", level: 92 },
      { name: "Power BI", level: 90 },
      { name: "Excel", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Plotly", level: 75 }
    ],
    cloud: [
      { name: "AWS", level: 80 },
      { name: "Azure", level: 85 },
      { name: "GCP BigQuery", level: 75 },
      { name: "Snowflake", level: 70 },
      { name: "Databricks", level: 78 }
    ],
    tools: [
      "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "PyTorch", "Apache Spark", 
      "Hadoop", "Docker", "Kubernetes", "JIRA", "Git", "DBeaver", "QuickSight",
      "Statistical Modeling", "Time Series Analysis", "A/B Testing", "ETL/ELT"
    ]
  },
  experience: [
    {
      title: "Data Analyst",
      company: "KGS Technology, USA",
      period: "Feb 2025 - Present",
      skills: ["Azure", "SQL", "Python", "MySQL"],
      achievements: [
        "Extract and consolidate large datasets from MySQL, SQL Server, PostgreSQL, and Oracle databases",
        "Clean and standardize inconsistent data formats using advanced SQL queries, improving data reliability by 40%",
        "Conduct in-depth analysis to identify performance bottlenecks and customer behavior trends",
        "Develop automated SQL reports and interactive dashboards, cutting turnaround time by 60%"
      ]
    },
    {
      title: "Data Analyst",
      company: "Rebecca Everlene Trust Company, USA",
      period: "Feb 2024 - Jan 2025",
      skills: ["SQL", "Python", "Apache Spark", "Azure", "Power BI"],
      achievements: [
        "Design and automate ETL pipelines using Python, SQL, and Apache Spark to process large datasets",
        "Develop and optimize machine learning models (regression, clustering) with scikit-learn for insights",
        "Build interactive Power BI dashboards connected to Azure SQL, cutting manual data handling by 50%",
        "Streamline reporting processes and improve data accuracy for business teams"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "State Farm Insurance, USA",
      period: "May 2023 - Aug 2023",
      skills: ["DBeaver", "QuickSight", "AWS", "SQL", "POC"],
      achievements: [
        "Enhance health policy analysis efficiency by 15% through advanced data extraction using DBeaver",
        "Automate SQL query execution and report generation, increasing query accuracy by 64%",
        "Lead Health Analytics POC achieving 85% seamless data migration to AWS"
      ]
    },
    {
      title: "Research Analyst",
      company: "Northeastern University, USA",
      period: "Sep 2022 - Apr 2023",
      skills: ["Tableau", "Python", "SQL", "Excel"],
      achievements: [
        "Create dashboards and reports for NSF-funded project, increasing student engagement by 40%",
        "Streamline workflows to enhance reporting efficiency by 20%",
        "Train team members on Python, SQL, and Tableau to elevate data skills across the team"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Allianz Logistics, India",
      period: "Jun 2021 - Dec 2021",
      skills: ["AWS", "Big Data", "ETL/ELT"],
      achievements: [
        "Enhance analytics and reporting by implementing scalable data ingestion routines",
        "Execute ETL/ELT development with AWS and Big Data tools, reducing processing costs by 20%",
        "Boost data processing speed by 25% and increase impact by 50% through optimized workflows"
      ]
    }
  ],
  projects: [
    {
      title: "Predictive Maintenance Analysis",
      period: "Sep 2022 - Dec 2022",
      skills: ["Python", "Scikit-learn", "Machine Learning", "GIT"],
      description: "Built advanced predictive models using Scikit-learn to forecast machine failures, implementing SMOTE technique to handle class imbalance and achieving 0.89 recall for failure prediction accuracy.",
      achievements: [
        "Analyzed comprehensive dataset with 10K+ records and 14 distinct features",
        "Applied precision, recall, and F1-score metrics to evaluate and select optimal prediction models",
        "Implemented SMOTE (Synthetic Minority Oversampling Technique) to improve model recall to 0.89",
        "Developed robust machine learning pipeline for real-world industrial applications"
      ],
      github: "https://github.com/Asakharkar7/predictive-maintenance"
    },
    {
      title: "Crime Rate NYPD Predictions",
      period: "May 2022 - Jun 2022",
      skills: ["Python", "Microsoft Excel", "Machine Learning"],
      description: "Cleaned and transformed a large 150K-row dataset, applying PCA to reduce dimensionality and improve model efficiency by 10%. Compared multiple classifiers and optimized Random Forest through hyperparameter tuning.",
      achievements: [
        "Processed and cleaned 150K-row dataset with advanced data transformation techniques",
        "Applied Principal Component Analysis (PCA) for effective dimensionality reduction",
        "Compared performance of 5 different classification algorithms for crime prediction",
        "Optimized Random Forest model through systematic hyperparameter tuning to enhance accuracy"
      ],
      github: "https://github.com/Asakharkar7/nypd-crime-prediction"
    }
  ],
  achievements: [
    { label: "Years Experience", value: 3 },
    { label: "% Accuracy Improvement", value: 30 },
    { label: "% Time Reduction", value: 60 },
    { label: "% ROI Boost", value: 15 }
  ],
  certifications: [
    {
      title: "Palantir Foundry Deep Dive: Building Your First Application",
      issuer: "Palantir Technologies",
      url: "https://verify.skilljar.com/c/6y7cnrks6tob"
    },
    {
      title: "Palantir Foundry Speedrun: Your First AIP Workflow", 
      issuer: "Palantir Technologies",
      url: "https://verify.skilljar.com/c/2rfop5jh79j2"
    }
  ]
};
