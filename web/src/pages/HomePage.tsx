import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { buttonClassName } from '../components/ui/buttonStyles'
import { cn } from '../lib/cn'

type Service = {
  name: string
  description: string
  pricingModel: 'Subscription' | 'Capital' | 'Contract'
  highlight: string
}

const services: Service[] = [
  {
    name: 'Waste Services',
    description:
      'GPS-tracked logistics with WASTiTRACK digital manifests for end-to-end traceability.',
    pricingModel: 'Subscription',
    highlight: 'Digital manifests • Chain-of-custody',
  },
  {
    name: 'Incinerator Manufacturing',
    description:
      'Custom medical systems built for low-resource environments, with maintenance programmes.',
    pricingModel: 'Capital',
    highlight: 'Modular • Maintainable • Compliant',
  },
  {
    name: 'Medical Waste Compliance',
    description: 'Audits, SOPs, training, and governance support to stay audit-ready.',
    pricingModel: 'Contract',
    highlight: 'WHO-aligned • Site-ready documentation',
  },
  {
    name: 'PlayNova (Recycling)',
    description:
      'Circular economy manufacturing: rubber recovery into safety mats and tiles.',
    pricingModel: 'Contract',
    highlight: 'Waste-to-product • Measurable diversion',
  },
  {
    name: 'Sterilisation Services',
    description:
      'Validated thermal and chemical protocols for safe and repeatable decontamination.',
    pricingModel: 'Subscription',
    highlight: 'Validated cycles • Recorded outputs',
  },
  {
    name: 'Document Destruction',
    description:
      'Secure, certified shredding for healthcare and legal records with traceable logs.',
    pricingModel: 'Contract',
    highlight: 'Secure • Certified • Recorded',
  },
]

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = 'default',
}: {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  children: ReactNode
  tone?: 'default' | 'muted'
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 py-16 sm:py-20',
        tone === 'muted' && 'bg-slate-50/70',
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-700">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
          {icon}
        </div>
        <div>
          <div className="text-sm font-semibold tracking-tight text-slate-900">
            {title}
          </div>
          <div className="mt-2 text-sm leading-relaxed text-slate-600">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

function Icon({
  d,
}: {
  d: string
}) {
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

export function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,100,48,0.10),transparent_60%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-[45%] bg-[linear-gradient(to_left,rgba(2,6,23,0.03),transparent)] md:block" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-20 sm:px-6 md:grid-cols-2">
          <div className="space-y-6">
            <Badge tone="brand">Safety first. Compliance by design.</Badge>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Engineering Safety. Delivering Compliance. Innovating Sustainably.
            </h1>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Africa’s benchmark corporate partner for compliant waste, sterilisation,
              and environmental solutions.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
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
                Explore WASTiTRACK
              </Link>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Operating model
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  Always audit-ready, SOP-driven operations
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Partner promise
                </div>
                <div className="mt-2 text-sm font-medium text-slate-900">
                  Long-term governance, not transactional supply
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    WASTiTRACK
                  </div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                    Digital compliance dashboard (placeholder)
                  </div>
                </div>
                <Badge tone="brand" className="shrink-0">
                  Audit trail
                </Badge>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ['Manifests', 'Up to date', 'bg-brand-50 text-brand-800'],
                  ['GPS tracking', 'Active', 'bg-brand-50 text-brand-800'],
                  ['SOP coverage', 'Validated', 'bg-slate-50 text-slate-800'],
                  ['Exceptions', '0 pending', 'bg-safety-50 text-safety-900'],
                ].map(([k, v, tone]) => (
                  <div
                    key={k}
                    className="rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="text-xs font-medium text-slate-500">{k}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="text-sm font-semibold text-slate-900">{v}</div>
                      <span className={cn('rounded-full px-2 py-1 text-[11px] font-medium', tone)}>
                        Status
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Compliance view
                </div>
                <div className="mt-2 grid gap-2 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span>Chain-of-custody</span>
                    <span className="font-medium text-brand-700">Complete</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Retention policy</span>
                    <span className="font-medium text-brand-700">Enforced</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Incident logging</span>
                    <span className="font-medium text-brand-700">Enabled</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Infrastructure
                  </div>
                  <div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                    Modular medical incinerator (placeholder)
                  </div>
                </div>
                <Badge tone="safety" className="shrink-0">
                  Safety
                </Badge>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Low-resource design', 'Serviceable'],
                  ['Maintenance-ready', 'Planned'],
                  ['Controls', 'Documented'],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="rounded-2xl bg-slate-50 p-4 ring-1 ring-inset ring-slate-200"
                  >
                    <div className="text-xs font-medium text-slate-500">{k}</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Imagery guidance
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  Replace with real project photography: controlled waste handling,
                  modular incineration units, and in-field healthcare environments
                  (avoid generic stock).
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="overview"
        eyebrow="Corporate overview"
        title="A governance-led partner for environmental and healthcare outcomes"
        subtitle="WASTiNNOVA Africa is a professionally managed environmental and healthcare services company delivering technology-enabled, compliance-driven solutions across medical waste, sterilisation, compliance, and circular manufacturing."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Professionally managed operations"
            description="Structured delivery, clear accountability, and documentation designed for regulators, hospitals, and international partners."
            icon={<Icon d="M12 3l8 4v6c0 5-3.2 9.4-8 11-4.8-1.6-8-6-8-11V7l8-4z" />}
          />
          <FeatureCard
            title="Compliance-first execution"
            description="WHO-aligned practices and national regulatory readiness built into processes—not added at the end."
            icon={<Icon d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
          />
          <FeatureCard
            title="Long-term partnership"
            description="We operate as a strategic partner with measurable governance and service maturity—reducing risk and improving outcomes."
            icon={<Icon d="M16 11V7a4 4 0 00-8 0v4M7 11h10v10H7V11z" />}
          />
        </div>
      </Section>

      <Section
        id="purpose"
        tone="muted"
        eyebrow="Purpose & value"
        title="Clarity of purpose. Practical value."
        subtitle="Safety first. Compliance by design. Innovation with purpose."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Vision
            </div>
            <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
              A waste service seamlessly integrated into society.
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Mission
            </div>
            <div className="mt-3 text-lg font-semibold tracking-tight text-slate-900">
              To simplify lives and save the world.
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Value proposition
            </div>
            <div className="mt-3 text-sm leading-relaxed text-slate-600">
              We create smart and effective ways to manage waste. With advanced
              digital technologies and a wide range of integrated services, we
              make waste management simple, reliable, and hassle-free for our
              partners.
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Integrated business units"
        title="End-to-end service coverage, engineered for audit readiness"
        subtitle="Six integrated units—delivered with traceability, SOP discipline, and governance-led reporting. Hover a card to reveal the pricing model."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft"
            >
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                {service.name}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </div>
              <div className="mt-4 text-xs font-medium text-slate-500">
                {service.highlight}
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 bg-[linear-gradient(to_top,rgba(2,6,23,0.05),transparent)] p-4 opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl bg-white/90 p-3 ring-1 ring-inset ring-slate-200 backdrop-blur">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Pricing model
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    {service.pricingModel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-slate-600">
            Need a combined programme across multiple sites?
          </div>
          <Link
            to="/contact?intent=credentials"
            className={buttonClassName({ variant: 'outline', size: 'md' })}
          >
            Request an integrated proposal
          </Link>
        </div>
      </Section>

      <Section
        id="stack"
        tone="muted"
        eyebrow="Technical value stack"
        title="Compliance, technology, operations, and expertise—layered by design"
        subtitle="A structured stack built for transparency: standards-informed, digitally traceable, and operationally disciplined."
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            {[
              {
                k: 'Compliance',
                v: 'National regulations and WHO-aligned standards',
                tone: 'border-brand-200 bg-brand-50/40',
              },
              {
                k: 'Technology',
                v: 'WASTiTRACK digital audit trail and digital manifests',
                tone: 'border-slate-200 bg-white',
              },
              {
                k: 'Operations',
                v: 'SOP-driven, traceable, “Always Audit-Ready” delivery',
                tone: 'border-slate-200 bg-white',
              },
              {
                k: 'Expertise',
                v: 'Healthcare- and engineering-led leadership',
                tone: 'border-slate-200 bg-white',
              },
            ].map((row, idx) => (
              <div
                key={row.k}
                className={cn(
                  'relative rounded-2xl border p-5 shadow-sm',
                  row.tone,
                )}
                style={{ transform: `translateX(${idx * 6}px)` }}
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {row.k}
                </div>
                <div className="mt-2 text-sm font-semibold tracking-tight text-slate-900">
                  {row.v}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Outcome focus
            </div>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
              <p>
                Governance is not a document pack—it is an operating discipline.
                Our approach is designed to reduce risk, improve visibility, and
                create predictable compliance outcomes for multi-site partners.
              </p>
              <p>
                The result is a partner ecosystem that’s simpler to manage, easier
                to audit, and ready for scale.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="differentiation"
        eyebrow="Market differentiation"
        title="Service maturity that regulators and executives can trust"
        subtitle="A clear maturity gap exists between governance-led operators and informal services. We close that gap with traceability, standards, and structured operations."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="grid grid-cols-4 bg-slate-50 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <div className="col-span-2">Provider category</div>
            <div>Service maturity</div>
            <div>Key characteristics</div>
          </div>
          {[
            {
              label: 'WASTiNNOVA Africa',
              maturity: 100,
              tone: 'text-brand-800',
              traits: 'Digital traceability • SOP discipline • Audit-ready reporting',
            },
            {
              label: 'Traditional providers',
              maturity: 60,
              tone: 'text-slate-800',
              traits: 'Partial documentation • Variable controls • Limited traceability',
            },
            {
              label: 'Informal operators',
              maturity: 20,
              tone: 'text-safety-900',
              traits: 'High risk • Minimal controls • Poor retention of records',
            },
          ].map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4 items-center gap-4 border-t border-slate-200 px-5 py-4"
            >
              <div className="col-span-2">
                <div className={cn('text-sm font-semibold', row.tone)}>
                  {row.label}
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">
                  {row.maturity}%
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={cn(
                      'h-full rounded-full',
                      row.label === 'WASTiNNOVA Africa'
                        ? 'bg-brand-600'
                        : row.label === 'Traditional providers'
                          ? 'bg-slate-400'
                          : 'bg-safety-500',
                    )}
                    style={{ width: `${row.maturity}%` }}
                  />
                </div>
              </div>
              <div className="text-sm text-slate-600">{row.traits}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="sustainability"
        tone="muted"
        eyebrow="Sustainability & circular economy"
        title="PlayNova: waste is the beginning of regeneration"
        subtitle="Sustainability without greenwashing: measurable diversion, material recovery, and real products that strengthen healthcare and infrastructure environments."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              k: 'Material recovery',
              v: 'Structured sorting and capture to reduce landfill and improve accountability.',
            },
            {
              k: 'Waste-to-product',
              v: 'Transformation into practical outputs aligned with safety and resilience.',
            },
            {
              k: 'Rubber to safety infrastructure',
              v: 'Rubber recycling into safety mats and tiles for high-traffic environments.',
            },
          ].map((c) => (
            <div
              key={c.k}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                {c.k}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.v}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-sm font-semibold tracking-tight text-slate-900">
            Narrative focus
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Waste is not the end of value—it is the beginning of regeneration.
          </p>
        </div>
      </Section>

      <Section
        id="compliance"
        eyebrow="Compliance positioning"
        title="Audit-ready systems by design"
        subtitle="We treat compliance as a built-in feature: standards-informed, operationalised through SOPs, and made transparent through digital records."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              <Badge tone="brand">WHO-aligned standards</Badge>
              <Badge>National regulatory readiness</Badge>
              <Badge>Retention & traceability</Badge>
              <Badge tone="safety">Incident & exception logging</Badge>
            </div>

            <div className="mt-6 space-y-4 text-sm text-slate-600">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span>
                  SOP-driven operations designed to remain “Always Audit-Ready”.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span>
                  Digital manifests and GPS visibility to strengthen chain-of-custody.
                </span>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                <span>
                  Compliance reporting that’s executive-friendly and regulator-readable.
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              Corporate assurance
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              We support procurement diligence with clear credentials, references, and
              evidence of operational controls. Our engagement model is structured
              for long-term partnership across facilities and regions.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact?intent=credentials"
                className={buttonClassName({ variant: 'primary', size: 'md' })}
              >
                Request corporate credentials
              </Link>
              <Link
                to="/compliance"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                View compliance approach
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

