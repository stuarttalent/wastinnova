import { Link } from 'react-router-dom'
import { LogoMark } from '../LogoMark'

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark />
              <div>
                <div className="text-sm font-semibold tracking-tight">
                  WASTiNNOVA Africa
                </div>
                <div className="text-xs text-slate-600">Zimbabwe</div>
              </div>
            </div>
            <p className="max-w-sm text-sm text-slate-600">
              Integrated Environmental, Medical Waste & Circular Economy Solutions
            </p>
            <p className="text-xs text-slate-500">
              Corporate credentials and references available upon request.
            </p>
          </div>

          <div className="grid gap-2 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Navigation
            </div>
            <Link className="text-slate-700 hover:text-slate-900" to="/">
              Home
            </Link>
            <Link className="text-slate-700 hover:text-slate-900" to="/services">
              Services
            </Link>
            <Link
              className="text-slate-700 hover:text-slate-900"
              to="/compliance"
            >
              Compliance
            </Link>
            <Link
              className="text-slate-700 hover:text-slate-900"
              to="/technology"
            >
              Technology
            </Link>
            <Link className="text-slate-700 hover:text-slate-900" to="/contact">
              Contact
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact information
            </div>
            <div className="text-slate-700">
              Corporate enquiries and site onboarding via the request form.
            </div>
            <div className="text-slate-600">
              Email (placeholder):{' '}
              <span className="font-medium text-slate-800">
                corporate@wastinnova.africa
              </span>
            </div>
            <div className="text-xs text-slate-500">
              Replace placeholder contact details with official channels before
              launch.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} WASTiNNOVA Africa. All rights reserved.</div>
          <div>Safety first. Compliance by design. Innovation with purpose.</div>
        </div>
      </div>
    </footer>
  )
}

