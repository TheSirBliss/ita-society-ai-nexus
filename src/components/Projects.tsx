import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projectsData = [
  {
    title: "AI Wizard & Agent Nexus",
    description: "Rapid automation for online presence.",
    details: [
      { label: "Problem", value: "Slow and expensive processes." },
      {
        label: "Solution",
        value: "Generates sites in 5s with autonomous AI agents.",
      },
      { label: "KPI", value: "-65% costs, +22% conversions (retail case)." },
    ],
  },
  {
    title: "Sentinel Cyber Nexus AI",
    description: "Proactive cybersecurity.",
    details: [
      { label: "Problem", value: "Risk of breaches and advanced attacks." },
      {
        label: "Solution",
        value: "Continuous AI monitoring and automated remediation.",
      },
      { label: "KPI", value: "-70% breaches, +30% detection accuracy." },
    ],
  },
  {
    title: "Creamio Business Nexus",
    description: "Data-driven growth analytics.",
    details: [
      { label: "Problem", value: "Slow and uninformed decision-making." },
      {
        label: "Solution",
        value: "AI dashboard for predictive and actionable insights.",
      },
      { label: "KPI", value: "+40% efficiency, +18% revenue." },
    ],
  },
];

const Projects: React.FC = () => (
  <section
    className="py-16 bg-gray-50 px-4"
    aria-labelledby="projects-heading"
    tabIndex={-1}
  >
    <motion.h2
      id="projects-heading"
      className="text-3xl md:text-4xl font-serif text-navy text-center mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-label="ITAsociety's Core Projects"
    >
      Flagship Projects
    </motion.h2>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {projectsData.map((project, idx) => (
        <Card className="border-navy" key={project.title}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${idx}`}>
                <AccordionTrigger aria-label={`Details ${project.title}`}>
                  Explore Details
                </AccordionTrigger>
                <AccordionContent>
                  {project.details.map((detail) => (
                    <p key={detail.label}>
                      <strong>{detail.label}:</strong> {detail.value}
                    </p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>
);

export default Projects;