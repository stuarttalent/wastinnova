import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { buttonClassName } from '../components/ui/buttonStyles'

const businessUnits = [
  {
    name: 'Waste Services',
    pricing: 'Subscription',
    bullets: [
      'GPS-tracked logistics',
      'WASTiTRACK digital manifests',
      'Chain-of-custody visibility',
    ],
  },
  {
    name: 'Incinerator Manufacturing',
    pricing: 'Capital',
    bullets: [
      'Custom medical systems',
      'Low-resource design',
      'Maintenance & spares programme',
    ],
  },
  {
    name: 'Medical Waste Compliance',
    pricing: 'Contract',
    bullets: ['Audits', 'SOPs and training', 'Governance support and reporting'],
  },
  {
    name: 'PlayNova (Recycling)',
    pricing: 'Contract',
    bullets: [
      'Circular economy workflows',
      'Rubber to safety mats & tiles',
      'Material recovery reporting',
    ],
  },
  {
    name: 'Sterilisation Services',
    pricing: 'Subscription',
    bullets: [
      'Validated thermal protocols',
      'Validated chemical protocols',
      'Recorded cycles and outputs',
    ],
  },
  {
    name: 'Document Destruction',
    pricing: 'Contract',
    bullets: [
      'Secure, certified shredding',
      'Healthcare and legal records',
      'Traceable destruction logs',
    ],
  },
] as const

export function ServicesPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Badge tone="brand">Integrated business units</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Integrated services for compliant, low-risk operations
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Six service lines delivered under one governance model—designed to be
            audit-ready, operationally disciplined, and transparent for corporate and
            healthcare partners.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact?intent=credentials"
              className={buttonClassName({ variant: 'primary', size: 'lg' })}
            >
              Request Corporate Credentials & References
            </Link>
            <Link
              to="/compliance"
              className={buttonClassName({ variant: 'outline', size: 'lg' })}
            >
              See compliance approach
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit) => (
              <div
                key={unit.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-sm font-semibold tracking-tight text-slate-900">
                    {unit.name}
                  </div>
                  <Badge tone={unit.pricing === 'Capital' ? 'safety' : 'neutral'}>
                    {unit.pricing}
                  </Badge>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {unit.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              Integrated delivery model
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
              We combine service execution with documentation, training, and digital
              traceability—so multi-site partners can manage risk, evidence compliance,
              and report outcomes with confidence.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/technology"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Explore WASTiTRACK
              </Link>
              <Link
                to="/contact"
                className={buttonClassName({ variant: 'primary', size: 'md' })}
              >
                Talk to us about a programme
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

