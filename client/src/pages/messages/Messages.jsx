import React from 'react'
import "./Messages.scss"
import { Link } from 'react-router-dom'

const Messages = () => {

  const currentUser = {
    id: 1,
    username: "Hans",
    isSeller: true
  }

  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat consequuntur fugiat ab inventore reprehenderit nihil, error minus impedit debitis fugit quod excepturi delectus officia tenetur praesentium doloremque! Vel, dicta iure."

  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>Agus</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>Agus</td>
            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
            <td>1 hour ago</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Messages