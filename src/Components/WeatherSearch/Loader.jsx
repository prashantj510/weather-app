import React from 'react'
import "./loading.css"
const Loader = () => {
  return (
    <div className="loader">
        <div className="spinner-container">
          <div className="spinner">
            <div className="spinner">
              <div className="spinner">
                <div className="spinner">
                  <div className="spinner">
                    <div className="spinner"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Loader
