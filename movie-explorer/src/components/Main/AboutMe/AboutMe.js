import React from 'react';
import './AboutMe.css';
import photoPath from '../../../images/gregori.jpg'

function AboutMe () {
    return (
        <section id='about-me' className='about-me'>
            <div className='about-me__title-block'>
                <h2 className='about-me__title'>Студент</h2>
            </div>
            <div className='about-me__content'>
                <div className='about-me__info-block'>
                    <div className='about-me__info-text'>
                        <h3 className='about-me__name'>Григорий</h3>
                        <p className='about-me__info'>Front-end разработчик, 28 лет</p>
                        <p className='about-me__desc'>Родился и живу в Нижнем Новгороде.
                        Раньше собирал простые сайты на конструкторах, в 2022 году прошел
                        обучение веб-разработке в Яндекс.Практикум. Сейчас активно развиваюсь в этом направлении. 
                        Ищу стажировку или вакансию на должность джуна. Занимаюсь спортом, музыкой,
                        предпочитаю активный отдых, путешествия. Очень люблю общаться с новыми людьми.</p>
                    </div>
                    <div className='about-me__info-links'>
                        <a href='https://vk.com/prosto_graff' className='about-me__link'>FaceBook</a>
                        <a href='https://github.com/AgrrFoss' className='about-me__link'>Github</a>
                    </div>
                </div>
                <img className='about-me__photo' src={photoPath} alt='мое фото'></img>
            </div>
        </section>
    );
};

export default AboutMe;