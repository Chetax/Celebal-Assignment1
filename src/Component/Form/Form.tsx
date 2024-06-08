import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Form.css'
function Form() {
    const navigate = useNavigate();
    const [fname, setfname] = useState<string>(""); const [fnameerror, setfnameerror] = useState<boolean>(false);
    const [lname, setlname] = useState<string>(""); const [lnameerror, setlnameerror] = useState<boolean>(false);
    const [username, setusername] = useState<string>(""); const [usernameerror, setusernameerror] = useState<boolean>(false);
    const [email, setemail] = useState<string>(""); const [emailerror, setemailerror] = useState<boolean>(false);
    const [password, setpassword] = useState<string>(""); const [passworderror, setpassworderror] = useState<boolean>(false);
    const [showpassword, setshowpassword] = useState<boolean>(false);
    const [phone, setphone] = useState<string>(""); const [phoneerror, setphoneerror] = useState<boolean>(false);
    const [countrycode, setcountrycode] = useState<string>(""); const [countrycodeerror, setcountrycodeerror] = useState<boolean>(false);
    const [country, setcountry] = useState<string>(""); const [countryerror, setcountryerror] = useState<boolean>(false);
    const [city, setcity] = useState<string>(""); const [cityerror, setcityerror] = useState<boolean>(false);
    const [panno, setpanno] = useState<string>(""); const [pannoerror, setpannoerror] = useState<boolean>(false);
    const [adharcard, setadharcard] = useState<string>(""); const [adharcarderror, setadharcarderror] = useState<boolean>(false);

    const validateForm = () => {
        let isValid = true;

        if (!fname.trim()) {
            setfnameerror(true);
            isValid = false;
        } else {
            setfnameerror(false);
        }

        if (!lname.trim()) {
            setlnameerror(true);
            isValid = false;
        } else {
            setlnameerror(false);
        }

        if (!username.trim()) {
            setusernameerror(true);
            isValid = false;
        } else {
            setusernameerror(false);
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setemailerror(true);
            isValid = false;
        } else {
            setemailerror(false);
        }

        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordPattern.test(password)) {
            setpassworderror(true);
            isValid = false;
        } else {
            setpassworderror(false);
        }

        if (!phone.match(/^\d{10}$/)) {
            setphoneerror(true);
            isValid = false;
        } else {
            setphoneerror(false);
        }

        if (!country) {
            setcountryerror(true);
            isValid = false;
        } else {
            setcountryerror(false);
        }

        if (!city) {
            setcityerror(true);
            isValid = false;
        } else {
            setcityerror(false);
        }

        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panPattern.test(panno)) {
            setpannoerror(true);
            isValid = false;
        } else {
            setpannoerror(false);
        }

        if (!adharcard.match(/^\d{12}$/)) {
            setadharcarderror(true);
            isValid = false;
        } else {
            setadharcarderror(false);
        }

        return isValid;
    };

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            navigate("/userdetails", {
                state: {
                    fname, lname, username, email, password,
                    phone, country, city, panno, adharcard
                }
            });
        }
    };
    return (
        <div className="container">
            <form action="" onSubmit={handlesubmit} className="Form">
                <div className="form-row">
                    <label htmlFor="fname" >Enter First Name</label>

                   <span>
                   <input type="text" name="fname" value={fname}  onChange={(e) => { setfname(e.target.value); }} /><br></br>
                   {fnameerror && <span style={{ color: 'red' }}>Enter Valid First Name</span>}
                    </span>   
                 </div>
                     
                <div className="form-row">
                    <label htmlFor="lname">Enter Last Name</label>
                    <span>
                    <input type="text" name="lname" value={lname} onChange={(e) => { setlname(e.target.value); }} />
                    <br></br>
                    {lnameerror && <span style={{ color: 'red' }}>Enter Valid Last Name</span>}
                    </span>   
                </div>

                <div className="form-row">
                    <label htmlFor="uname">Enter User Name</label>
                    <span>
                    <input type="text" name="uname" value={username} onChange={(e) => { setusername(e.target.value); }} /><br></br>
                    {usernameerror && <span style={{ color: 'red' }}>Enter Valid User Name</span>}
                    </span>   
                </div>

                <div className="form-row">
                    <label htmlFor="email">Enter Email</label>
                    <span>
                    <input type="email" name="email" value={email} onChange={(e) => { setemail(e.target.value); }} /><br></br>
                    {emailerror && <span style={{ color: 'red' }}>Enter Valid Email</span>}
                    </span>
                </div>

                <div className="form-row">
                    <label htmlFor="password">Enter Password</label>
                    <span>
                    <input style={{position:'relative'}} type={showpassword ? "text" : "password"} name="password" value={password} onChange={(e) => { setpassword(e.target.value); }} /><br></br>
                    {passworderror && <span style={{ color: 'red' }}>Password less than 6   </span>} <br></br>
                    </span>
                </div>
                <div>
                <input type="checkbox" name="showpass" style={{width:"10%"}}  onClick={() => { setshowpassword(!showpassword); }} /> 
              <label htmlFor="showpadd">Show Password</label>
                </div>

                <div className="form-row">
                    <label htmlFor="phone">Enter Phone No.</label>
                    <span>
                    <select id="countrycode" name="countrycode" style={{width:"3vw"}} value={countrycode} onChange={(e) => { setcountrycode(e.target.value); }} >
                        <option value="none">+No</option>
                        <option value="+62">+62 (Indonesia)</option>
                        <option value="+49">+49 (Germany)</option>
                        <option value="+91">+91 (India)</option>
                        <option value="+81">+81 (Japan)</option>
                        <option value="+1">+1 (United States)</option>
                    </select>
                    <input type="number" name="phone" value={phone} onChange={(e) => { setphone(e.target.value); }} /><br></br>
                    {phoneerror && <span style={{ color: 'red' }}>Phone Number Should Be Of 10 digits</span>}
                    </span>
                </div>

                <div className="form-row">
                    <label htmlFor="country">Enter Country</label>
                    <span>
                    <select id="country" name="country" value={country} style={{alignContent:'start',width:"15vw"}} onChange={(e) => { setcountry(e.target.value); }} >
                        <option value="none">Select Your Country</option>
                        <option value="India">India</option>
                        <option value="America">America</option>
                        <option value="Canada">Canada</option>
                        <option value="Japan">Japan</option>
                    </select><br></br>
                    {countryerror && <span style={{ color: 'red' }}>Please select a country</span>}
                    </span>
                </div>

                <div className="form-row">
                    <label htmlFor="city">Choose Your City</label>
                    <span style={{}}>
                    <select  id="city" name="city" style={{alignContent:'start',width:"15vw"}} value={city} onChange={(e) => { setcity(e.target.value); }} >
                        <option value="none">Select Your City</option>
                        {country === "India" ? <>
                            <option value="Pune">Pune</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bangalore">Bangalore</option>
                        </> : country === "America" ? <>
                            <option value="New York City">New York City</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Chicago">Chicago</option>
                            <option value="Houston">Houston</option>
                            <option value="Miami">Miami</option>
                        </> : country === "Canada" ? <>
                            <option value="Toronto">Toronto</option>
                            <option value="Vancouver">Vancouver</option>
                            <option value="Montreal">Montreal</option>
                            <option value="Calgary">Calgary</option>
                            <option value="Ottawa">Ottawa</option>
                        </> : <>
                            <option value="Tokyo">Tokyo</option>
                            <option value="Osaka">Osaka</option>
                            <option value="Kyoto">Kyoto</option>
                            <option value="Yokohama">Yokohama</option>
                            <option value="Sapporo">Sapporo</option>
                        </>}
                    </select><br></br>
                    {cityerror && <span style={{ color: 'red' }}>Please select a city</span>}
                    </span>
                </div>

                <div className="form-row">
                    <label htmlFor="pan">Enter Pan Number</label>
                    <span>
                    <input type="text" name="pan" value={panno} onChange={(e) => { setpanno(e.target.value); }} /><br></br>
                    {pannoerror && <span style={{ color: 'red',fontSize:'12px' }}>Enter Valid PAN Number (e.g., ABCDE1234F)</span>}
                    </span>
                </div>

                <div className="form-row">
                    <label htmlFor="Adhar">Enter Aadhaar No.</label>
                    <span>
                    <input type="number" name="Adhar" value={adharcard} onChange={(e) => { setadharcard(e.target.value); }} /><br></br>
                    {adharcarderror && <span style={{ color: 'red' }}>Enter Valid Aadhaar Number (12 digits)</span>}
                   </span>
                </div>

                <button type="submit" style={{cursor:"pointer",display:"flex" ,alignItems:'center' ,justifyContent:'center',width:"30%",height:"5vh",marginTop:"15px"}}>Submit</button>
            </form>
        </div>
    );
}

export default Form;
 