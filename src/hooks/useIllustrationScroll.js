import { useEffect } from 'react';

export default function useIllustrationScroll() {
  useEffect(() => {
    const illustration = document.querySelector('.auth-illustration');
    if (!illustration) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const scale = Math.max(0, 1 - scrollY / 600);
      const opacity = Math.max(0, 1 - scrollY / 400);

      illustration.style.transform = `scale(${scale})`;
      illustration.style.opacity = opacity;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
