import { Link } from 'react-router-dom'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClassName } from '../components/ui/buttonStyles'

export function TechnologyPage() {
  return (
    <div>
      <PageHeader
        badge={<Badge tone="brand">Technology</Badge>}
        title="WASTiTRACK: the digital backbone of compliance"
        subtitle="Digital manifests, GPS tracking, audit-ready records, and operational transparency—built to strengthen governance across waste, sterilisation, and environmental services."
        actions={
          <>
            <Link
              to="/technology/demo"
              className={buttonClassName({ variant: 'primary', size: 'lg' })}
            >
              Digital Audit Trail Demo
            </Link>
            <Link
              to="/contact?intent=credentials"
              className={buttonClassName({ variant: 'outline', size: 'lg' })}
            >
              Request corporate credentials
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Technology value"
        title="Traceability that strengthens governance"
        subtitle="Designed to reduce ambiguity and make compliance visible, verifiable, and exportable."
      >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                k: 'Digital manifests',
                v: 'Structured records that support chain-of-custody and consistent reporting.',
              },
              {
                k: 'GPS tracking',
                v: 'Visibility for logistics and movement events, supporting oversight and assurance.',
              },
              {
                k: 'Audit-ready records',
                v: 'Retention-oriented logs designed to be regulator-readable and executive-friendly.',
              },
              {
                k: 'Operational transparency',
                v: 'Exceptions, incidents, and corrective actions recorded as part of delivery.',
              },
            ].map((f) => (
              <Card key={f.k} className="p-6">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  {f.k}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.v}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Governance value
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-600">
                <p>
                  WASTiTRACK is designed to reduce ambiguity. It creates a consistent,
                  evidence-based operating layer—so compliance can be monitored, audited,
                  and reported without friction.
                </p>
                <p>
                  This helps partners maintain predictable standards across facilities,
                  teams, and regions.
                </p>
              </div>
            </Card>

            <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Visual direction (placeholders)
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                  Dashboard imagery: compliance KPIs, manifest status, exception queue.
                </div>
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                  Field imagery: scanned manifests, GPS trace, controlled handling.
                </div>
              </div>
              <div className="mt-5">
                <Link
                  to="/technology/demo"
                  className={buttonClassName({ variant: 'outline', size: 'md' })}
                >
                  Open demo manifest view
                </Link>
              </div>
            </Card>
          </div>
      </Section>
    </div>
  )
}

