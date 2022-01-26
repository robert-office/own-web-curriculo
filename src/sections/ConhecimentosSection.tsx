import { Typography } from "@mui/material";
import { Container } from "../components/Container";

import Bootstrap from "../assets/tec/bootstrap.png";
import html_css from "../assets/tec/html-css.png";
import jquery from "../assets/tec/jquery.png";
import laravel from "../assets/tec/laravel.png";
import php from "../assets/tec/php.png";
import react from "../assets/tec/react.png";
import tailwind from "../assets/tec/tailwind.png";
import typescript from "../assets/tec/typescript.png";
import { LogoTecnologia } from "../components/LogoTecnolgia";

import "./styles/conhecimentosStyles.css";

export const ConhecimentosSection = () => {

    const tecs = [
        {
            nome: 'HTML, CSS, JS',
            icon: html_css,
            rounded: true
        },
        {
            nome: 'PHP',
            icon: php,
            rounded: false
        },
        {
            nome: 'Bootstrap',
            icon: Bootstrap,
            rounded: true
        },
        {
            nome: 'Jquery',
            icon: jquery,
            rounded: true
        },
        {
            nome: 'Laravel',
            icon: laravel,
            rounded: false
        },
        {
            nome: 'React',
            icon: react,
            rounded: false
        },
        {
            nome: 'Tailwind',
            icon: tailwind,
            rounded: false
        },
        {
            nome: 'Typescript',
            icon: typescript,
            rounded: false
        },

    ];

    return (
        <section className="relative bg-conhecimentos pt-40">
            <div id="conhecimentoSection" className="relative mx-auto sm:before:skew-y-3 md:before:skew-y-2 2xl:before:skew-y-1">
                <Container>
                    <Typography variant="h5" color={'white'} className="lg:text-left text-center mb-3" component="h5">
                        Conhecimentos
                    </Typography>

                    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-10 gap-y-12 w-full mt-6 sm:px-0 px-3">
                        {tecs.map((tecnologia) => {
                            return (<LogoTecnologia key={`${String(Math.round(Math.random() * 1003))}_tecnologias`} icon={tecnologia.icon} title={tecnologia.nome} rounded={tecnologia.rounded} />)
                        })}
                    </div>
                </Container>
            </div>
        </section>
    );
}