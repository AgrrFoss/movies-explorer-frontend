import React from 'react';
import './Portfolio.css'

function Portfolio () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__work'>
                <p className='portfolio__work-name'>Статичный сайт</p>
                <p className='portfolio__work-arche'>↗</p>
            </div>
            <div className='portfolio__work'>
                <p className='portfolio__work-name'>Адаптивный сайт</p>
                <p className='portfolio__work-arche'>↗</p>
            </div>
            <div className='portfolio__work'>
                <p className='portfolio__work-name'>Одностраничное приложение</p>
                <p className='portfolio__work-arche'>↗</p>
            </div>
        </section>
    );
};

export default Portfolio;