import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

const AllUser = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getData = async ()=>{
    try{
      setIsLoading(true);
      const fetcher = await axios.get('https://goal-z8dh.onrender.com/api/user');
      console.log(fetcher.data);
      setData(fetcher.data.users)
    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false)
    }
  };
  useEffect(()=>{
    document.title = 'All-Users || Page'
    getData()
  },[])
  return (
    <main className='container pt-4'>
      <h2>All Users</h2>
      {isLoading && <Spinner amination= 'border'/>}
      <div className="container pt-5 row justify-content-center align-items-center gap-4">
        
        {data && data.length < 1 ? (
          <h1 className='text-danger'>no user found... Create One</h1>
        ) : (
            data.map((datum)=>{
             const {_id,name,email,gender,profession} = datum
            
              return(
                <div className="card col-lg-5 p-3 shadow-sm" key={_id}>
                  <Link className='text-decoration-none' to={`/SingleUser/${_id}`}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{gender}</p>
                    <p>{profession}</p>
                    <span className='text-danger'>Click to see more</span>
                  </Link>
                </div>
              )
            })
        )}
      </div>
    </main>
  )
}

export default AllUser