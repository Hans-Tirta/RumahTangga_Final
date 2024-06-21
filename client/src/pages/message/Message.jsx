import React from 'react'
import "./Message.scss"
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages" className='link'>MESSAGES</Link> {">"} Agus {">"}
        </span>
        <div className="messages">
          <div className="item">
            <img src="../images/noavatar.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur aspernatur fugit quidem numquam aliquam, adipisci perspiciatis libero eligendi, dolores ex aliquid amet praesentium pariatur natus? Veritatis assumenda delectus saepe?</p>
          </div>
          <div className="item owner">
            <img src="../images/noavatar.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur aspernatur fugit quidem numquam aliquam, adipisci perspiciatis libero eligendi, dolores ex aliquid amet praesentium pariatur natus? Veritatis assumenda delectus saepe?</p>
          </div>
          <div className="item">
            <img src="../images/noavatar.jpg" alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem tenetur aspernatur fugit quidem numquam aliquam, adipisci perspiciatis libero eligendi, dolores ex aliquid amet praesentium pariatur natus? Veritatis assumenda delectus saepe?</p>
          </div>
        </div>
        <div className="write">
          <textarea name="" placeholder='Write a message' id=""></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message