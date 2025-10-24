"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Introduction to Machine Learning",
      date: "November 5, 2025",
      time: "6:00 PM - 8:00 PM EST",
      type: "Workshop",
      description: "Learn the fundamentals of machine learning and build your first ML model.",
      spots: "15 spots left",
    },
    {
      title: "Deep Dive: Neural Networks",
      date: "November 12, 2025",
      time: "7:00 PM - 9:00 PM EST",
      type: "Technical Session",
      description: "Explore the architecture and mathematics behind neural networks.",
      spots: "20 spots left",
    },
    {
      title: "AI Ethics Panel Discussion",
      date: "November 18, 2025",
      time: "5:00 PM - 7:00 PM EST",
      type: "Panel",
      description: "Join industry experts discussing the ethical implications of AI.",
      spots: "50 spots left",
    },
    {
      title: "Hackathon: Build with AI",
      date: "November 25-26, 2025",
      time: "All Day",
      type: "Hackathon",
      description: "48-hour hackathon to build innovative AI applications. Prizes included!",
      spots: "30 spots left",
    },
  ];

  const pastEvents = [
    {
      title: "Computer Vision Bootcamp",
      date: "October 2025",
      attendees: 45,
    },
    {
      title: "Natural Language Processing Workshop",
      date: "September 2025",
      attendees: 38,
    },
    {
      title: "AI Career Fair",
      date: "August 2025",
      attendees: 120,
    },
  ];

  const eventTypes = [
    { name: "Workshops", icon: "🛠️", description: "Hands-on learning sessions" },
    { name: "Seminars", icon: "📚", description: "In-depth topic exploration" },
    { name: "Hackathons", icon: "💻", description: "Build and compete" },
    { name: "Networking", icon: "🤝", description: "Connect with peers" },
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
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Join our community events, workshops, and hackathons to learn, build, and connect with fellow AI enthusiasts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center">
                  <div className="text-4xl mb-2">{type.icon}</div>
                  <h3 className="font-bold text-white mb-1">{type.name}</h3>
                  <p className="text-sm text-gray-400">{type.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't miss out on these exciting opportunities to learn and grow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                      {event.type}
                    </span>
                    <span className="text-accent-cyan text-sm font-semibold">
                      {event.spots}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white">{event.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <span className="mr-2">📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <span className="mr-2">🕐</span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{event.description}</p>

                  <Button className="w-full">Register Now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
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
              Past <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Check out what we've accomplished together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-5xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <div className="flex items-center justify-between text-gray-400">
                    <span>{event.date}</span>
                    <span className="font-semibold text-primary">{event.attendees} attendees</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="text-center bg-gradient-to-br from-primary/10 to-accent-purple/10 border-primary/30" hover={false}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Want to Host an Event?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for community members to share their knowledge and expertise
              </p>
              <Button size="lg">Propose an Event</Button>
            </motion.div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
