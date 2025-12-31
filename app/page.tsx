'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Calendar,
  Clock,
  MapPin,
  Star,
  ChevronRight,
  Stethoscope,
  Microscope,
  HeartPulse,
  Shield,
  Users,
  Activity,
  CheckCircle,
  ArrowRight,
  Quote,
  Images,
  X,
  ChevronLeft,
} from 'lucide-react';

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 hero-pattern medical-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-nordic-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-medical-teal/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-medical-teal/10 text-medical-teal rounded-full text-sm font-medium mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-medical-teal rounded-full animate-pulse" />
              Open 24 Hours • Emergency Ready
            </div>
            
            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nordic-950 leading-tight mb-6 animate-slide-up">
              Advanced Healthcare
              <br />
              <span className="text-gradient">You Can Trust</span>
              <span className="text-nordic-950"> – 24/7</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-frost-500 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up animate-delay-100">
              Expert Doctors • Modern Facilities • Patient-Centered Care
            </p>
            
            {/* Amharic */}
            <p className="text-base text-frost-400 mb-8 font-amharic animate-slide-up animate-delay-200">
              ኖርዲክ ሜዲካል ሴንተር | ቦሌ፣ አዲስ አበባ
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up animate-delay-300">
              <Link
                href="/contact#appointment"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Book an Appointment
              </Link>
              <a
                href="tel:+251929105653"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 animate-fade-in animate-delay-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-nordic-gradient border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                    >
                      {['Dr', 'Rn', 'Md', 'Sp'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-frost-500 text-sm">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-frost-300'}`}
                    />
                  ))}
                </div>
                <span className="text-frost-500 text-sm">4.2 / 5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-8 nordic-glow animate-float">
                <div className="aspect-[4/3] bg-gradient-to-br from-nordic-100 to-nordic-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Medical Cross */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 relative">
                      <div className="absolute inset-0 bg-nordic-500/20 rounded-2xl transform rotate-45" />
                      <div className="absolute inset-4 bg-white rounded-xl transform rotate-45 flex items-center justify-center">
                        <svg className="w-12 h-12 text-nordic-500 -rotate-45" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-16 h-16 bg-medical-teal/20 rounded-full" />
                  <div className="absolute bottom-4 right-4 w-24 h-24 bg-nordic-500/10 rounded-full" />
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl animate-float animate-delay-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-medical-green/10 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-medical-green" />
                  </div>
                  <div>
                    <p className="text-xs text-frost-400">Available</p>
                    <p className="font-semibold text-nordic-900">24/7 Care</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-6 glass-card rounded-2xl p-4 shadow-xl animate-float animate-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-nordic-500/10 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-nordic-500" />
                  </div>
                  <div>
                    <p className="text-xs text-frost-400">Satisfied</p>
                    <p className="font-semibold text-nordic-900">115+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 50L48 45.7C96 41.3 192 32.7 288 35.8C384 39 480 54 576 60.2C672 66.3 768 63.7 864 55.8C960 48 1056 35 1152 33.2C1248 31.3 1344 40.7 1392 45.3L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mt-2 mb-6">
              Nordic Medical Centre
              <span className="block text-xl font-normal text-frost-500 mt-2 font-amharic">
                ኖርዲክ ሜዲካል ሴንተር
              </span>
            </h2>
            <p className="text-frost-500 text-lg leading-relaxed mb-8">
              Nordic Medical Centre is a leading medical center in Bole, Addis Ababa, 
              providing high-quality, patient-focused healthcare services through 
              experienced doctors, professional nurses, and modern medical facilities 
              — open 24 hours a day.
            </p>
            
            {/* Trust Indicator */}
            <div className="flex items-center gap-4 p-4 bg-nordic-50 rounded-2xl mb-8">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-frost-300 fill-frost-300'}`}
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-nordic-900">4.2 / 5 Rating</p>
                <p className="text-sm text-frost-500">Based on 115+ Google Reviews</p>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Clock, value: '24/7', label: 'Hours Open', color: 'nordic' },
              { icon: Users, value: '115+', label: 'Happy Patients', color: 'teal' },
              { icon: Stethoscope, value: '20+', label: 'Expert Doctors', color: 'nordic' },
              { icon: Activity, value: '10+', label: 'Years Experience', color: 'teal' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  stat.color === 'nordic' ? 'bg-nordic-50' : 'bg-medical-teal/5'
                } transition-transform hover:scale-105`}
              >
                <stat.icon
                  className={`w-10 h-10 mb-4 ${
                    stat.color === 'nordic' ? 'text-nordic-500' : 'text-medical-teal'
                  }`}
                />
                <p className="text-3xl font-bold text-nordic-950">{stat.value}</p>
                <p className="text-frost-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const galleryImages = [
  {
    src: '/images/nordic building.jpg',
    alt: 'Nordic Medical Centre Building',
    title: 'Our Modern Facility',
    titleAm: 'ዘመናዊ ተቋማችን',
  },
  {
    src: '/images/reception.jpg',
    alt: 'Nordic Medical Centre Reception',
    title: 'Welcoming Reception',
    titleAm: 'እንኳን ደህና መጡ አቀባበል',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    const newIndex = direction === 'next'
      ? (selectedImage + 1) % galleryImages.length
      : (selectedImage - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-frost-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
            Our Facility
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mt-2 mb-4">
            Take a Look Inside
          </h2>
          <p className="text-frost-500 max-w-2xl mx-auto">
            Explore our modern medical facility designed for your comfort and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-nordic-950/80 via-nordic-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/70 font-amharic text-sm">
                      {image.titleAm}
                    </p>
                  </div>
                </div>
                
                {/* View Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
                  <Images className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Modern Equipment', icon: '🏥' },
            { label: 'Clean Environment', icon: '✨' },
            { label: 'Comfortable Space', icon: '🛋️' },
            { label: 'Easy Access', icon: '🚗' },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-2 block">{feature.icon}</span>
              <span className="text-sm font-medium text-frost-600">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-nordic-950/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[80vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-nordic-950/80 to-transparent rounded-b-2xl">
              <h3 className="text-xl font-bold text-white">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/70 font-amharic">
                {galleryImages[selectedImage].titleAm}
              </p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full">
            <span className="text-white text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

// Services Section
const services = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    titleAm: 'ጠቅላላ ህክምና',
    description: 'Comprehensive primary care for all ages, from routine checkups to managing chronic conditions.',
    color: 'nordic',
  },
  {
    icon: Users,
    title: 'Specialist Consultations',
    titleAm: 'ስፔሻሊስት ማማከር',
    description: 'Access to experienced specialists across various medical disciplines.',
    color: 'teal',
  },
  {
    icon: Microscope,
    title: 'Diagnostics & Laboratory',
    titleAm: 'ምርመራ እና ላቦራቶሪ',
    description: 'State-of-the-art diagnostic equipment and comprehensive lab testing services.',
    color: 'nordic',
  },
  {
    icon: HeartPulse,
    title: 'Emergency & Urgent Care',
    titleAm: 'ድንገተኛ እና አስቸኳይ ህክምና',
    description: '24/7 emergency services with rapid response times and expert care.',
    color: 'red',
  },
  {
    icon: Shield,
    title: 'Preventive Health Checkups',
    titleAm: 'መከላከያ የጤና ምርመራ',
    description: 'Comprehensive health screenings to detect and prevent illness early.',
    color: 'teal',
  },
  {
    icon: Activity,
    title: 'International Patient Services',
    titleAm: 'ዓለም አቀፍ የታካሚ አገልግሎቶች',
    description: 'Dedicated support for international patients with translation and coordination.',
    color: 'nordic',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-frost-50 medical-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mt-2 mb-4">
            Medical Services
          </h2>
          <p className="text-frost-500 max-w-2xl mx-auto">
            We offer a comprehensive range of medical services to meet all your healthcare needs.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-frost-200"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.color === 'nordic'
                    ? 'bg-nordic-100 text-nordic-600'
                    : service.color === 'teal'
                    ? 'bg-medical-teal/10 text-medical-teal'
                    : 'bg-red-100 text-medical-red'
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-nordic-950 mb-2">{service.title}</h3>
              <p className="text-sm text-frost-400 font-amharic mb-3">{service.titleAm}</p>
              <p className="text-frost-500">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const whyChooseUs = [
  { icon: Users, text: 'Experienced & qualified doctors' },
  { icon: HeartPulse, text: 'Caring and professional nurses' },
  { icon: Microscope, text: 'Modern diagnostic equipment' },
  { icon: Shield, text: 'Clean, comfortable environment' },
  { icon: CheckCircle, text: 'Transparent pricing' },
  { icon: Star, text: 'High patient satisfaction' },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-nordic-gradient relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Why Choose Nordic Medical Centre
          </h2>
          <p className="text-nordic-200 max-w-2xl mx-auto">
            We are committed to providing exceptional healthcare with compassion and expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <div className="w-12 h-12 bg-medical-teal rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Opening Hours Section
const OpeningHoursSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-medical-teal to-nordic-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white text-sm font-medium mb-4">
                <div className="w-3 h-3 bg-medical-green rounded-full animate-pulse" />
                Currently Open
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Open 24 Hours
              </h2>
              <p className="text-white/80 text-lg">
                7 Days a Week • Emergency & Urgent Care Always Available
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+251929105653"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-nordic-600 font-semibold rounded-full hover:shadow-xl transition-all"
              >
                <Phone className="w-5 h-5" />
                Emergency Call
              </a>
              <Link
                href="/contact#appointment"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white font-semibold rounded-full border-2 border-white/40 hover:bg-white/30 transition-all"
              >
                <Calendar className="w-5 h-5" />
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const reviews = [
  {
    name: 'Amanuel Hailu',
    rating: 5,
    text: 'I highly recommend Nordic Medical Center! It is by far the best medical center in Addis Ababa. The doctors and nurses are all very experienced and knowledgeable, and they take the time to listen to your concerns and answer your questions.',
    source: 'Google Reviews',
    badge: 'Local Guide • 104 reviews',
  },
  {
    name: 'NSA',
    rating: 5,
    text: 'I walked in to Nordic without an appointment, not realizing they don\'t typically accept walk-ins. Still, the staff went out of their way to accommodate and scheduled me in, just an hour later — and, by great luck, with the remarkable doctor.',
    source: 'Google Reviews',
    badge: null,
  },
  {
    name: 'Khalid Shash',
    rating: 5,
    text: 'As a trained cardiologist from the USA, I have experienced healthcare systems in various settings, and I must say, the care my mother-in-law received at NMC was truly exceptional.',
    source: 'Google Reviews',
    badge: null,
  },
  {
    name: 'Anthony Jimcoily',
    rating: 5,
    text: 'I recently visited Nordic Medical Centre after a friend\'s recommendation. I needed to see a cardiologist due to an abnormal EKG result from my annual work checkup. The experience exceeded my expectations.',
    source: 'Google Reviews',
    badge: null,
  },
  {
    name: 'Bete Hailu',
    rating: 5,
    text: 'Wonderful hospitality from the security guards to the top managers. I have no words to express my feelings. Special thanks to Doctor FRAOL and his entire team. My sister was admitted and received excellent care.',
    source: 'Google Reviews',
    badge: null,
  },
  {
    name: 'Mehmet Erdoğan',
    rating: 4,
    text: 'After filling out the application form, they took a place for me to wait. The facility is well-organized and the staff is attentive to patients\' needs.',
    source: 'Google Reviews',
    badge: 'Local Guide • 32 reviews',
  },
];

const ReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleReviews = 3;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (reviews.length - visibleReviews + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + (reviews.length - visibleReviews + 1)) % (reviews.length - visibleReviews + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-frost-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-frost-500 max-w-2xl mx-auto">
            Real experiences from real patients at Nordic Medical Centre.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-nordic-50 transition-colors hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5 text-nordic-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-nordic-50 transition-colors hidden md:flex"
          >
            <ChevronRight className="w-5 h-5 text-nordic-600" />
          </button>

          {/* Reviews Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * (100 / visibleReviews)}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <div className="review-card bg-white h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-nordic-gradient rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-nordic-950 truncate">{review.name}</p>
                        {review.badge && (
                          <p className="text-xs text-frost-400">{review.badge}</p>
                        )}
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-frost-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="flex-1">
                      <Quote className="w-8 h-8 text-nordic-100 mb-2" />
                      <p className="text-frost-600 leading-relaxed text-sm line-clamp-4">
                        {review.text}
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 pt-4 border-t border-frost-100 flex items-center gap-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-xs text-frost-400">{review.source}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(Math.min(index, reviews.length - 1))}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-nordic-600' : 'bg-frost-300'
                }`}
              />
            ))}
          </div>

          {/* Desktop Dots */}
          <div className="hidden md:flex justify-center gap-2 mt-8">
            {Array.from({ length: reviews.length - visibleReviews + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-nordic-600' : 'bg-frost-300'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Google Reviews Badge */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/Nordic+Medical+Centre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-nordic-950 text-lg">4.2</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-frost-300 fill-frost-300'}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-frost-500">Based on 115+ Google Reviews</p>
            </div>
            <ArrowRight className="w-5 h-5 text-frost-400 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Location Section
const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-medical-teal font-semibold text-sm uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mt-2 mb-4">
            Location & Directions
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="map-container aspect-video lg:aspect-[4/3]">
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
          
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-nordic-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-nordic-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-nordic-950 mb-2">Address</h3>
                <p className="text-frost-500">
                  XQMH+VCQ, Bole Sub City, Kebele 01
                  <br />
                  H.No-1244, Addis Ababa, Ethiopia
                </p>
                <p className="text-sm text-frost-400 mt-2">
                  Plus Code: <span className="font-mono font-semibold text-nordic-600">XQMH+VCQ</span>
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-medical-teal/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-medical-teal" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-nordic-950 mb-2">Phone</h3>
                <a
                  href="tel:+251929105653"
                  className="text-lg text-nordic-600 hover:text-nordic-700 font-semibold"
                >
                  +251 92 910 5653
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-medical-green/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-7 h-7 text-medical-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-nordic-950 mb-2">Opening Hours</h3>
                <p className="text-frost-500">
                  <span className="font-semibold text-medical-green">Open 24 Hours</span>
                  <br />
                  7 Days a Week
                </p>
              </div>
            </div>
            
            <a
              href="https://maps.google.com/?q=XQMH+VCQ+Addis+Ababa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              Get Directions
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-20 bg-frost-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          {/* Decorative */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="w-20 h-20 bg-nordic-gradient rounded-full flex items-center justify-center shadow-xl shadow-nordic-500/30">
              <HeartPulse className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-12 pt-20 shadow-xl nordic-glow">
            <h2 className="text-3xl md:text-4xl font-bold text-nordic-950 mb-4">
              Your Health Comes First
            </h2>
            <p className="text-frost-500 text-lg mb-8 max-w-2xl mx-auto">
              Don't wait when it comes to your health. Our team of experienced 
              medical professionals is ready to provide you with the care you deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact#appointment"
                className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
              >
                <Calendar className="w-5 h-5" />
                Schedule Appointment
              </Link>
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <WhyChooseUsSection />
      <OpeningHoursSection />
      <ReviewsSection />
      <LocationSection />
      <CTASection />
    </>
  );
}


