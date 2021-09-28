
import classes from './TopBar.module.css';

function TopBar () {
    return(
        <header className={classes.header}>
            <div className={classes.socialmedia}>
                <ul>
                    <li className={classes.logo}>
                        <a href="/">
                            <h1 className={classes.logo}>
                                <span className={classes.logoBlue}>Blue</span>RidgeMaples
                                </h1>
                            
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com/in/csfleming">
                            <img src='https://i.imgur.com/eYd1HCP.png' height='30' width='30' alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Arlithrien">
                            <img src='https://i.imgur.com/ihJmH3D.png' height='30' width='30' alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:chris.s.fleming2@gmail.com">
                            <img src='https://i.imgur.com/0pnJx5A.png' height='35' weidth='35' alt="email"/>
                        </a>
                    </li>
                    
                </ul>
                

            </div>
            <nav className={classes.nav}>
                <ul>
                    
                    <li>
                        <img src='https://i.imgur.com/eYACM8D.png' height='30' width='30' alt="cart"/>    
                    </li>
                    
                </ul>
            </nav>

        </header>
        
    )

}

export default TopBar;