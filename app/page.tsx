
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import BoldText from "./components/StaggeredText/BoldTextInView";
import StaggeredTextContainer from "./components/StaggeredText/StaggeredTextContainer";
import StaggeredText from "./components/StaggeredText/StaggeredText";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";
import SplitWords from "./components/StaggeredText/SplitWords";

export default function Home() {
  return (
    <main className="bg-black">
     {/* <NavbarTwo /> */}
     <StaggeredText text="CLINTON"/>
     <Dashboard />
     <StaggerGrid />

     <StaggeredTextContainer>
      <div>
      {/* <BoldText text="TAYPOC CLINTON" /> */}
      <SplitWords text="Clinton Taypoc" />
      </div>
     </StaggeredTextContainer>
   
    </main>
  );
}
