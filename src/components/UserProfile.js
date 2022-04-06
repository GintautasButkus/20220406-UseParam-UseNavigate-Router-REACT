import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserProfile() {
  
    let navigate = useNavigate();
    let{ login:id }=useParams();

    const [user, setUser] = useState({});

    const getUserById = async (id) => {
      const response = await fetch(`https://api.github.com/users/${id}`);
      const user = await response.json();
      setUser(user);
      console.log(user);
    };

    useEffect(() => {
      getUserById(id);
    }, [])
  let {avatar_url, login, location, blog, created_at, updated_at, followers} = user;

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-8 offset-2'>
            <div className='card mb-3'>
              <div className='row g-0'>
                <div className='col-md-6'>
                  <img src={avatar_url} className='img-fluid rounded-start' alt={login} />
                </div>
                <div className='col-md-6'>
                  <div className='card-body'>
                    <h5 className='card-title'>
                      {login ? login.toUpperCase() : login}
                    </h5>
                    <p className='card-text'>
                      Location: {location ? location : "private"}
                    </p>
                    <p className='card-text'>
                      Blog: <a href={blog ? blog : "#"}>{blog}</a>
                    </p>
                    <p className='card-text'>Created: {created_at}</p>
                    <p className='card-text'>Updated: {updated_at}</p>
                    <p className='card-text'>
                      <small className='text-muted'>Followers: {followers}</small>
                    </p>
                    <button className='btn btn-success' onClick={() => {navigate("/");
                    }}>
                      Back to list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UserProfile