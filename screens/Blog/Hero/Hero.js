import { Container, Section, Text, Wrapper } from '../../../components/UIKit';

export default function Hero() {
  return (
    <Section pt={[90, 90, 90]} px={[32, 60, 90]} pb={[90, 100, 120]}>
      <Container
        display={['flex']}
        flexDirection={['column']}
        alignItems={['center']}
        justifyContent={['center']}
      >
        <Wrapper display={['grid']} gridGap={[16]} textAlign={['center']}>
          <Text size={['heading3', 'heading1', 'hero']}>
            Welcome to my personal blog
          </Text>
          <Text size={['body2', 'body', 'body']}>
            Documenting the things i learn from others, hopefully i pave the way behind me.
          </Text>
        </Wrapper>
      </Container>
    </Section>
  );
}
