import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Header from './views/layouts/header';
import Footer from './views/layouts/footer';
import Audio from './views/pages/audio';
import Post from "./views/pages/post";


class App extends React.Component {
    
   render() {
      return (
         <div className="container-fluid">
            <Router history={browserHistory}>
                <Route path={"/"} component={Header}>
                    <IndexRoute component={Post}/>
                    <Route path={"post"} component={Post}/>
                    <Route path={"audio"} component={Audio}/>
                </Route>
            </Router>
            <Footer/>
         </div>
      );
   }
}
ReactDOM.render(<App/>, document.getElementById("root"));