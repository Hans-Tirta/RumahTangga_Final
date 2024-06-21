import React from 'react'
import "./Add.scss"

const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add New Service</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='e.g. I will do ...' />
            <label htmlFor="">Category</label>
            <select name="categories" id="categories">
              <option value="cleaning">Cleaning Services</option>
              <option value="maintenance">Maintenance and Repair Services</option>
              <option value="handyman">Handyman Services</option>
              <option value="garden">Lawn and Garden Care</option>
              <option value="renovation">Home Impovement and Renovation</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='Brief description of your service for customers'></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g. I will do ...' />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='Short description of your service'></textarea>
            <label htmlFor="">Service Time</label>
            <input type="number" min={1} />
            <label htmlFor="">Add Timeslots</label>
            <input type="text" placeholder='e.g. 1' />
            <input type="text" placeholder='e.g. 2' />
            <input type="text" placeholder='e.g. 3' />
            <label htmlFor="">Price</label>
            <input type="number" min={1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add