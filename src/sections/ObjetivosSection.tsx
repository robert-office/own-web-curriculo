import { Container } from "../components/Container";
import { NameSubSection } from "./sub-sections/NameSubSection";
import { PhotoAndObjectiveSection } from "./sub-sections/PhotoAndObjectiveSection";
import "./styles/photoAndObjectiveStyles.css";

export const ObjetivosSection = () => {
    return (
       
            <section className="bg-objtivos">
                <div id="objctiveSection" className="relative mx-auto sm:before:-skew-y-3 md:before:-skew-y-2 2xl:before:-skew-y-1" style={{ zIndex: "100" }}>
                    <div className="w-full border-b-2 border-cinza">
                        <Container>
                            <NameSubSection />
                        </Container>
                    </div>
                    <Container>
                        <PhotoAndObjectiveSection />
                    </Container>
                </div>
            </section>
        
    );
}