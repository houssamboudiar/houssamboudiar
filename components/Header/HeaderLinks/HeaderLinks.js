import { Button, NavigationLink } from '../../UIKit';

export default function HeaderLinks() {
  return (
    <>
      <NavigationLink href='/aboutme'>About Me</NavigationLink>
      <NavigationLink href='/portfolio'>Portfolio</NavigationLink>
      <NavigationLink href='/blog'>Blog</NavigationLink>
      <Button variant='secondary' href={'/Houssam Boudiar Resume.pdf'}  target="_blank" download>
        Curriculum Vitae
      </Button>
    </>
  );
}
