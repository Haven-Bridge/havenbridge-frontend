"use client";

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Building2,
  Calendar,
  Clock,
  Video,
  Users,
  ChevronRight,
  MessageSquare,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    preferredDate: '',
    preferredTime: '',
    meetingType: 'video',
    attendees: '1',
    additionalNotes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation booked:', consultationData);
    alert('Thank you for booking a consultation! We will confirm your appointment within 2 business hours.');
    setConsultationData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      preferredDate: '',
      preferredTime: '',
      meetingType: 'video',
      attendees: '1',
      additionalNotes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleConsultationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@havenbridge.com.au",
      description: "General inquiries & support",
      link: "mailto:info@havenbridge.com.au",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+61 (0) 3 9999 9999",
      description: "Mon-Fri, 9am-5pm AEST",
      link: "tel:+61399999999",
      color: "bg-amber-500"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Melbourne, VIC 3000",
      description: "By appointment only",
      link: "https://maps.google.com",
      color: "bg-emerald-500"
    }
  ];

  const responseTimeCards = [
    {
      title: "General Inquiries",
      time: "24 Hours",
      description: "Response within one business day"
    },
    {
      title: "Urgent Matters",
      time: "4 Hours",
      description: "For urgent project-related issues"
    },
    {
      title: "Consultations",
      time: "2 Hours",
      description: "Confirmation for booked consultations"
    }
  ];

  return (
    <div className="bg-white font-sans">
      <Navbar />

      {/* Hero Section with Split Layout */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-semibold text-white">
                  GET IN TOUCH
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                <span className="block">
                  Let's Start
                  <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 via-white to-cyan-500 ml-2 sm:ml-4">
                    Your Project
                  </span>
                </span>
                <span className="block mt-2 sm:mt-4">Together</span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#inquiry-form"
                  className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <MessageSquare className="relative z-10 w-5 h-5 group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                <a 
                  href="#consultation"
                  className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                >
                  <span className="relative z-10">Book Consultation</span>
                  <Calendar className="relative z-10 w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-slate-900/20 z-10"></div>

                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                    <Mail className="w-6 h-6 text-amber-400" />
                  </div>
                </div>

                {/* Main Image - Replace with actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-blue-900">
                  {/* Placeholder image - replace with actual */}
                  <div className="absolute inset-0 bg-[url('/hero-images/contact.jpg')] bg-cover bg-center opacity-70" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Cards */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-slate-600">
              At HavenBridge, we prioritize clear and timely communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {responseTimeCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-3xl font-bold text-amber-500 mb-2">{card.time}</div>
                <p className="text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                How to Reach Us
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Choose your preferred method of contact. Our team is ready to assist you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, i) => (
                <a 
                  key={i}
                  href={info.link}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-1"
                >
                  <div className={`${info.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{info.description}</p>
                  <p className="text-lg font-semibold text-slate-800">{info.content}</p>
                </a>
              ))}
            </div>

            {/* Inquiry Form */}
            <div id="inquiry-form" className="scroll-mt-20">
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 mb-20 border border-blue-100">
                <div className="max-w-3xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                      <MessageSquare className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-xl text-slate-600">
                      Have a general inquiry? Fill out the form below and we'll get back to you promptly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 placeholder:text-slate-500 bg-white"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 placeholder:text-slate-500 bg-white"
                          placeholder="john.smith@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-slate-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 placeholder:text-slate-500 bg-white"
                          placeholder="+61 400 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">
                          Inquiry Type *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 bg-white"
                        >
                          <option value="" className="text-slate-500">Select inquiry type</option>
                          <option value="general" className="text-slate-900">General Inquiry</option>
                          <option value="services" className="text-slate-900">Services Information</option>
                          <option value="projects" className="text-slate-900">Project Proposal</option>
                          <option value="investors" className="text-slate-900">Investor Relations</option>
                          <option value="careers" className="text-slate-900">Career Opportunities</option>
                          <option value="other" className="text-slate-900">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-900 placeholder:text-slate-500 bg-white"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    <div className="flex items-center gap-4 mb-8">
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                      <p className="text-sm text-slate-600">
                        We respect your privacy. Your information will never be shared with third parties.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto min-w-[200px] bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 mx-auto"
                    >
                      Send Message
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Book a Consultation */}
            <div id="consultation" className="scroll-mt-20">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -translate-y-32 translate-x-32" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full translate-y-48 -translate-x-48" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/20 rounded-full mb-6">
                      <Calendar className="w-8 h-8 text-amber-400" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Schedule a Consultation
                    </h2>
                    <p className="text-xl text-blue-200">
                      Discuss your project in detail with our expert team. Select your preferred time and method.
                    </p>
                  </div>

                  <form onSubmit={handleConsultationSubmit}>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="consultation-name" className="block text-sm font-bold text-white mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="consultation-name"
                          name="name"
                          value={consultationData.name}
                          onChange={handleConsultationChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5 placeholder:text-white/50"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="consultation-email" className="block text-sm font-bold text-white mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="consultation-email"
                          name="email"
                          value={consultationData.email}
                          onChange={handleConsultationChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5 placeholder:text-white/50"
                          placeholder="john.smith@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="consultation-phone" className="block text-sm font-bold text-white mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="consultation-phone"
                          name="phone"
                          value={consultationData.phone}
                          onChange={handleConsultationChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5 placeholder:text-white/50"
                          placeholder="+61 400 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                          <Building2 className="inline w-4 h-4 mr-2" />
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={consultationData.company}
                          onChange={handleConsultationChange}
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5 placeholder:text-white/50"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-bold text-white mb-2">
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={consultationData.projectType}
                          onChange={handleConsultationChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5"
                        >
                          <option value="" className="bg-slate-900 text-white/50">Select project type</option>
                          <option value="residential" className="bg-slate-900 text-white">Residential Development</option>
                          <option value="commercial" className="bg-slate-900 text-white">Commercial Building</option>
                          <option value="industrial" className="bg-slate-900 text-white">Industrial Facility</option>
                          <option value="infrastructure" className="bg-slate-900 text-white">Infrastructure Project</option>
                          <option value="mixed-use" className="bg-slate-900 text-white">Mixed-Use Development</option>
                          <option value="other" className="bg-slate-900 text-white">Other</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-bold text-white mb-2">
                            <Calendar className="inline w-4 h-4 mr-2" />
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={consultationData.preferredDate}
                            onChange={handleConsultationChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-bold text-white mb-2">
                            <Clock className="inline w-4 h-4 mr-2" />
                            Preferred Time *
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            value={consultationData.preferredTime}
                            onChange={handleConsultationChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5"
                          >
                            <option value="" className="bg-slate-900 text-white/50">Select time</option>
                            <option value="09:00" className="bg-slate-900 text-white">09:00 AM</option>
                            <option value="10:00" className="bg-slate-900 text-white">10:00 AM</option>
                            <option value="11:00" className="bg-slate-900 text-white">11:00 AM</option>
                            <option value="13:00" className="bg-slate-900 text-white">01:00 PM</option>
                            <option value="14:00" className="bg-slate-900 text-white">02:00 PM</option>
                            <option value="15:00" className="bg-slate-900 text-white">03:00 PM</option>
                            <option value="16:00" className="bg-slate-900 text-white">04:00 PM</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label htmlFor="additionalNotes" className="block text-sm font-bold text-white mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        id="additionalNotes"
                        name="additionalNotes"
                        value={consultationData.additionalNotes}
                        onChange={handleConsultationChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-white bg-white/5 placeholder:text-white/50"
                        placeholder="Please provide any specific topics or requirements you'd like to discuss..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-400 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                      Schedule Consultation
                      <Calendar className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-white">
                READY TO START?
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's Build Something <span className="bg-clip-text text-transparent bg-linear-to-r from-amber-400 to-cyan-500">Remarkable</span> Together
            </h2>
            
            <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
              Your vision, our expertise. Together, we create lasting impact through innovative construction solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#inquiry-form"
                className="group relative inline-flex items-center justify-center gap-3 bg-linear-to-r from-amber-400 to-amber-500 text-slate-900 px-10 py-5 text-xl font-bold rounded-lg hover:shadow-2xl hover:scale-105 transition-all shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Start Your Project</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a 
                href="#consultation"
                className="group relative inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 text-xl font-bold rounded-lg hover:bg-white hover:text-slate-900 transition-all overflow-hidden"
              >
                <span className="relative z-10">Book Consultation</span>
                <Calendar className="relative z-10 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
