import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Base = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durée des animations en ms
          once: true,     // Si true, l'animation ne se joue qu'une fois
        });
      }, []);

  return (
    <div className=' b-amber-800 py-3 w-full text-white bg-blue-950 bg'>
        Base
        <h1 data-aos="fade-up">Titre animé au scroll</h1>
        <p data-aos="zoom-in">Paragraphe animé</p>
    </div>
  )
}

export default Base