import * as React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { buttonClassName } from '../components/ui/buttonStyles'

const interests = [
  'Waste Services (GPS + manifests)',
  'Incinerator manufacturing',
  'Medical waste compliance (audits, SOPs, training)',
  'PlayNova (recycling)',
  'Sterilisation services',
  'Document destruction',
  'Multi-site integrated programme',
] as const

type Interest = (typeof interests)[number]
type ContactFormState = {
  name: string
  organization: string
  role: string
  email: string
  phone: string
  interest: Interest
  message: string
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="grid gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <div className="text-sm font-medium text-slate-900">{label}</div>
        {hint ? <div className="text-xs text-slate-500">{hint}</div> : null}
      </div>
      {children}
    </label>
  )
}

export function ContactPage() {
  const [searchParams] = useSearchParams()
  const intent = searchParams.get('intent')

  const defaultMessage =
    intent === 'credentials'
      ? 'Please share corporate credentials and references for procurement diligence.'
      : ''

  const [submitted, setSubmitted] = React.useState(false)

  const [form, setForm] = React.useState<ContactFormState>({
    name: '',
    organization: '',
    role: '',
    email: '',
    phone: '',
    interest: interests[0] as Interest,
    message: defaultMessage,
  })

  React.useEffect(() => {
    setForm((prev) => ({
      ...prev,
      message: prev.message || defaultMessage,
    }))
  }, [defaultMessage])

  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <Badge tone="brand">Contact</Badge>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Corporate enquiries and compliance-led onboarding
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Use this form to request corporate credentials and references, schedule a
            site assessment, or discuss an integrated multi-site programme.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                Request form
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                We respond with an appropriate package (credentials, references, and
                next steps) based on your role and requirements.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl border border-brand-200 bg-brand-50/40 p-5">
                  <div className="text-sm font-semibold text-brand-900">
                    Request received (demo)
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    This site currently demonstrates UI/UX only (no backend). Connect
                    the form to your preferred CRM/email service before launch.
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className={buttonClassName({ variant: 'outline', size: 'md' })}
                      onClick={() => setSubmitted(false)}
                    >
                      Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  className="mt-6 grid gap-5"
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSubmitted(true)
                  }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" hint="Required">
                      <input
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      />
                    </Field>
                    <Field label="Organization" hint="Required">
                      <input
                        required
                        value={form.organization}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, organization: e.target.value }))
                        }
                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      />
                    </Field>
                    <Field label="Role / title" hint="Optional">
                      <input
                        value={form.role}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, role: e.target.value }))
                        }
                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      />
                    </Field>
                    <Field label="Email" hint="Required">
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, email: e.target.value }))
                        }
                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      />
                    </Field>
                    <Field label="Phone" hint="Optional">
                      <input
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className="h-11 rounded-xl border border-slate-200 px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      />
                    </Field>
                    <Field label="Primary interest" hint="Required">
                      <select
                        value={form.interest}
                        onChange={(e) =>
                          setForm((p) => ({
                            ...p,
                            interest: e.target.value as (typeof interests)[number],
                          }))
                        }
                        className="h-11 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                      >
                        {interests.map((i) => (
                          <option key={i} value={i}>
                            {i}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Message" hint="Required">
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-brand-600/20 focus:border-brand-600 focus:ring-4"
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-slate-500">
                      Corporate credentials and references available upon request.
                    </div>
                    <Button type="submit" variant="primary" size="lg">
                      Send request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold tracking-tight text-slate-900">
                What to expect
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  'A response tailored to procurement and compliance requirements',
                  'A structured next-step plan (site review, scope, service model)',
                  'Evidence of operational controls and traceability',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Placeholder contact
              </div>
              <div className="mt-3 text-sm text-slate-600">
                Email (placeholder):{' '}
                <span className="font-medium text-slate-900">
                  corporate@wastinnova.africa
                </span>
              </div>
              <div className="mt-4">
                <a
                  className={buttonClassName({
                    variant: 'outline',
                    size: 'md',
                    className: 'w-full',
                  })}
                  href={`mailto:corporate@wastinnova.africa?subject=${encodeURIComponent(
                    intent === 'credentials'
                      ? 'Request: Corporate Credentials & References'
                      : 'Corporate enquiry',
                  )}`}
                >
                  Email us (mailto)
                </a>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Update this email address to the official corporate channel before
                launch.
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

