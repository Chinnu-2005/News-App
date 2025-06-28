import React from 'react'

const Newsitem=(props)=> {

  let { title, desc, image, url } = props;

  return (
      <div>
        <div className="card my-3 mx-3">
          <img src={image ? image : "https://via.placeholder.com/150"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 50) : 'No Title'}</h5>
            <p className="card-text">{desc ? desc.slice(0, 100) + '...' : 'No Description Available'}</p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default Newsitem
