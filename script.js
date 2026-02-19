document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fr: {
      nav_home: "Accueil",
      nav_skills: "Compétences",
      nav_experience: "Parcours",
      nav_projects: "Projets",
      nav_contact: "Contact",

      hero_kicker: "// Portfolio",
      hero_nom_title: "Salut, moi c’est <span class='accent'>SINHOU Magnus</span>",
      hero_subtitle: "Étudiant en Bachelor Data & IA · Data Analyst & Data Scientist",
      hero_text:
        "Je conçois des analyses de données, des modèles de machine learning et des APIs pour transformer l’information brute en insights actionnables. J’aime autant explorer et visualiser les données que mettre en production des modèles et les suivre dans le temps.",
      hero_btn_projects: "Voir mes projets",
      hero_btn_contact: "Me contacter",
      hero_meta_location: "Basé en : <strong>Île-de-France</strong>",
      hero_meta_availability:
        "À la recherche d’une <strong>alternance ou d’un stage alterné</strong> en data.",
      hero_badge_top: "<span class='dot'></span> Data & Machine Learning",
      hero_badge_bottom: "Data Analyst &<br/>Data Scientist",

      skills_kicker: "// Mes compétences",
      skills_title: "Ce que j’aime construire",
      skills_text:
        "De l’exploration des données à la mise en production de modèles : analyses, dashboards, modèles prédictifs et APIs pour les exploiter concrètement.",
      skills_backend_title: "Langages & Backend",
      skills_ml_title: "Data & Machine Learning",
      skills_mlop_title: "MLOps & Data Engineering",
      skills_soft_title: "Soft skills",
      skills_soft1: "Esprit analytique",
      skills_soft2: "Curiosité",
      skills_soft3: "Autonomie",
      skills_soft4: "Pédagogie",
      skills_Outils_title: "Outils",
      skills_Base_title: "Bases de données",

      xp_kicker: "// Mon parcours",
      xp_title: "Études & expériences",

      xp1_date: "2024 – 2026",
      xp1_title: "HETIC Montreuil · Bachelor Data & Intelligence Artificielle",
      xp1_text:
        "Exploitation et analyse des données, business intelligence, modélisation avec techniques de machine learning et maîtrise d’outils mathématiques appliqués à la data.",

      xp2_date: "Sept. – Déc. 2023",
      xp2_title: "Université d’Abomey-Calavi · FASEG",
      xp2_text:
        "Début de licence en économétrie et statistiques appliquées : bases de l’économétrie, statistiques appliquées, probabilités et outils quantitatifs pour l’analyse économique.",

      xp3_date: "2022 – 2023",
      xp3_title: "CSJM Le Faucon · Abomey-Calavi, Bénin",
      xp3_text:
        "Baccalauréat série D (scientifique), spécialisation en mathématiques et physique.",

      xp4_date: "Depuis 2023",
      xp4_title: "Projets personnels · Data & IA",
      xp4_text:
        "Mise en pratique sur des jeux de données réels : analyses exploratoires, visualisation, modèles prédictifs, NLP et automatisation via scripts et APIs.",


      xp5_date: "Novembre-Décembre 2025",
      xp5_title: "Stage Data Analyst – Arkose",
      xp5_text:
        "Création d’un dashboard de suivi des performances commerciales : collecte et préparation des données, calcul de KPI, design de visualisations et présentation des insights à l’équipe. Utilisation de Power BI pour la construction du dashboard et SQL pour les transformations de données.",


        
      projects_kicker: "// Projets",
      projects_title: "Une sélection de travaux",

      proj1_tag: "Power BI · DataViz · Retail Analytics",
      proj1_title: "Projet Apple Retail – Tableau de Bord & Analyse",
      proj1_text:
        "Création d’un tableau de bord interactif Power BI à partir d’un dataset Apple Retail : préparation des données, modélisation, calcul de KPI et design de plusieurs pages d’analyse. Projet accompagné d’un rapport écrit présentant les insights et recommandations.",
      proj1_meta1: "Power BI · Data Modeling · DAX",
      proj1_meta2: "Note obtenue : 20/20",
      proj1_report: "Consulter le rapport →",

      proj2_tag: "Data Engineering · Python · PostgreSQL",
      proj2_title: "Projet Data Engineering – Online Retail",
      proj2_text:
        "Construction d’un pipeline ELT complet : ingestion automatisée des données, stockage brut dans PostgreSQL, modélisation en étoile, transformations SQL, création des tables de dimensions/faits et documentation technique.",
      proj2_meta1: "Python · Pandas · SQLAlchemy · PostgreSQL",
      proj2_meta2: "Pipeline ELT automatisé",
      proj2_link: "Voir le projet →",

      proj3_tag: "MACHINE LEARNING · IA CONVERSATIONNELLE · AUDIO",
      proj3_title: "Assistant Vocal IA – STT · LLM · TTS",
      proj3_text:
        "Développement d’un assistant vocal IA intégrant la reconnaissance vocale, le raisonnement par LLM et la synthèse vocale en continu. Mise en place d’une architecture modulaire, orientée temps réel, avec gestion du streaming, des réponses audio progressives et de l’état conversationnel.",
      proj3_meta1: "Python · LLM (Groq) · Whisper",
      proj3_meta2: "Text-to-Speech · Streamlit",
      proj3_link: "Voir le projet →",

      contact_kicker: "// Me contacter",
      contact_title: "On discute d’un projet ?",
      contact_text:
        "Je suis à l’écoute d’opportunités d’alternance ou de stage alterné en data (Data Analyst, Data Scientist ou un rôle hybride entre les deux). N’hésite pas à me contacter pour en parler.",
      contact_info_title: "Infos",

      contact_label_email:
        "<strong>Email :</strong> <a href='mailto:reubenmag6@gmail.com'>reubenmag6@gmail.com</a>",
      contact_label_phone:
        "<strong>Téléphone :</strong> +33 6 15 40 95 15",
      contact_label_linkedin:
        "<strong>LinkedIn :</strong> <a href='https://linkedin.com/in/ton-linkedin' target='_blank'>Profil</a>",

      contact_form_name: "Votre nom",
      contact_form_email: "Votre email",
      contact_form_subject: "Objet du message",
      contact_form_message: "Votre message",
      contact_form_button: "Envoyer",

      footer_text: "© 2025 · SINHOU Magnus · Tous droits réservés."
    },

    en: {
      nav_home: "Home",
      nav_skills: "Skills",
      nav_experience: "Background",
      nav_projects: "Projects",
      nav_contact: "Contact",

      hero_kicker: "// Portfolio",
      hero_nom_title: "Hi, I’m <span class='accent'>SINHOU Magnus</span>",
      hero_subtitle: "Bachelor in Data & AI student · Data Analyst & Data Scientist",
      hero_text:
        "I work on data analysis, machine learning models and APIs to turn raw information into actionable insights. I enjoy both exploring and visualizing data and deploying models in production with proper monitoring.",
      hero_btn_projects: "View my projects",
      hero_btn_contact: "Contact me",
      hero_meta_location: "Based in: <strong>Île-de-France</strong>",
      hero_meta_availability:
        "Looking for a <strong>work-study position or alternating internship</strong> in data.",
      hero_badge_top: "<span class='dot'></span> Data & Machine Learning",
      hero_badge_bottom: "Data Analyst &<br/>Data Scientist",

      skills_kicker: "// Skills",
      skills_title: "What I like to build",
      skills_text:
        "From data exploration to model deployment: analyses, dashboards, predictive models and APIs to make them useful in real projects.",
      skills_backend_title: "Languages & Backend",
      skills_ml_title: "Data & Machine Learning",
      skills_mlop_title: "MLOps & Data Engineering",
      skills_soft_title: "Soft skills",
      skills_soft1: "Analytical mindset",
      skills_soft2: "Curiosity",
      skills_soft3: "Autonomy",
      skills_soft4: "Teaching",
      skills_Outils_title: "Tools",
      skills_Base_title: "Databases",

      xp_kicker: "// Background",
      xp_title: "Studies & experience",

      xp1_date: "2024 – 2026",
      xp1_title: "HETIC Montreuil · Bachelor in Data & Artificial Intelligence",
      xp1_text:
        "Data exploitation and analysis, business intelligence, modelling with machine learning techniques and strong mathematical foundations applied to data.",

      xp2_date: "Sept – Dec 2023",
      xp2_title: "University of Abomey-Calavi · FASEG",
      xp2_text:
        "Started a degree in econometrics and applied statistics: foundations in econometrics, applied statistics, probability and quantitative tools for economic analysis.",

      xp3_date: "2022 – 2023",
      xp3_title: "CSJM Le Faucon · Abomey-Calavi, Benin",
      xp3_text:
        "Scientific Baccalaureate (Series D) specializing in mathematics and physics.",

      xp4_date: "Since 2023",
      xp4_title: "Personal Projects · Data & AI",
      xp4_text:
        "Hands-on work on real-world datasets: exploratory analysis, visualization, predictive models, NLP and automation with scripts and APIs.",


      xp5_date: "November-December 2025",
      xp5_title: "Data Analyst Intern – Arkose",
      xp5_text:
        "Built a dashboard to track commercial performance: data collection and preparation, KPI calculation, visualization design and presentation of insights to the team. Used Power BI for dashboard construction and SQL for data transformations.",

      projects_kicker: "// Projects",
      projects_title: "Selected work",

      proj1_tag: "Power BI · DataViz · Retail Analytics",
      proj1_title: "Apple Retail Project – Dashboard & Analysis",
      proj1_text:
        "Built an interactive Power BI dashboard from an Apple Retail dataset: data preparation, modelling, KPI calculation and multi-page analytical dashboards, along with a written report presenting insights and recommendations.",
      proj1_meta1: "Power BI · Data Modeling · DAX",
      proj1_meta2: "Grade obtained: 20/20",
      proj1_report: "Read the report →",

      proj2_tag: "Data Engineering · Python · PostgreSQL",
      proj2_title: "Data Engineering Project – Online Retail",
      proj2_text:
        "End-to-end ELT pipeline: automated data ingestion, raw storage in PostgreSQL, star-schema modelling, SQL transformations, dimension/fact tables and technical documentation.",
      proj2_meta1: "Python · Pandas · SQLAlchemy · PostgreSQL",
      proj2_meta2: "Automated ELT pipeline",
      proj2_link: "View the project →",

      proj3_tag: "MACHINE LEARNING · CONVERSATIONAL AI · AUDIO",
      proj3_title: "Voice AI Assistant – STT · LLM · TTS",
      proj3_text:
        "Built a real-time voice AI assistant combining speech-to-text, LLM reasoning and continuous text-to-speech. Modular architecture with streaming, progressive audio responses and conversation state management.",
      proj3_meta1: "Python · LLM (Groq) · Whisper",
      proj3_meta2: "Text-to-Speech · Streamlit",
      proj3_link: "View the project →",

      contact_kicker: "// Contact",
      contact_title: "Let’s talk about a project",
      contact_text:
        "I’m looking for a work-study or alternating internship as a Data Analyst / Data Scientist or a hybrid role between both. Feel free to reach out to discuss an opportunity.",
      contact_info_title: "Info",

      contact_label_email:
        "<strong>Email:</strong> <a href='mailto:reubenmag6@gmail.com'>reubenmag6@gmail.com</a>",
      contact_label_phone:
        "<strong>Phone:</strong> +33 6 15 40 95 15",
      contact_label_linkedin:
        "<strong>LinkedIn:</strong> <a href='https://linkedin.com/in/ton-linkedin' target='_blank'>Profile</a>",

      contact_form_name: "Your name",
      contact_form_email: "Your email",
      contact_form_subject: "Subject",
      contact_form_message: "Your message",
      contact_form_button: "Send",

      footer_text: "© 2025 · SINHOU Magnus · All rights reserved."
    }
  };

  let currentLang = localStorage.getItem("lang") || "fr";
  const langToggle = document.getElementById("langToggle");

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const value = translations[currentLang][key];
      if (value !== undefined) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      const value = translations[currentLang][key];
      if (value !== undefined) el.placeholder = value;
    });
  }

  function updateLangToggleLabel() {
    if (!langToggle) return;
    langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
  }

  applyTranslations();
  updateLangToggleLabel();

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      localStorage.setItem("lang", currentLang);
      applyTranslations();
      updateLangToggleLabel();
    });
  }

  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    body.classList.add("light");
    if (themeToggle) themeToggle.textContent = "🌙";
  } else {
    body.classList.remove("light");
    if (themeToggle) themeToggle.textContent = "☀️";
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light");

      if (body.classList.contains("light")) {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
      } else {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }
});
