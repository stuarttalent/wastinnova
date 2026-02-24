import { Link } from 'react-router-dom'
import { buttonClassName } from '../components/ui/buttonStyles'

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="max-w-xl">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          404
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
          Page not found
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          The page you’re looking for doesn’t exist or has moved.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={buttonClassName({ variant: 'primary', size: 'md' })}>
            Go to Home
          </Link>
          <Link
            to="/contact"
            className={buttonClassName({ variant: 'outline', size: 'md' })}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

