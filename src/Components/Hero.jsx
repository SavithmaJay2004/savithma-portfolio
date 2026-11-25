import Typewriter from './Typewriter'
import portrait from '../assets/Savithma.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1 className="heading">
          <Typewriter text="Hi, I’m Savithma Jayasena." speed={50} />
        </h1>

        <p className="subheading">
          I’m a second-year Computer Science undergraduate at UCSC.
          I enjoy building practical software and making it easier to use.
        </p>

        <div className="hero-actions">
          <a href="#work" className="hero-button">
            View my projects
          </a>
          <a
  href="https://drive.google.com/file/d/1xNimGVv-ujlf84kPBULJV0tYwRSjfJ5I/view?usp=sharing"
  className="hero-button hero-button-secondary"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV
</a>
        </div>
      </div>

      <img src={portrait} alt="Portrait of Savithma Jayasena" />
    </section>
  )
}