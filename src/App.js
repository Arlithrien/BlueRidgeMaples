
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/Home';
import CatalogPage from './pages/Catalog';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import AddToCatalogPage from './pages/AddToCatalog';
import Layout from './components/Layout/Layout';
import Resources from './pages/Resources';
// import express from 'express';

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
        <Route path='/resources'>
          <Resources/>
        </Route>
        <Route path='/about'>
          <AboutPage/>
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
