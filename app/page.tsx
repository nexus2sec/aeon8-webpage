import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Ticker } from '@/components/layout/Ticker';
import { About } from '@/components/sections/About';
import { Certifications } from '@/components/sections/Certifications';
import { Contact } from '@/components/sections/Contact';
import { Field } from '@/components/sections/Field';
import { Hero } from '@/components/sections/Hero';
import { HowWeBuild } from '@/components/sections/HowWeBuild';
import { Products } from '@/components/sections/Products';

export default function HomePage() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Field />
      <HowWeBuild />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
