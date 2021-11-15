import React from 'react';
import { Container, Row } from 'react-bootstrap';
import news1 from '../../../images/news1.png';
import news2 from '../../../images/news2.png';
import news3 from '../../../images/news3.png';
import SingleNews from '../SingleNews/SingleNews';
import './LatestNews.css';

const LatestNews = () => {

  const latestNews = [
    {
      id: 1,
      title: "New Experts Arrivals",
      time: "March 15, 2021",
      description: "We now have more bike experts ! ...",
      image: news1
    },
    {
      id: 2,
      title: "Replace yor scilencer ",
      time: "March 17, 2021",
      description: "Silencer repair started in bike repair shop...",
      image: news2
    },
    {
      id: 3,
      title: "Got 1st prize,,,,,",
      time: "March 17, 2021",
      description: "shop got first prize in a compitition...",
      image: news3
    }
  ]

  return (
    <section className='news-container' id='blog'>
      <Container className="py-5">
        <h3>Blog's</h3>
        <Row className="mt-5 border border-4 ">
          {
            latestNews.map(news => <SingleNews key={news.id} news={news} />)
          }
        </Row>
      </Container>
    </section>
  );
};

export default LatestNews;