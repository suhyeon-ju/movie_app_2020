import React from 'react';

function Food({fav}){   //props.fav 는 {fav}랑 같다
  return <h1>I like {fav}</h1>;
}
function App() {  //component : html을 반환하는 함수
  return (
    <div className="App">
        <h1>
           Hello!!
           <Food fav="kimchi"/>
           <Food fav="ramen"/>
           <Food fav="samgiopsal"/>
           <Food fav="chukumi"/>
        </h1>
    </div>
      
   
  );
}

export default App;
