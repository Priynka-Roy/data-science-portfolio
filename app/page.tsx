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
import { CVLink, ExternalLink, SectionHeading } from "@/components/Elements";
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
            MSc Statistics · University of Turku
          </p>
          <h1 id="hero-title">
            Priynka Roy
            <span className="hero-statement">
              Finding the story.
              <br />
              Understanding the data.
            </span>
          </h1>
          <p className="hero-disciplines">
            Statistics / Machine learning / Industrial & financial analytics
          </p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <Link href="#projects" className="button button-primary">
              View my projects
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <CVLink />
          </div>
          <div className="hero-social">
            <ExternalLink href={profile.github}>GitHub</ExternalLink>
            {profile.linkedin && (
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            )}
            <span className="hero-location">
              <MapPin size={15} aria-hidden="true" />
              {profile.location}
            </span>
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
            <span className="caption-location">Turku, Finland</span>
          </div>
          <span className="portrait-detail" aria-hidden="true">
            PR / 01
          </span>
        </div>
      </section>
      <div className="intro-strip">
        <div className="container">
          <span>A statistical foundation.</span>
          <span>A practical approach.</span>
          <span>Three applied data science projects.</span>
        </div>
      </div>
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
            MSc student. Researcher.
            <br />
            An analytical mind at work.
          </p>
        </div>
        <div className="about-copy">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <Link href="#research" className="text-link">
            Explore my research
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
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
                Statistics meets
                <br />
                industrial & financial challenges.
              </h2>
            </div>
            <p className="heading-aside">
              Three independent projects exploring equipment health, energy
              decisions, and credit risk. Real data, transparent evaluation, and
              working applications.
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
              A foundation
              <br />
              in Statistics.
            </h2>
            <p className="section-intro">
              Academic training in quantitative thinking, inference, and
              modeling.
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
            <h3>Privacy and longitudinal statistical data</h3>
            <p>{research.mastersDescription}</p>
          </article>
        </div>
        {profile.scholar && (
          <ExternalLink href={profile.scholar}>
            Google Scholar profile
          </ExternalLink>
        )}
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
              Interested in opportunities in data science, statistical
              analytics, machine learning, and industrial analytics.
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
            <CVLink className="button button-on-dark" />
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
