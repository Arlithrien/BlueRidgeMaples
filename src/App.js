
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import AboutUsPage from './pages/AboutUs';
import ContactPage from './pages/Contact';
import AddToCatalogPage from './pages/AddToCatalog';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/catalog'>
          <CatalogPage/>
        </Route>
        <Route path='/about'>
          <AboutUsPage/>
        </Route>
        <Route path='/contact'>
          <ContactPage/>
        </Route>
        <Route path='/addtocatalog' exact>
          <AddToCatalogPage/>
        </Route>
      </Switch>
    </Layout>
  )
}

export default App;
