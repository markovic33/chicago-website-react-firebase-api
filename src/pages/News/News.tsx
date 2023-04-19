import React, { useEffect, useState} from 'react'
import axios from 'axios';
import NewsItem, { Props as NewsItemProps } from './NewsItem';
import './news.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




const News = () => {

  const [articles, setArticles] = useState<NewsItemProps[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get('https://newsapi.org/v2/everything?q=chicago+bulls&apiKey=3f769ce9977b4903b99ce619c6bc9843');
      console.log(response);
      setArticles(response.data.articles)
   }
   getArticles();
  }, []);

   
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

  return (
    <div style={{ width: "100%",justifyContent:"center", alignItems:"center", textAlign:"center", padding:"30px", height: "100vh", backgroundColor:"rgb(163, 102, 102)"}}>
     <h1 className='news__main__h1'>Bulls News</h1>
      <div className='news__main'> 
            <Slider {...settings}>
            {articles.map(article => {
                return (
                  <div className="news__main__item">
                    <NewsItem 
                      key={article.title}
                      title={article.title}
                      description={article.description}
                      url={article.url}
                      urlToImage={article.urlToImage}
                    />
                  </div>
                )
              })}
            </Slider>
            

          </div>
        </div>
  );
};


export default News