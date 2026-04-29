import BrandLogo from "./branding/BrandLogo";

export default function Header() {
  return (
    <header className="bg-primary-600 shadow-lg shadow-primary-600">
      <main className="wrapper h-24 flex items-center">
        <BrandLogo />
      </main>
    </header>
  );
}
