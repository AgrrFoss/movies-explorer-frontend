import React from 'react';
import './SearchForm.css';
import iconPath from '../../images/search_icon.svg'
import FilterCheckbox from './FilterCheckbox/FilterCheckbox'

function SearchForm (props) {
    const [value, setValue] = React.useState('');
    const [clearForm, setClearForm] = React.useState(false);

    function handleSearch (e) {
        e.preventDefault()
        if (!value) {
            setClearForm(true)
        } else {
            setClearForm(false)
            props.handleSearchForm(value)
        }
    }

    return (
        <section className='search'>
            <div className='search__block'>
                <form className='search__form' onSubmit={handleSearch}>
                    <img className='search__icon'
                    alt='иконка поиска'
                    src={iconPath}/>
                    <input
                    className='search__input'
                    type='text'
                    placeholder='Фильм'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    />
                    <button type='submit' className='search__button'/>
                </form>
                <FilterCheckbox/>
            </div>
            {clearForm && <span>Нужно ввести ключевое слово.</span>}
        </section>
    );
};

export default SearchForm;