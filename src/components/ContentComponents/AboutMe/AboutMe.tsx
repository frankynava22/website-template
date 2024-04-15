import { AboutMeDiv } from "../StyedComponents/ContentStyling";
import { TitleH1 } from "../StyedComponents/ContentStyling";
import { TitleUnderline } from "../StyedComponents/ContentStyling";
import { ParagraphStyle } from "../StyedComponents/ContentStyling";
import styled from "styled-components";


const StyledSubHeading = styled.p`
color: var(--subheading-color);
text-align: center;
font-size: 20px;
`;

const StyledCode = styled.p`
text-align: center;
margin-top: -15px;
`;

const StyledA = styled.a`
color: var(--subheading-color);
text-decoration: none;
`

const StyledACode = styled(StyledA)`
    color: var(--link-color);
`

const StyledLanguage = styled.p`
    text-align: center;
`


const StyledTitle = styled.p`
    color: var(--experience-position-color);
    text-align: center;
    margin-top: -20px;
`

const StyledSubHeadingLine = styled(TitleUnderline)`
    background-color: var(--styled-subheading-line-color);
    /* top, left, bottom, right */
    margin: 0 40% 1rem 40%;
    margin-top: -10px;
`

const StyledSectionSeperator = styled(TitleUnderline)`
    background-color: var(--section-seperator-color);
    /* top, left, bottom, right */
    margin: 0 25% 1rem 25%;
    margin-top: -10px;
`

export default function AboutMe(){
    const arr = [
        // this section is for about me 
        // add more properties for paragraph for more content
        {
            id: 0, 
            title: 'About Me', 
            paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla',
            paragraphTwo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla'
        },

        // this is the projects section 
        {
            id: 1, 
            title: 'Projects', 
            projects: [
                // title is the name of your project
                // content is the image to your project to give a preview 
                // code links to your repository 
                {id: 0, title: 'Asteroid Game', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla' ,content:'Content' ,code: 'https://github.com/frankynava22/asteroid'},
                {id: 1, title: 'E-Puck Robot',description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla' ,content: 'Conetn', code: 'https://github.com/MARSLab-UTRGV/Path-Planning-Obstacle-Avoidance'},
            ]
        },

        {
            id: 2,
            title: 'Skills', 
            languages: 'Computer Languages',
            computerLanguages: [
                {id: 0, name: 'C++', svg: ''},
                {id: 1, name: 'HTML', svg: ''},
                {id: 2, name: 'CSS', svg: ''},
                {id: 3, name: 'JavaScript', svg: ''},
                {id: 4, name: 'TypeScript', svg: ''},
                {id: 5, name: 'SQL', svg: 'ff'},
                {id: 6, name: 'C#', svg: 'faCoffee'},
                {id: 7, name: 'Ruby', svg: ''},
            ],
            software: 'Software',
            softwareArr: [
                {id: 0, program: 'Visual Studio'},
                {id: 1, program: 'Visual Studio Code'},
                {id: 2, program: 'React'}
            ]
        },
        {
            id: 3, 
            title: 'Experience', 
            experience: [
                {
                    id: 0,
                    name: 'ECISD', 
                    position: 'Web Master Intern', 
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla'
                },
                {
                    id: 1, 
                    name: 'UTRGV', 
                    position: 'Research Position', 
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla'
                },
                {
                    id: 2, 
                    name: 'BECHTEL', 
                    position: 'Software Developer', 
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla'
                },
            ]
        },
    ]

    // to switch the order of things, just switch the case statements around 
    const ContentStuff = () => {
        return arr.map((elements) => {
            // switch statement start
            switch(elements.title){
                case 'About Me':
                    return(
                        <AboutMeDiv key={elements.id}>
                            <TitleH1>{elements.title}</TitleH1>
                            <TitleUnderline></TitleUnderline>
                            <ParagraphStyle>{elements.paragraph}</ParagraphStyle>
                            <ParagraphStyle>{elements.paragraphTwo && elements.paragraphTwo}</ParagraphStyle>
                        </AboutMeDiv>
                    )
                case 'Projects':
                    return(
                        <AboutMeDiv key={elements.id}>
                            <TitleH1>{elements.title}</TitleH1>
                            <TitleUnderline></TitleUnderline>
                            {/* loop through projects array */}
                            {/* if no projects, nullicent operator takes care of it  */}
                            {elements.projects?.map((project) => (
                            <div key={project.id}>
                                <StyledSubHeading><StyledA href="#">{project.title}</StyledA></StyledSubHeading>
                                    <StyledCode>
                                        <StyledACode href={project.code}>Repository</StyledACode>
                                    </StyledCode>
                                    <ParagraphStyle>{project.description}</ParagraphStyle>
                            </div>
                        ))}
                        </AboutMeDiv>
                    )
                case 'Skills':
                    return(
                        <AboutMeDiv key={elements.id}>
                            <TitleH1>{elements.title}</TitleH1>
                            <TitleUnderline></TitleUnderline>
                            {/* computer languages */}
                            <StyledSubHeading>{elements.languages}</StyledSubHeading>
                            <StyledSubHeadingLine></StyledSubHeadingLine>
                            {elements.computerLanguages?.map((language) => (
                            <div key={language.id}>
                                <StyledLanguage>{language.svg}   {language.name}</StyledLanguage>
                            </div>
                            ))}
                            {/* computer languages end */}
                            <StyledSectionSeperator></StyledSectionSeperator>
                            {/* software  */}
                            <StyledSubHeading>{elements.software}</StyledSubHeading>
                            <StyledSubHeadingLine></StyledSubHeadingLine>
                            {elements.softwareArr?.map((software) => (
                            <div key={software.id}>
                                <StyledLanguage>{software.program}</StyledLanguage>
                            </div>
                            ))}
                            {/* software ends  */}
                            
                        </AboutMeDiv>
                    )
                case 'Experience':
                    return(
                        <AboutMeDiv key={elements.id}>
                            <TitleH1>{elements.title}</TitleH1>
                            <TitleUnderline></TitleUnderline>
                            {/* experience loop */}
                            {elements.experience?.map((experience) => (
                            <div key={experience.id}>
                                <StyledSubHeading>{experience.name}</StyledSubHeading>
                                <StyledTitle>{experience.position}</StyledTitle>
                                <StyledSubHeadingLine></StyledSubHeadingLine>
                                <ParagraphStyle>{experience.content}</ParagraphStyle>
                            </div>
                            ))}
                            {/* experience loop end  */}
                        </AboutMeDiv>
                    )
                default: ''
            }
            // switch statement end
        })
    }

    return(
        <ContentStuff />
    )
}
