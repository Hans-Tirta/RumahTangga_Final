import React from 'react'
import "./myGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {
  return (
    <div className='myGigs'>
      <div className="container">
        <div className="title">
          <h1>Services</h1>
          <Link to="/add">
            <button>Add New Services</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img' src="../images/cleaningman.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>100.000</td>
            <td>1</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img className='img' src="../images/cleaningman.png" alt="" />
            </td>
            <td>Gig1</td>
            <td>100.000</td>
            <td>1</td>
            <td>
              <img className='delete' src="/images/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs