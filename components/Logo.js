import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 36px auto;
  align-items: center;

  @media (max-width: 414px) {
    grid-template-columns: 32px auto;
  }
`;

const Image = styled.img`
  width: 42px;
  height: 42px;
  @media (max-width: 414px) {
    width: 32px;
    height: 32px;
  }
`;

const Text = styled.p`
  font-size: 27px;
  font-weight: bold;
  margin-left: 17px;
  color: white;

  @media (max-width: 414px) {
    font-size: 22px;
    margin-left: 4px;
  }
`;

export default function Logo() {
  return (
    <Container>
      <Image alt='' src='/Untitled-1-01.svg' />
      <Text>Houssam Boudiar</Text>
    </Container>
  );
}
