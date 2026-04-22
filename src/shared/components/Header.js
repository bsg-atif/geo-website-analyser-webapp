import WrapperContainer from "@shared/containers/WrapperContainer";
import BrandLogo from "./branding/BrandLogo";

export default function Header() {
  return (
    <header className="bg-primary-600 shadow-lg shadow-primary-600">
      <WrapperContainer className="h-24 flex items-center">
        <BrandLogo />
      </WrapperContainer>
    </header>
  );
}
