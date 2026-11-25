const projects = [
  {
  name: 'MECHA-WORDS',
  stack: 'Meidoh, Inc. · App Development · Prototype Pilot Testing',
  description:
    'MECHA-WORDS is a mobile app that helps international workers in Japanese manufacturing learn technical vocabulary they use at work, from quality control to machining. My role focuses on supporting prototype pilot testing, reviewing learner feedback, and proposing improvements to app features and daily learning activities.',
},
  {
    name: 'CrisisCompass',
    stack: 'HTML · CSS · JavaScript · PHP · MySQL',
    description:
      'A post-disaster coordination platform in development by our four-person university team. I’m responsible for the Volunteer module, which covers task assignment, contribution tracking, and notifications.',
  },
  {
    name: 'VisitMora',
    stack: 'HTML · CSS · JavaScript · PHP · MariaDB',
    description:
      'A day-trip planner that helps visitors explore attractions around Moratuwa. Visitors can save an itinerary, rearrange stops, and adjust how long they want to spend at each place.',
  },

  {
    name: 'IntelliBudget',
    stack: 'C# · Windows Forms · SQL Server LocalDB',
    description:
      'An offline desktop app for planning a monthly budget. It brings income, fixed expenses, and savings goals together so users can see how much they have left to allocate.',
  },

]

export default function MyWork() {
  return (
    <section className="mywork" id="work">
      <h2 className="heading">Projects</h2>
      <ul className="project-list">
        {projects.map(({ name, stack, description }) => (
          <li className="project" key={name}>
            <h3 className="project-title">{name}</h3>
            <p className="project-desc">{description}</p>
            <p className="project-stack">{stack}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}