import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import type { ComponentType, ReactNode, SVGProps } from "react";

type Skill = { name: string; icon?: ComponentType<SVGProps<SVGSVGElement>> };
type Hackathon = {
  title: string; dates: string; location: string; description: string;
  image: string; links: { title: string; href: string; icon: ReactNode }[];
};

export const DATA = {
  name: "Toyanath Pandey",
  initials: "TP",
  url: "https://toyanathpandey.com.np",
  location: "Germany",
  locationLink: "https://www.google.com/maps/place/Germany",
  description: "Software engineer focused on Python backend development, research data pipelines, and systems integration.",
  summary: "I build software that connects systems and makes data useful. At Hochschule Koblenz, I worked on genomic data pipelines; at Bosch Engineering, I developed software for automotive diagnostics and automation. I hold an M.Sc. in Computer and Systems Engineering from TU Ilmenau, where my thesis explored mapping stream-processing pipelines between development and execution frameworks. English C1; German B2 (actively improving). Open to relocation within Germany.",
  avatarUrl: "/portrait.jpg",
  ogImage: "/portrait.jpg",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    certifications: { order: 4, enabled: true, heading: "Certifications & training" },
    skills: { order: 5, enabled: true, heading: "Skills" },
    projects: {
      order: 6, enabled: true, label: "Selected work",
      heading: "Projects you can explore",
      text: "Public repositories demonstrating data engineering, backend integration, cloud infrastructure, and systems programming.",
    },
    hackathons: { order: 7, enabled: false, label: "", heading: "", text: "" },
    photos: { order: 8, enabled: false, heading: "" },
    contact: {
      order: 9, enabled: true, label: "Contact", heading: "Let's connect",
      text: "Interested in backend, data engineering, or research software? Connect with me on LinkedIn or explore my work on GitHub.",
    },
  },
  photos: [] as { src: string; alt: string }[],
  skills: [
    { name: "Python", icon: Python }, { name: "C++" }, { name: "SQL" },
    { name: "FastAPI" }, { name: "Flask" }, { name: "REST & GraphQL" },
    { name: "Apache Flink" }, { name: "PyFlink" }, { name: "Kafka" },
    { name: "PostgreSQL", icon: Postgresql }, { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes }, { name: "Linux" },
    { name: "AWS" }, { name: "Terraform" }, { name: "CI/CD" },
  ] as Skill[],
  navbar: [{ href: "/", icon: House, label: "Home" }],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: { name: "GitHub", url: "https://github.com/Toya62", icon: Icons.github, navbar: true },
      LinkedIn: { name: "LinkedIn", url: "https://www.linkedin.com/in/pandeytoya", icon: Icons.linkedin, navbar: true },
    },
  },
  work: [
    {
      company: "Hochschule Koblenz", title: "Research Assistant · Backend & APIs",
      href: "https://www.hs-koblenz.de/", badges: [], location: "Remagen, Germany", logoUrl: "",
      start: "Oct 2025", end: "Oct 2026",
      description: "Developed Python services to retrieve research data from REST and GraphQL interfaces, including Ensembl and NCBI. Built data validation and transformation pipelines using Nextflow and Docker and integrated automated tests with GitLab CI.",
    },
    {
      company: "Bosch Engineering", title: "Software Engineering Working Student",
      href: "https://www.bosch-engineering.com/", badges: [], location: "Abstatt, Germany", logoUrl: "",
      start: "Nov 2023", end: "Aug 2024",
      description: "Extended a diagnostic trouble code log interpreter and developed integration interfaces. Integrated a Raspberry Pi video capture unit via REST and supported test automation and log analysis with Jenkins and Splunk.",
    },
    {
      company: "Bosch Engineering", title: "Software Engineering Intern",
      href: "https://www.bosch-engineering.com/", badges: [], location: "Abstatt, Germany", logoUrl: "",
      start: "May 2023", end: "Oct 2023",
      description: "Built Python tools to automate Jira ticket creation and cloning through its REST API and created Python interfaces for internal diagnostic APIs.",
    },
    {
      company: "REMONDIS Group", title: "Software Development Working Student",
      href: "https://www.remondis.com/", badges: [], location: "Ilmenau, Germany", logoUrl: "",
      start: "Jul 2022", end: "May 2023",
      description: "Developed and debugged desktop applications with C++, Qt and Python on Linux, using the GNU toolchain and contributing to testing and static analysis.",
    },
    {
      company: "CloudSewa", title: "Security Analyst",
      href: "https://cloudsewa.com/", badges: [], location: "Kathmandu, Nepal", logoUrl: "",
      start: "Jan 2021", end: "Jan 2022",
      description: "Performed web and mobile security assessments using OWASP guidance, analyzed logs with the ELK stack, and configured firewall and VPN policies.",
    },
  ],
  education: [
    { school: "Technische Universität Ilmenau", href: "https://www.tu-ilmenau.de/", degree: "M.Sc. Computer & Systems Engineering · Thesis on stream-processing pipeline mapping", logoUrl: "", start: "2022", end: "2025" },
    { school: "Lovely Professional University", href: "https://www.lpu.in/", degree: "B.Tech Computer Science and Engineering", logoUrl: "", start: "2017", end: "2021" },
  ],
  certifications: [
    { name: "AWS Certified Security – Specialty", detail: "Active" },
    { name: "Certified Ethical Hacker (CEH)", detail: "Expired in 2023" },
    { name: "Cybersecurity IT Fundamentals Specialist", detail: "Listed on LinkedIn" },
    { name: "Cyber@ANZ Program", detail: "Listed on LinkedIn" },
    { name: "Cybersecurity Roles, Processes & Operating System Security", detail: "Listed on LinkedIn" },
    { name: "Cybersecurity Compliance Framework & System Administration", detail: "Listed on LinkedIn" },
    { name: "Data science", detail: "Listed on LinkedIn" },
  ],
  projects: [
    {
      title: "EnsOrthoPOST", href: "https://github.com/Toya62/EnsOrthoPOST", dates: "Research data pipeline", active: true,
      description: "Builds multi-species gene-training datasets from HGNC and Ensembl data, producing sequence and annotation files.",
      technologies: ["Python", "REST APIs", "Bioinformatics"],
      links: [{ type: "Source", href: "https://github.com/Toya62/EnsOrthoPOST", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Air quality data pipeline", href: "https://github.com/Toya62/data-streaming-pipeline", dates: "Streaming data engineering", active: true,
      description: "A pipeline that fetches OpenAQ measurements and processes them with Kafka and Flink, including air quality index calculations.",
      technologies: ["Python", "Kafka", "Apache Flink", "OpenAQ"],
      links: [{ type: "Source", href: "https://github.com/Toya62/data-streaming-pipeline", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Codex Magna", href: "https://github.com/Toya62/codex-magna", dates: "Backend architecture · early-stage", active: true,
      description: "An early-stage modular NestJS backend with a page-creation API, PostgreSQL JSONB storage, validation and event-driven communication.",
      technologies: ["TypeScript", "NestJS", "PostgreSQL", "TypeORM"],
      links: [{ type: "Source", href: "https://github.com/Toya62/codex-magna", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Weather stream pipeline", href: "https://github.com/Toya62/pyflink-weather-stream-pipeline", dates: "Stream processing", active: true,
      description: "Processes weather telemetry with stateful tracking and incremental tumbling-window statistics using the PyFlink DataStream API.",
      technologies: ["Python", "PyFlink", "Streaming"],
      links: [{ type: "Source", href: "https://github.com/Toya62/pyflink-weather-stream-pipeline", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "CAN hardware abstraction", href: "https://github.com/Toya62/can-hardware-abstraction-layer", dates: "Systems programming", active: true,
      description: "A common C++ interface for different CAN controllers, with lifecycle validation, simulated callbacks and unit tests.",
      technologies: ["C++17", "CMake", "Testing"],
      links: [{ type: "Source", href: "https://github.com/Toya62/can-hardware-abstraction-layer", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "EU procurement harvester", href: "https://github.com/Toya62/iris-ted-harvester", dates: "Data integration", active: true,
      description: "Retrieves public tender notices from the TED API, deduplicates records and loads geographic data into PostgreSQL/PostGIS.",
      technologies: ["Python", "PostGIS", "ETL"],
      links: [{ type: "Source", href: "https://github.com/Toya62/iris-ted-harvester", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Secure data orchestrator", href: "https://github.com/Toya62/secure-data-orchestrator-aws", dates: "Cloud engineering", active: true,
      description: "An AWS project for event-driven file ingestion, validation and processing, provisioned with Terraform and supported by unit tests.",
      technologies: ["AWS", "Terraform", "Python"],
      links: [{ type: "Source", href: "https://github.com/Toya62/secure-data-orchestrator-aws", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Kubernetes platform lab", href: "https://github.com/Toya62/k8s-platform-lab", dates: "Local learning lab", active: true,
      description: "A local learning lab using Helm, Kubernetes Jobs and LocalStack, with an observability stack and synthetic telemetry.",
      technologies: ["Kubernetes", "Helm", "Observability"],
      links: [{ type: "Source", href: "https://github.com/Toya62/k8s-platform-lab", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
    {
      title: "Ensembl sequence fetcher", href: "https://github.com/Toya62/ensembl-brca1-sequence-fetcher", dates: "Research data utility", active: true,
      description: "A Python utility that retrieves gene metadata and genomic, transcript and protein sequences from the Ensembl REST API.",
      technologies: ["Python", "Ensembl REST API", "FASTA"],
      links: [{ type: "Source", href: "https://github.com/Toya62/ensembl-brca1-sequence-fetcher", icon: <Icons.github className="size-3" /> }], image: "", video: "",
    },
  ],
  hackathons: [] as Hackathon[],
};
