"use client";

import { PageWrapper } from "./page-wrapper";
import Services from "./components/Services";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import HeroBanner from "./components/HeroBanner";

export default function Page() {
  return (
    <>
      <Navbar />
      <PageWrapper>
        <HeroBanner />
        <Services />
        <About />
        <Partners />
        <Faq />
      </PageWrapper>
      <Footer />
    </>
  );
}
