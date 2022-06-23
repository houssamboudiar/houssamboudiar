import { Hero } from '../screens/Blog';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogCard';

import { getSortedPostsData } from '../lib/posts';
import { Container, Section, Text, Wrapper } from '../components/UIKit';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout title='Houssam Boudiar | Blog'>
      <Hero />
      <Section py={[45, 45, 45]} px={[32, 60, 90]}>
        <Wrapper display={['grid']} gridGap={[16]} mb={[48]}>
          <Text size={['heading4', 'heading2', 'heading2']}>
            Latest articles
          </Text>
          <Text size='caption'>
            {' '}
          </Text>
        </Wrapper>
        <Container display={['grid']} gridGap={[32]}>
          {allPostsData.map(({ id, date, title, image, desc }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a>
                <BlogCard title={title} date={date} image={image} desc={desc} />
              </a>
            </Link>
          ))}
        </Container>
      </Section>
    </Layout>
  );
}
