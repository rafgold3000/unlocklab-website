"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";
import Link from "next/link";

interface Event {
  title: string;
  date: Date;
  embedUrl?: string;
  detailsUrl?: string;
  description?: string;
  placeholder?: boolean;
}

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

  // Define events with their dates
  const events = [
    {
      title: "Building AI skills that scale",
      embedUrl: "https://luma.com/embed/event/evt-7DUMFkEmlT5H3e0/simple",
      detailsUrl: "https://lu.ma/00wvf46f",
      date: new Date("2025-01-30"),
    },
    {
      title: "Intro to Claude Code for Non-Technical Knowledge Workers",
      description: `Don't let the name fool you - Anthropic's Claude Code isn't just for coding. It's an all-purpose AI agent that works alongside you to solve problems, complete tasks, and unlock capabilities you didn't know you had.

Join us for a practical, hands-on 2-hour workshop where we'll show real-world examples of how we use Claude Code to unlock superpowers, and how anyone - especially non-coders - can start using it now, no technical skills required.

Bring your laptop and your curiosity - we'll explore the future of knowledge work, walk through the setup of Claude Code, go through practical use cases, eat bagels, and drink coffee.

Perfect For Professionals who:
• See the AI hype and want to find the best ways to apply it to their work
• Work with the chatbots, but want something more powerful and practical
• Would like to meet a community of people building up their AI chops to work smarter

Schedule:
9:00 – 9:15 AM | Arrival & Breakfast
9:15 – 9:35 AM | Short Presentations: AI & the Future of Knowledge Work
9:35 – 9:50 AM | Workshop Setup: Getting Started with Claude Code
9:50 – 11:00 AM | Hands-On Workshop: Step-by-Step Use-Cases

What to Bring:
Your laptop 💻 | Claude login 🔑 | Curiosity

About The Hosts:
SkWx is an AI-first advisory and innovation lab redefining what's possible in professional services.
Fidelic is pioneering AI consciousness technology, applying advanced data science to shape the next generation of intelligent systems.`,
      date: new Date("2025-12-03T12:00:00"),
      placeholder: true,
    },
    {
      title: "Build Your Own Assistant with Claude Code",
      description: `Ready to take your AI skills to the next level? Join us for an intensive hands-on workshop where you'll learn to automate workflows and create your own personal AI assistant using Claude Code.

We'll explore how to connect Claude Code to your tools, automate repetitive tasks, and build an assistant that functions like your own personal helper - understanding your workflows, accessing your systems, and executing tasks on your behalf.

This isn't just theory - you'll leave the class with a working assistant tailored to your needs.

What You'll Learn:
• Setting up Claude Code for advanced automation
• Connecting to your tools and APIs
• Building custom workflows and automations
• Creating an assistant that works the way you do

What to Bring:
Your laptop 💻 | Claude Code access 🔑 | Ideas for tasks you want to automate

Perfect for professionals who want to move beyond basic AI usage and create powerful, personalized automation solutions.`,
      date: new Date("2025-12-10T12:00:00"),
      placeholder: true,
    },
  ];

  // Separate events into upcoming and past
  const now = new Date();
  const upcomingEvents = events.filter(event => event.date >= now);
  const pastEvents = events.filter(event => event.date < now).sort((a, b) => b.date.getTime() - a.date.getTime());

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

      {/* Upcoming Events Section */}
      {upcomingEvents.length > 0 && (
        <section id="upcoming-events" className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
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

            {/* Render Upcoming Events */}
            <div className="space-y-12">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {event.placeholder ? (
                      // Placeholder card for events without Luma
                      <Card hover={false} className="bg-gradient-to-br from-primary/5 to-accent-purple/5">
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                          <p className="text-lg text-primary font-semibold">
                            {event.date.toLocaleDateString('en-US', {
                              weekday: 'long',
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                          <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                            {event.description}
                          </div>
                          <div className="pt-4">
                            <p className="text-accent-cyan font-semibold">
                              Registration details coming soon!
                            </p>
                          </div>
                        </div>
                      </Card>
                    ) : (
                      // Luma embed for events with registration
                      <>
                        <div className="rounded-xl overflow-hidden border border-gray-800 bg-background">
                          <iframe
                            src={event.embedUrl}
                            width="100%"
                            height="600"
                            frameBorder="0"
                            style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                            allow="fullscreen; payment"
                            aria-hidden="false"
                            tabIndex={0}
                          ></iframe>
                        </div>
                        <div className="mt-6 text-center">
                          <a
                            href={event.detailsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-light transition-colors"
                          >
                            View event details on Luma →
                          </a>
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Past <span className="gradient-text">Events</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Check out our previous sessions
              </p>
            </motion.div>

            {/* Render Past Events */}
            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <div key={index} className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-xl overflow-hidden border border-gray-800 bg-background opacity-80">
                      <iframe
                        src={event.embedUrl}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        style={{ border: '1px solid #bfcbda88', borderRadius: '4px' }}
                        allow="fullscreen; payment"
                        aria-hidden="false"
                        tabIndex={0}
                      ></iframe>
                    </div>
                    <div className="mt-6 text-center">
                      <a
                        href={event.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors"
                      >
                        View event details on Luma →
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
              <Link href="#upcoming-events">
                <Button size="lg">See Upcoming Events</Button>
              </Link>
              <Link href="https://stingy-eater-31d.notion.site/2939b18fa25d8009bd29f28f2509378c?pvs=105" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">Teach a Class</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
