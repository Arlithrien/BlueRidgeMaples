
import classes from './TopBar.module.css';

function TopBar () {
    return(
        <header className={classes.header}>
            <div className={classes.socialmedia}>
                <ul>
                    <li>
                        <a href="https://linkedin.com/in/csfleming">
                            <img src='https://www.pikpng.com/pngl/b/57-572097_linkedin-transparent-icon-linked-in-logo-with-white.png' height='30' width='30' alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Arlithrien">
                            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' height='30' width='30' alt="github" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:chris.s.fleming2@gmail.com">
                            <img src='https://png2.cleanpng.com/sh/9749a44b27515075e28765d59bbb611f/L0KzQYm3U8I2N6N9fZH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6Tf1wappxfZ95aHBxdcS0hf53bZ10iNc2Y3zsgH7okwQubZ97fd54cHWwfbLwjL02aZM8e9YDOEC8RoG5Ur41QWY5SagCN0G4QoKCWcUyPGU1S6o9LoDxd1==/kisspng-computer-icons-mobile-phones-envelope-clip-art-envelope-mail-5ab7cd88096022.4954167715219951440384.png' height='35' weidth='35' alt="email"/>
                        </a>
                    </li>
                    
                </ul>
                

            </div>
            <nav className={classes.nav}>
                <ul>
                    
                    <li>
                        <img src='https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-1024.png' height='30' width='30' alt="cart"/>    
                    </li>
                    
                </ul>
            </nav>

        </header>
        
    )

}

export default TopBar;