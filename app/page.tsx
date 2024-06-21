
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";

export default function Home() {
  return (
    <main className="bg-black">
     {/* <NavbarTwo /> */}
     <Dashboard />
     <StaggerGrid />
    </main>
  );
}
