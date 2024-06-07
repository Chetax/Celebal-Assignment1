import { useState } from "react";

function Form() {
    const [fname,setfname]=useState<string>("");
    const [lname,setlname]=useState<string>("");
    const [email,setemail]=useState<string>("");
    const [password,setpassword]=useState<string>("");
    const [phone,setphone]=useState<number>(0);
    const [country,setcountry]=useState<string>("");
    const [city ,setcity]=useState<string>("");
    const [panno,setpanno]=useState<number>(0);
    const [adharcard,setadharcard]=useState<number>(0);
    return ( <>
    <div className="container">

    </div>
    </> );
}

export default Form;