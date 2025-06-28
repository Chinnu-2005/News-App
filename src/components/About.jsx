import React from 'react'
import newsImage from '../assets/images/news.jpg'; 


const About=(props)=> {
 
    return (
      <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4">About NewsMonkey 🐒</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={newsImage}
            alt="NewsMonkey Illustration"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <p className="lead">
            <strong>NewsMonkey</strong> is a sleek, modern news app built using React and Vite. It delivers the latest headlines across categories like Business, Entertainment, Sports, Technology, and more — all in one place.
          </p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">⚡ Fast loading with Vite</li>
            <li className="list-group-item">📱 Responsive and mobile-friendly</li>
            <li className="list-group-item">🧠 Categorized news powered by live APIs</li>
            <li className="list-group-item">🌐 Made with React, Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default About;