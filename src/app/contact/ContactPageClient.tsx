"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const ContactPageClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual EmailJS integration
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ogbajeleo@gmail.com",
      href: "mailto:ogbajeleo@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (0) 123 456 7890",
      href: "tel:+2341234567890",
      description: "Call or text me directly",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
      description: "Open to remote work",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ogbajeleo",
      icon: Github,
      color: "hover:text-gray-900",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ogbajeleo",
      icon: Linkedin,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/ogbajeleo",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      <SectionWrapper
        title="Contact Me"
        subtitle="Let's work together to bring your ideas to life"
        className="bg-primary3"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Get In Touch
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm always excited to work on new projects and collaborate
                  with amazing people. Whether you have a project in mind or
                  just want to chat about technology, I'd love to hear from you!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="block p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary4 rounded-lg flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.label}
                        </h4>
                        <p className="text-gray-700 mb-1">{info.value}</p>
                        <p className="text-sm text-gray-500">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:text-primary1`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div variants={itemVariants}>
                <Card className="p-6 bg-primary4 border-primary1">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary1" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary1">
                        Quick Response
                      </h4>
                      <p className="text-primary1 text-sm">
                        I typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Me a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary1 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary1 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary1 focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about your project, idea, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>
                        Message sent successfully! I'll get back to you within
                        24 hours.
                      </span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-lg"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>
                        Something went wrong. Please try again or contact me
                        directly via email.
                      </span>
                    </motion.div>
                  )}
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default ContactPageClient;
