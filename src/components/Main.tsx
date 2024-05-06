import 'bulma/css/bulma.css';
import '../index.scss';
import { Whether } from './Whether';

export function Main() {
  return (
    <div className='main-contets'>
      <div className='main-contet'>
        <div className='main-contets-texts'>
          <div className='main-contets-text'>
            <h2>5555</h2>
            <p>Helping people make the world a better place through quality software.</p>
          </div>
        </div>
        <div className='main-contets-whether'>
          <h2>今日の天気</h2>
          <div>
            <Whether/>
          </div>
        </div>
      </div>
    </div>
  )}