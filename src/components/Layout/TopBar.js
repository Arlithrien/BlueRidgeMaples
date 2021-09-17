import { Link, NavLink } from 'react-router-dom';
import classes from './TopBar.module.css';

function TopBar () {
    return(
        <header className={classes.header}>
            <div className={classes.socialmedia}>
                <ul>
                    <li>
                        <img src='https://www.pikpng.com/pngl/b/57-572097_linkedin-transparent-icon-linked-in-logo-with-white.png' height='30' width='30'/>
                    </li>
                    <li>
                        <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' height='30' width='30'/>
                    </li>
                </ul>
                

            </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        (123) 687-5309
                    </li>
                    
                </ul>
            </nav>

        </header>
        
    )

}

export default TopBar;