import DashboardNav from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="w-full">
        <DashboardNav />
        <div className="mx-5 mt-10">{children}</div>
      </div>
    </section>
  );
}
