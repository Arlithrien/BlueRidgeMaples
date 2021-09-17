import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';
import TopBar from './TopBar';
import Footer from './Footer';


function Layout(props) {
  return (
    <div>
      <nav nav className={classes.topbar}>
        <TopBar/>
      </nav>
      <nav className={classes.nav}>
        <MainNavigation />
        </nav>
      
    
      <main className={classes.main}>
       
          {props.children}
          
      </main>
      <div>
      <Footer />
      </div>
      
    </div>
    
  )
}
export default Layout;