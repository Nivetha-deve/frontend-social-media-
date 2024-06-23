import { useState } from 'react';                                                                 
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { userRegister } from './api.js';

const initialState = {
    email: '',
    password: '',
    name: '',
    dob: '',
    description: '',
    image: '',
  }


const RegisterForm = () => {
  const [formstate, setState] = useState(initialState);

  const isRegistered = Boolean (localStorage.getItem("token"));
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...formstate,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   await userRegister(formstate);
   setState(initialState)
    navigate("/login")
  };

  if(isRegistered){
    return <Navigate to={"/login"} />
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className='form-label'>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formstate.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className='form-label'>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formstate.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="name" className='form-label'>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formstate.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className='form-label'>Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    value={formstate.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className='form-label'>Description:</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formstate.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className='form-label'>Upload Image:</label>
                  <input
                    type="url"
                    className="form-control"
                    id="image"
                    name="image"
                    onChange={handleChange}
                    value={formstate.image}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
                <Link to="/login" style={{ float: "right" }}>Login</Link>
              </form>
            </div>
          </div>
        </div>
  );
};

export default RegisterForm;