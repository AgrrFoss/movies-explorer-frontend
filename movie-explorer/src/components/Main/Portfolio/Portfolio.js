import React from 'react';
import './Portfolio.css'

function Portfolio () {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__work'>
                    <a className='portfolio__link'
                    href='https://github.com/AgrrFoss/how-to-learn'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <p className='portfolio__work-name'>Статичный сайт</p>
                        <p className='portfolio__work-arche'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio__link'
                    href='https://github.com/AgrrFoss/russian-travel'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <p className='portfolio__work-name'>Адаптивный сайт</p>
                        <p className='portfolio__work-arche'>↗</p>
                    </a>
                </li>
                <li className='portfolio__work'>
                    <a className='portfolio__link'
                    href='https://github.com/AgrrFoss/react-mesto-api-full'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <p className='portfolio__work-name'>Одностраничное приложение</p>
                        <p className='portfolio__work-arche'>↗</p>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;