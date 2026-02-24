import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from '../LogoMark'
import { cn } from '../../lib/cn'
import { buttonClassName } from '../ui/buttonStyles'

const navItems: Array<{ to: string; label: string }> = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/technology', label: 'Technology' },
  { to: '/contact', label: 'Contact' },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const { pathname } = useLocation()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              WASTiNNOVA Africa
            </div>
            <div className="text-xs text-slate-600">
              Safety-first • Compliance-by-design
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900',
                  isActive && 'bg-slate-100 text-slate-900',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact?intent=credentials"
            className={buttonClassName({ variant: 'primary', size: 'sm' })}
          >
            Request Credentials
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={cn(
          'border-t border-slate-200/70 bg-white md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <nav className="mx-auto max-w-6xl px-4 py-3 sm:px-6" aria-label="Mobile">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    'rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900',
                    isActive && 'bg-slate-100 text-slate-900',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact?intent=credentials"
              className={buttonClassName({ variant: 'primary', size: 'md' })}
            >
              Request Corporate Credentials & References
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

