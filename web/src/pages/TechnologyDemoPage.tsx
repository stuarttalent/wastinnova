import * as React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { buttonClassName } from '../components/ui/buttonStyles'

const manifest = {
  id: 'WTRK-MNF-2026-0214-0007',
  status: 'Complete',
  generator: 'Healthcare Facility (placeholder)',
  transporter: 'WASTiNNOVA Logistics (placeholder)',
  destination: 'Controlled Treatment Site (placeholder)',
  wasteStream: 'Infectious medical waste (Category: clinical)',
  weightKg: 82.4,
  createdAt: '2026-02-14 08:12',
  collectedAt: '2026-02-14 10:05',
  deliveredAt: '2026-02-14 12:41',
  gps: [
    { t: '10:07', label: 'Departed generator site', note: 'GPS ping recorded' },
    { t: '11:06', label: 'In transit checkpoint', note: 'Route consistency confirmed' },
    { t: '12:39', label: 'Arrived destination site', note: 'Handover initiated' },
  ],
} as const

function KeyValue({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {k}
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-900">{v}</div>
    </div>
  )
}

export function TechnologyDemoPage() {
  const [copied, setCopied] = React.useState(false)

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Technology • Demo view
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Digital manifest (mock)
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">WASTiTRACK</Badge>
                <Badge>{manifest.status}</Badge>
                <span className="text-sm text-slate-600">
                  Manifest ID:{' '}
                  <span className="font-medium text-slate-900">{manifest.id}</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/technology"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Back to Technology
              </Link>
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={() => window.print()}
              >
                Print / Save PDF
              </Button>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-sm text-slate-600">
            This is a mock view for demonstration only. Replace with a real WASTiTRACK
            screenshot or interactive demo when available.
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-sm font-semibold tracking-tight text-slate-900">
                    Chain-of-custody details
                  </div>
                  <button
                    type="button"
                    className={buttonClassName({
                      variant: 'ghost',
                      size: 'sm',
                      className: 'ring-1 ring-inset ring-slate-200',
                    })}
                    onClick={async () => {
                      await navigator.clipboard.writeText(manifest.id)
                      setCopied(true)
                      window.setTimeout(() => setCopied(false), 1200)
                    }}
                  >
                    {copied ? 'Copied' : 'Copy manifest ID'}
                  </button>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <KeyValue k="Generator" v={manifest.generator} />
                  <KeyValue k="Transporter" v={manifest.transporter} />
                  <KeyValue k="Destination" v={manifest.destination} />
                  <KeyValue k="Waste stream" v={manifest.wasteStream} />
                  <KeyValue k="Recorded weight" v={`${manifest.weightKg} kg`} />
                  <KeyValue k="Created" v={manifest.createdAt} />
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50 p-5 ring-1 ring-inset ring-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Timeline (mock)
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ['Collected', manifest.collectedAt, 'bg-brand-50 text-brand-800'],
                      ['In transit', 'GPS tracked', 'bg-slate-50 text-slate-800'],
                      ['Delivered', manifest.deliveredAt, 'bg-safety-50 text-safety-900'],
                    ].map(([k, v, tone]) => (
                      <div key={k} className="rounded-2xl bg-white p-4 ring-1 ring-inset ring-slate-200">
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {k}
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold text-slate-900">{v}</div>
                          <span className={`rounded-full px-2 py-1 text-[11px] font-medium ${tone}`}>
                            Recorded
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  GPS event trail (mock)
                </div>
                <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                  {manifest.gps.map((e) => (
                    <div key={e.t} className="flex items-start gap-4 p-4">
                      <div className="w-14 text-sm font-semibold text-slate-900">
                        {e.t}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-900">
                          {e.label}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">{e.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  Audit readiness
                </div>
                <div className="mt-4 space-y-3 text-sm text-slate-600">
                  {[
                    'Retention policy applied',
                    'Exception logging enabled',
                    'Handover recorded',
                    'Records exportable for audits',
                  ].map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  Next step
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Request corporate credentials and references, or discuss a multi-site
                  compliance programme.
                </p>
                <div className="mt-5 grid gap-3">
                  <Link
                    to="/contact?intent=credentials"
                    className={buttonClassName({ variant: 'primary', size: 'md' })}
                  >
                    Request credentials package
                  </Link>
                  <Link
                    to="/services"
                    className={buttonClassName({ variant: 'outline', size: 'md' })}
                  >
                    View services
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

