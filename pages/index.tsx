import {
  Button,
  Card,
  CardGrid,
  GuiderLayout,
  Hero,
  Frame,
} from "@neato/guider/client";

export default function LandingPage() {
  return (
    <GuiderLayout meta={{ layout: "page" }}>
      <Hero>
        <Hero.Badge title="new" to="/linux/grub/Boot-to-Bash-Shell-via-GRUB">
          Boot to Bash Shell via GRUB
        </Hero.Badge>
        <Hero.Title>I write what I learn.</Hero.Title>
        <Hero.Subtitle>Contribute on github</Hero.Subtitle>
        <Hero.Actions>
          <Button to="/linux/welcome">Get started</Button>
          <Button to="https://github.com/Itsoon/blog" type="secondary">
            View on GitHub
          </Button>
        </Hero.Actions>
      </Hero>
    </GuiderLayout>
  );
}
