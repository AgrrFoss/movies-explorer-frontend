import React from 'react';
import { useHistory } from 'react-router-dom';
import './Page404.css';

function Page404 () {
    
const history = useHistory(); 

    return (
        <div className='page404'>
            <h2 className='page404__title'>404</h2>
            <p className='page404__subtitle'>Страница не найдена</p>
            <button className='page404__back' onClick={() => {history.goBack()}}>Назад</button>
        
        </div>
    );
};

export default Page404;