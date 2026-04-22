import Sidebar from "@pages/dashboard/components/sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="grow h-full overflow-auto">{children}</div>
    </div>
  );
}
