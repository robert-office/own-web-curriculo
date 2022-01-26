import { ConhecimentosSection } from './sections/ConhecimentosSection';
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
    </>
  );
}

export default Home;
