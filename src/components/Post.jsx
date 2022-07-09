import React from 'react'
 

const Post = (props) => {
    const {id,title,date}=props.post
  return (
    <div className="card mt-4">
  <div className="card-header">
    <h5>{title}</h5>
  </div>
  <div className="card-body">
    <h5 className="card-title text-secondary">Special title treatment</h5>
    {/* <p className="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
    <a href="#" className="btn btn-primary">Ver mas</a>
  </div>
</div>
  )
}

export default Post