"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import ContactSplit from '@/components/sections/contact/ContactSplit';

export default function ContactPage() {
  const restaurantNavItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "/menu" },
    { name: "About", id: "/about" },
    { name: "Services", id: "/services" },
    { name: "Contact", id: "/contact" },
  ];

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
            navItems={restaurantNavItems}
            button={{ text: "Call Now: (555) 123-4567", href: "tel:+15551234567" }}
            topBarButton={{ text: "Make a Reservation", href: "/contact" }}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
            logoAlt="Grand Cuisine Logo"
            brandName="Grand Cuisine"
          />
        </div>

        <div id="contact-us-main" data-section="contact-us-main">
          <ContactSplit
            tag="Reserve Your Table"
            title="Contact Grand Cuisine"
            description="Have a question or want to make a reservation? Fill out the form below or reach out to us directly."
            background={{ variant: "radial-gradient" }}
            mediaPosition="left"
            imageSrc="https://images.unsplash.com/photo-1555547466-9b56f912e753?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            imageAlt="Restaurant ambiance"
            inputPlaceholder="Your Email for Reservation"
            buttonText="Submit Reservation"
            termsText="By submitting, you agree to our reservation terms and privacy policy."
            onSubmit={(email) => console.log(`Contact form submitted with email: ${email}`)}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
            logoAlt="Grand Cuisine Logo"
            logoText="Grand Cuisine"
            leftLink={{ text: "Call Us: (555) 123-4567", href: "tel:+15551234567" }}
            rightLink={{ text: "Make a Reservation", href: "/contact" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}