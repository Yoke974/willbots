import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LinkedInPost from "../components/LinkedInPost";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

const LottiePlayer = (props: any) => React.createElement("lottie-player", props);

export default function Home() {
  return (
    <>
      <div className="tech-bg"></div>
      <div className="tech-grid"></div>
      <LottiePlayer
        class="ai-animation"
        src="https://assets10.lottiefiles.com/packages/lf20_vybwn7df.json"
        background="transparent"
        speed="0.5"
        loop
        autoPlay
      />
      <Header />
      <main>
        <Hero />
        <LinkedInPost />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
} 