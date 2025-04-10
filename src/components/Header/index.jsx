import Logo from '../../assets/Logo.png';
import "./style.css";
import { CirclePlus } from 'lucide-react';

export function Header() {
    return (
      <header>
        <img src={Logo} alt="" />
        <div className='container'>
        <input type="text" placeholder='Adicione uma nova tarefa'/>
        <button type='button'><CirclePlus/></button>
        </div>

      </header>
    );
  }