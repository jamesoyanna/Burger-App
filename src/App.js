import React, {Component} from 'react';
//import app from '../src/App.css';
import Layout from '../src/components/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render(){
  return (
    <div>
      <Layout>
     <BurgerBuilder />
      </Layout>
    </div>
  );
  }
}
export default App;



