import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';


function MainNavigation () {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        {/*<img src='https://i.imgur.com/Ej1ks9p.png' alt='Blue Ridge Maples' height='85' width='350' /> */}
      </div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/catalog'>Catalog</Link>
            </li>
            <li>
              <Link to='/resources'>Resources</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
    </header> 
  )
} 

export default MainNavigation;