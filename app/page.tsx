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
              Learn AI skills you can leverage anywhere.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              AI is reshaping how the world works. Everyone in the workforce needs to learn how to leverage new capabilities and grow their knowledge - now.
              <br /><br />
              Unlock Lab helps professionals turn AI from a curiosity into a capability - building fluency, confidence, and real leverage in how you work.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="https://stingy-eater-31d.notion.site/2999b18fa25d808fbeaae562428db4eb?pvs=105" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Join the Community</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg">See Upcoming Events</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              What is <span className="gradient-text">Unlock Lab?</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <p>
                Unlock Lab is a modern learning community built for professionals who want to stay ahead of the curve - not by watching from the sidelines, but by building new capability through hands-on practice.
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
              Run by builders, founders, and technologists working at the edge of AI - we build first and teach from experience, not theory. Learn from people who move at the pace of change.
            </p>
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
              <Link href="https://stingy-eater-31d.notion.site/2999b18fa25d808fbeaae562428db4eb?pvs=105" target="_blank" rel="noopener noreferrer">
                <Button size="lg">Join the Community</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="lg">Attend an Event</Button>
              </Link>
              <Link href="https://stingy-eater-31d.notion.site/2939b18fa25d8009bd29f28f2509378c?pvs=105" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">Teach a Class</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
