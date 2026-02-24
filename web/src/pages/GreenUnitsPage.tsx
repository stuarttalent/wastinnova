import * as React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Media } from '../components/ui/Media'
import { buttonClassName } from '../components/ui/buttonStyles'
import { media } from '../content/media'
import { cn } from '../lib/cn'

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  )
}

function useCountUp(value: number, durationMs = 900) {
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
      setCurrent(value)
      return
    }

    let raf = 0
    const start = performance.now()

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3)
      setCurrent(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [value, durationMs])

  return current
}

function Metric({
  label,
  value,
  suffix,
}: {
  label: string
  value: number
  suffix?: string
}) {
  const current = useCountUp(value)
  return (
    <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
            {current.toLocaleString()}
            {suffix ? <span className="text-slate-500">{suffix}</span> : null}
          </div>
        </div>
        <Badge tone="brand">Placeholder</Badge>
      </div>
      <div className="mt-3 text-sm text-slate-600">
        Replace with live reporting once Green Units deployments are active.
      </div>
    </Card>
  )
}

export function GreenUnitsPage() {
  return (
    <div>
      <section className="py-10 sm:py-12">
        <Container>
          <Card
            tone="muted"
            className="p-6 shadow-apple-sm hover:translate-y-0 hover:shadow-apple sm:p-8"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="brand">Green Units</Badge>
                <span className="text-sm text-slate-600">
                  Community recycling, done properly.
                </span>
              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Turning Waste Into Value. One Community at a Time.
              </h1>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Green Units are decentralised recycling kiosks that reward responsible
                waste sorting while strengthening the circular economy.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact?intent=green-units"
                  className={buttonClassName({ variant: 'primary', size: 'lg' })}
                >
                  Partner With Green Units
                </Link>
                <Link
                  to="/contact?intent=green-units&mode=host"
                  className={buttonClassName({ variant: 'outline', size: 'lg' })}
                >
                  Host a Green Unit
                </Link>
              </div>

              <Card
                tone="muted"
                className="p-5 hover:translate-y-0 hover:shadow-apple-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Positioning
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Structured recycling, not informal waste picking.
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  Green Units are governance-aware, traceable collection points that
                  connect communities to formal recovery and manufacturing.
                </div>
              </Card>
            </div>

            <div className="lg:justify-self-end">
              <Card className="p-6">
                <Media
                  src={media.greenUnitsKiosk.src}
                  alt={media.greenUnitsKiosk.alt}
                  className="aspect-[16/10]"
                  priority
                />
                <div className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
                  Modern recycling kiosk (stock imagery)
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  Replace with Green Units site photography for Harare and peri-urban
                  deployments.
                </div>
              </Card>
            </div>
            </div>
          </Card>
        </Container>
      </section>

      <Section
        eyebrow="What are Green Units?"
        title="Decentralised kiosks for clean, sorted recyclables"
        subtitle="Accessible for communities. Structured for partners. Traceable for governance."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              {[
                'Local collection points for clean, sorted recyclables',
                'Designed for accessibility and quality control',
                'Integrated into WASTiNNOVA’s wider waste and recycling ecosystem',
                'Built for traceability and accountable aggregation',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-5 ring-1 ring-inset ring-slate-200">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Key message
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900">
                This is structured recycling, not informal waste picking.
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Collection is formalised, verified, and recorded—so municipalities,
                partners, and communities can trust the outcomes.
              </div>
            </div>
          </Card>

          <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Governance-aware tone
            </div>
            <div className="mt-3 text-sm font-semibold tracking-tight text-slate-900">
              Practical. Verifiable. Scalable.
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Green Units are the community-facing entry point into a controlled,
              traceable circular economy.
            </div>
          </Card>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="How it works"
        title="A simple 4-step flow"
        subtitle="Designed for clarity and ease of participation, while ensuring quality and traceability."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <ol className="grid gap-5">
              {[
                {
                  t: 'Bring Sorted Recyclables',
                  d: 'Community members bring clean, separated materials (e.g. plastics, rubber).',
                  icon: <Icon d="M12 3v3m6.36.64-2.12 2.12M21 12h-3M18.36 17.36l-2.12-2.12M12 21v-3M5.64 17.36l2.12-2.12M3 12h3M5.64 6.64l2.12 2.12" />,
                },
                {
                  t: 'Weigh & Verify',
                  d: 'Materials are checked for quality and weighed for transparent value allocation.',
                  icon: <Icon d="M12 3l8 4v6c0 5-3.2 9.4-8 11-4.8-1.6-8-6-8-11V7l8-4z" />,
                },
                {
                  t: 'Earn Value Units',
                  d: 'Participants receive units redeemable for essentials (groceries, fuel, or partner rewards).',
                  icon: <Icon d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7H14a3.5 3.5 0 010 7H6" />,
                },
                {
                  t: 'Recovery & Manufacturing',
                  d: 'Materials are transported to central facilities for sorting, recycling, or conversion into products.',
                  icon: <Icon d="M3 7h18M6 7v13h12V7M9 20v-6h6v6" />,
                },
              ].map((step, idx, arr) => (
                <li key={step.t} className="relative pl-12">
                  <div className="absolute left-0 top-0">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-inset ring-slate-200">
                      <span className="text-sm font-semibold text-slate-900">
                        {idx + 1}
                      </span>
                    </div>
                  </div>
                  {idx < arr.length - 1 ? (
                    <div className="absolute left-4 top-9 h-[calc(100%-28px)] w-px bg-slate-200" />
                  ) : null}

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold tracking-tight text-slate-900">
                        {step.t}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-slate-600">
                        {step.d}
                      </div>
                    </div>
                    <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                      {step.icon}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Card>

          <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Incentive model (example)
            </div>
            <div className="mt-3 grid gap-3 text-sm text-slate-600">
              {[
                ['Plastics', 'Units per kg (placeholder)'],
                ['Rubber', 'Units per kg (placeholder)'],
                ['Mixed reject', 'Not accepted (quality control)'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-inset ring-slate-200"
                >
                  <span className="font-medium text-slate-900">{k}</span>
                  <span className="text-slate-600">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Final unit values depend on material type, quality, and partner reward
              agreements.
            </div>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow="Integrated circular economy"
        title="The front door of the circular economy"
        subtitle="Green Units activate participation at community level, feeding formal recovery and manufacturing."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              k: 'PlayNova recycling',
              v: 'Material recovery and conversion into practical products aligned with safety and resilience.',
              icon: <Icon d="M3 12h6l3 8 4-16 3 8h2" />,
            },
            {
              k: 'Controlled aggregation',
              v: 'Verified collection with quality checks and recorded weights for traceable aggregation.',
              icon: <Icon d="M20 7l-8-4-8 4v10l8 4 8-4V7z" />,
            },
            {
              k: 'Manufacturing outputs',
              v: 'Safety mats, tiles, and other recovered products—measurable diversion and value creation.',
              icon: <Icon d="M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z" />,
            },
          ].map((item) => (
            <Card key={item.k} className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                {item.icon}
              </div>
              <div className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
                {item.k}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.v}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-10 p-6 hover:translate-y-0 hover:shadow-apple-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            {[
              ['Green Units', 'Community entry point'],
              ['Aggregation', 'Controlled, verified flows'],
              ['PlayNova', 'Recovery and manufacturing'],
            ].map(([k, v], idx) => (
              <React.Fragment key={k}>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-inset ring-slate-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {k}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {v}
                  </div>
                </div>
                {idx < 2 ? (
                  <div
                    className={cn(
                      'hidden items-center justify-center text-slate-400 md:flex',
                    )}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </Card>
      </Section>

      <Section
        tone="muted"
        eyebrow="Designed for African urban realities"
        title="Practical kiosks built for scale"
        subtitle="Small footprint. Low operational complexity. Designed for Harare and similar African cities."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ['Small footprint kiosks', 'Deployable in high-density areas and partner sites.'],
            ['Low operational complexity', 'Clear workflows: verify, weigh, record, reward.'],
            ['Scalable rollout', 'Repeatable unit design across neighborhoods and municipalities.'],
            ['Context-ready design', 'Built for urban and peri-urban realities in Zimbabwe.'],
          ].map(([k, v]) => (
            <Card key={k} className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                {k}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">{v}</div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Governance, traceability & trust"
        title="Community recycling, done properly"
        subtitle="Formalised collection, controlled aggregation, and traceable material flows aligned with municipal and environmental standards."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">Formalised collection</Badge>
              <Badge>Quality verification</Badge>
              <Badge>Controlled aggregation</Badge>
              <Badge tone="safety">Traceable flows</Badge>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-600">
              {[
                'Clean material acceptance criteria to reduce contamination and improve recovery yields.',
                'Recorded weights and verified handovers designed for auditability.',
                'Partner-ready reporting for municipalities and corporate sponsors.',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <Media
              src={media.recycling.src}
              alt={media.recycling.alt}
              className="aspect-[16/10]"
            />
            <div className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
              Material recovery inputs (stock)
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Replace with Green Units collection, aggregation, and PlayNova processing
              photography.
            </div>
          </Card>
        </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Impact metrics"
        title="Real-world impact you can measure"
        subtitle="Counters shown below are placeholders for future reporting dashboards."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Metric label="Tonnes recovered" value={1280} suffix=" t" />
          <Metric label="Communities served" value={42} />
          <Metric label="Products manufactured" value={185000} />
        </div>
      </Section>

      <Section
        eyebrow="Call to action"
        title="Activate the circular economy where it starts"
        subtitle="Partner with Green Units to deploy kiosks, reward responsible sorting, and strengthen formal recovery."
      >
        <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                Partnership options
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Partner With Green Units • Host a Green Unit • Support the Circular
                Economy
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                to="/contact?intent=green-units&mode=partner"
                className={buttonClassName({ variant: 'primary', size: 'md' })}
              >
                Partner With Green Units
              </Link>
              <Link
                to="/contact?intent=green-units&mode=host"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Host a Green Unit
              </Link>
              <Link
                to="/contact?intent=green-units&mode=support"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Support the Circular Economy
              </Link>
            </div>
          </div>
        </Card>
      </Section>
    </div>
  )
}

