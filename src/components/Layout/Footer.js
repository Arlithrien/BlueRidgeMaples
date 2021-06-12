import classes from './Footer.module.css';
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <footer className={classes.footer}>
      <div>
        <nav>
          
              <Link to='/about'>About us</Link>
          
        </nav>
      </div>
    </footer>
  )
}

export default Footer;