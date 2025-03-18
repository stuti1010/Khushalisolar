import GoSolar from "./Components/GoSolar";
import Grid from "./Components/GridContent";
import HeroSection from "./Components/HeroSection";
import PartnerCarousel from "./Components/PartnerCarousel";
import SavingsCalculator from "./Components/SavingsCalculator";
import ServicesSection from "./Components/ServiceSection";
import SolarPanelSection from "./Components/SolarPnnel";
import TestimonialSlider from "./Components/Testimonial";
import WhyChooseUs from "./Components/WhychooseUs";


export default function Home() {
  return (
    <>
    <HeroSection/>
    <ServicesSection/>
    <PartnerCarousel/>
    <WhyChooseUs/>
    <SavingsCalculator/>
    <GoSolar/>
    <SolarPanelSection/>
    <Grid/>
    <TestimonialSlider/>
    </>
  );
}
