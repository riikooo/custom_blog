import 'bulma/css/bulma.css';
import '../index.scss';
import { Whether } from './Whether';
import StarWars from './StarWars';

export function Main() {
  return (
    <div>
      <div className='main-contets'>
        <div className='main-contet'>
          <div className='main-contets-texts'>
            <div className='main-contets-text'>
              <h2>5555</h2>
              <p>Helping people make the world a better place through quality software.</p>
            </div>
          </div>
          <div className='main-contets-whether'>
            <Whether/>
          </div>
        </div>
      </div>
      <div className='main-sub-contents'>
          <h3>今日の<br/>スターウォーズ豆知識</h3>
          <div className='main-sub-contents-starwars'>
            <StarWars />
          </div>
        </div>
    </div>
  )}