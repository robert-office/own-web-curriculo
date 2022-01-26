import { Container } from "../components/Container";
import { HeaderText } from "../components/HeaderText";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

    const handleToggle = () => {
        document.getElementById("mobile")!.classList.toggle("hidden");
    }

    return (
        <div className="relative w-full border-b border-cinza bg-bodyHeadeer">
            <Container>
                <nav className="relative flex items-center justify-between flex-wrap p-6 w-full">
                    <div className="flex items-center flex-no-shrink text-white mr-6">
                        <button className="text-white">
                            <span className="text-2xl pl-2">
                                <i/> Robert Curriculo
                            </span>
                        </button>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={handleToggle}
                            id="nav-toggle"
                            className="flex items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-white hover:border-white"
                        >
                            <MenuIcon />
                        </button>
                    </div>
                    <div
                        className="w-full flex-grow lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
                        id="mobile"
                    >
                        <ul className="lg:flex flex-col lg:flex-row justify-center lg:justify-end flex-1 items-center lg:space-x-10 space-x-0 lg:space-y-0 space-y-10">
                            <li className="text-center">
                                <HeaderText text="Objetivos" />
                            </li>
                            <li className="text-center">
                                <HeaderText text="Conhecimentos" />
                            </li>
                            <li className="text-center">
                                <HeaderText text="Educação" />
                            </li>
                            <li className="text-center">
                                <HeaderText text="Experiências" />
                            </li>
                            <li className="text-center">
                                <HeaderText text="Projetos" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    );
}