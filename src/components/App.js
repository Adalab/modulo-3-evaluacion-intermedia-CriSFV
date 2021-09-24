import '../styles/App.scss';
import initialClubs from '../data/clubs.json';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(initialClubs);

  const printHTML = data.map((eachData, index) => (
    <li className='clubList' key={index}>
      <h3>{eachData.name}</h3>
      <p>Abierto entre semana:{eachData.openOnWeekdays ? 'Sí' : 'No'} </p>
      <p>Abierto el fin de semana:{eachData.openOnWeekend ? 'Sí' : 'No'}</p>
    </li>
  ));

  return (
    <div className='page'>
      <header className='header'>
        <h1 className='header__title'>Mis clubs</h1>
        <form>
          <select name='list' id='list'>
            Mostrar:
            <option value='all'>Todos</option>
            <option value='openOnWeekdays'>Abren los días de semana</option>
            <option value='openOnWeekend'>Abren los findes</option>
          </select>
        </form>
      </header>
      <ul>{printHTML}</ul>

      <form className='new_club__form'>
        <h2>Añadir un nuevo club</h2>
        <label htmlFor=''>
          {' '}
          Nombre del club
          <input type='text' name='name' placeholder='Escribe aquí el nombre' />
        </label>
        <labe>
          ¿Abre entre semana?
          <input type='checkbox' name='openOnWeekdays' />
        </labe>
        <labe>
          ¿Abre los fines de semana?
          <input type='checkbox' name='openOnWeekend' />
        </labe>
      </form>
    </div>
  );
}

export default App;
