import { useState } from "react";

function Form() {
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

    const handlesubmit=(e:React.FormEvent)=>{
       e.preventDefault();
       console.log(fname,lname,username,email,password,phone,country,city,panno,adharcard);

    }

    return (<>
        <div className="container">
            <form action="">

                <label htmlFor="fname">Enter First Name</label> :  <input type="text" name="fname" value={fname} onChange={(e)=>{setfname(e.target.value)}} />  <br></br>
               { fnameerror ?<span style={{color:'red'}}>Enter Valid First Name</span> :<></>}
                <br></br>
                <label htmlFor="lname">Enter Last Name</label>  : <input type="text" name="lname"  value={lname} onChange={(e)=>{setlname(e.target.value)}}/>  <br></br>
                { lnameerror ?<span style={{color:'red'}}>Enter Valid Last Name</span> : <></>}
                <br></br>

                <label htmlFor="uname">Enter User Name</label>  : <input type="text" name="uname"  value={username} onChange={(e)=>{setusername(e.target.value)}}/>  <br></br>
                { usernameerror ?<span style={{color:'red'}}>Enter Valid User Name</span> : <></>}
                <br></br>
               
                <label htmlFor="email">Enter Email </label>  : <input type="email" name="email"  value={email} onChange={(e)=>{setemail(e.target.value)}}/>  <br></br>
                { emailerror ?<span style={{color:'red'}}>Enter Valid Email </span> : <></>}
                <br></br>
                <label htmlFor="password">Enter Password </label>  : <input type={showpassword ? "text": "password"} name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>  <br></br> 
                { lnameerror ?<span style={{color:'red'}}>Password Length Should Be Minimum 6 langth, has more than 1 Symbol ,and alphabet</span> : <></>}
                <input type="checkbox" onClick={(e)=>{setshowpassword(!showpassword)}}/> show password 
                <br></br>

                <label htmlFor="phone">Enter Phone No.</label>  : 
                <select id="countrycode" name="countrycode" value={countrycode} onChange={(e)=>{setcountrycode(e.target.value)}} >
                    <option value={"none"}>CountryCode</option>
                    <option value={"+62"}> +62 (Indonesia)</option>
                    <option value={"+49"}>+49 (Germany)</option>
                    <option value={"+91"}>+91 (India)</option>
                    <option value={"+81"}>+81 (Japan)</option>
                    <option value={"+1"}>+1 (United States)</option>
                </select>
                 <input type="number" name="phone" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>  <br></br>
                { phoneerror ?<span style={{color:'red'}}>Phone Number Should Be Of 10 langth</span> : <></>}
                <br></br>
                
                <label htmlFor="country">Enter Country</label>  : 
                <select id="country" name="country" value={country} onChange={(e)=>{setcountry(e.target.value)}} >
                    <option value={"none"}>Select Your Country</option>
                    <option value={"India"}>India</option>
                    <option value={"America"}>America</option>
                    <option value={"Caneda"}>Caneda</option>
                    <option value={"Japan"}>Japan</option>
                </select>  <br></br><br></br>

                <label htmlFor="city">Choose Your City </label>  : <select id="city" name="city" value={city} onChange={(e)=>{setcity(e.target.value)}} >
                <option value={"none"}>Select Your City</option>
                { 
                   country==="India" ?<><option value={"Pune"}>Pune</option>
                                        <option value={"Nagpur"}>Nagpur</option>
                                        <option value={"Delhi"}>Delhi</option>
                                        <option value={"Hydrabad"}>Hydrabad</option>
                                        <option value={"Bangalaru"}>Bangalaru</option></>
                :  country==="America" ?
                <><option value={"New York City"}>New York City</option>
                <option value={"Los Angeles"}>Los Angeles</option>
                <option value={"Chicago"}>Chicago</option>
                <option value={"Houston"}>Houston</option>
                <option value={"Miami"}>Miami</option></>
                
                :country==="Caneda" ?
                <><option value={"Toronto"}>Toronto</option>
                <option value={"Vancouver"}>Vancouver</option>
                <option value={"Montreal"}>Montreal</option>
                <option value={"Calgary"}>Calgary</option>
                <option value={"Ottawa"}>Ottawa</option></>
                :
                <><option value={"Tokyo"}>Tokyo</option>
                <option value={"Osaka"}>Osaka</option>
                <option value={"Kyoto"}>Kyoto</option>
                <option value={"Yokohama"}>Yokohama</option>
                <option value={"Sapporo"}>Sapporo</option></>
                }
                    
                </select>  <br></br><br></br>

                <label htmlFor="pan">Enter Pan Number</label>  : <input type="number" name="pan"value={panno} onChange={(e)=>{setpanno(e.target.value)}} /><br></br><br></br>
                <label htmlFor="Adhar">Enter Adhar Number</label>  : <input type="number" name="Adhar" value={adharcard} onChange={(e)=>{setadharcard(e.target.value)}} /><br></br><br></br>
m 
             <button  onClick={handlesubmit}>Submit</button>

            </form>

        </div>
    </>);
}

export default Form;