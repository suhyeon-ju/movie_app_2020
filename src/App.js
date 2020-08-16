import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from './components/Navigation';

function App(){
  return( 
    //path 경로로 component의 내용을 랜더링
    //exact={true}는 해당 하는 것만 랜더링 하겠다는 것. 없으면 아래의 about까지 출력된다.
    //Link를 사용하면 Router안에 넣어줘야 한다.(navigation에 link사용)
    //Link 의 to와 Route의 path가 같아야 연결된다.
  <HashRouter>
    <Navigation/>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About}/>
    <Route path="/movie/:id" component={Detail}/>
  </HashRouter>
  );
}

export default App;