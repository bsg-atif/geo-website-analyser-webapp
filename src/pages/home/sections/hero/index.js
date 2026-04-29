import URLInput from "@shared/components/url-input/URLInput";
import styles from "./HeroSection.module.css";
import { HERO_CONTENT } from "@constants/home/hero-content";

export default function HeroSection() {
  return (
    <main
      className={`wrapper relative ${styles.section} grow flex items-center`}
    >
      <section className="flex flex-col gap-y-7 items-center w-full">
        <h1 className="whitespace-pre-line text-4xl tablet:text-5xl laptop:text-7xl text-center font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-0 to-secondary-300">
          {HERO_CONTENT.title}
        </h1>
        <p className="text-center opacity-40 max-w-125 font-medium leading-6">
          {HERO_CONTENT.description}
        </p>
        <URLInput />
      </section>
    </main>
  );
}
