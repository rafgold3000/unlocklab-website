"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function About() {
  const howWeTeach = [
    "Live, interactive workshops (not webinars)",
    "Practical exercises you can apply immediately",
    "Real tools, real workflows, real use cases",
    "Sessions led by active builders and founders",
  ];

  const whyWeStarted = [
    "Stay current",
    "Build capability",
    "Learn from practitioners",
    "Grow alongside a motivated peer group",
  ];

  const beliefs = [
    "AI is a force multiplier for human ability",
    "Fluency matters more than titles or technical background",
    "The best way to learn is with others",
    "Capability compounds",
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
              About <span className="gradient-text">Unlock Lab</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                Unlock Lab is a modern learning community built for professionals who want to stay ahead of the curve — not by watching from the sidelines, but by building new capability through hands-on practice.
              </p>
              <p>
                AI is no longer optional. It is becoming the operating system of modern work. The people who adopt it early will have an enduring advantage.
              </p>
              <p className="text-2xl font-semibold text-white">
                We exist to make that advantage accessible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
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
              Our <span className="gradient-text">Philosophy</span>
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-white mb-6">
              Learn by doing. Learn together. Stay current.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Real skill is built through practice, feedback, and repetition — not passive content. Unlock Lab is a place where you experiment, apply, and level up in real time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Teach Section */}
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
              How We <span className="gradient-text">Teach</span>
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
                {howWeTeach.map((item, index) => (
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

      {/* Why We Started This Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Why We Started <span className="gradient-text">This</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 text-center">
              The pace of AI is moving faster than traditional education can keep up with. Professionals need a place to:
            </p>
            <Card hover={false} className="bg-gradient-to-br from-primary/5 to-accent-purple/5">
              <ul className="space-y-4">
                {whyWeStarted.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-300"
                  >
                    <span className="text-accent-cyan mr-3 text-2xl flex-shrink-0">•</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-xl text-white mt-6 pt-6 border-t border-gray-700">
                Unlock Lab was created to fill that gap.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                Unlock Lab is run by builders, startup founders, and technologists working at the frontier of AI. We ship, test, and push the edges — then bring what we learn back to the community.
              </p>
              <p className="text-2xl font-semibold text-white">
                We don't teach theory. We teach what we use every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Believe Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Believe</span>
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
                {beliefs.map((belief, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-300"
                  >
                    <span className="text-primary mr-3 text-2xl flex-shrink-0">•</span>
                    <span>{belief}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* The Invitation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="gradient-text">Invitation</span>
            </h2>
            <p className="text-2xl text-gray-300 leading-relaxed mb-8">
              If you want to unlock new leverage in how you work — you belong here.
            </p>
            <Button size="lg">Join the Community</Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
