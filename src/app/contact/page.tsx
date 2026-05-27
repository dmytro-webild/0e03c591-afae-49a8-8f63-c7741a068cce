"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import ContactSplit from '@/components/sections/contact/ContactSplit';

export default function ContactPage() {
  const commonNavItems = [
    { name: "Home", id: "/" },
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
            navItems={commonNavItems}
            button={{ text: "Call Now: (555) 123-4567", href: "tel:+15551234567" }}
            topBarButton={{ text: "Get Free Quote", href: "/contact" }}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
            logoAlt="Local Service Pro Logo"
            brandName="Local Service Pro"
          />
        </div>

        <div id="contact-us-main" data-section="contact-us-main">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Local Service Pro"
            description="Have a question or need service? Fill out the form below or reach out using our contact details."
            background={{ variant: "radial-gradient" }}
            mediaPosition="left"
            imageSrc="https://img.freepik.com/free-vector/map-pointer-vector-graphic-gps-location-pin_53876-120002.jpg?w=826&t=st=1716301662~exp=1716302262~hmac=a4e61f0a2d5e0d37e5842f654f5c22509121c7d2c3855c3c0b021d7b38d38b7e"
            imageAlt="Google Maps location"
            inputPlaceholder="Your Email"
            buttonText="Send Message"
            termsText="By sending your message, you agree to our privacy policy."
            onSubmit={(email) => console.log(`Contact form submitted with email: ${email}`)}
            useInvertedBackground={false}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoReveal
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
            logoAlt="Local Service Pro Logo"
            logoText="Local Service Pro"
            leftLink={{ text: "Call Us: (555) 123-4567", href: "tel:+15551234567" }}
            rightLink={{ text: "Get a Free Quote", href: "/contact" }}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}