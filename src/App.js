import React from 'react';
import PropTypes from "prop-types";


const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image: "https://m.gochoochongak.com/web/product/big/201810/1cf1eb74d9cbb972ee0fd10d7f25e49c.jpg",
    rating: 5

  },{
    id : 2,
    name: "Samgyeopsal",
    image: "https://i.pinimg.com/originals/14/48/c4/1448c47d11c3254aa3a1a31623394082.jpg",
    rating: 4.9

  },{
    id : 3,
    name: "Bibimbap",
    image:"https://img.etoday.co.kr/pto_db/2019/07/600/20190726153503_1350707_1200_876.jpg",
    rating: 4.8
    

  },{
    id : 4,
    name: "Doncasu",
    image: "https://m.charmdon.com/web/product/big/201705/108_shop1_430684.jpg",
    rating: 5.5

  },{
    id : 5,
    name: "Kimbap",
    image: "http://www.popcornnews.net/imgdata/popcornnews_net/201808/2018083105428569.jpg",
    rating: 4.7

  }
]

function Food({name, picture, rating}){   //props.fav 는 {fav}랑 같다
  return(
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,   //props간에 자료형이 다른 걸 전달햇을 경우 error 문구를 통해 확인 가능하게 하는 기능
  picture: PropTypes.string.isRequired,// 자료형이 틀리면 에러가 난다.
  rating: PropTypes.number.isRequired  // Invalid prop `rating` of type `number` supplied to `Food`, expected `string`.
}                                      //isRequired가 없으면 해당 값이 없어도 된다.

function App() {  //component : html을 반환하는 함수
  return (
   <div>
     {foodILike.map(dish => (
     <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
     )
     )}

   </div>
      
   
  );
}

export default App;
