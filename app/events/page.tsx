"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Events() {
  const offerings = [
    {
      title: "Live workshops",
      description: "learn tools, techniques, and workflows",
    },
    {
      title: "Skill sprints",
      description: "focused deep dives into a single capability",
    },
    {
      title: "Community sessions",
      description: "peer learning, feedback, and collaboration",
    },
    {
      title: "Guest builders",
      description: "practitioners sharing what they're actually shipping",
    },
  ];

  const differentiators = [
    "Built around action, not theory",
    "You learn with others, not alone",
    "Led by people building at the frontier",
    "Immediate application to your real work",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent-purple/10 to-accent-cyan/10 opacity-50" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Events</span> & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Hands-on learning designed for real-world impact. Our sessions are built for professionals who want to upgrade capability, not just consume information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Offer</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <h3 className="text-xl font-bold mb-2 text-white">{offering.title}</h3>
                  <p className="text-gray-400">{offering.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luma Events Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us for our next live sessions
            </p>
          </motion.div>

          {/* Luma Event Embed */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden border border-gray-800 bg-background">
                <iframe
                  src="https://lu.ma/embed/event/00wvf46f"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  style={{ border: 'none' }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://lu.ma/00wvf46f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  View event details on Luma →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Our Events Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Makes Our Events <span className="gradient-text">Different</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card hover={false} className="bg-gradient-to-br from-primary/5 to-accent-purple/5">
              <ul className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-300"
                  >
                    <span className="text-primary mr-3 text-2xl flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Who Attends */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who <span className="gradient-text">Attends</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professionals, consultants, analysts, strategists, creatives, founders, operators, and early‑stage builders looking to sharpen their edge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Attend or Teach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Attend or <span className="gradient-text">Teach</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-300">
                Want to learn? Join an upcoming session.
              </p>
              <p className="text-xl text-gray-300">
                Have something to teach? Apply to lead a workshop.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">See Upcoming Events</Button>
              <Button variant="outline" size="lg">Teach a Class</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
