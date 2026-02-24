import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Container } from '../components/layout/Container'
import { Section } from '../components/layout/Section'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Media } from '../components/ui/Media'
import { buttonClassName } from '../components/ui/buttonStyles'
import { Reveal } from '../components/motion/Reveal'
import { media } from '../content/media'
import { cn } from '../lib/cn'
import {
  Factory,
  FileCheck2,
  Flame,
  Recycle,
  Scale,
  ShieldCheck,
  Truck,
} from 'lucide-react'

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
      'Disposal of specialized waste including Healthcare, Confidential, Construction, Chemical. Methods include incineration, neutralization and sterilization',
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
    <Card className="flex h-full flex-col p-6 hover:translate-y-0 hover:shadow-apple-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
          {icon}
        </div>
      </div>
      <div className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
        {title}
      </div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">
        {description}
      </div>
      <div className="mt-auto pt-6" />
    </Card>
  )
}

export function HomePage() {
  return (
    <div>
      <section className="py-10 sm:py-12">
        <Container>
          <Card
            tone="muted"
            className="p-6 shadow-apple-sm hover:translate-y-0 hover:shadow-apple sm:p-8"
          >
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <Reveal className="text-left">
                <div className="flex items-center gap-2">
                  <Badge tone="brand">WASTiNNOVA Africa</Badge>
                  <span className="text-sm text-slate-500">Zimbabwe</span>
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.05]">
                  Waste service that is seamlessly integrated into society
                </h1>
                <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Africa’s benchmark corporate partner for compliant waste,
                  sterilisation, and environmental solutions.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    to="/contact"
                    className={buttonClassName({ variant: 'primary', size: 'lg' })}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/technology"
                    className={buttonClassName({ variant: 'outline', size: 'lg' })}
                  >
                    Explore WASTiTRACK
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.05} className="hidden lg:block">
                <Media
                  src={media.dashboard.src}
                  alt={media.dashboard.alt}
                  className="aspect-[16/10] rounded-2xl"
                  priority
                />
              </Reveal>
            </div>
          </Card>
        </Container>
      </section>

      <Section
        id="services"
        eyebrow="Integrated business units"
        title="End-to-end service coverage, engineered for audit readiness"
        subtitle="Six integrated units—delivered with traceability, SOP discipline, and governance-led reporting. Hover a card to reveal the pricing model."
        className="py-24 sm:py-28"
      >
        <Reveal>
          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.name}
              className="group relative flex h-full flex-col overflow-hidden p-6"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 ring-1 ring-inset ring-slate-200">
                  {service.name === 'Waste Services' ? (
                    <Truck className="h-5 w-5" />
                  ) : service.name === 'Incinerator Manufacturing' ? (
                    <Factory className="h-5 w-5" />
                  ) : service.name === 'Medical Waste Compliance' ? (
                    <ShieldCheck className="h-5 w-5" />
                  ) : service.name === 'PlayNova (Recycling)' ? (
                    <Recycle className="h-5 w-5" />
                  ) : service.name === 'Sterilisation Services' ? (
                    <Flame className="h-5 w-5" />
                  ) : (
                    <FileCheck2 className="h-5 w-5" />
                  )}
                </div>
              </div>
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                {service.name}
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </div>
              <div className="mt-4 text-xs font-medium text-slate-500">
                {service.highlight}
              </div>
              <div className="mt-auto pt-8" />

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
            </Card>
          ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-12">
          <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-600">
                Need a combined programme across multiple sites?
              </div>
              <Link
                to="/contact"
                className={buttonClassName({ variant: 'outline', size: 'md' })}
              >
                Request an integrated proposal
              </Link>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section
        tone="muted"
        eyebrow="Operational snapshot"
        title="Compliance execution, made visible"
        subtitle="A practical snapshot of how documentation, training, and traceability come together in day-to-day delivery."
        className="py-24 sm:py-28"
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Document & SOP control"
              description="Centralize compliance evidence: SOPs, manifests, training records, and reporting—structured for review."
              icon={<FileCheck2 className="h-5 w-5" />}
            />
            <FeatureCard
              title="Training & readiness"
              description="Audits, SOP adoption, and staff enablement designed for healthcare environments and multi-site rollouts."
              icon={<Scale className="h-5 w-5" />}
            />
            <FeatureCard
              title="Real-time traceability"
              description="WASTiTRACK digital manifests, GPS visibility, and exportable audit trails—always audit-ready by design."
              icon={<Truck className="h-5 w-5" />}
            />
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
            <Media
              src={media.dashboard.src}
              alt={media.dashboard.alt}
              className="mb-5 aspect-[16/10]"
              priority
            />
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  WASTiTRACK
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  Digital compliance dashboard
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
                  className="rounded-2xl border border-slate-200/80 bg-white p-4"
                >
                  <div className="text-xs font-medium text-slate-500">{k}</div>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="text-sm font-semibold text-slate-900">{v}</div>
                    <span
                      className={cn(
                        'rounded-full px-2 py-1 text-[11px] font-medium',
                        tone,
                      )}
                    >
                      Status
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

            <Card className="p-6">
            <Media
              src={media.controlledFacility.src}
              alt={media.controlledFacility.alt}
              className="mb-5 aspect-[16/10]"
            />
            <div className="flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Infrastructure
                </div>
                <div className="mt-1 text-sm font-semibold tracking-tight text-slate-900">
                  Controlled treatment infrastructure
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
                Note
              </div>
              <div className="mt-2 text-sm leading-relaxed text-slate-600">
                Stock imagery used for layout only. Replace with real project
                photography for maximum credibility.
              </div>
            </div>
          </Card>
          </div>
        </Reveal>

        <Reveal delay={0.07} className="mx-auto mt-10 max-w-3xl">
          <Card tone="muted" className="p-5 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Core philosophy
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Safety first. Compliance by design. Innovation with purpose.
                </div>
              </div>
              <Link
                to="/compliance"
                className={buttonClassName({ variant: 'outline', size: 'sm' })}
              >
                View compliance approach
              </Link>
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section
        id="sustainability"
        tone="muted"
        eyebrow="Sustainability & circular economy"
        title="PlayNova: waste is the beginning of regeneration"
        subtitle="Sustainability without greenwashing: measurable diversion, material recovery, and real products that strengthen healthcare and infrastructure environments."
        className="py-24 sm:py-28"
      >
        <Reveal>
          <Card className="mb-8 p-6">
            <Media
              src={media.recycling.src}
              alt={media.recycling.alt}
              className="aspect-[16/9]"
            />
            <div className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
              Circular inputs to circular products
            </div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Stock imagery representing rubber recovery. Replace with PlayNova
              production workflows and finished safety products for maximum authenticity.
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.05}>
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
              <Card key={c.k} className="p-6">
                <div className="text-sm font-semibold tracking-tight text-slate-900">
                  {c.k}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">
                  {c.v}
                </div>
              </Card>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
            <div className="text-sm font-semibold tracking-tight text-slate-900">
              Narrative focus
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Waste is not the end of value—it is the beginning of regeneration.
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section
        id="compliance"
        eyebrow="Compliance positioning"
        title="Audit-ready systems by design"
        subtitle="We treat compliance as a built-in feature: standards-informed, operationalised through SOPs, and made transparent through digital records."
        className="py-24 sm:py-28"
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
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
          </Card>

            <Card tone="muted" className="p-6 hover:translate-y-0 hover:shadow-apple-sm">
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
          </Card>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}

