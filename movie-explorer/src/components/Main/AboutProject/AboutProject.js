import React from 'react';
import './AboutProject.css';


function AboutProgect () {
    return (
        <section className='about-project'>
            <div className='about-project__title-block'>
                <h2 className='about-project__title'>О проекте</h2>
            </div>
            <div className='about-project__info-block'>
                <div className='about-project__info'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__info'>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__progress'>
                <div className='about-project__progress-band'>1 неделя</div>
                <div className='about-project__progress-band about-project__progress-band_gray'>4 недели</div>
                <p className='about-project__progress-text'>Back-end</p>
                <p className='about-project__progress-text about-project__progress-text_front'>Front-end</p>
            </div>

        </section>
    );
};

export default AboutProgect;