import CompanyIntro from "@/components/home/CompanyIntro";
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyIntro />
      <ProductCategories />
    </main>
  );
}