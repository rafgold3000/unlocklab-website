"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Link from "next/link";

export default function Home() {
  const benefits = [
    "Master AI tools that 10x your productivity",
    "Automate repetitive tasks and workflows",
    "Reclaim time for your highest‑value work",
    "Stay current as the tech evolves",
    "Turn curiosity into capability",
  ];

  const audience = [
    "Solo professionals & consultants",
    "Creators, analysts, strategists, operators",
    "Knowledge workers and emerging builders",
    "Teams who prefer learning by doing",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-cyan/20 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="gradient-text">Unlock Your Superpowers</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-3xl mx-auto font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn skills you can leverage anywhere.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI is reshaping how the world works. The people who know how to use it aren't just keeping up — they're pulling ahead.
              <br /><br />
              Unlock Lab helps professionals turn AI from a curiosity into a capability — building fluency, confidence, and real leverage in how you work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg">Join the Community</Button>
              <Link href="/events">
                <Button variant="outline" size="lg">See Upcoming Workshops</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What We <span className="gradient-text">Do</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-white">Learn Fast. Build Faster.</h3>
                <p className="text-gray-400 leading-relaxed">
                  Learn how to use AI the way top builders and professionals use it — to produce more, think bigger, and move faster.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold mb-3 text-white">A Community for Builders, Doers & Innovators.</h3>
                <p className="text-gray-400 leading-relaxed">
                  Join classes, workshops, and events designed for people who learn by doing and grow by sharing.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
              Why It <span className="gradient-text">Matters</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Not learning AI today is like ignoring electricity in the industrial revolution. The gap between those who use it and those who don't is widening fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What You'll Gain Section */}
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
              What You'll <span className="gradient-text">Gain</span>
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
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-300"
                  >
                    <span className="text-primary mr-3 text-2xl flex-shrink-0">✓</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Unlock Lab Section */}
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
              Why <span className="gradient-text">Unlock Lab</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Run by builders, founders, and technologists working at the edge of AI — we build first and teach from experience, not theory. Learn from people who move at the pace of change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section */}
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
              Who This Is <span className="gradient-text">For</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card hover={false} className="bg-gradient-to-br from-primary/5 to-accent-purple/5 mb-8">
              <ul className="space-y-4 mb-6">
                {audience.map((group, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start text-lg text-gray-300"
                  >
                    <span className="text-accent-cyan mr-3 text-2xl flex-shrink-0">•</span>
                    <span>{group}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-xl text-gray-300 pt-6 border-t border-gray-700 leading-relaxed">
                If you want to stay relevant, earn more leverage, and future‑proof your craft — this is for you.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              It's time to level up.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
              <Button size="lg">Join the Community</Button>
              <Link href="/events">
                <Button variant="outline" size="lg">Attend an Event</Button>
              </Link>
              <Button variant="secondary" size="lg">Teach a Class</Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
