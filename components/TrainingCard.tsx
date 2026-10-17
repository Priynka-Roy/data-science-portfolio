import Image from "next/image";
import type { TrainingRecord } from "@/content/training";
import { ExternalLink } from "@/components/Elements";

export function TrainingCard({ training }: { training: TrainingRecord }) {
  const titleId = `training-${training.id}-title`;
  const completedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${training.completedDate}T00:00:00Z`));

  return (
    <article className={training.preview ? "training-card" : "training-card training-card-text"} aria-labelledby={titleId}>
      <div className="training-copy">
        <p className="training-provider">
          {training.provider}<span aria-hidden="true">·</span>{training.status}
        </p>
        <h3 id={titleId}>{training.title}</h3>
        <p className="training-credential">{training.credentialType}</p>
        <dl className="training-details">
          <div>
            <dt>Completed</dt>
            <dd><time dateTime={training.completedDate}>{completedDate}</time></dd>
          </div>
          <div><dt>Training duration</dt><dd>{training.duration}</dd></div>
          <div><dt>Certificate</dt><dd>#{training.certificateNumber}</dd></div>
        </dl>
        <p className="training-description">{training.description}</p>
        <ul className="tags training-skills" aria-label="Skills covered">
          {training.skills.map(skill => <li key={skill}>{skill}</li>)}
        </ul>
        <div className="training-actions">
          <ExternalLink href={training.certificateUrl} className="button button-primary">
            View Certificate<span className="sr-only"> (PDF for {training.title})</span>
          </ExternalLink>
          <ExternalLink href={training.courseUrl}>Explore Career Track<span className="sr-only">: {training.title}</span></ExternalLink>
        </div>
      </div>
      {training.preview && (
        <figure className="training-preview">
          <Image
            src={training.preview.src}
            alt={training.preview.alt}
            width={training.preview.width}
            height={training.preview.height}
            sizes="(max-width: 700px) 90vw, (max-width: 1000px) 40vw, 400px"
          />
          <figcaption>Preview of the original certificate. Open the PDF for full detail.</figcaption>
        </figure>
      )}
    </article>
  );
}
