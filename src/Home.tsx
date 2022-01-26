import { ConhecimentosSection } from './sections/ConhecimentosSection';
import { EducacaoSection } from './sections/EducacaoSection';
import { ExperienciasSection } from './sections/ExperienciasSection';
import { Header } from './sections/Header';
import { ObjetivosSection } from './sections/ObjetivosSection';

function Home() {
  return (
    <>
    <Header/>
    <ObjetivosSection/>
    <ConhecimentosSection/>
    <ExperienciasSection/>
    <EducacaoSection/>
    </>
  );
}

export default Home;
