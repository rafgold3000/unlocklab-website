"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge AI technologies and encourage creative problem-solving.",
      icon: "💡",
    },
    {
      title: "Community",
      description: "We believe in the power of collaboration and shared learning experiences.",
      icon: "🌟",
    },
    {
      title: "Accessibility",
      description: "AI education should be accessible to everyone, regardless of background.",
      icon: "🚀",
    },
    {
      title: "Excellence",
      description: "We maintain high standards in our educational content and community engagement.",
      icon: "🏆",
    },
  ];

  const team = [
    {
      name: "Our Founders",
      role: "Passionate AI Enthusiasts",
      description: "A group of industry professionals and educators dedicated to democratizing AI education.",
    },
    {
      name: "Expert Instructors",
      role: "Industry Leaders",
      description: "Experienced practitioners from leading tech companies and research institutions.",
    },
    {
      name: "Community Managers",
      role: "Your Support Team",
      description: "Dedicated individuals ensuring you have the best learning experience.",
    },
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
              About <span className="gradient-text">UnlockLab</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              We're on a mission to make AI education accessible, engaging, and transformative for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card hover={false} className="bg-gradient-to-br from-primary/10 to-accent-purple/10 border-primary/30">
              <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                At UnlockLab, we believe that artificial intelligence is not just the future—it's the present.
                Our mission is to empower individuals from all walks of life to understand, build, and innovate
                with AI technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We've created a vibrant community where learning happens through collaboration,
                hands-on projects, and real-world applications. Whether you're taking your first steps
                in AI or looking to advance your expertise, UnlockLab is your launchpad.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The people behind UnlockLab's success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-6xl">👥</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400">{member.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card hover={false}>
              <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  UnlockLab was born from a simple observation: AI education was either too theoretical
                  or too intimidating for most people to get started. We wanted to change that.
                </p>
                <p>
                  What started as small study groups has grown into a thriving community of hundreds
                  of members, all united by curiosity and passion for artificial intelligence. We've
                  hosted dozens of workshops, built countless projects, and helped numerous individuals
                  launch their careers in AI.
                </p>
                <p>
                  Today, UnlockLab continues to evolve, always staying at the forefront of AI education
                  while maintaining our commitment to accessibility and community-driven learning.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
