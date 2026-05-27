"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import ProductCatalog from '@/components/ecommerce/productCatalog/ProductCatalog';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';

export default function MenuPage() {
  const menuItems = [
    { id: "1", category: "Appetizers", name: "Caprese Salad", price: "$12.00", rating: 4.5, reviewCount: "87", imageSrc: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D", imageAlt: "Caprese Salad" },
    { id: "2", category: "Appetizers", name: "Garlic Bread", price: "$8.00", rating: 4.0, reviewCount: "112", imageSrc: "https://images.unsplash.com/photo-1528737227393-ee707f153a5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D", imageAlt: "Garlic Bread" },
    { id: "3", category: "Main Courses", name: "Spaghetti Carbonara", price: "$22.00", rating: 4.8, reviewCount: "231", imageSrc: "https://images.unsplash.com/photo-1551187479-b1d5d3e0f4f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpJTIwY2FyYm9uYXJhfGVufDB8fDB8fHww", imageAlt: "Spaghetti Carbonara" },
    { id: "4", category: "Main Courses", name: "Classic Cheeseburger", price: "$18.00", rating: 4.6, reviewCount: "198", imageSrc: "https://images.unsplash.com/photo-1565299624946-b28f40a02966?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fHww", imageAlt: "Classic Cheeseburger" },
    { id: "5", category: "Main Courses", name: "Margherita Pizza", price: "$20.00", rating: 4.7, reviewCount: "250", imageSrc: "https://images.unsplash.com/photo-1590940173360-e47c7c0068a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww", imageAlt: "Margherita Pizza" },
    { id: "6", category: "Desserts", name: "Chocolate Lava Cake", price: "$10.00", rating: 4.9, reviewCount: "155", imageSrc: "https://images.unsplash.com/photo-1551024601-bec78fda55a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hvY29sYXRlJTIwbGF2YSUyMGNha2V8ZW58MHx8MHx8fDA%3D", imageAlt: "Chocolate Lava Cake" },
    { id: "7", category: "Beverages", name: "Fresh Orange Juice", price: "$6.00", rating: 4.2, reviewCount: "90", imageSrc: "https://images.unsplash.com/photo-1582234032470-3d77884d528f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D", imageAlt: "Fresh Orange Juice" }
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
            navItems={[
              { name: "Home", id: "/" },
              { name: "Services", id: "/services" },
              { name: "Menu", id: "/menu" },
              { name: "Contact", id: "/contact" }
            ]}
            button={{ text: "Call Now: (555) 123-4567", href: "tel:+15551234567" }}
            topBarButton={{ text: "Get Free Quote", href: "/contact" }}
            logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=19o82j"
            logoAlt="Local Service Pro Logo"
            brandName="Local Service Pro"
          />
        </div>

        <div id="hero-menu" data-section="hero-menu">
            <HeroLogoBillboard
            background={{ variant: "radial-gradient" }}
            logoText="Our Delicious Menu"
            description="Explore our exquisite selection of dishes, crafted with the freshest ingredients."
            buttons={[
                { text: "View All Items", href: "#food-gallery" },
                { text: "Make a Reservation", href: "/contact" }
            ]}
            imageSrc="https://images.unsplash.com/photo-1540189549336-e6191b66fe1a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBtZW51fGVufDB8fDB8fHww"
            imageAlt="Delicious food spread on a table"
            mediaAnimation="slide-up"
          />
        </div>

        <div id="food-gallery" data-section="food-gallery">
          <ProductCatalog
            layout="page"
            products={menuItems}
            searchPlaceholder="Search your favorite dish..."
            emptyMessage="No menu items found. Please adjust your search or filters."
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