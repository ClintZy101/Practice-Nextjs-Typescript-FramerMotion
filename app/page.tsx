
import Dashboard from "./components/Dashboard/Dashboard";
import NavbarTwo from "./components/SlidingNavBar/NavbarTwo";
import BoldText from "./components/StaggeredText/BoldTextInView";
import StaggeredTextContainer from "./components/StaggeredText/StaggeredTextContainer";
import StaggeredText from "./components/StaggeredText/StaggeredText";
import StaggerGrid from "./components/StaggerGrid/StaggerGrid";
import SplitWords from "./components/StaggeredText/SplitWords";
import SplitTextArray from "./components/StaggeredText/SplitTextArray";
import WithAnimationControls from "./components/StaggeredText/WithAnimationControls";
import RepeatAnimation from "./components/StaggeredText/RepeatAnimation";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
     {/* <NavbarTwo /> */}
     <StaggeredText text="CLINTON"/>
     <Dashboard />
     <StaggerGrid />

     <StaggeredTextContainer>
      {/* <BoldText text="TAYPOC" />
      <SplitWords text="Clinton Taypoc" /> */}
      {/* <SplitTextArray text={["Clint","Christine","Zephaniah"]} /> */}
      <WithAnimationControls text={["Clinton","Christine","Zephaniah"]} repeatDelay={3000} />
     </StaggeredTextContainer>
   <RepeatAnimation />
    </main>
  );
}
