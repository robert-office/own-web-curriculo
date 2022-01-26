import { Typography } from "@mui/material";
import { Container } from "../components/Container";
import ProjetoCard from "../components/ProjetoCard";
import { projetos } from "../utils/projetos.js";

export const ProjetosSection = () => {

    return (
        <section className="relative bg-projetos pt-40 pb-10">
            <div id="ProjetosSection" className="relative mx-auto">
                <Container>
                    <Typography variant="h5" color={'white'} className="lg:text-left text-center mb-3" component="h5">
                        Projetos
                    </Typography>

                    <div className="mt-10">
                        <div className="flex overflow-x-scroll space-x-10 pb-10 pl-5 lg:pl-0 sm:pl-10">
                            { projetos.map( (projeto) => {
                                return <ProjetoCard img={projeto.img} desc={projeto.desc} nome={projeto.nome} hospedado={projeto.hospedado} href={projeto.href} tags={projeto.tags} key={`projetos_${String(Math.round(Math.random() * 1234))}`} />
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}