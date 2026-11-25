import crisisCompassImage from '../assets/crisiscompass.png'
import visitMoraImage from '../assets/visitmora.png'
import intelliBudgetImage from '../assets/intellibudget.png'

const projects = [
  {
  name: 'MECHA-WORDS',
  stack: 'Meidoh, Inc. · Japanese Vocabulary Learning App Development Intern',
  description:
    'MECHA-WORDS is a mobile app that helps international workers in Japanese manufacturing learn the technical Japanese they use at work, from quality control to machining. My role covers app development and prototype pilot testing. I use feedback from learners to help shape new features and improve how they practise workplace vocabulary each day.',
},
  {
    name: 'CrisisCompass',
    repository: 'https://github.com/gangul-liyanage/CrisisCompass/tree/release/shared-baseline',
    stack: 'HTML · CSS · JavaScript · PHP · MySQL',
    description:
      "A post-disaster coordination platform in development by our four-person university team. I'm responsible for the Volunteer module, which covers task assignment, contribution tracking, and notifications.",
    image: crisisCompassImage,
    imageAlt: 'CrisisCompass volunteer dashboard',
  },
  {
    name: 'VisitMora',
    repository: 'https://github.com/SavithmaJay2004/VisitMora/',
    stack: 'HTML · CSS · JavaScript · PHP · MariaDB',
    description:
      'A day-trip planner that helps visitors explore attractions around Moratuwa. Visitors can save an itinerary, rearrange stops, and adjust how long they want to spend at each place.',
    image: visitMoraImage,
    imageAlt: 'VisitMora sign-in screen',
  },
  {
    name: 'IntelliBudget',
    repository: 'https://github.com/SavithmaJay2004/IntelliBudget/',
    stack: 'C# · Windows Forms · SQL Server LocalDB',
    description:
      'An offline desktop app for planning a monthly budget. It brings income, fixed expenses, and savings goals together so users can see how much they have left to allocate.',
    image: intelliBudgetImage,
    imageAlt: 'IntelliBudget sign-in screen',
  },
]

export default function MyWork() {
  return (
    <section className="mywork" id="work">
      <h2 className="heading">Projects</h2>

      <ul className="project-list" style={{ maxWidth: 'none' }}>
        {projects.map(({ name, stack, description, image, imageAlt, repository }) => (
          <li className="project" key={name}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '24px',
              }}
            >
              <div style={{ flex: '1 1 320px', minWidth: 0 }}>
                <h3 className="project-title">{name}</h3>
                <p className="project-desc">{description}</p>
                <p className="project-stack">{stack}</p>
              </div>

              {image && (
                <img
                  className="project-image"
                  src={image}
                  alt={imageAlt}
                  loading="lazy"
                  style={{
                    display: 'block',
                    width: 'min(100%, 280px)',
                    height: 'auto',
                    flexShrink: 0,
                    margin: 0,
                    borderRadius: '12px',
                  }}
                />
              )}
              {repository && (
                <a
                  className="hero-button"
                  href={repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${name} on GitHub`}
                  style={{ padding: '10px 16px', fontSize: '1rem', whiteSpace: 'nowrap' }}
                >
                  View on GitHub
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}