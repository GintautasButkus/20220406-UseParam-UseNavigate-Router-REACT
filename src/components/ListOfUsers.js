import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';

export default function ListOfUsers() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://api.github.com/users`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [])


    const list = items.map (item => {
      return (
        <div key={item.id} className="col-lg-4 col-md-6 col-sm-12 pl-4 text-center " >
          <div><img  className='rounded-circle m-auto' src={item.avatar_url} alt={"logo"} width="140px" height="140px"/> </div>
          <div ><h2> {item.login}</h2></div>
          <div><Link to={`/profile/${item.login}` }className="btn btn-warning mb-4"> View Details</Link></div>
          
        </div> 
    )})


  return (
    <div className='container'>
      <h1 className="display-1 text-center">LIST OF GIT USERS</h1>
        <div className="row ml-3 mt-5 d-flex justify-content-center">
        {list}
      </div>
    </div>
     
  )
}
