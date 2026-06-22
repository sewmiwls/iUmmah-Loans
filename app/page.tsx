"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  HandCoins,
  HeartHandshake,
  Lock,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Fees", href: "#fees" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const heroPoints = [
  "No Interest (Riba)",
  "Secure Verification Process",
  "The application process is handled by our experienced Australian-based staff, who will guide you through every step over the phone.",
  "Transparent Fee Structure",
 
];

const loanHighlights = [
  {
    title: "Short-Term Loans Facility",
    value: "Up to $500",
    text: "Available for eligible applicants, subject to assessment and approval.",
  },
  {
    title: "Facility Period",
    value: "Under 62 Days",
    text: "Designed for short-term support with clear terms and transparent fees.",
  },
  {
    title: "Hardship Support",
    value: "Responsible Review",
    text: "Applications involving loan difficulty are reviewed with care and responsibility.",
  },
];

const values = [
  {
    title: "Amanah (Trust)",
    text: "We treat every application with honesty, confidentiality and respect.",
    icon: ShieldCheck,
  },
  {
    title: "Transparency",
    text: "Clear agreements and upfront disclosure of all applicable fees.",
    icon: FileText,
  },
  {
    title: "Responsibility",
    text: "We assess affordability carefully and promote responsible loan decisions.",
    icon: HeartHandshake,
  },
  {
    title: "Community",
    text: "Supporting Australian Muslim families and individuals.",
    icon: Users,
  },
  {
    title: "Integrity",
    text: "Conducting our business fairly, ethically and with accountability.",
    icon: ShieldCheck,
  },
];

const whyChoose = [
  {
    title: "Loans Designed Around Community Values",
    text: "Loan support through a transparent fee-based model rather than charging interest.",
    icon: Sparkles,
  },
  {
    title: "Transparent Fees",
    text: "No hidden surprises. Clear information before any agreement is accepted.",
    icon: FileText,
  },
  {
    title: "Easy Application Process",
    text: "Easy application process and verification process designed for convenience.",
    icon: Clock,
  },
  {
    title: "Secure Technology",
    text: "Your information is protected using secure systems.",
    icon: Lock,
  },
  {
    title: "Australian Support Team",
    text: "Friendly local support when you need assistance.",
    icon: Users,
  },
  {
    title: "Responsible Loans",
    text: "Every application is assessed carefully to ensure suitability and affordability.",
    icon: ShieldCheck,
  },
];

const processSteps = [
  {
    title: "Complete Enquiry Form",
    text: "Complete the short enquiry form.",
  },
  {
    title: "Book a Short Call",
    text: "We text you to book a 5–8 minute call with one of our Sharia CSOs.",
  },
  {
    title: "Pre-Qualification Review",
    text: "During that call, we pre-qualify you for our Halal loan and ensure you meet our Target Market Determination. If you meet the initial criteria, stage one of the application will be completed and you will be invited to progress your application.",
  },
  {
    title: "Bank Statement Link",
    text: "If you pre-qualify, we send you a secure link to obtain your bank statements digitally, using triple-encrypted security, so we can review your income and expenses.",
  },
  {
    title: "Affordability Assessment",
    text: "We examine your bank statements to determine affordability for the Halal loan.",
  },
  {
    title: "Application Outcome",
    text: "If affordability is confirmed, a text will be sent to book a second call with another Sharia CSO to ensure our Terms and Conditions are satisfied and, where possible, best interest obligations are met. If the loan is not affordable, you will be informed that your application has been unsuccessful and invited to apply again in 3 months.",
  },
  {
    title: "Final Review & Settlement",
    text: "The Terms and Conditions are explained and, if best interest obligations can be satisfied, the application will be completed and the Halal Loan will be settled.",
  },
];

const whoWeHelp = [
  "Family Expenses",
  "Education Costs",
  "Medical Expenses",
  "Essential Purchases",
  "Vehicle Repairs",
  "Emergency Situations",
];

const faqs = [
  {
    question: "What is iUmmah Loans?",
    answer:
      "iUmmah Loan is an Australian loans provider focused on ethical and transparent loans solutions for the Muslim community.",
  },
  {
    question: "Do you charge interest?",
    answer:
      "No. Our model is based on transparent fees rather than charging interest.",
  },
  {
    question: "Who can apply?",
    answer:
      "Australian residents aged 18 years and over who meet our eligibility and affordability requirements.",
  },
  {
    question: "Is approval guaranteed?",
    answer:
      "No. All applications are subject to assessment and responsible loans requirements.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "Processing times vary depending on verification and assessment requirements.",
  },
  {
    question: "Can I repay early?",
    answer:
      "Yes. Early repayments may be available depending on the loans agreement.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. We use secure systems and technology to protect your information.",
  },
];

function ConnectWithUsForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      purpose: formData.get("purpose"),
      message: formData.get("message"),
    };

    try {
      setStatus("loading");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-white p-7 text-[#2B2B2B] shadow-2xl"
    >
      <h3 className="text-2xl font-bold text-[#004B2E]">Connect with us</h3>

      <p className="mt-3 leading-7 text-[#555555]">
        Submit your details and our Australian-based team will contact you to
        guide you through the next steps.
      </p>

      <div className="mt-6 grid gap-4">
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="rounded-2xl border border-[#E8E8E8] bg-[#F4F8F5] px-5 py-4 outline-none focus:border-[#004B2E]"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="rounded-2xl border border-[#E8E8E8] bg-[#F4F8F5] px-5 py-4 outline-none focus:border-[#004B2E]"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="rounded-2xl border border-[#E8E8E8] bg-[#F4F8F5] px-5 py-4 outline-none focus:border-[#004B2E]"
        />

        <select
          name="purpose"
          required
          defaultValue=""
          className="rounded-2xl border border-[#E8E8E8] bg-[#F4F8F5] px-5 py-4 outline-none focus:border-[#004B2E]"
        >
          <option value="" disabled>
            Loans Purpose
          </option>
          <option value="Family Expenses">Family Expenses</option>
          <option value="Education Costs">Education Costs</option>
          <option value="Medical Expenses">Medical Expenses</option>
          <option value="Essential Purchases">Essential Purchases</option>
          <option value="Vehicle Repairs">Vehicle Repairs</option>
          <option value="Emergency Situation">Emergency Situation</option>
          <option value="Loan Difficulty Support">
            Loan Difficulty Support
          </option>
          <option value="Other">Other</option>
        </select>

        <textarea
          name="message"
          placeholder="How can we help?"
          rows={4}
          required
          className="rounded-2xl border border-[#E8E8E8] bg-[#F4F8F5] px-5 py-4 outline-none focus:border-[#004B2E]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-[#004B2E] px-7 py-4 font-bold text-white hover:bg-[#013220] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium leading-6 text-green-700">
            One of our team members will be in touch soon to discuss the next
            steps and complete the loan qualification process.
          </p>
        )}

        {status === "error" && (
          <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-xs leading-6 text-[#555555]">
          To complete your application, you must be willing to speak with one of
          our team members by phone. Applications cannot be processed without a
          phone assessment.
        </p>
      </div>
    </form>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F8FAF8] text-[#2B2B2B]">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center">
            <Image
              src="/images/iummah-logo.png"
              alt="iUmmah Loans Logo"
              width={190}
              height={70}
              priority
              className="h-12 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#2B2B2B]/80 hover:text-[#004B2E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#004B2E] px-5 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-[#013220] lg:inline-flex"
          >
            Apply Now
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex rounded-lg border border-black/10 p-2 text-[#004B2E] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-white px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#2B2B2B]/85"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-[#004B2E] px-5 py-3 text-center text-sm font-bold text-white hover:bg-[#013220]"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden bg-gradient-to-br from-[#004B2E] to-[#006B42] px-5 pb-20 pt-36 text-white lg:px-8 lg:pb-28 lg:pt-44"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#DCCB9A] blur-3xl" />
          <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#C8B273] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Ethical loans for the Australian Muslim Community
            </h1>

            

            <div className="grid gap-4 sm:grid-cols-2">
  {heroPoints.map((point) => {
    const isTransparentFee = point === "Transparent Fee Structure";

    return (
      <div
        key={point}
        className={`group rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl ${
          point.length > 75 || isTransparentFee ? "sm:col-span-2" : ""
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C8B273]/15 text-[#C8B273]">
            <CheckCircle2 size={18} />
          </div>

          <div className="w-full">
            <p className="text-sm font-semibold leading-6 text-white/90">
              {point}
            </p>

            {isTransparentFee && (
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-5">
                <p className="text-sm leading-7 text-white/75">
                  At iUmmah Loans, we believe in transparency and fairness.
                </p>

               

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-bold text-[#C8B273]">
                      Establishment Fee – $25
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      A one-time fee to cover the costs of assessing,
                      processing, verifying, and administering your application.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="font-bold text-[#C8B273]">
                      Payment Processing Fee – $2.30 to $9.89
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      This fee varies based on your repayment frequency and
                      covers payment gateway charges, transaction processing,
                      account administration, and account maintenance services.
                    </p>
                  </div>
                </div>

                <p className="mt-5 rounded-2xl bg-[#C8B273]/15 p-4 text-sm font-medium leading-6 text-white">
                  No interest is charged. All fees are clearly disclosed
                  upfront, ensuring transparency throughout the loan process.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8B273] px-7 py-4 font-bold text-[#004B2E] shadow-xl hover:bg-[#DCCB9A]"
              >
                Apply Now <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white px-7 py-4 font-bold text-white hover:bg-white hover:text-[#004B2E]"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
            <ConnectWithUsForm />
          </div>
        </div>
      </section>

      {/* Loan Highlights */}
      <section className="relative z-10 -mt-10 px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 rounded-[2rem] bg-white p-5 shadow-2xl ring-1 ring-[#E8E8E8] md:grid-cols-3">
          {loanHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#E8E8E8] bg-[#FAF8F2] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#C8B273] hover:shadow-xl"
            >
              <p className="text-sm font-semibold text-[#004B2E]">
                {item.title}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-[#004B2E]">
                {item.value}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#555555]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#004B2E]/10 blur-3xl" />
          <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#C8B273]/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
                About Us
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight text-[#004B2E] md:text-5xl">
                Built for the Ummah with Trust, Fairness & Responsibility
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#444444]">
                iUmmah Loans was established to provide Australian Muslims with
                access to ethical loan support while maintaining transparency,
                responsibility and fairness.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
                We recognise that many members of the Muslim community wish to
                avoid conventional interest-based loan products. Our approach
                focuses on transparent fees, responsible loans practices and
                genuine customer care.
              </p>

              <p className="mt-5 max-w-2xl leading-8 text-[#555555]">
                We are committed to helping individuals and families navigate
                life&apos;s loan needs while upholding values of trust,
                integrity and accountability.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-sm">
                  <p className="text-2xl font-extrabold text-[#004B2E]">0%</p>
                  <p className="mt-1 text-sm font-medium text-[#555555]">
                    Interest Based Model
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-sm">
                  <p className="text-2xl font-extrabold text-[#004B2E]">
                    100%
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#555555]">
                    Transparent Fees
                  </p>
                </div>

                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-sm">
                  <p className="text-2xl font-extrabold text-[#004B2E]">AUS</p>
                  <p className="mt-1 text-sm font-medium text-[#555555]">
                    Based Support
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#004B2E] p-7 text-white shadow-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C8B273]">
                  Our Mission
                </p>

                <h3 className="mt-4 text-3xl font-extrabold leading-tight">
                  Ethical Loans support with dignity and care.
                </h3>

                <p className="mt-5 leading-8 text-white/75">
                  Our mission is to provide a Halal
                  Loans solution that prioritises trust, fairness and community
                  wellbeing.
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    "Transparent fee-based structure",
                    "Responsible affordability assessment",
                    "Respectful and confidential support",
                    "Community-focused loan wellbeing",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#C8B273]" size={20} />
                      <span className="text-sm font-medium text-white/85">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-16">
            <div className="mb-8">
              <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
                Our Values
              </p>
              <h3 className="mt-3 text-3xl font-extrabold text-[#004B2E]">
                Principles that guide our service
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {values.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group cursor-pointer rounded-3xl border border-[#E8E8E8] bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-[#C8B273] hover:shadow-2xl"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-[#F4F8F5] p-3 text-[#004B2E] transition-all duration-300 group-hover:bg-[#FAF8F2] group-hover:text-[#C8B273]">
                      <Icon size={28} />
                    </div>

                    <h4 className="text-lg font-bold text-[#004B2E]">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#555555]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-[#F4F8F5] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              Why Choose iUmmah Loans
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#004B2E] md:text-4xl">
              Loans Designed Around Community Values
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              We aim to provide loan support through a transparent fee-based
              model rather than charging interest.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group cursor-pointer rounded-3xl border border-[#E8E8E8] bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-[#C8B273] hover:shadow-2xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-[#FAF8F2] p-3 text-[#C8B273] transition-all duration-300 group-hover:bg-[#F4F8F5] group-hover:text-[#004B2E]">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-[#004B2E]">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#555555]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#004B2E] md:text-4xl">
              A Loans Application Process
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="group relative cursor-pointer rounded-3xl border border-[#E8E8E8] bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-[#C8B273] hover:shadow-2xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#004B2E] text-xl font-extrabold text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C8B273] group-hover:text-[#004B2E]">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold text-[#004B2E]">
                  {step.title}
                </h3>

               <p className="mt-3 leading-7 text-[#555555]">{step.text}</p>

{index === 0 && (
  <a
    href="#contact"
    className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#C8B273] px-5 py-3 text-sm font-bold text-[#004B2E] shadow-sm transition-all duration-300 hover:bg-[#DCCB9A]"
  >
    Connect with us <ArrowRight size={16} />
  </a>
)}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#C8B273]/30 bg-[#FAF8F2] p-6 text-center shadow-sm">
            <p className="text-sm leading-7 text-[#555555]">
              <span className="font-bold text-[#004B2E]">Note:</span> The
              process above can be completed in as little as 2–3 hours depending
              on how attentive and responsive the applicant is to texts, calls
              and emails. Fully completed funding can take less than 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-[#004B2E] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              Who We Help
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Supporting Australian Muslim Families
            </h2>

            <p className="mt-5 leading-8 text-white/80">
              Our loans solutions may assist with unexpected family, education,
              medical, household and emergency needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whoWeHelp.map((item) => (
              <div
                key={item}
                className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl"
              >
                <CheckCircle2
                  className="text-[#C8B273] transition-all duration-300 group-hover:scale-110"
                  size={22}
                />

                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Loans */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#E8E8E8] bg-white p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
                Our Commitment to Ethical Loans
              </p>

              <h2 className="mt-4 text-3xl font-extrabold text-[#004B2E] md:text-4xl">
                Fairness, Transparency & Responsibility
              </h2>

              <p className="mt-5 leading-8 text-[#555555]">
                At iUmmah Loans, we understand the importance many Muslims place
                on avoiding Riba (interest).
              </p>

              <p className="mt-4 leading-8 text-[#555555]">
                Our loan model is built around transparency and responsible loan
                practices. We strive to provide a practical alternative through
                a fee-based structure that is clear, straightforward and easy to
                understand.
              </p>

              <p className="mt-4 leading-8 text-[#555555]">
                We encourage all customers to seek independent religious advice
                regarding their personal circumstances and loan decisions.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-[#FAF8F2] p-7">
              <h3 className="text-2xl font-bold text-[#004B2E]">
                Supporting Loan Wellbeing
              </h3>

              <p className="mt-4 leading-8 text-[#555555]">
                We are committed to responsible loans practices. Every
                application is assessed individually to ensure the loans facility
                is suitable and affordable.
              </p>

              <p className="mt-4 leading-8 text-[#555555]">
                If we believe a loans arrangement may place undue loan pressure
                on an applicant, we may decline the application.
              </p>

              <p className="mt-4 leading-8 text-[#555555]">
                If you are experiencing loan difficulty, please contact our
                support team to discuss available options with dignity and
                respect.
              </p>

              <div className="mt-6 rounded-2xl bg-[#004B2E] p-5 text-white">
                <p className="font-bold">Our Goal</p>
                <p className="mt-2 text-white/75">
                  Supporting long-term wellbeing within our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="bg-[#F4F8F5] px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              Fees & Charges
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#004B2E] md:text-4xl">
              Clear and Transparent Fees
            </h2>

            <p className="mt-5 leading-8 text-[#555555]">
              We believe loan arrangements should be easy to understand.
              Depending on the loans facility, fees may include establishment
              fees and payment processing fees. All fees are disclosed clearly
              before any agreement is accepted.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="group cursor-pointer rounded-3xl border border-[#E8E8E8] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#C8B273] hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-2xl bg-[#F4F8F5] p-3 text-[#004B2E] transition-all duration-300 group-hover:scale-110">
                <FileText size={30} />
              </div>

              <h3 className="text-2xl font-bold text-[#004B2E]">
                Establishment Fee
              </h3>

              <p className="mt-4 leading-8 text-[#555555]">
                A one-time fee charged for setting up your loans facility and
                completing the application process.
              </p>
            </div>

            <div className="group cursor-pointer rounded-3xl border border-[#E8E8E8] bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-[#C8B273] hover:shadow-2xl">
              <div className="mb-5 inline-flex rounded-2xl bg-[#FAF8F2] p-3 text-[#C8B273] transition-all duration-300 group-hover:scale-110">
                <HandCoins size={30} />
              </div>

              <h3 className="text-2xl font-bold text-[#004B2E]">
                Payment Processing Fee
              </h3>

              <p className="mt-4 leading-8 text-[#555555]">
                A monthly fee charged by the payment processing provider for
                managing repayments and account administration.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "No hidden charges",
              "No unexpected costs",
              "No compounding interest",
            ].map((item) => (
              <div
                key={item}
                className="flex cursor-pointer items-center justify-center gap-3 rounded-2xl border border-[#E8E8E8] bg-white p-5 font-bold text-[#004B2E] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C8B273] hover:shadow-xl"
              >
                <CheckCircle2 className="text-[#004B2E]" size={22} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-extrabold text-[#004B2E] md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C8B273] hover:shadow-xl"
              >
                <summary className="cursor-pointer list-none text-lg font-bold text-[#004B2E]">
                  <div className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-[#C8B273] transition-all duration-300 group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 leading-8 text-[#555555]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-[#004B2E] px-5 py-20 text-white lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#C8B273]">
              Contact Us
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              We&apos;re Here to Help
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-white/75">
              Whether you have questions about eligibility, applications or our
              loans process, our team is ready to assist.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-3 text-[#C8B273]">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a
                    href="mailto:info@iummahloans.com.au"
                    className="font-bold hover:text-[#C8B273]"
                  >
                    info@iummahloans.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-3 text-[#C8B273]">
                  <Clock size={24} />
                </div>

                <div>
                  <p className="text-sm text-white/60">Hours</p>
                  <p className="font-bold">Monday – Friday, 9:00 AM – 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <ConnectWithUsForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#013220] px-5 pt-20 text-white lg:px-8">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-[#004B2E] blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#C8B273] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md md:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1fr]">
              <div className="lg:pr-6">
                <a href="#home" className="inline-flex items-center">
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-xl">
                    <Image
                      src="/images/iummah-logo.png"
                      alt="iUmmah Loans Logo"
                      width={230}
                      height={90}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                </a>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                  Transparent, responsible and ethical loans solutions designed
                  to support Australian Muslim families with trust, fairness and
                  integrity.
                </p>

                <div className="mt-6 grid gap-3">
                  {["Trust & Amanah", "Transparent Fees", "Responsible Loans"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
                      >
                        <CheckCircle2 size={18} className="text-[#C8B273]" />
                        <span className="text-sm font-medium text-white/75">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Quick Links</h3>

                <div className="mt-5 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/65 hover:translate-x-1 hover:text-[#C8B273]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Loan Support</h3>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="#how-it-works"
                    className="text-sm text-white/65 hover:translate-x-1 hover:text-[#C8B273]"
                  >
                    Application Process
                  </a>

                  <a
                    href="#fees"
                    className="text-sm text-white/65 hover:translate-x-1 hover:text-[#C8B273]"
                  >
                    Transparent Fees
                  </a>

                  <a
                    href="#faq"
                    className="text-sm text-white/65 hover:translate-x-1 hover:text-[#C8B273]"
                  >
                    Responsible Loans
                  </a>

                  <a
                    href="#contact"
                    className="text-sm text-white/65 hover:translate-x-1 hover:text-[#C8B273]"
                  >
                    Connect with us
                  </a>
                </div>

                <div className="mt-7 rounded-2xl bg-[#C8B273]/10 p-4 ring-1 ring-[#C8B273]/20">
                  <p className="text-sm font-semibold text-[#C8B273]">
                    Supporting the Ummah Through Ethical Loans.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">Contact</h3>

                <div className="mt-5 space-y-4">
                  <div className="flex gap-3">
                    <div className="mt-1 rounded-xl bg-white/10 p-2 text-[#C8B273]">
                      <Mail size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-white/45">Email</p>
                      <a
                        href="mailto:info@iummahloans.com.au"
                        className="text-sm font-semibold text-white/75 hover:text-[#C8B273]"
                      >
                        info@iummahloans.com.au
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 rounded-xl bg-white/10 p-2 text-[#C8B273]">
                      <Clock size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-white/45">Business Hours</p>
                      <p className="text-sm font-semibold text-white/75">
                        Monday – Friday, 9:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#C8B273] px-5 py-3 text-sm font-bold text-[#004B2E] hover:bg-[#DCCB9A]"
                >
                  Connect with us <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 py-7 text-center">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} iUmmah Loans. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/45">
              <span className="text-white/20">•</span>

              <a href="#contact" className="hover:text-[#C8B273]">
                Privacy Policy
              </a>

              <span className="text-white/20">•</span>

              <a href="#contact" className="hover:text-[#C8B273]">
                Terms & Conditions
              </a>

              <span className="text-white/20">•</span>

              <a href="#faq" className="hover:text-[#C8B273]">
                Responsible Loans
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}