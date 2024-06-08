import React from 'react';
import { useLocation } from 'react-router-dom';
import './User.css'

const UserDetails = () => {
    const location = useLocation();
    const { state } = location;
    const {
        fname, lname, username, email,
        password, phone, country, city,
        panno, adharcard
    } = state || {};

    return (
        <div className="user-details" style={{height:'100vh',width:'100vw' ,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:"whitesmoke"}} >
          <div className="userdata" style={{padding:'7%',width:"35vw",borderRadius:"7px",backgroundColor:'white'}}>
            <h2>User Details</h2>
            <p><h3>First Name</h3> :{fname}</p>
            <p><h3>Last Name</h3> :{lname}</p>
            <p><h3>Username</h3> :{username}</p>
            <p><h3>Email</h3>   :{email}</p>
            <p><h3>Password</h3> :{password}</p>
            <p><h3>Phone</h3> :{phone}</p>
            <p><h3>Country</h3> :{country}</p>
            <p><h3>City</h3> :{city}</p>
            <p><h3>PAN Number</h3> :{panno}</p>
            <p><h3>Aadhaar Number</h3> :{adharcard}</p>
        </div>
        </div>
    );
}

export default UserDetails;
