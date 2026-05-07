import Link from "next/link";
import Logo from "./logo";

export default function BrandLogo({
  className = "",
  LogoIconClassName = "",
  logoTextClassName = "",
}) {
  return (
    <Link
      className={`${className} font-logo text-lg flex items-center`}
      href="/"
    >
      <Logo
        fill="var(--color-accent-400)"
        className={`w-10 h-10 rounded-md ${LogoIconClassName} p-1 border-2 border-accent-400`}
      />
      <span
        className={`${logoTextClassName} text-accent-300 whitespace-nowrap inline-block`}
      >
        WaledAnalysis
      </span>
    </Link>
  );
}
