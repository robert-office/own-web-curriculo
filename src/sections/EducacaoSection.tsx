import { Typography } from "@mui/material";
import { Container } from "../components/Container";
import "./styles/ExperienciasStyles.css";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';


const VerticalTimelineConst = require('react-vertical-timeline-component');
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineConst;


export const EducacaoSection = () => {

    return (
        <section className="relative bg-educacao pt-40">
            <div id="educacaoSection" className="relative mx-auto sm:before:skew-y-3 md:before:skew-y-2 2xl:before:skew-y-1">
                <Container>
                    <Typography variant="h5" color={'white'} className="lg:text-left text-center mb-3" component="h5">
                        Educação
                    </Typography>

                    <div className="mt-20">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Curso Básico de Informática</h3>
                                <h4 className="vertical-timeline-element-subtitle">Término: 2018</h4>
                                <h4 className="vertical-timeline-element-subtitle">São Paulo, SP</h4>
                                <h4 className="vertical-timeline-element-subtitle">UP EXPRESS</h4>
                                <p>
                                    Realizei este curso básico a anos atrás, este foi só o começo de uma longa jornada na area da técnologia. Nele que me aperfeiçoei e fui instruido a aprender o básico do Word, Excel, Photoshop e muito mais
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Curso Técnico</h3>
                                <h3 className="vertical-timeline-element-title">Analise e Desenvolvimento de Sistemas</h3>
                                <h4 className="vertical-timeline-element-subtitle">Término: 2021</h4>
                                <h4 className="vertical-timeline-element-subtitle">São Paulo, SP</h4>
                                <h4 className="vertical-timeline-element-subtitle">ETEC JÂRDIM ANGELA</h4>
                                <p>
                                Curso focado em instruir ao básico do desenvolvimento de lógica de programação, e que me rendeu o primeiro estágio na área da técnologia como desenvolvedor WEB Full-Stack em PHP
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </Container>
            </div>
        </section>
    );
}