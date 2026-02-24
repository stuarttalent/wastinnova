import { Link } from 'react-router-dom'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
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
      <PageHeader
        badge={<Badge tone="brand">Integrated business units</Badge>}
        title="Integrated services for compliant, low-risk operations"
        subtitle="Six service lines delivered under one governance model—designed to be audit-ready, operationally disciplined, and transparent for corporate and healthcare partners."
        actions={
          <>
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
          </>
        }
      />

      <Section
        eyebrow="Service coverage"
        title="Six integrated units under one governance model"
        subtitle="Delivered with traceability, SOP discipline, and reporting designed for executive clarity."
      >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businessUnits.map((unit) => (
              <Card key={unit.name} className="p-6">
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
              </Card>
            ))}
          </div>

          <Card className="mt-12 p-6 hover:translate-y-0 hover:shadow-apple-sm">
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
          </Card>
      </Section>
    </div>
  )
}

