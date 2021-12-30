import "./App.css";
import SectionLeft from "./main/section-left/section-left";
import SectionRight from "./main/section-right/section-right";
import Tickets from "./main/tickets/tickets";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import Socials from "./components/Socials/Socials";
import ProjectTitle from "./components/ProjecTitle/ProjectTitle";

function App() {
  return (
    <div className="App">
      <ProjectTitle />
      <Socials />
      <VideoBackground />
      <SectionLeft />
      <Tickets />
      <SectionRight />
    </div>
  );
}

export default App;
