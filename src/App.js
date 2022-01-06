import "./App.css";
import SectionLeft from "./main/section-left/section-left";
import SectionRight from "./main/section-right/section-right";
import Tickets from "./main/tickets/tickets";
import VideoBackground from "./components/VideoBackground/VideoBackground";
import Socials from "./components/Socials/Socials";
import ProjectTitle from "./components/ProjecTitle/ProjectTitle";
import Spacer from "./components/Spacer/Spacer";
import Numbers from "./main/numbers/Numbers";
import Video from "./components/Video/Video";
import SectionMedia from "./main/section-media/section-media";
import Footer from "./main/footer/Footer";

function App() {
  return (
    <div className="App">
      <ProjectTitle />
      <Socials />
      <VideoBackground />
      <SectionLeft />
      <Tickets />
      <SectionRight />
      <Numbers />
      <SectionMedia />
      <Video />
      <Spacer />
      <Footer />
      <Spacer />
    </div>
  );
}

export default App;
