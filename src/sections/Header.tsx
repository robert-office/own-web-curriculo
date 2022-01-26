import { Container } from "../components/Container";
import { HeaderText } from "../components/HeaderText";
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

    const handleToggle = () => {
        document.getElementById("nav-content")!.classList.toggle("hidden");
    }

    return (
        <div className="relative w-full border-b border-cinza">
            <Container>
                <nav className="relative flex items-center justify-between flex-wrap bg-grey-darkest p-6 w-full z-10 pin-t">
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
                        id="nav-content"
                    >
                        <ul className="lg:flex flex-col lg:flex-row justify-center lg:justify-end flex-1 items-center">
                            <li className="text-center mr-3">
                                <HeaderText text="abcd" />
                            </li>
                            <li className="text-center mr-3">
                                <HeaderText text="abcd" />
                            </li>
                            <li className="text-center mr-3">
                                <HeaderText text="abcd" />
                            </li>
                            <li className="text-center mr-3">
                                <HeaderText text="abcd" />
                            </li>
                        </ul>
                    </div>
                </nav>
            </Container>
        </div>
    );
}