import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import CategoryCard from '../../components/categoryCard/categoryCard'
import { cards } from "../../data"

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <Slide slidesToShow={5} arrowsScroll={1}>
        {cards.map(card => (
          <CategoryCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <img src="../images/cleaningman2.png" alt="" />
          </div>
          <div className="item">
            <h1>Transforming homes at your fingertips</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high quality services at every price point.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Verified professionals
            </div>
            <p>
              All service providers are thoroughly vetted for your peace of mind.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Quick and easy process
            </div>
            <p>
              Start your home improvement journey effortlessly.
            </p>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Satisfaction guaranteed
            </div>
            <p>
              Enjoy peace of mind with our quality assurance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home