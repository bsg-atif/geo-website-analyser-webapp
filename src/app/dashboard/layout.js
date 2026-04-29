import Sidebar from "@pages/dashboard/sections/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto max-w-380 mx-auto">
        {children}
      </div>
    </div>
  );
}
