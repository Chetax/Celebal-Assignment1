import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
    const location = useLocation();
    const { state } = location;
    const {
        fname, lname, username, email,
        password, phone, country, city,
        panno, adharcard
    } = state || {};

    return (
        <div className="user-details">
            <h2>User Details</h2>
            <p><strong>First Name:</strong> {fname}</p>
            <p><strong>Last Name:</strong> {lname}</p>
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Password:</strong> {password}</p>
            <p><strong>Phone:</strong> {phone}</p>
            <p><strong>Country:</strong> {country}</p>
            <p><strong>City:</strong> {city}</p>
            <p><strong>PAN Number:</strong> {panno}</p>
            <p><strong>Aadhaar Number:</strong> {adharcard}</p>
        </div>
    );
}

export default UserDetails;
