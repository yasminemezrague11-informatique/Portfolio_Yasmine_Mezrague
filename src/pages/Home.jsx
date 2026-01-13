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
const [menuOpen, setMenuOpen] = useState(false);

const Home = () => {
  // Gestion du mode sombre
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <div className="home">

      {/* =========================
          NAVBAR
      ========================= */}
      <nav className="navbar">
        <a href="#debut" className="logo">Yasmine Mezrague</a>
        <ul className="nav-links">
          <li><a href="#about">À propos</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#parcours">Parcours</a></li>
          <li><a href="#portfolio">Projets</a></li>
          <li><a href="#certificates">Certificats</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* =========================
          SECTION INTRO
      ========================= */}
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
          <h1 className="intro-title">Salut, je suis Yasmine Mezrague</h1>
          <p className="intro-subtitle">
            Développeuse Full Stack & Analyste Fonctionnelle Junior
          </p>

          {/* Icônes réseaux sociaux */}
          <div className="intro-icons">
            <a
              href="https://www.linkedin.com/in/yasmine-mezrague-071a68319/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#footer" aria-label="Email">
              <i className="fa fa-envelope"></i>
            </a>
            <a
              href="https://github.com/yasminemezrague11-informatique"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION ABOUT
      ========================= */}
      <section id="about" className="about-mf sect-pt4 sect-mt4">
        <div className="about-flex">

          {/* Photo */}
          <div className="about-left">
            <img src={avatar} alt="avatar" className="img-fluid" />
          </div>

          {/* Description & compétences */}
          <div className="about-right">
            <div className="about-info">
              <h3>À propos de moi</h3><br></br>
              <p>
                Profil hybride, je conçois et développe des solutions numériques complètes — sites web, applications mobiles et outils logiciels. J’accompagne chaque projet de l’analyse fonctionnelle à la mise en production, en passant par la conception, le développement et le suivi du cycle de vie. Passionnée par l’optimisation des processus et l’expérience utilisateur, je combine rigueur technique et compréhension des besoins métiers pour créer des solutions efficaces et adaptées.
              </p>

              <ul className="list-ico">
                <li><span>Nom :</span> Yasmine Mezrague</li>
                <li><span>Email :</span> mezragueyasmine92@gmail.com</li>
                <li>
                  <span>GitHub :</span>
                  <a
                    href="https://github.com/yasminemezrague11-informatique"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    yasminemezrague11-informatique
                  </a>
                </li>
              </ul>

              {/* Compétences en icônes */}
              <div className="skills-icons">
                <i className="fa-brands fa-python" title="Python"></i>
                <i className="fa-brands fa-html5" title="HTML"></i>
                <i className="fa-brands fa-css3-alt" title="CSS"></i>
                <i className="fa-brands fa-js" title="JavaScript"></i>
                <i className="fa-brands fa-react" title="React"></i>
                <i className="fa-solid fa-c" title="C"></i>
                <i className="fa-solid fa-diagram-project" title="Scrum / Agile"></i>
                <i className="fa-solid fa-chart-column" title="Power BI"></i>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SECTION SERVICES
      ========================= */}
      <section id="services" className="services sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Services</h2>
        <div className="line-mf"></div>
        <div className="services-flex">
          {[{ name: "Codage / Développement", icon: "fa-code" },
            { name: "Analyse Fonctionnelle", icon: "fa-chart-line" },
            { name: "Conception Web", icon: "fa-paint-brush" }].map((service, i) => (
            <div key={i} className="service-box">
              <div className="ico-circle">
                <i className={`fa ${service.icon}`}></i>
              </div>
              <h5 className="s-title">{service.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION PARCOURS / TIMELINE
      ========================= */}
      <section id="parcours" className="parcours sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Mon Parcours</h2>
        <div className="line-mf"></div>

        <div className="timeline">
          {[
            { period: "(En cours)", title: "LICENCE 3 INFORMATIQUE", place: "Université d’Artois, Lens, France" },
            { period: "09/2024 – 06/2025", title: "MASTER 1 - SPÉCIALITÉ ISI", place: "Université de Mouloud Mammerie, Lens, France" },
            { period: "09/2021 – 06/2024", title: "LICENCE 3 INFORMATIQUE", place: "Université de Mouloud Mammerie, Tizi-Ouzou, Algérie" },
            { period: "09/2018 – 07/2021", title: "BAC SCIENCES EXPÉRIMENTALES", place: "Lycée des Martyrs Chekroun, Tizi-Ouzou, Algérie" }
          ].map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h4 className="timeline-title">{item.title}</h4>
              <p className="timeline-place">{item.place}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION PROJETS
      ========================= */}
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
                <a href={proj.pdf} className="pdf-link" target="_blank" rel="noopener noreferrer">Voir PDF</a>
              )}
              {proj.link && (
                <a href={proj.link} className="pdf-link" target="_blank" rel="noopener noreferrer">Voir le site</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION LANGUES
      ========================= */}
      <section id="langues" className="langues sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Langues</h2>
        <div className="line-mf"></div>

        <div className="languages-grid">
          {[
            { name: "Français", level: "C2" },
            { name: "Anglais", level: "C1" },
            { name: "Kabyle", level: "Langue Maternelle" },
            { name: "Arabe", level: "C2" },
          ].map((lang, i) => (
            <div key={i} className="language-card">
              <span className="lang-name">{lang.name}</span>
              <div className="lang-bar">
                <div className={`lang-progress ${lang.level.replace(" ", "-")}`}></div>
              </div>
              <span className="lang-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION CERTIFICATS
      ========================= */}
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
                <a href={cert.pdf} target="_blank" className="cert-link" rel="noopener noreferrer">Voir PDF</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          SECTION CENTRES D'INTERÊT
      ========================= */}
      <section id="interets" className="interets sect-pt4 sect-mt4">
        <h2 className="title-a text-center">Centres d'Intérêt</h2>
        <div className="line-mf"></div>

        <div className="interets-grid">
          {[
            { name: "Dessin", icon: "fa-paint-brush" },
            { name: "Lecture", icon: "fa-book" },
            { name: "Voyages", icon: "fa-plane" },
            { name: "Yoga", icon: "fa-person-running" },
            { name: "Musique", icon: "fa-music" },
          ].map((item, i) => (
            <div key={i} className="interet-card">
              <i className={`fa ${item.icon}`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </section><br></br><br></br>

      {/* =========================
          FOOTER MODERNE
      ========================= */}
      <footer id="footer" className="footer-modern">
        <div className="footer-content">
          <h3>Contactez-moi</h3>
          <p>Vous pouvez me retrouver sur mes réseaux ou m'envoyer un email :</p>
          <div className="footer-icons">
            <a href="mailto:mezragueyasmine92@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
            <a href="https://github.com/yasminemezrague11-informatique" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yasmine-mezrague-071a68319/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="footer-copy">&copy; 2026 Yasmine Mezrague. Tous droits réservés.</p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
