import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { buttonClassName } from '../components/ui/buttonStyles'

export function TechnologyPage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Badge tone="brand">Technology</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            WASTiTRACK: the digital backbone of compliance
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Digital manifests, GPS tracking, audit-ready records, and operational
            transparency—built to strengthen governance across waste, sterilisation,
            and environmental services.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
              <div
                key={f.k}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft"
              >
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  {f.k}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {f.v}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

