"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';

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

  <div id="contact-form" data-section="contact-form">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Your Free Quote Today"
      description="Ready to experience fast, reliable local service? Fill out the form below or call us directly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Phone Number",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address (Optional)",
        },
      ]}
      multiSelect={{
        name: "serviceNeeded",
        label: "Service Needed",
        options: [
          "Plumbing",
          "Electrical",
          "HVAC",
          "Carpentry",
          "Other",
        ],
      }}
      textarea={{
        name: "message",
        placeholder: "Tell us about your service needs...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/joyful-young-bald-call-center-man-wearing-headset-sitting-desk-with-work-tools-looking-laptop-showing-thumb-up-isolated-purple_141793-84110.jpg"
      imageAlt="Friendly customer service representative at a local business"
      mediaPosition="right"
      buttonText="Request Free Quote"
    />
  </div>

  <div id="midpage-cta-contact" data-section="midpage-cta-contact">
      <FeatureCardTwentyNine
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Need Immediate Help? Call Us Now!"
      description="For urgent service requests or to speak directly with an expert, our lines are open 24/7. We're ready when you are."
      buttons={[
        {
          text: "Call Now: (555) 123-4567",
          href: "tel:+15551234567",
        },
      ]}
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
