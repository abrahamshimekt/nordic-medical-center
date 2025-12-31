'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Calendar,
  User,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
} from 'lucide-react';

// Contact Info Card
const ContactInfoCard = ({
  icon: Icon,
  title,
  content,
  subContent,
  href,
  highlight,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
  subContent?: string;
  href?: string;
  highlight?: boolean;
}) => (
  <div className={`p-6 rounded-2xl ${highlight ? 'bg-medical-teal/10' : 'bg-nordic-50'}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
      highlight ? 'bg-medical-teal text-white' : 'bg-nordic-100 text-nordic-600'
    }`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="font-semibold text-nordic-950 mb-2">{title}</h3>
    {href ? (
      <a href={href} className={`text-lg font-medium ${highlight ? 'text-medical-teal' : 'text-nordic-600'} hover:underline`}>
        {content}
      </a>
    ) : (
      <p className={`text-lg font-medium ${highlight ? 'text-medical-green' : 'text-frost-600'}`}>
        {content}
      </p>
    )}
    {subContent && <p className="text-sm text-frost-400 mt-1">{subContent}</p>}
  </div>
);

// Appointment Form
const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: '',
      });
      setStatus('idle');
    }, 3000);
  };

  const services = [
    'General Medicine',
    'Specialist Consultation',
    'Diagnostics & Laboratory',
    'Emergency Care',
    'Health Checkup',
    'International Patient Services',
    'Other',
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-nordic-900 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-frost-400" />
            <input
              type="text"
              id="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="pl-12"
            />
          </div>
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-nordic-900 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-frost-400" />
            <input
              type="tel"
              id="phone"
              required
              placeholder="+251 9XX XXX XXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="pl-12"
            />
          </div>
        </div>
      </div>
      
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-nordic-900 mb-2">
          Email Address
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-frost-400" />
          <input
            type="email"
            id="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="pl-12"
          />
        </div>
      </div>
      
      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-nordic-900 mb-2">
          Service Required *
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="cursor-pointer"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>
      
      {/* Date & Time */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-nordic-900 mb-2">
            Preferred Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-frost-400" />
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="pl-12"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-nordic-900 mb-2">
            Preferred Time
          </label>
          <div className="relative">
            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-frost-400" />
            <select
              id="time"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="pl-12 cursor-pointer"
            >
              <option value="">Select time</option>
              <option value="morning">Morning (8:00 - 12:00)</option>
              <option value="afternoon">Afternoon (12:00 - 17:00)</option>
              <option value="evening">Evening (17:00 - 21:00)</option>
              <option value="any">Any Time</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-nordic-900 mb-2">
          Additional Information
        </label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-frost-400" />
          <textarea
            id="message"
            rows={4}
            placeholder="Please describe your symptoms or reason for visit..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="pl-12 resize-none"
          />
        </div>
      </div>
      
      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className={`w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2 ${
          status === 'success'
            ? 'bg-medical-green text-white'
            : status === 'loading'
            ? 'bg-nordic-400 text-white cursor-wait'
            : 'bg-nordic-600 text-white hover:bg-nordic-700 hover:shadow-lg hover:shadow-nordic-500/25'
        }`}
      >
        {status === 'loading' && (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Submitting...
          </>
        )}
        {status === 'success' && (
          <>
            <CheckCircle className="w-5 h-5" />
            Appointment Request Sent!
          </>
        )}
        {status === 'idle' && (
          <>
            <Send className="w-5 h-5" />
            Book Appointment
          </>
        )}
        {status === 'error' && (
          <>
            <AlertCircle className="w-5 h-5" />
            Try Again
          </>
        )}
      </button>
      
      <p className="text-sm text-frost-400 text-center">
        We'll contact you within 24 hours to confirm your appointment.
      </p>
    </form>
  );
};

// Main Contact Page
export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-medical-teal rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-nordic-200 max-w-2xl mx-auto">
            We're here to help. Reach out to us for appointments, inquiries, or emergency care.
          </p>
          <p className="text-lg text-nordic-300 mt-2 font-amharic">
            እኛን ያግኙን | ቀጠሮ ያስይዙ
          </p>
        </div>
      </section>
      
      {/* Contact Info Cards */}
      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactInfoCard
              icon={Phone}
              title="Phone"
              content="+251 92 910 5653"
              subContent="Available 24/7"
              href="tel:+251929105653"
            />
            <ContactInfoCard
              icon={Globe}
              title="Website"
              content="nordicmedicalcentre.com"
              href="https://nordicmedicalcentre.com"
            />
            <ContactInfoCard
              icon={MapPin}
              title="Location"
              content="Bole, Addis Ababa"
              subContent="Kebele 01, H.No-1244"
            />
            <ContactInfoCard
              icon={Clock}
              title="Hours"
              content="Open 24 Hours"
              subContent="7 Days a Week"
              highlight
            />
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section id="appointment" className="py-20 bg-frost-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Appointment Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl nordic-glow">
              <div className="mb-8">
                <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
                  Book Online
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-nordic-950 mt-2">
                  Schedule an Appointment
                </h2>
                <p className="text-frost-500 mt-2">
                  Fill out the form below and we'll get back to you shortly.
                </p>
              </div>
              
              <AppointmentForm />
            </div>
            
            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.79!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0NycyNC4wIkU!5e0!3m2!1sen!2set!4v1600000000000!5m2!1sen!2set"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nordic Medical Centre Location"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-nordic-950 mb-2">Find Us</h3>
                  <p className="text-frost-500 text-sm">
                    XQMH+VCQ, Bole Sub City, Kebele 01, H.No-1244, Addis Ababa
                  </p>
                  <a
                    href="https://maps.google.com/?q=XQMH+VCQ+Addis+Ababa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-nordic-600 font-medium mt-3 hover:text-nordic-700"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
              
              {/* Emergency Card */}
              <div className="bg-medical-red rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 pulse-emergency">
                    <Phone className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Emergency?</h3>
                  <p className="text-white/80 mb-6">
                    For medical emergencies, call us immediately. We're available 24/7.
                  </p>
                  <a
                    href="tel:+251929105653"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-medical-red font-semibold rounded-full hover:shadow-lg transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call Emergency Line
                  </a>
                </div>
              </div>
              
              {/* Insurance Info */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-nordic-950 mb-4">
                  Payment & Insurance
                </h3>
                <ul className="space-y-3">
                  {[
                    'Cash & Card payments accepted',
                    'Major insurance providers accepted',
                    'Transparent pricing policy',
                    'Flexible payment options available',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-frost-600">
                      <CheckCircle className="w-5 h-5 text-medical-green flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-nordic-950 mb-4">
            Prefer to Call?
          </h2>
          <p className="text-frost-500 mb-8">
            Our friendly staff is available around the clock to assist you.
          </p>
          <a
            href="tel:+251929105653"
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            <Phone className="w-5 h-5" />
            +251 92 910 5653
          </a>
        </div>
      </section>
    </>
  );
}


