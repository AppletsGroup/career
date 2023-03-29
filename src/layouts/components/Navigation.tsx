import { Link } from 'react-router-dom'
import CurrentUser from '../../components/CurrentUser/CurrentUser'

const navLinks = [
  { to: '/resumes', text: 'Resumes' },
  { to: '/resume/new', text: 'Create Resume' }
]

export default function Navigation () {
  return (
    <div className="hidden md:flex items-center">
      {navLinks.map(({ to, text }) => (
        <Link
          key={to}
          to={to}
          className="mx-4 hover:text-green-300 transition-colors"
        >
          {text}
        </Link>
      ))}
      <CurrentUser />
    </div>
  )
}
