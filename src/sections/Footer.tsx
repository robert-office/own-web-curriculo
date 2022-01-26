import { Container } from "../components/Container";
import { HeaderText } from "../components/HeaderText";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {

    return (
        <div className="relative w-full border-b-4 border-cinza bg-bodyHeadeer">
            <Container>
                <nav className="relative flex flex-col justify-center flex-wrap p-6 w-full text-center">
                    <div className="relative my-4 flex flex-row justify-center space-x-5">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100010180178157" className="w-14 h-14 bg-icon rounded-full justify-center p-3">
                            <FacebookIcon sx={{color: "white"}}/>
                        </a>
                        <a target="_blank" href="https://github.com/robert-office" className="w-14 h-14 bg-icon rounded-full justify-center p-3">
                            <GitHubIcon sx={{color: "white"}}/>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/robert-uillians-001660195/" className="w-14 h-14 bg-icon rounded-full justify-center p-3">
                            <LinkedInIcon sx={{color: "white"}}/>
                        </a>
                    </div>
                    <HeaderText text="Curriculo Robert" />
                    <HeaderText text="Design & Made with &#x1F496; by Robert Uillians" />
                </nav>
            </Container>
        </div>
    );
}