import Sidebar from "@pages/dashboard/sections/Sidebar";

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
