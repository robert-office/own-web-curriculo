import { Typography } from "@mui/material";

export const PhotoAndObjectiveSection = () => {
    return (
        <section className="w-full flex lg:flex-row flex-col">
            <div className="lg:w-1/3 w-0">

            </div>
            <div className="lg:w-2/3 w-full flex flex-col py-5 justify-center">
                <div className="w-full h-full flex justify-center lg:justify-start px-2 mb-2">
                    <Typography variant="h5" color={'white'} className="lg:text-left text-center" component="h5">
                        Objetivos
                    </Typography>
                </div>
                <div className="w-full h-full flex justify-center lg:justify-start px-2">
                    <Typography variant="h6" className="text-cinza lg:text-left text-center" component="h6">
                        Estarei a disposição da empresa para aprender novas técnologias, neste 2022 estou conhecendo vários frameworks para aperfeiçoar meus
                        conhecimentos, dentre eles, o Framework de Frontend ReactJs, e para
                        Backend o Framework Laravel.
                        No geral, meu objetivo é me realocar no mercado de trabalho,
                        e aprender muitas técnologias e bibliotécas novas para o meu
                        crescimento profissional.
                    </Typography>
                </div>
            </div>
        </section>
    );
}