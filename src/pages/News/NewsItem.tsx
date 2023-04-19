import React from 'react'
import './newsitem.css';




export interface Props {
    title: string,
    description: string;
    url: string,
    urlToImage: string,

}

const NewsItem: React.FC<Props> = ({ title, description, url, urlToImage }) => {
  return (
    
      <div className='news_container'>
          <div className='news_item'>
              <div className='news_item__'>
                  <img src={urlToImage} alt={urlToImage} className="news_item__photo" />
                  <h3><a href={url} target="_blank">{title} </a></h3>
                  <p>{description}</p>
                  <h4><a href={url}>View More</a></h4>
              </div> 
          </div>
      </div>
    
  )
    
}

export default NewsItem