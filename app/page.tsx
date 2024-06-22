
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import BoldText from "./components/StaggeredText/BoldTextInView";
import BoldTextContainer from "./components/StaggeredText/BoldTextContainer";
import StaggeredText from "./components/StaggeredText/StaggeredText";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";

export default function Home() {
  return (
    <main className="bg-black">
     {/* <NavbarTwo /> */}
     <StaggeredText text="CLINTON"/>
     <Dashboard />
     <StaggerGrid />

     <BoldTextContainer>
      <BoldText text="TAYPOC" />
     </BoldTextContainer>
   
    </main>
  );
}
