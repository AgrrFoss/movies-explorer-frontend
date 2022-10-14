import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox () {
    return (
        <div className='checkbox'>
            <label className='checkbox__label'>
                <input type='checkbox' className='checkbox__input'/>
                <span className='checkbox__switch'>
                    <span className='checkbox__level'/>
                </span>
                <span className='checkbox__text'>Короткометражки</span>
            </label>
        </div>
    );
};

export default FilterCheckbox;