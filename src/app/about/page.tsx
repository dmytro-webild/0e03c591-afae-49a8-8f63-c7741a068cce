"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function AboutUsPage() {
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

        <div id="about-us-hero" data-section="about-us-hero">
          <InlineImageSplitTextAbout
            heading={[
              { type: 'text', content: 'About Us: ' },
              { type: 'text', content: 'Your Trusted Local Service Partner' },
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
              "Integrity",              "Reliability",              "Customer Focus",              "Quality Craftsmanship",              "Community Support"]}
            title="Our Core Values"
            description="We are committed to upholding the highest standards of integrity, quality, and customer satisfaction in every service we provide."
            speed={40}
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