import Link from "next/link";
import Logo from "./Logo";

export default function BrandLogo({
  className = "",
  LogoIconClassName = "",
  logoTextClassName = "",
}) {
  return (
    <Link
      className={`font-logo text-lg flex gap-x-2 items-center  ${className}`}
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
