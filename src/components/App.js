import '../styles/App.scss';
import initialClubs from '../data/clubs.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialClubs);
  const [newName, setNewName] = useState('');
  const [newopenOnWeekdays, setNewopenOnWeekdays] = useState(false);
  const [newopenOnWeekend, setNewopenOnWeekend] = useState(false);
  const [optionSelect, setOptionSelect] = useState(''); //por defecto tiene que ser 'all'
  const handleSelect = (ev) => {
    console.log(ev.currentTarget.value);
    setOptionSelect(ev.currentTarget.value);
  };
  const handleAddNewClub = (ev) => {
    if (ev.currentTarget.name === 'name') {
      setNewName(ev.currentTarget.value);
    } else if (ev.currentTarget.name === 'openOnWeekdays') {
      setNewopenOnWeekdays(ev.currentTarget.checked ? true : false);
    } else if (ev.currentTarget.name === 'openOnWeekend') {
      setNewopenOnWeekend(ev.currentTarget.checked ? true : false);
    }
  };

  const handleClickAdd = (ev) => {
    ev.preventDefault();
    const neWClub = {
      name: newName,
      openOnWeekdays: newopenOnWeekdays,
      openOnWeekend: newopenOnWeekend,
    };
    setData([...data, neWClub]);
    setNewName('');
    setNewopenOnWeekdays(false);
    setNewopenOnWeekend(false);
  };
  const handleClickRemove = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.id);
    data.splice(ev.currentTarget.id, 1);
    setData([...data]);
  };

  const printHTML = data
    // .filter((eachData) => eachData.openOnWeekdays.true === optionSelect.true)
    //explicación .filter( (eachData)=>{if(optionSelect===openOnWeekDays){return eachData.OpenOnWeekdays===true}}  )
    .map((eachData, index) => (
      <li className='clubList' key={index}>
        <h3>
          #{index}: {eachData.name}{' '}
          <button
            id={index}
            className='clubList__icon'
            onClick={handleClickRemove}
          >
            x
          </button>
        </h3>

        <p>Abierto entre semana:{eachData.openOnWeekdays ? 'Sí' : 'No'} </p>
        <p>Abierto el fin de semana:{eachData.openOnWeekend ? 'Sí' : 'No'}</p>
      </li>
    ));

  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header__title'>Mis clubs</h1>
        <form>
          <select
            name='list'
            id='list'
            value={optionSelect}
            onChange={handleSelect}
          >
            Mostrar:
            <option value='all'>Todos</option>
            <option value='openOnWeekdays'>Abren los días de semana</option>
            <option value='openOnWeekend'>Abren los findes</option>
          </select>
        </form>
      </header>
      <ul className='list'>{printHTML}</ul>

      <form className='new_club__form'>
        <h2>Añadir un nuevo club</h2>
        <label htmlFor=''>
          {' '}
          Nombre del club
          <input
            type='text'
            name='name'
            value={newName}
            onChange={handleAddNewClub}
          />
        </label>
        <label>
          ¿Abre entre semana?
          <input
            type='checkbox'
            name='openOnWeekdays'
            checked={newopenOnWeekdays}
            onChange={handleAddNewClub}
          />
        </label>
        <label>
          ¿Abre los fines de semana?
          <input
            type='checkbox'
            name='openOnWeekend'
            checked={newopenOnWeekend}
            onChange={handleAddNewClub}
          />
        </label>
        <input
          className='new_club__addBtn'
          type='submit'
          value='Añadir'
          onClick={handleClickAdd}
        />
      </form>
    </div>
  );
}

export default App;
