import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
  let API_URL = import.meta.env.VITE_API_URL;
  let [state, setState] = useState([])
  useEffect(() => {
    let res = async () => {
     let result = await axios.get(`${API_URL}`)
      let { data } = result
      setState(data)
    }
    res()
  }, [])

  //code for delete
  let deletedata =(id)=>{
    console.log(id)
    axios.delete(`${API_URL}user/${id}`)
    .then(()=>{
      console.log("data deleted success")
      window.location.reload()
    })
    .catch(()=>{
      console.log("not deleted")
      
    })

  }

  return (
    <span className="d-flex flex-wrap gap-3 mt-4" >
      {
        state.map((x) => {
          return (
            <div key={x.id}>
              <div className="card mb-3" style={{ textAlign: "left",width: "30rem"  }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${x.name}`} className="img-fluid rounded-start" alt={x.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Name: {x.name}</h5>
                      <h6 className="card-text">Email: {x.email}</h6>
                      <p className="card-text">LinkedIn:&nbsp;{x.linkedin}</p>
                      <p className="card-text">GitHub: {x.github}</p>
                      <span><Link to={`/edit/${x.id}`}><button type="button" className="btn btn-outline-secondary">Edit</button></Link></span>
                      &nbsp;&nbsp;
                      <span><button type="button" className="btn btn-outline-danger" onClick={()=>{deletedata(x.id)}}>Delete</button></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
        })
      }
    </span>

  )
}

export default Home