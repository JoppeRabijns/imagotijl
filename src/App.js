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
import Sponsors from "./main/sponsors/Sponsors";
import SectionPalmares from "./main/section-palmares/section-palmares";

function App() {
  return (
    <>
      <div className="App">
        <ProjectTitle />
        <Socials />
        <VideoBackground />
        <SectionLeft />
        <Tickets />
        <SectionRight />
        <Numbers />
        <SectionPalmares />
        <Sponsors />
        <SectionMedia />
        <Video />
        <Spacer />
        <Footer />
        <Spacer />
      </div>
      <div className="turn">
        <img src="https://ak.picdn.net/shutterstock/videos/1021830733/thumb/8.jpg"></img>
      </div>
    </>
  );
}

export default App;
