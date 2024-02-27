import React from 'react'
import slid1 from './images/slid1.jfif'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
  return (
      <>
          <div className="card" style={{width:'18rem'}}>
              <img src={slid1} className="card-img-top" alt="..."/>
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={'/contact'}>
                      <button class="btn btn-primary">Go somewhere</button>
                  </Link>
                  </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src={slid1} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src={slid1} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
              <img src={slid1} className="card-img-top" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
          </div>
      </>
  )
}

export default Card