import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../FirebaseProvider/FirebaseProvider';

const UpdateProfile = () => {
  const {  updateUserData } = useContext(AuthContext);
  const handleUpdate = (e)=>{
    console.log(e);
    e.preventDefault();
    const name = e.target.name.value
const photo = e.target.photo.value
     
    updateUserData (name,photo)
    .then(()=>{
      
    })
  }
    return (
        <div>
            <Helmet>
                <title>Indrusto || Update profile</title>
            </Helmet>
            <div className="hero-content">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center mb-5">Update profile</h1>
            <form onSubmit={handleUpdate} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  placeholder="Photo URL"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-outline text-orange-400"
                  type="submit"
                  value="Update"
                />
              </div>
              <br />
              
            </form>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default UpdateProfile;