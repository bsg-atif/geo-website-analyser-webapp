import URLInput from "@shared/components/url-input/URLInput";
import styles from "./HeroSection.module.css";
import { HERO_CONTENT } from "@constants/home/hero-content";
import GradientHeading from "@shared/components/GradientHeading";

export default function HeroSection() {
  return (
    <main
      className={`wrapper relative ${styles.section} grow flex items-center`}
    >
      <section className="flex flex-col gap-y-7 items-center w-full">
        <GradientHeading title={HERO_CONTENT.title} />
        <p className="text-center opacity-40 max-w-125 font-medium leading-6">
          {HERO_CONTENT.description}
        </p>
        <URLInput />
      </section>
    </main>
  );
}
