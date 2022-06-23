import Cta from '../components/Cta/Cta';
import Layout from '../components/Layout';
import { Hero, Works } from '../screens/Portfolio';

export default function Portfolio() {
  return (
    <Layout title='Houssam Boudiar | Portfolio'>
      <Works />
      <Cta />
    </Layout>
  );
}
