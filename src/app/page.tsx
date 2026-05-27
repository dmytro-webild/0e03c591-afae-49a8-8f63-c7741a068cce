"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import { CheckCircle, ShieldCheck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "/"}
      ]}
      button={{
        text: "Call Now: (555) 123-4567",        href: "tel:+15551234567"}}
      topBarButton={{
        text: "Get Free Quote",        href: "/contact"}}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
      logoAlt="Local Service Pro Logo"
      brandName="Local Service Pro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient"}}
      logoText="Local Service Pro"
      description="Fast & Reliable Local Service You Can Trust. Licensed, Insured, and 5-Star Rated."
      buttons={[
        {
          text: "Call Now: (555) 123-4567",          href: "tel:+15551234567"},
        {
          text: "Order via WhatsApp",          href: "https://wa.me/15551234567"},
        {
          text: "Get Your Free Estimate",          href: "/contact"}
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/freight-parcel-inspiration-uniform-art_1134-1177.jpg"
      imageAlt="Professional local service technician smiling confidently"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "4.9/5",          description: "Average Google Rating"},
        {
          id: "m2",          value: "1200+",          description: "Happy Local Customers"},
        {
          id: "m3",          value: "24/7",          description: "Emergency Response"}
      ]}
      title="Building Trust, One Home at a Time"
      description="Our commitment to quality, speed, and customer satisfaction sets us apart."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Why Choose Us"
      tagIcon={CheckCircle}
      title="Your Trusted Local Service Partner"
      description="We are dedicated to providing top-tier service with transparent pricing, same-day availability, and experienced, certified technicians."
      subdescription="Our team prides itself on local expertise and a satisfaction guarantee, ensuring peace of mind for every job."
      icon={ShieldCheck}
      imageSrc="http://img.b2bpic.net/free-photo/black-businessman-happy-expression_1194-2632.jpg"
      imageAlt="Experienced local technician interacting with a happy homeowner"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="service-areas" data-section="service-areas">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Springfield",        "Capital City",        "Oakwood",        "Riverside",        "Northville",        "Westbrook",        "Sunnyside"]}
      title="Serving Our Local Community"
      description="Proudly providing exceptional service across [Your City] and all surrounding areas. Contact us to see if we serve your neighborhood!"
      speed={40}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      gridVariant="four-items-2x2-equal-grid" 
      title="Why Choose Our Services" 
      description="Committed to excellence, transparency, and customer satisfaction." 
      features={[
        {
          title: "Expert Technicians",          description: "Our certified professionals bring years of experience to every job.",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-workman-white-wall_23-2147772246.jpg",          imageAlt: "Cheerful workman at white wall",          titleImageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-pulling-rack-with-car-tires-looking-camera-workshop_637285-7542.jpg",          buttonText: "Meet Our Team",          buttonHref: "/about"
        },
        {
          title: "Transparent Pricing",          description: "No hidden fees, just clear, upfront costs for all our services.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-foreman-auto-mechanic-workshop-using-touchpad-looking-camera_637285-9410.jpg",          imageAlt: "Happy foreman auto mechanic workshop",          titleImageSrc: "http://img.b2bpic.net/free-photo/crazy-dealer-happy-expression_1194-3988.jpg",          buttonText: "View Pricing",          buttonHref: "/services"
        }
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
      logoAlt="Local Service Pro Logo"
      logoText="Local Service Pro"
      leftLink={{
        text: "Call Us: (555) 123-4567",        href: "tel:+15551234567"}}
      rightLink={{
        text: "Chat on WhatsApp",        href: "https://wa.me/15551234567"}}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}