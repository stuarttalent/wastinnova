import * as React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark } from '../LogoMark'
import { cn } from '../../lib/cn'
import { buttonClassName } from '../ui/buttonStyles'
import { Container } from './Container'

const navItems: Array<{ to: string; label: string }> = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/green-units', label: 'Green Units' },
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
    <header className="sticky top-0 z-50">
      <div className="glass hairline">
        <Container className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
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
                    'relative rounded-full px-3 py-2 text-sm font-medium text-slate-700 transition',
                    'hover:bg-white/70 hover:text-slate-900',
                    'after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-slate-900/40 after:transition',
                    isActive &&
                      'text-slate-900 after:scale-x-100 after:bg-brand-700/60',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className={buttonClassName({ variant: 'primary', size: 'sm' })}
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 ring-1 ring-inset ring-slate-200/80 transition',
              'hover:bg-white/70 md:hidden',
            )}
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
        </Container>
      </div>

      <div
        className={cn(
          'md:hidden',
          open ? 'block' : 'hidden',
        )}
      >
        <div className="glass border-b border-slate-200/70">
          <nav aria-label="Mobile">
            <Container className="py-4">
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition',
                        'hover:bg-white/70 hover:text-slate-900',
                        isActive && 'bg-white/80 text-slate-900',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  className={buttonClassName({ variant: 'primary', size: 'md' })}
                >
                  Contact Us
                </Link>
              </div>
            </Container>
          </nav>
        </div>
      </div>
    </header>
  )
}

