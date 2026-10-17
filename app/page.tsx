import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
  BookOpen,
  GraduationCap,
} from "lucide-react";
import {
  profile,
  skillGroups,
  education,
  awards,
  research,
} from "@/content/profile";
import { projects } from "@/content/projects";
import { ExternalLink, SectionHeading } from "@/components/Elements";
import { ProjectCard } from "@/components/ProjectCard";

export default function Home() {
  return (
    <main id="main-content">
      <section
        className="hero container"
        id="home"
        aria-labelledby="hero-title"
      >
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Statistics in practice
          </p>
          <h1 id="hero-title">
            Priynka Roy
            <span className="hero-statement">
              Turning data into meaningful insights.
            </span>
          </h1>
          <p className="hero-disciplines">
            {profile.headline}
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="#projects" className="button button-primary">
              View my projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-social">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            {profile.linkedin && (
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            )}
            <ExternalLink href={profile.scholar}>Google Scholar</ExternalLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              preload
              sizes="(max-width: 700px) 85vw, (max-width: 1000px) 40vw, 400px"
              className="portrait"
            />
          </div>
          <div className="portrait-caption">
            <span>Curiosity, grounded in statistics.</span>
          </div>
          <span className="portrait-detail" aria-hidden="true">
            PR / 01
          </span>
        </div>
      </section>
      <section
        id="about"
        className="section container about-section"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">
            <span>01</span>About me
          </p>
          <h2 id="about-title">
            From statistical questions
            <br />
            to useful decisions.
          </h2>
          <p className="about-note">
            Statistical thinking.
            <br />
            Practical problem-solving.
          </p>
        </div>
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="section project-section"
        aria-labelledby="projects-title"
      >
        <div className="container">
          <div className="heading-row">
            <div>
              <p className="eyebrow">
                <span>02</span>Selected work
              </p>
              <h2 id="projects-title">
                Analytical thinking.
                <br />
                Practical applications.
              </h2>
            </div>
            <p className="heading-aside">
              Selected projects demonstrating how statistical modeling, machine learning,
              and data-driven problem-solving can address practical challenges. Each
              project combines real-world data, transparent evaluation, and an interactive application.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
          <p className="projects-note">
            Independent portfolio projects. Results are reported with their
            assumptions and limitations in each case study.
          </p>
        </div>
      </section>
      <section
        id="skills"
        className="section container"
        aria-labelledby="skills-title"
      >
        <div className="heading-row">
          <div>
            <p className="eyebrow">
              <span>03</span>Technical toolkit
            </p>
            <h2 id="skills-title">Methods with purpose.</h2>
          </div>
          <p className="heading-aside">
            Tools developed through academic study, research, and hands-on
            project work.
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div key={group.title} className="skill-group">
              <span className="skill-number">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section
        id="education"
        className="section education-section"
        aria-labelledby="education-title"
      >
        <div className="container education-layout">
          <div>
            <p className="eyebrow">
              <span>04</span>Education
            </p>
            <h2 id="education-title">
              A foundation in Statistics and Data Analytics.
            </h2>
            <p className="section-intro">
              Academic training in statistical inference, data analysis,
              quantitative modeling, and research methods.
            </p>
          </div>
          <div>
            <div className="education-timeline">
              {education.map((item) => (
                <article className="education-item" key={item.degree}>
                  <p className="education-period">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p className="university">{item.university}</p>
                  <p className="education-location">{item.location}</p>
                  {item.specialization && (
                    <p className="education-detail">
                      Specialization: {item.specialization}
                    </p>
                  )}
                  {item.details && (
                    <p className="education-detail">
                      {Array.isArray(item.details)
                        ? item.details.join(" · ")
                        : item.details}
                    </p>
                  )}
                </article>
              ))}
            </div>
            <div className="awards">
              <h3>
                <GraduationCap size={20} aria-hidden="true" />
                Scholarships & recognition
              </h3>
              {awards.map((award) => (
                <div className="award" key={award.title}>
                  <strong>{award.title}</strong>
                  <span>{award.institution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="research"
        className="section container research-section"
        aria-label="Research and publications"
      >
        <SectionHeading
          number="05"
          eyebrow="Research & publications"
          title="Asking better questions."
          description="Statistical research connecting rigorous methods with questions that matter."
        />
        <article className="publication">
          <div className="publication-label">
            <BookOpen size={24} aria-hidden="true" />
            <span>
              Peer-reviewed publication
              <br />
              {research.publication.year}
            </span>
          </div>
          <div>
            <p className="eyebrow publication-journal">
              {research.publication.journal}
            </p>
            <h3>{research.publication.title}</h3>
            <p className="publication-authors">
              {research.publication.authors}
            </p>
            <ExternalLink href={research.publication.doi}>
              Read the publication
            </ExternalLink>
          </div>
        </article>
        <div className="research-topics">
          <article>
            <p className="eyebrow">Undergraduate research</p>
            <h3>{research.undergraduateTopic}</h3>
          </article>
          <article>
            <p className="eyebrow">Ongoing master’s research</p>
            <h3>{research.mastersTitle}</h3>
            <p className="research-period">{research.mastersPeriod} · {research.mastersStatus}</p>
            <p>{research.mastersDescription}</p>
          </article>
        </div>
      </section>
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="container contact-layout">
          <div>
            <p className="eyebrow">
              <span>06</span>Get in touch
            </p>
            <h2 id="contact-title">
              Let’s talk
              <br />
              about what’s next.
            </h2>
            <p>
              I am interested in opportunities in data science, statistical analysis,
              machine learning, and quantitative analytics. I welcome conversations
              about professional opportunities, research, and collaborative projects.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <ArrowUpRight size={24} aria-hidden="true" />
            </a>
            <p className="contact-location">
              <MapPin size={17} aria-hidden="true" />
              {profile.location}
            </p>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="button button-light">
              <Mail size={18} aria-hidden="true" />
              Send an email
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div>
              <ExternalLink href={profile.github}>GitHub</ExternalLink>
              {profile.linkedin && (
                <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
              )}
              {profile.scholar && (
                <ExternalLink href={profile.scholar}>
                  Google Scholar
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
