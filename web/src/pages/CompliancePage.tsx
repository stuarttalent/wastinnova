import { Link } from 'react-router-dom'
import { PageHeader } from '../components/layout/PageHeader'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { buttonClassName } from '../components/ui/buttonStyles'

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

export function CompliancePage() {
  return (
    <div>
      <PageHeader
        badge={<Badge tone="brand">Compliance positioning</Badge>}
        title="Compliance is built in—not bolted on"
        subtitle={
          <>
            We align operations with national regulations and WHO-aligned standards,
            then operationalise compliance through SOPs, training, traceability, and
            audit-ready records.
          </>
        }
        actions={
          <>
            <Link
              to="/contact?intent=credentials"
              className={buttonClassName({ variant: 'primary', size: 'lg' })}
            >
              Request Corporate Credentials & References
            </Link>
            <Link
              to="/technology"
              className={buttonClassName({ variant: 'outline', size: 'lg' })}
            >
              See WASTiTRACK audit trail
            </Link>
          </>
        }
      />

      <Section
        eyebrow="Built-in compliance"
        title="Standards, documentation, and traceability—operationalised"
        subtitle="A compliance posture designed for healthcare environments, procurement diligence, and regulator review."
      >
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'WHO-aligned standards',
                desc: 'Practices designed to support healthcare environments and controlled waste handling.',
                icon: <Icon d="M12 3l8 4v6c0 5-3.2 9.4-8 11-4.8-1.6-8-6-8-11V7l8-4z" />,
              },
              {
                title: 'National regulatory readiness',
                desc: 'Controls and documentation structured for regulator review, tender assurance, and ongoing governance.',
                icon: <Icon d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
              },
              {
                title: 'Always Audit-Ready operations',
                desc: 'SOP-driven execution with training, checklists, and evidence captured as work is performed.',
                icon: <Icon d="M9 5h6m-6 4h6m-6 4h6M7 3h10a2 2 0 012 2v16l-4-3-4 3-4-3-4 3V5a2 2 0 012-2z" />,
              },
              {
                title: 'Digital traceability',
                desc: 'WASTiTRACK records manifests, movements, and exceptions—making compliance visible and verifiable.',
                icon: <Icon d="M4 7h16M4 12h10M4 17h16" />,
              },
            ].map((c) => (
              <Card key={c.title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-tight text-slate-900">
                      {c.title}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-600">
                      {c.desc}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Compliance outputs
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'Site audits, gap assessments, and remediation plans',
                  'SOP library and staff training to operationalise controls',
                  'Audit-ready reporting and evidence retention',
                  'Incident, exception, and corrective action tracking',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                Procurement and governance support
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We support corporate due diligence with structured documentation,
                references, and operational evidence—so risk and compliance can be
                evaluated with confidence.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
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
                  See integrated services
                </Link>
              </div>
            </Card>
          </div>
      </Section>

      <Section
        tone="muted"
        eyebrow="Preview"
        title="CWPS Medical Waste Compliance Program — Pre-Registration"
        subtitle="A centralized compliance, documentation, and training platform designed for healthcare facilities."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6 lg:col-span-2 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  External portal
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  reg.cwpsafety.org
                </div>
              </div>
              <a
                href="https://reg.cwpsafety.org/"
                target="_blank"
                rel="noreferrer"
                className={buttonClassName({ variant: 'primary', size: 'md' })}
              >
                Open portal
              </a>
            </div>

            <div className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {[
                'Reduce risk and prevent compliance-related shutdowns',
                'Centralize documentation and audit readiness',
                'Support certified training and inspection readiness',
                'Designed for clinics, labs, pharmacies, and hospitals',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            tone="muted"
            className="p-6 hover:translate-y-0 hover:shadow-apple-sm"
          >
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              Why this matters
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Regulators and hospital executives expect documented controls. This
              portal is a strong reference for the “compliance made simple” operating
              standard we align with.
            </p>
            <div className="mt-4">
              <a
                href="https://reg.cwpsafety.org/"
                target="_blank"
                rel="noreferrer"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Preview pre-registration
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

