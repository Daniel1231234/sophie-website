import { useEffect, useRef } from 'react';

export const useReavel = () => {
  const reveals = useRef(null);

  useEffect(() => {
    reveals.current = document.querySelectorAll('.reveal');
  }, []);

  useEffect(() => {
    const windowHeight = window.innerHeight;

    for (let i = 0; i < reveals.current.length; i++) {
      const elementTop = reveals.current[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals.current[i].classList.add('active');
      } else {
        reveals.current[i].classList.remove('active');
      }
    }
  });
};
