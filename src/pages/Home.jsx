import React, { useState, useEffect } from "react";
import "../styles/index.css";
import avatar from "../assets/avatar.jpg";

// ---------------------------
// Liste des projets
// ---------------------------
const projects = [
  {
    title: "Space Invaders",
    pdf: "/Space_inviders_rapports.pdf",
    description: "Jeu Space Invaders complet en C, interface texte et graphique.",
    skills: "Langage C · MVC · Ncurses · SDL3 · Makefile · Linux · Valgrind · Git",
    period: "nov. 2025 - déc. 2025",
  },
  {
    title: "Système de Gestion de Bibliothèque",
    pdf: "/SHELL_presentation.pdf",
    description: "Outil Shell POSIX pour gérer livres et emprunts.",
    skills: "Scripting Shell POSIX · Gestion fichiers texte",
    period: "nov. 2025",
  },
  {
    title: "CHOMP MEN",
    description: "Jeu vidéo 3D Unity/C# sur une semaine.",
    skills: "Unity · C# · Animations et physique · Travail en équipe",
    period: "mai 2025",
  },
  {
    title: "Plateforme pompiers",
    pdf: "/Projet_AQL.pdf",
    description: "Application web full-stack pour gérer incendies de forêt.",
    skills: "HTML · CSS · JS · Django · SQLite · Gestion projet",
    period: "janv. 2025 – mai 2025",
  },
  {
    title: "Site restaurant local",
    description: "Site web full-stack pour restaurant avec gestion utilisateur/admin.",
    skills: "HTML · CSS · JS · PHP · MySQL · XAMPP",
    period: "avr. 2024 - juin 2024",
  },
  {
    title: "Constructify Nexus",
    pdf: "/startup_final.pdf",
    description: "Plateforme immobilier avec prototype Figma et business plan.",
    skills: "UX/UI Design · Gestion projet startup · Analyse marché",
    period: "mars 2024 - avr. 2024",
  },
  {
    title: "Site E-commerce",
    description: "Site e-commerce pour téléphones avec interface interactive.",
    skills: "HTML · CSS · JS",
    period: "avr. 2023 - mai 2023",
    link: "https://yasminemezrague11-informatique.github.io/site-ecommerce-phones/",
  },
];

// ---------------------------
// Composant principal Home
// ---------------------------
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Gestion du mode sombre
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <div className="home">

      {/* ---------------------------
          NAVBAR
      --------------------------- */}
      <nav className="navbar">
        <a href="#home" className="logo">Yasmine Mezrague</a>
        <ul className="nav-links">
          <li><a href="#debut">Home</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#footer">Contact</a></li>
          <li><a href="#certificates">Certificats</a></li>
        </ul>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* ---------------------------
          SECTION INTRO
      --------------------------- */}
      <section
        id="debut"
        className="intro bg-image"
        style={{
          backgroundImage:
            "url(https://www.chalmers.se/_next/image/?url=https%3A%2F%2Fcms.www.chalmers.se%2FMedia%2Fmb3hi4kn%2Fcoding-7-1920.jpg&w=3840&q=85)",
        }}
      >
        <div className="overlay-itro"></div>
        <div className="intro-content">
          <h1 className="intro-title">Bonjour, je suis Yasmine Mezrague</h1>
          <p className="intro-subtitle">Développeuse Full Stack & Passionnée de Design</p>
        </div>
      </section>

      {/* ---------------------------
          SECTION ABOUT
      --------------------------- */}
      <section id="about" className="about-mf sect-pt4 sect-mt4">
        <div className="about-flex">
          <div className="about-left">
            <img src={avatar} alt="avatar" className="img-fluid" />
          </div>
          <div className="about-right">
            <div className="about-info">
              <h3>À propos de moi</h3>
              <p>
                Profil hybride, je conçois et développe des solutions numériques complètes — sites web, applications mobiles ou outils logiciels — tout en assurant l’analyse, la conception et le suivi du cycle de vie des projets.
              </p>
              <ul className="list-ico">
                <li><span>Nom:</span> Yasmine Mezrague</li>
                <li><span>Email:</span> mezragueyasmine92@gmail.com</li>
                <li>
                  <span>GitHub:</span> 
                  <a href="https://github.com/yasminemezrague11-informatique" target="_blank" rel="noopener noreferrer">
                    yasminemezrague11-informatique
                  </a>
                </li>
              </ul>

              {/* Compétences avec barre de progression */}
              <div className="skill-mf">
                {[
                  { name: "Python", width: "90%" },
                  { name: "HTML / CSS / JS", width: "85%" },
                  { name: "React", width: "80%" },
                  { name: "C", width: "60%" },
                  { name: "Scrum / Agile", width: "70%" },
                  { name: "Power BI", width: "75%" },
                ].map((skill, i) => (
                  <div key={i}>
                    <p>{skill.name}</p>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: skill.width }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------
          SECTION SERVICES
      --------------------------- */}
      <section id="services" className="services sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Services</h2>
        <div className="line-mf"></div>
        <div className="services-flex">
          {[
            { name: "Conception Web", icon: "fa-code" },
            { name: "Analyse Fonctionnelle", icon: "fa-chart-line" },
            { name: "Web Design", icon: "fa-paint-brush" },
          ].map((service, i) => (
            <div key={i} className="service-box">
              <div className="ico-circle">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h5 className="s-title">{service.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------
          SECTION PORTFOLIO
      --------------------------- */}
      <section id="portfolio" className="portfolio sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Projets</h2>
        <div className="line-mf"></div>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className="project-card">
              <h4>{proj.title}</h4>
              <span className="period">{proj.period}</span>
              <p>{proj.description}</p>
              <p><strong>Compétences :</strong> {proj.skills}</p>
              {proj.pdf && (
                <a href={proj.pdf} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  Voir PDF
                </a>
              )}
              {proj.link && (
                <a href={proj.link} className="pdf-link" target="_blank" rel="noopener noreferrer">
                  Voir le site
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------
          SECTION CERTIFICATS
      --------------------------- */}
      <section id="certificates" className="certificates sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Certificats</h2>
        <div className="line-mf"></div>
        <div className="certificates-list">
          {[
            { title: "Les fondements de la gestion de projet : La communication", platform: "LinkedIn Learning", pdf: "/certificat1.pdf" },
            { title: "Les fondements de la gestion de projet : Le risque", platform: "LinkedIn Learning", pdf: "/certificat2.pdf" },
            { title: "Les fondements de la gestion de projet : Les équipes", platform: "LinkedIn Learning", pdf: "/certificat3.pdf" },
            { title: "Les fondements de la gestion de projet : L'intégration", platform: "LinkedIn Learning", pdf: "/certificat4.pdf" },
            { title: "Préparer votre carrière dans le développement logiciel", platform: "LinkedIn Learning", pdf: "/certificat5.pdf" },
            { title: "Les fondements du marketing digital", platform: "Google Digital Garage", pdf: "/certificat6.pdf" },
            { title: "HTML", platform: "TeraCourses", pdf: "/certificat7.pdf" },
            { title: "CSS", platform: "TeraCourses", pdf: "/certificat8.pdf" },
            { title: "HTML & CSS", platform: "MindLuster", pdf: "/certificat9.pdf" },
            { title: "Javascript for Beginners", platform: "MindLuster", pdf: "/certificat10.pdf" },
            { title: "Responsive Design", platform: "MindLuster", pdf: "/certificat11.pdf" },
            { title: "Anglais", platform: "Get Forward Institute", pdf: "/certificat12.pdf" },
          ].map((cert, i) => (
            <div key={i} className="certificate-card">
              <div className="cert-title">{cert.title}</div>
              <div className="cert-platform">{cert.platform}</div>
              {cert.pdf && (
                <a href={cert.pdf} target="_blank" className="cert-link">Voir PDF</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------
          FOOTER
      --------------------------- */}
      <footer id="footer" className="footer">
        <div className="footer-container">
          <div className="footer-contact">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:yasmine@example.com">mezragueyasmine92@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/yasmine-mezrague-071a68319/overlay/about-this-profile/" target="_blank" rel="noopener noreferrer">Yasmine Mezrague</a></p>
          </div>
          <p>&copy; 2026 Yasmine Mezrague. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
