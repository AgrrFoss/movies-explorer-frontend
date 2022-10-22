import React from 'react';
import './SearchForm.css';
import iconPath from '../../images/search_icon.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm () {
    return (
        <section className='search'>
            <div className='search__block'>
                <div className='search__form'>
                    <img className='search__icon'
                    alt='иконка поиска'
                    src={iconPath}/>
                    <input
                    className='search__input'
                    type='text'
                    placeholder='Фильм'
                    required
                    />
                    <button className='search__button'/>
                </div>
                <FilterCheckbox/>
            </div>
        </section>
    );
};

export default SearchForm;