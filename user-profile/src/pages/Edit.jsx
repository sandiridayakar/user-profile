import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'


const Edit = () => {
  let API_URL = import.meta.env.VITE_API_URL;
    let [id, setId] = useState(0)
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [github, setGithub] = useState('');
    let [linkedin, setLinkedin] = useState('');

  let{userid} = useParams()
  console.log(userid)

  useEffect(() => {
    axios.get(`${API_URL}user/${userid}`)
    .then((x)=>{
       setName(x.data.name)
       setEmail(x.data.email)
       setGithub(x.data.github)
       setLinkedin(x.data.linkedin)
    })
  }, [userid]);

  let navigate = useNavigate()
  
  let editData = (e)=>{
      e.preventDefault()
    let payload = {
      name: name,
      email: email,
      github:github,
      linkedin:linkedin
    }
    console.log("userid =", userid);
    console.log("payload =", payload);
    axios.put(`${API_URL}user/${userid}`,payload)
    .then(()=>{
      console.log("data edited")
      navigate('/')
    })
    .catch(()=>{
      console.log("data not edited")
    })
  }



  return (
    <div  >
      <div className="container mt-8" >
        <div className="row justify-content-center" >
          <div className="col-md-15" >
            <div className="card shadow">
              <div className="card-body" style={{ textAlign: "left"  }}>
                <h3 className="card-title text-center mb-8">
                  User 
                </h3>

                <form onSubmit={editData}>
                  <div className="mb-6">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Dayakar"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="dayakar@gmail.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="github" className="form-label">
                      GitHub Link
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="github"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      placeholder="https://github.com/username"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="linkedin" className="form-label">
                      LinkedIn Link
                    </label>
                    <input
                      type="url"
                      className="form-control"
                      id="linkedin"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Submit
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit