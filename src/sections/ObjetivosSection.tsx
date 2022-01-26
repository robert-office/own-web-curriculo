import { Container } from "../components/Container";
import { NameSubSection } from "./sub-sections/NameSubSection";
import { PhotoAndObjectiveSection } from "./sub-sections/PhotoAndObjectiveSection";

export const ObjetivosSection = () => {
    return (
        <section className="bg-objtivos">
            <div className="w-full border-b-2 border-cinza">
                <Container>
                    <NameSubSection />
                </Container>
            </div>
            <Container>
                <PhotoAndObjectiveSection/>
            </Container>
        </section>
    );
}