import { ConhecimentosSection } from './sections/ConhecimentosSection';
import { EducacaoSection } from './sections/EducacaoSection';
import { ExperienciasSection } from './sections/ExperienciasSection';
import { Header } from './sections/Header';
import { ObjetivosSection } from './sections/ObjetivosSection';
import { ProjetosSection } from './sections/ProjetosSection';

function Home() {
  return (
    <>
    <Header/>
    <ObjetivosSection/>
    <ConhecimentosSection/>
    <ExperienciasSection/>
    <EducacaoSection/>
    <ProjetosSection/>
    </>
  );
}

export default Home;
