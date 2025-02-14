import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
import Reviews from "../../components/Reviews/Reviews";

const Gig = () => {
  const { id } = useParams()

  const { isLoading, error, data } = useQuery({
    queryKey: ['gig'],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data
      }),
  })

  const userId = data?.userId

  const { isLoading: isLoadingUser, error: errorUser, data: dataUser } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data
      }),
    enabled: !!userId,
  })

  return (
    <div className='gig'>
      {isLoading ? "loading" : error ? "Something went wrong!" :
        <div className="container">
          <div className="left">
            <span className="breadCrumbs">Rumah Tangga {">"} Cleaning Services {">"}</span>
            <h1>{data.title}</h1>

            {isLoadingUser ? "loading" : errorUser ? "Something went wrong!" :
              <div className="user">
                <img className='pp' src={dataUser.img || "../images/noavatar.jpg"} alt="" />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) &&
                  <div className="stars">
                    {Math.round(data.totalStars / data.starNumber)}
                    {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                      <img src="../images/star.png" alt="" key={i} />
                    ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>}
              </div>}
            <Slider slidesToShow={1} arrowsScroll={1} className='slider'>
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>About this service</h2>
            <p>{data.desc}</p>
            {isLoadingUser ? "loading" : errorUser ? "Something went wrong!" :
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || "../images/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) &&
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber)).fill().map((item, i) => (
                          <img src="../images/star.png" alt="" key={i} />
                        ))}
                        <span>{Math.round(data.totalStars / data.starNumber)}</span>
                      </div>}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">May 2024</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">30 minutes</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. service time</span>
                      <span className="desc">3 hours</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser.desc}</p>
                </div>
              </div>}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data.shortTitle}</h3>
              <h3>Rp. {data.price}k</h3>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="../images/clock.png" alt="" />
                <span>{data.deliveryDate}</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="../images/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button>Continue</button>
          </div>
        </div>}
    </div>
  )
}

export default Gig