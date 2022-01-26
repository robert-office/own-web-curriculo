import { Typography } from "@mui/material";
import { Container } from "../components/Container";
import "./styles/ExperienciasStyles.css";
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import HelpIcon from '@mui/icons-material/Help';


const VerticalTimelineConst = require('react-vertical-timeline-component');
const { VerticalTimeline, VerticalTimelineElement } = VerticalTimelineConst;


export const ExperienciasSection = () => {

    return (
        <section className="relative bg-experiencia pt-40">
            <div id="ExperienciasSection" className="relative mx-auto sm:before:-skew-y-3 md:before:-skew-y-2 2xl:before:-skew-y-1">
                <Container>
                    <Typography variant="h5" color={'white'} className="lg:text-left text-center mb-3" component="h5">
                        Experiências
                    </Typography>

                    <div className="mt-20">
                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">Desenvolvedor WEB PHP</h3>
                                <h4 className="vertical-timeline-element-subtitle">dez. de 2019 à dez. de 2020</h4>
                                <h4 className="vertical-timeline-element-subtitle">São Paulo, SP</h4>
                                <h4 className="vertical-timeline-element-subtitle">Jl Seguros</h4>
                                <p>
                                    Desenvolvedor estagiário PHP full-stack com acesso a bibliotécas como Jquery e bootstrap
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date=""
                                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                icon={<HelpIcon />}
                            >
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </Container>
            </div>
        </section>
    );
}