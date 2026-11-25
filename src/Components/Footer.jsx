import Contact from './Contact'

export default function Footer() {
  return (
    <footer className="footer">
      <Contact />
      <p className="footer-copyright">
        © {new Date().getFullYear()} Savithma Jayasena
      </p>
    </footer>
  )
}