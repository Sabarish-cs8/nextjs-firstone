import ScaleImg from 'public/scale.jpg'
import Hero from '@/components/hero';
export default function Scale() {
  return (
  <Hero imgData={ScaleImg} imgAlt="Steel factory" title="Scale your app to infinity" />
  );
}
