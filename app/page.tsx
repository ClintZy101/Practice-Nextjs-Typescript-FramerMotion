
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/NavbarTwo/NavbarTwo";
import BoldText from "./components/StaggeredText/BoldTextInView";
import StaggeredTextContainer from "./components/StaggeredText/StaggeredTextContainer";
import StaggeredText from "./components/StaggeredText/StaggeredText";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";
import SplitWords from "./components/StaggeredText/SplitWords";
import SplitTextArray from "./components/StaggeredText/SplitTextArray";

export default function Home() {
  return (
    <main className="bg-black">
     {/* <NavbarTwo /> */}
     <StaggeredText text="CLINTON"/>
     <Dashboard />
     <StaggerGrid />

     <StaggeredTextContainer>
      {/* <BoldText text="TAYPOC" />
      <SplitWords text="Clinton Taypoc" /> */}
      <SplitTextArray text={["Clint","Christine","Zephaniah"]} />
     </StaggeredTextContainer>
   
    </main>
  );
}
