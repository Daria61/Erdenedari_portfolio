import { ReactLenis, useLenis } from "lenis/react";

export default function Layout() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{/* content */}</ReactLenis>;
}
