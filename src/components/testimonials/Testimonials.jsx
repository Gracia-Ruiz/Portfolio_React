import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';
import AVTR6 from '../../assets/avatar6.jpg';
import AVTR7 from '../../assets/avatar7.jpg';

// import Swiper core and required modules
import { Navigation,Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Nicola Milella" />
          </div>
          <h5 className='client__name'>Nicola Milella - Coordinador de Hackademy España</h5>
            <small className='client__review'>
            He vivido el crecimiento de Gracia de los últimos 2 años y ha sido brutal. Desde estudiante a compañera/colega, ha aportado muchísimo a la empresa y ha dejado su huella en todos nosotros, tanto a nivel profesional como personal. No dudo de que tendrá mucho éxito en su carrera tech!
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Nicola Gasparro" />
          </div>
          <h5 className='client__name'>Nicola Gasparro - Academic Teacher at Aulab España</h5>
            <small className='client__review'>
            Reliable and very professional person. Excellent teammate, groups manger and good web full-stack developer. It is always a pleasure to work with her as a teacher programming and on different web projects 
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
          <h5 className='client__name'>Gemma Zaragoza Balaguer - Diseño Gráfico & Front-End Developer Junior</h5>
          <small className='client__review'>
          Profesional, responsable y trabajadora son algunas de las buenas aptitudes de Gracia. Siempre está ahí para apoyar al equipo y en caso de haber problemas, intentar solucionarlo. Todo lo que se propone, lo logra. Dedicada a su trabajo. Muy buena compañera y totalmente confiable.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Marta S. Haro - Junior Front End Developer</h5>
          <small className='client__review'>
          Formadora comprometida y excelente compañera. Gracia tiene pasión y una vocación muy clara por la enseñanza, y siempre busca la forma de facilitar el aprendizaje de sus alumnas adaptando el currículo a cada grupo y cada caso. En el tiempo que lleva programando, su evolución ha sido muy notable, y estoy convencida de que aportará toda su pasión y compromiso a cualquier empresa que apueste por ella.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR5} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Alan François - Content Manager en Aulab España</h5>
          <small className='client__review'>
          Trabajar con Gracia es estupendo. Siempre está llena de energías y con ganas de aprender. Una compañera que te explica con paciencia todo lo que sabe, que te da una mano si necesitas ayuda y que nunca te deja solo. Sin dudas una pieza clave en mi día a día en el trabajo.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR6} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>María José Hernández Sánchez - JCareer Advisor/ Digital Community</h5>
          <small className='client__review'>
          ¡Excelente profesional y compañera! Trabajamos en departamentos diferentes pero siempre me ayuda en todo lo que puede, con su experiencia y sus conocimientos. Gracias compañera, ¡estoy aprendiendo mucho de ti!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR7} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Nahuel Barbieri - Frontend Developer en InboundCycle | Agencia Inbound</h5>
          <small className='client__review'>
          Ha sido un placer compartir con Gracia. Es buena compañera y muy empática. Intenta saber un poco de todo respecto al ambiente laboral y lo que no sepa lo averigua.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials;