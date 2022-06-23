import Cta from '../components/Cta/Cta';
import Layout from '../components/Layout';
import { Companies, Facts, Hero, Values } from '../screens/AboutMe';
export default function AboutMe() {
  return (
    <Layout title='Houssam Boudiar | About'>
      <Hero />
      <Companies />
      <Values />
      <Cta />
    </Layout>
  );
}
