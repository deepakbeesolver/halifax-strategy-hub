import { Compass, Boxes, ShieldCheck, FileText, Network, Crosshair, Cpu, Scale, GraduationCap, Globe2, type LucideIcon } from "lucide-react";

export type ServiceDetail = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  overview: string;
  scope: string[];
  deliverables: string[];
  engagement: string;
};

export const services: ServiceDetail[] = [
  {
    slug: "strategy-advisory",
    icon: Compass,
    title: "Strategy Advisory",
    desc: "We translate ambition into a decision-ready picture for senior leaders. Strategy work is connected to risk, procurement, capability and governance rather than treated in isolation.",
    overview:
      "Halifax supports senior leaders who need a structured strategic picture: where the organisation sits today, what choices are open to it, and which routes are credible against the constraints that actually apply. Strategy work is grounded in defence context, not generalised management theory.",
    scope: [
      "Strategic posture review and option framing",
      "Capability, risk and procurement alignment",
      "Governance, escalation and decision-rights mapping",
      "Stakeholder and partnership landscape analysis",
    ],
    deliverables: [
      "Decision-ready strategy paper for board or executive review",
      "Option set with trade-offs, dependencies and indicative timelines",
      "Recommended governance and review cadence",
    ],
    engagement:
      "Typically delivered as a defined advisory engagement of four to twelve weeks, with structured working sessions and a documented output suitable for internal scrutiny.",
  },
  {
    slug: "hardware-and-systems-advisory",
    icon: Boxes,
    title: "Hardware & Systems Advisory",
    desc: "Discipline around equipment, supplier review, command-and-control, communications, sensors, sustainment and operational procedures — including sensitive or regulated categories.",
    overview:
      "Hardware and systems decisions carry long tails: cost, sustainment, supplier dependency and operational fit. Halifax provides structured advisory across equipment families, command-and-control, communications and sensor stacks, with an evidence trail suitable for review.",
    scope: [
      "Equipment and systems landscape review",
      "Supplier shortlisting and comparative assessment",
      "Sustainment, training and lifecycle considerations",
      "Interoperability and integration constraints",
    ],
    deliverables: [
      "Systems options assessment with comparative matrix",
      "Risk, sustainment and integration notes",
      "Recommendation memo for procurement or capability decision",
    ],
    engagement:
      "Engagements are scoped to the specific equipment or system family in question, with a clear boundary on regulated or sensitive categories handled in collaboration with the client.",
  },
  {
    slug: "risk-and-threat-assessment",
    icon: ShieldCheck,
    title: "Risk & Threat Assessment",
    desc: "Clear, practical and decision-focused risk understanding. Helping clients see what matters, what to escalate and when further specialist review is required.",
    overview:
      "Halifax produces risk and threat assessments designed to inform a decision rather than fill a register. Outputs identify what matters, what to escalate, and where specialist follow-on review is needed.",
    scope: [
      "Threat and risk landscape framing",
      "Decision-focused risk prioritisation",
      "Escalation criteria and triggers",
      "Identification of specialist review requirements",
    ],
    deliverables: [
      "Concise threat and risk briefing",
      "Prioritised risk picture with escalation guidance",
      "Recommendations for follow-on specialist review",
    ],
    engagement:
      "Short, focused engagements aligned to a specific decision, programme stage or operating context.",
  },
  {
    slug: "procurement-support",
    icon: FileText,
    title: "Procurement Support",
    desc: "Procurement readiness, requirement notes, supplier information summaries, comparison material and structured tender preparation.",
    overview:
      "Procurement decisions in defence environments must be defensible. Halifax supports clients through requirement clarification, supplier engagement structure, evaluation material and decision logs that withstand internal and external scrutiny.",
    scope: [
      "Requirement definition and statement of need",
      "Supplier information gathering and structured summaries",
      "Evaluation criteria, scoring frameworks and decision logs",
      "Tender pack preparation and reviewer briefings",
    ],
    deliverables: [
      "Requirement and evaluation documentation",
      "Supplier comparison material",
      "Decision log suitable for audit or review",
    ],
    engagement:
      "Scoped to a defined procurement window, with deliverables aligned to the client's internal governance cycle.",
  },
  {
    slug: "capability-development",
    icon: Network,
    title: "Capability Development",
    desc: "Identifying gaps, clarifying dependencies and developing practical pathways for improvement — where organisations know more is needed but the route is unclear.",
    overview:
      "Capability development engagements help organisations move from a recognised need to a credible pathway. The work clarifies gaps, dependencies and the sequence of decisions required to make progress.",
    scope: [
      "Capability gap analysis",
      "Dependency mapping across people, equipment and process",
      "Pathway design with phased milestones",
      "Governance and review alignment",
    ],
    deliverables: [
      "Capability gap and dependency summary",
      "Phased development pathway",
      "Recommended governance and assurance touchpoints",
    ],
    engagement:
      "Typically delivered as a defined engagement followed by an optional review cadence as the pathway is executed.",
  },
  {
    slug: "cyber-and-intelligence",
    icon: Crosshair,
    title: "Cyber & Intelligence",
    desc: "Information-handling, governance, decision boundaries and proportionate engagement in sensitive technical environments.",
    overview:
      "Halifax advises on governance, information-handling and decision boundaries in sensitive technical environments. The work is proportionate, evidence-led and tightly scoped to the client's operating context.",
    scope: [
      "Information-handling and classification governance",
      "Decision boundaries in sensitive technical activity",
      "Proportionate engagement frameworks",
      "Liaison with specialist technical providers as required",
    ],
    deliverables: [
      "Governance and information-handling note",
      "Decision boundary and escalation framework",
      "Recommendations for specialist technical engagement",
    ],
    engagement:
      "Engagements are structured around the client's existing technical and security relationships, with clear boundaries on regulated activity.",
  },
  {
    slug: "training-and-simulation",
    icon: GraduationCap,
    title: "Training & Simulation",
    desc: "Defining training equipment requirements, simulation needs and the operational context that supports adoption and sustainment.",
    overview:
      "Training and simulation investments succeed when the operational context is well understood. Halifax helps clients define what is actually needed, how it will be sustained, and how adoption will be supported.",
    scope: [
      "Training requirement definition",
      "Simulation scope and fidelity considerations",
      "Adoption, sustainment and instructor pathway",
      "Procurement alignment",
    ],
    deliverables: [
      "Training and simulation requirement document",
      "Adoption and sustainment plan",
      "Procurement-ready supporting material",
    ],
    engagement:
      "Engagements align to a defined training capability or programme milestone.",
  },
  {
    slug: "policy-and-compliance",
    icon: Scale,
    title: "Policy & Compliance",
    desc: "Structured policy, controls and documentation. Compliance treated as a foundation for defence-facing work, not an afterthought.",
    overview:
      "Halifax treats policy and compliance as foundational. Engagements produce structured documentation, controls and review cadence that support credible defence-facing activity.",
    scope: [
      "Policy framework review and design",
      "Controls definition and documentation",
      "Compliance mapping against relevant obligations",
      "Internal review cadence",
    ],
    deliverables: [
      "Policy and controls documentation set",
      "Compliance mapping summary",
      "Recommended review and assurance cadence",
    ],
    engagement:
      "Engagements are scoped to a defined policy area or regulatory context.",
  },
  {
    slug: "technology-integration",
    icon: Cpu,
    title: "Technology Integration",
    desc: "Connecting systems, procedures and people across complex operational stacks — including where new technologies meet existing constraints.",
    overview:
      "Technology integration work focuses on the joins: where new systems meet existing procedures, where people sit in the operational stack, and where constraints determine what is realistic.",
    scope: [
      "Integration landscape and dependency review",
      "Operational procedure alignment",
      "People and training implications",
      "Phased integration pathway",
    ],
    deliverables: [
      "Integration assessment and dependency map",
      "Phased integration plan",
      "Operational and training alignment notes",
    ],
    engagement:
      "Engagements are scoped to a defined integration challenge with clear technical and operational boundaries.",
  },
  {
    slug: "international-partnerships",
    icon: Globe2,
    title: "International Partnerships",
    desc: "Structured cross-border engagement: framing discussions, documenting actions, respecting information boundaries and identifying regulated activity early.",
    overview:
      "International partnership work is highly sensitive to information boundaries and regulated activity. Halifax provides structured framing, documentation and early identification of regulated touchpoints.",
    scope: [
      "Engagement framing and objective setting",
      "Information boundary and disclosure mapping",
      "Identification of regulated activity",
      "Meeting and action documentation",
    ],
    deliverables: [
      "Engagement framework and objective set",
      "Information boundary and regulated-activity note",
      "Structured meeting and action records",
    ],
    engagement:
      "Engagements are scoped to a defined partnership, dialogue or programme window.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
