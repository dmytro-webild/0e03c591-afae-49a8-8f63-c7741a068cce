"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';

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
          name: "Home",
          id: "/",
        },
        {
          name: "Services",
          id: "/services",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      button={{
        text: "Call Now: (555) 123-4567",
        href: "tel:+15551234567",
      }}
      topBarButton={{
        text: "Get Free Quote",
        href: "/contact",
      }}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
      logoAlt="Local Service Pro Logo"
      brandName="Local Service Pro"
    />
  </div>

  <div id="services-overview" data-section="services-overview">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Expert Plumbing Services",
          description: "From leaky faucets to full pipe replacements, our licensed plumbers handle it all with speed and precision.",
          imageSrc: "http://img.b2bpic.net/free-vector/recycle-water-arrow-droplet-shape_78370-5531.jpg",
          imageAlt: "Plumbing service icon",
          titleImageSrc: "http://img.b2bpic.net/free-vector/plumbing-logo-collection_1346-56.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Reliable Electrical Repairs",
          description: "Safe and efficient electrical solutions, including wiring, panel upgrades, and fixture installations by certified electricians.",
          imageSrc: "http://img.b2bpic.net/free-photo/light-bulb-front-side-with-white-background_187299-39886.jpg",
          imageAlt: "Electrical service icon",
          titleImageSrc: "http://img.b2bpic.net/free-vector/lightning-bolts-circles_78370-9283.jpg",
          buttonText: "Learn More",
        },
        {
          title: "HVAC Installation & Repair",
          description: "Keep your home comfortable year-round with our expert heating, ventilation, and air conditioning services.",
          imageSrc: "http://img.b2bpic.net/free-vector/abstract-infographic-web-template-with-three-steps_1284-48989.jpg",
          imageAlt: "HVAC service icon",
          titleImageSrc: "http://img.b2bpic.net/free-vector/creative-hvac-logo-template_23-2149208950.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Professional Carpentry",
          description: "Custom shelving, repairs, and installations to enhance your home's aesthetics and functionality.",
          imageSrc: "http://img.b2bpic.net/free-vector/hammer-logo-ideas-inspiration-logo-design-template-vector-illustration-isolated-white-background_384344-790.jpg",
          imageAlt: "Carpentry service icon",
          titleImageSrc: "http://img.b2bpic.net/free-photo/emblem-icon-banner-badge-graphic_53876-125568.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Comprehensive Home Services"
      description="Whatever your home needs, our skilled technicians are here to help. Explore our full range of services."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          role: "Homeowner",
          company: "Springfield",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-businesswoman-smiling-happy-standing-city_839833-16454.jpg",
          imageAlt: "Happy customer review portrait smiling",
        },
        {
          id: "t2",
          name: "Mark D.",
          role: "Property Manager",
          company: "Capital City",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-customer-approving-new-offer_1262-17151.jpg",
          imageAlt: "Satisfied client feedback professional",
        },
        {
          id: "t3",
          name: "Emily R.",
          role: "Resident",
          company: "Oakwood",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/person-expressing-appreciation-their-workmates_23-2149430632.jpg",
          imageAlt: "Local homeowner giving positive testimonial",
        },
        {
          id: "t4",
          name: "David L.",
          role: "Business Owner",
          company: "Riverside",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-glasses-shaking-hands-with-female-partner-meeting-co-working-space_74855-10006.jpg",
          imageAlt: "Person recommending home service",
        },
        {
          id: "t5",
          name: "Jessica M.",
          role: "Homeowner",
          company: "Northville",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-caucasian-guy-dating-afro-american-girl_1262-19996.jpg",
          imageAlt: "Friendly client headshot",
        },
        {
          id: "t6",
          name: "Chris B.",
          role: "Resident",
          company: "Westbrook",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-posing-her-home_23-2148708980.jpg",
          imageAlt: "Happy customer review portrait smiling",
        },
      ]}
      kpiItems={[
        {
          value: "12+",
          label: "Years Experience",
        },
        {
          value: "98%",
          label: "Customer Satisfaction",
        },
        {
          value: "24/7",
          label: "Emergency Service",
        },
      ]}
      title="What Our Customers Say"
      description="Read genuine reviews from your neighbors who trust us with their homes."
    />
  </div>

  <div id="process" data-section="process">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      features={[
        {
          title: "1. Contact Us",
          description: "Reach out by phone or our online form to describe your service needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/logo-telephone-vector-illustration_53876-71430.jpg",
          imageAlt: "Phone icon representing contact",
          titleImageSrc: "http://img.b2bpic.net/free-photo/faqs-customer-service-icon-concept_53876-133579.jpg",
          buttonText: "Call Now",
        },
        {
          title: "2. Get a Free Estimate",
          description: "We'll provide a transparent, no-obligation quote tailored to your specific requirements.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-with-client-fix-kitchen-problems_23-2150990690.jpg",
          imageAlt: "Person receiving estimate",
          titleImageSrc: "http://img.b2bpic.net/free-photo/routine-medical-checkup-with-paperwork_23-2149281058.jpg",
          buttonText: "Request Quote",
        },
        {
          title: "3. We Complete the Job",
          description: "Our experienced technicians will arrive on time and complete the work to the highest standards.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-construction-tools-as-brick-hammer-pipe-wrench-safety-helmet-wooden-background_141793-14293.jpg",
          imageAlt: "Technician completing a job",
          titleImageSrc: "http://img.b2bpic.net/free-photo/excited-female-male-plumbers-don-t-believe-their-eyes-look-with-widely-opened-mouthes_273609-8784.jpg",
          buttonText: "See Services",
        },
      ]}
      title="Our Simple 3-Step Process"
      description="Getting reliable local service is easier than you think."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
      logoAlt="Local Service Pro Logo"
      logoText="Local Service Pro"
      leftLink={{
        text: "Call Us: (555) 123-4567",
        href: "tel:+15551234567",
      }}
      rightLink={{
        text: "Get a Free Quote",
        href: "/contact",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
