import React from 'react';

function Food({name, picture}){   //props.fav 는 {fav}랑 같다
  return(
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    name: "Kimchi",
    image: "https://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg"

  },{
    name: "Samgyeopsal",
    image: "https://i.pinimg.com/originals/14/48/c4/1448c47d11c3254aa3a1a31623394082.jpg"

  },{
    name: "Bibimbap",
    image:"https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg"
    

  },{
    name: "Doncasu",
    image: "https://m.charmdon.com/web/product/big/201705/108_shop1_430684.jpg"

  },{
    name: "Kimbap",
    image: "http://www.popcornnews.net/imgdata/popcornnews_net/201808/2018083105428569.jpg"

  }
]

function App() {  //component : html을 반환하는 함수
  return (
   <div>
     {foodILike.map(dish => (
     <Food name={dish.name} picture={dish.image} />
     )
     )}

   </div>
      
   
  );
}

export default App;
