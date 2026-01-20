"use client";

import { useState, useRef } from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"experience" | "projects" | "skills" | "education" | null>("experience");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: "experience" | "projects" | "skills" | "education") => {
    if (activeTab === tab) {
      setActiveTab(null);
    } else {
      setActiveTab(tab);
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  };

  return (
    <>
      <div className="grid-background" aria-hidden="true" />
      <div className="mountains" aria-hidden="true" />
      <main className="min-h-screen bg-transparent main-content">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Loading ...</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jacob Wilber<span className="text-primary">.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              Interested in building agentic workflows, LLM applications, and robotics/embedded systems.
              Previous: AI engineering @BlueArc in Redwood City. CS + EE at University of Delaware.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://github.com/jacobwilbe"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jacobwilber/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-secondary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <Link
                href="mailto:jacobwilber4@gmail.com"
                className="flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </Link>
            </div>
          </section>

          {/* Currently / Looking For */}
          <section className="mb-20 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-sm text-primary font-medium mb-2">CURRENTLY</h2>
              <p className="text-foreground">
                Final year at University of Delaware, building an autonomous multi-floor delivery robot with ROS2 and LiDAR SLAM.
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-lg">
              <h2 className="text-sm text-primary font-medium mb-2">LOOKING FOR</h2>
              <p className="text-foreground">
                Full-time software engineering roles starting May 2026. Interested in backend, AI engineering, or ML infrastructure.
              </p>
            </div>
          </section>

          {/* Tab Buttons */}
          <section className="mb-12">
            <div className="flex justify-center gap-8 md:gap-12">
              <button
                type="button"
                onClick={() => handleTabClick("experience")}
                className={`px-2 py-1 text-lg font-medium bg-transparent cursor-pointer transition-all ${
                  activeTab === "experience"
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:text-muted-foreground"
                }`}
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => handleTabClick("projects")}
                className={`px-2 py-1 text-lg font-medium bg-transparent cursor-pointer transition-all ${
                  activeTab === "projects"
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:text-muted-foreground"
                }`}
              >
                Projects
              </button>
              <button
                type="button"
                onClick={() => handleTabClick("skills")}
                className={`px-2 py-1 text-lg font-medium bg-transparent cursor-pointer transition-all ${
                  activeTab === "skills"
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:text-muted-foreground"
                }`}
              >
                Skills
              </button>
              <button
                type="button"
                onClick={() => handleTabClick("education")}
                className={`px-2 py-1 text-lg font-medium bg-transparent cursor-pointer transition-all ${
                  activeTab === "education"
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:text-muted-foreground"
                }`}
              >
                Education
              </button>
            </div>
          </section>

          {/* Tab Content */}
          <div ref={contentRef}>

          {/* Experience Content */}
          {activeTab === "experience" && (
            <section className="mb-20">
              <div className="space-y-8">
                <ExperienceItem
                  title="Software Engineer Intern, AI & Graph"
                  company="BlueArc"
                  location="Redwood City, CA"
                  period="June 2025 - August 2025"
                  points={[
                    "Built LLM-driven scraping workflows using Python, ScrapingBee, and GCP, ingesting 10k+ webpages",
                    "Processed multi-million row datasets using BigQuery, wrote structured data into PostgreSQL knowledge-graph tables",
                    "Improved extraction accuracy by 22% through unit tests and parallel batch E2E testing",
                    "Implemented custom Python permissions decorator and role-based access controls"
                  ]}
                />
                <ExperienceItem
                  title="Software Engineering Fellow"
                  company="HeadStarter AI"
                  location="Newark, DE"
                  period="July 2024 - September 2024"
                  points={[
                    "Engineered 5+ AI apps in 5 weeks using NextJS, OpenAI, Pinecone, and Stripe, launched product with 1000 users",
                    "Led projects from design to deployment while mentoring 3+ fellows in Agile/Scrum environment",
                    "Mentored by engineers from Amazon, Google, and YC founders"
                  ]}
                />
                <ExperienceItem
                  title="Undergraduate Research Assistant"
                  company="University of Delaware"
                  location="Newark, DE"
                  period="September 2024 - December 2024"
                  points={[
                    "Studied large-scale generative modeling including diffusion models (RFdiffusion) and vision architectures (AlexNet, ResNet)",
                    "Developed medical RAG application using real EHR data for clinical history retrieval and summarization"
                  ]}
                />
                <ExperienceItem
                  title="Undergraduate Teaching Assistant"
                  company="University of Delaware"
                  location="Newark, DE"
                  period="August 2024 - December 2024"
                  points={[
                    "Teaching assistant for CISC 106, Introductory to Programming with Python",
                    "Facilitated weekly lab sessions, guiding students through hands-on Python programming exercises",
                    "Held regular office hours to provide one-on-one support and clarify programming concepts",
                    "Assisted in grading assignments and exams, offering detailed feedback to enhance students' coding skills"
                  ]}
                />
                <ExperienceItem
                  title="CNC Machine Operator"
                  company="Ancient Art Stone"
                  location="Milford, DE"
                  period="June 2019 - August 2023"
                  points={[
                    "Operated and programmed a Prussiani 5-axis saw using WCam2K and AutoCAD",
                    "Managed saws feed and spin rate to achieve 4% decrease in runtime",
                    "Oversaw fabrication of over $20,000 worth of granite countertops daily",
                    "Mentored and trained an employee to operate the Prussiani CNC"
                  ]}
                />
              </div>
            </section>
          )}

          {/* Projects Content */}
          {activeTab === "projects" && (
            <section className="mb-20">
              <div className="grid gap-4">
                <ProjectItem
                  title="Autonomous Multi-Floor Delivery Robot"
                  tech="ROS2, Python, Gazebo, Nav2, Docker"
                  description="DoorDash-style delivery robot for multi-floor buildings with LiDAR-based SLAM, Nav2 navigation stack, and behavior trees for autonomous pickup/dropoff."
                />
                <ProjectItem
                  title="Arxchive"
                  tech="Python, Snowflake, Mistral, Streamlit, Langchain"
                  description="Cloud RAG application for conversing with arXiv research papers. Uses Snowflake Cortex for similarity search and Mistral LLM for natural language processing."
                />
                <ProjectItem
                  title="Feast Finder"
                  tech="TypeScript, React, Firebase, Gemini, Jotai"
                  description="Scan grocery items using Gemini Vision API to detect ingredients and generate recipe suggestions. Integrated Google Maps Places API for restaurant recommendations."
                />
                <ProjectItem
                  title="RateMyProfessor RAG Chatbot"
                  tech="NextJS, PineconeDB, OpenAI, Python"
                  description="Chatbot for UD CS faculty using web scraping and RAG. Vector database with Pinecone for efficient professor information retrieval."
                />
                <ProjectItem
                  title="Flashcard SaaS"
                  tech="NextJS, Clerk, Stripe, OpenAI, Firebase"
                  description="AI-powered flashcard generation from text and PDF. Integrated Clerk auth, Firebase storage, and Stripe-based pricing tiers."
                />
              </div>
            </section>
          )}

          {/* Skills Content */}
          {activeTab === "skills" && (
            <section className="mb-20">
              <div className="space-y-4">
                <SkillRow label="Languages" skills="Python, TypeScript, JavaScript, Java, C/C++, SQL" />
                <SkillRow label="Tools" skills="AWS, GCP, Docker, BigQuery, PostgreSQL, Firebase, Pinecone, Git" />
                <SkillRow label="Libraries" skills="React, Next.js, PyTorch, pandas, NumPy, ROS2, OpenAI, CUDA" />
              </div>
            </section>
          )}

          {/* Education Content */}
          {activeTab === "education" && (
            <section className="mb-20">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="font-bold">University of Delaware</h3>
                  <span className="text-muted-foreground text-sm">Aug 2022 - May 2026</span>
                </div>
                <p className="text-muted-foreground mb-2">
                  B.S. Computer Science, Minor in Electrical Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  GPA: 3.8/4.0 · Dean&apos;s List Fall 2022 - Spring 2025
                </p>
              </div>
            </section>
          )}
          </div>
        </div>
      </main>
    </>
  );
}

function ExperienceItem({
  title,
  company,
  location,
  period,
  points,
}: {
  title: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}) {
  return (
    <div className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
        <h3 className="font-bold">{title}</h3>
        <span className="text-muted-foreground text-sm">{period}</span>
      </div>
      <p className="text-primary mb-3">
        {company} · {location}
      </p>
      <ul className="space-y-1">
        {points.map((point, index) => (
          <li key={index} className="text-muted-foreground text-sm flex gap-2">
            <span className="text-primary">-</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectItem({
  title,
  tech,
  description,
}: {
  title: string;
  tech: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-card border border-border rounded-lg">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-primary mb-2">{tech}</p>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

function SkillRow({ label, skills }: { label: string; skills: string }) {
  return (
    <div className="flex flex-col md:flex-row md:gap-4">
      <span className="text-primary font-medium w-24 shrink-0">{label}</span>
      <span className="text-muted-foreground">{skills}</span>
    </div>
  );
}
