import React from 'react'
import "./style.css"

const Resto = () => {
  return (
    <>
        <div className="card-container">
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">1</span>
                    <span className="card-author subtle">Breakfast</span>
                    <h2 className="card-title">Maggie</h2>
                    <span className="card-description subtle">
                        I love maggie Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                    </span>
                    <div className="card-read">Read</div>
                </div>
                {/* <img src={image} className="card-media"></img> */}
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
    </>
  )
}

export default Resto
