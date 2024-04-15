import AboutMe from "./ContentComponents/AboutMe/AboutMe";
import { ContentDiv } from "./ContentComponents/StyedComponents/ContentStyling";

export default function Content(){
    return(
      <ContentDiv>
        <AboutMe />
      </ContentDiv>
    )
  }