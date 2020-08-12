import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";


class Home extends React.Component{
  state = {
    isLoading: true,
    movie: []
  };
//axios.get은 느리다 즉, componentDidMount가 끝날때까지 시간이 좀 걸린다.
// async 써줘야 await사용 가능(비동기 처리 패턴)
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    }= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    // this.setState({movies:movies}) setState의 movie와 axios의 movies
       this.setState({movies, isLoading: false})
    
  };

  componentDidMount(){ //페이지 시작후 동작
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;  // 아래에 isLoading을 this.state.isLoading으로 매번 적지 않기 위해서
    return (
      //자바스크립트의 클래스와 component class의 차이를 구분하기 위해 자바스크립트의 클래스는 classname으로 하자
      <section className="container">
        {isLoading
          ? <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          : (
            <div className="movies">
              {movies.map(movie => (

                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default Home;
