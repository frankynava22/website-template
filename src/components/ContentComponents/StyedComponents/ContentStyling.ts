import styled from 'styled-components';

// MAIN CONTENT SECTION
export const ContentDiv = styled.div`
margin: 2rem auto;
width: 95%;
min-height: 100vh;

border-width: 2px;
border-style: solid;
border-color: var(--border-color);
`;


// ABOUT ME SECTION
export const AboutMeDiv = styled.div`
  background-color: var(--information-background-color);
  margin: 2rem;
  box-shadow: 0px 0px 10px 0px var(--information-box-shadow-color);
  padding-bottom: 1rem;
`

export const TitleH1 = styled.h1`
  padding-top: 2rem;
  color: var(--title-color);
  text-align: center;
`

export const TitleUnderline = styled.div`
  background-color: var(--title-bottom-border-color);
  height: 4px;
  /* top, left, bottom, right */
  margin: 0 2rem 1rem 2rem;
`

export const ParagraphStyle = styled.p`
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1rem;
`