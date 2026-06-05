import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from "axios";

const Create = () => {
  let API_URL = import.meta.env.VITE_API_URL;
  let [id, setId] = useState(0)
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [github, setGithub] = useState('');
  let [linkedin, setLinkedin] = useState('');

  let navigate = useNavigate()

  let fetch = (e) => {
    e.preventDefault()
    console.log(id, name, email);
    let payload = {
      // id: Date.now(),
      name: name,
      email: email,
      github:github,
      linkedin:linkedin
    }
    axios.post(`${API_URL}user`, payload)
      .then(() => {
        console.log(id, name, email)
        console.log("submitted successfully")
        navigate("/")
        toast.success("User added")
      })
      .catch(() => {
        console.log("not submitted")
      })
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body" style={{ textAlign: "left" }}>
                <h3 className="card-title text-center mb-4">
                  User Registration
                </h3>

                <form onSubmit={fetch}>
                  <div className="mb-3">
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

export default Create