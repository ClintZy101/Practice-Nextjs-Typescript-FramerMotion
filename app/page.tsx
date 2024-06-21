
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import StaggeredText from "./components/StaggeredText/StaggeredText";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";

export default function Home() {
  return (
    <main className="bg-black">
     {/* <NavbarTwo /> */}
     <StaggeredText />
     <Dashboard />
     <StaggerGrid />
   
    </main>
  );
}
