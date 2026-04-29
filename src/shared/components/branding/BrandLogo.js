import Link from "next/link";
import Logo from "./Logo";

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
        className={`h-7 w-7 bg-neutral-0 rounded-md ${LogoIconClassName}`}
      />
      <span className={`${logoTextClassName} whitespace-nowrap inline-block`}>
        WaledAnalysis
      </span>
    </Link>
  );
}
