import { Button, NavigationLink } from '../../UIKit';

export default function HeaderLinks() {
  return (
    <>
      {/* <NavigationLink href='/portfolio'>Portfolio</NavigationLink>
      <NavigationLink href='/aboutme'>About Me</NavigationLink>
      <NavigationLink href='/blog'>Blog</NavigationLink> */}
      <NavigationLink href='/'>Portfolio</NavigationLink>
      <NavigationLink href='/'>About Me</NavigationLink>
      <NavigationLink href='/'>Blog</NavigationLink>
      <Button variant='secondary' href='https://docs.google.com/document/d/10ZKvAHIu6M1586r2PBJYJ1TlLCINPqgbJMQAvFgSpEw/edit?usp=sharing'  target="_blank">
        Curriculum Vitae
      </Button>
    </>
  );
}
