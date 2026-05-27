"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function AboutUsPage() {
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

        <div id="hero-about" data-section="hero-about">
          <InlineImageSplitTextAbout
            heading={[
              { type: 'text', content: 'Our Story: ' },
              { type: 'text', content: 'The Heart of Grand Cuisine' },
            ]}
            useInvertedBackground={false}
            ariaLabel="About Us main section"
          />
        </div>

        <div id="our-values" data-section="our-values">
          <SocialProofOne
            textboxLayout="default"
            useInvertedBackground={true}
            names={[
              "Exquisite Flavors",              "Impeccable Service",              "Freshness",              "Innovation",              "Customer Delight"]}
            title="Our Culinary Philosophy"
            description="We are dedicated to crafting unforgettable dining experiences through exceptional taste, quality, and service."
            speed={40}
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