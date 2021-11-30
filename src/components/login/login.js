import React, { useState } from 'react'
import './login.css'
import validateInfo from './validate';
import validationInfo from './validation';
import image from './signup.png';
import image_1 from './login.jpeg';
import { useHistory } from 'react-router';
import { axioss } from '../api/api';


function Login() {
    const history = useHistory();
    const [click, setclick] = useState(false);/*change state for signup or signin*/
    const [Name, setName] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [passshow, setpassshow] = useState(false)
    const [conpassshow, setconpassshow] = useState(false)
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [error, seterror] = useState([])
    const [err, seterr] = useState([])
    const [signupstatus, setsignupstatus] = useState(false)
    const [loginstatus, setloginstatus] = useState(false)
    const [loginsuccess, setloginsuccess] = useState("")
    const [signupsuccess, setsignupsuccess] = useState("")
    function eyepasstoggle() {
        setpassshow(!passshow);
    }
    function eyeconpasstoggle() {
        setconpassshow(!conpassshow);
    }
    // for password paste
    const passfield = document.getElementById('passfield');
    // passfield.onpaste= e =>e.preventDefault();
    if (passfield != null)
        passfield.addEventListener('paste', e => e.preventDefault());


    // for login 
    const submitlogin = (e) => {
        e.preventDefault();
        const data = validationInfo(email, password);
        // console.log(data);
        seterr(data);
        if (Object.keys(data).length === 0) {
            const newuser = { email: email, password: password }
            axioss({ method: 'post', url: '/login', data: newuser }).then((res) => {
                let token = res.data.token;
                localStorage.setItem('Token', "Bearer " + token);
                setloginstatus(false);
                // console.log(res);
                history.push('/content-page/robotics');
            }).catch((err) => {
                // console.log("SAS", err.data);
                // console.log('message',err.data.message);
                setloginsuccess("Invalid Email or Password!");
                setloginstatus(true);
            })
            setemail("");
            setpassword("");
        }
    }

    // // for new user

    const register = (e) => {
        e.preventDefault();
        const data = validateInfo(email, Name, password, confirmpassword, phone);
        seterror(data);
        if (Object.keys(data).length === 0) {
            const newentry = { email: email, password: password, name: Name, confirm_password: confirmpassword, mobile: phone }
            axioss({ method: 'post', url: '/signup', data: newentry }).then((res) => {
                // let token = res.data.token;
                localStorage.setItem("Savedphone", phone);
                setsignupstatus(false)
                setclick(false);
                // console.log(res);
            }).catch((err) => {
                // console.log(err);
                setsignupsuccess("Error! Sorry Something Went Wrong");
                setsignupstatus(true)
            })
            setpassword("");
            setconfirmpassword("");
            setName("");
            setemail("");
            setphone("")
        }
    }

    // function for change signup and signin page
    const handleclick = () => {
        setclick(!click);
    }
    const handlesignin = () => {
        setclick(false)
    }


    return (
        <div className='login'>
            <div className={click ? '-container' : '-container onclick'}>
                {/* left-part section  */}
                <div className="left">
                    {/* left-part signup section  */}
                    <div className="left-signup">
                        <h1>WELCOME TO</h1>
                        <h1>CODESANDBOTS</h1>
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <h3>LET'S GET STARTED</h3>
                    </div>
                    {/* left-part signup section  */}
                    {/* left-part signin section  */}
                    <div className="left-signin">
                        <div className="image">
                            <div>
                                <h1 className='left-heading'>WELCOME BACK</h1>
                            </div>
                            <img src={image_1} alt="" />
                        </div>
                    </div>
                    {/* left-part signin section  */}
                </div>
                {/* left-part section  */}
                {/* right-part section  */}
                <div className="right">
                    {/* right-part signup section  */}
                    <div className="right-signup">
                        <h1>CREATE AN ACCOUNT</h1>
                        <div className="form-panel">
                            <form action="" className='form' onSubmit={register}>
                                <div>{error.name ?
                                    <input type="text" placeholder='Student Name' value={Name} style={{ borderBottomColor: "red" }} onChange={(e) => setName(e.target.value)} /> :
                                    <input type="text" placeholder='Student Name' value={Name} onChange={(e) => setName(e.target.value)} />}
                                    {error.name && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{error.name}</p>}
                                </div>
                                <div>{error.email ?
                                    <input type="text" placeholder='Email Address' value={email} style={{ borderBottomColor: "red" }} onChange={(e) => setemail(e.target.value)} /> :
                                    <input type="text" placeholder='Email Address' value={email} onChange={(e) => setemail(e.target.value)} />}
                                    {error.email && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{error.email}</p>}
                                </div>
                                <div>{error.phone ?
                                    <input type="text" placeholder='Phone no.' value={phone} maxLength="10" style={{ borderBottomColor: "red" }} onChange={(e) => setphone(e.target.value)} /> :
                                    <input type="text" placeholder='Phone no.' value={phone} maxLength="10" onChange={(e) => setphone(e.target.value)} />}
                                    {error.phone && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{error.phone}</p>}
                                </div>

                                <div>
                                    {error.password ?
                                        <div style={{ display: 'flex' }}>
                                            <input type={passshow ? "" : "password"} placeholder="Password" value={password} style={{ borderBottomColor: "red" }} onChange={(e) => setpassword(e.target.value)} />
                                            {passshow ? <i class="far fa-eye-slash eyestyle" onClick={eyepasstoggle} style={{ borderBottomColor: "red" }}></i> : <i class="far fa-eye eyestyle" onClick={eyepasstoggle} style={{ borderBottomColor: "red" }}></i>}
                                        </div> :
                                        <div style={{ display: 'flex' }}>
                                            <input type={passshow ? "" : "password"} placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                            {passshow ? <i class="far fa-eye-slash eyestyle" onClick={eyepasstoggle} ></i> : <i class="far fa-eye eyestyle" onClick={eyepasstoggle}></i>}
                                        </div>}
                                    {error.password && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{error.password}</p>}
                                </div>
                                <div>
                                    {error.confirmpassword ?
                                        <div style={{ display: 'flex' }}>
                                            <input type={conpassshow ? "" : "password"} id='passfield' placeholder="Confirm Password" style={{ borderBottomColor: "red" }} value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} />
                                            {conpassshow ? <i class="far fa-eye-slash eyestyle" style={{ borderBottomColor: "red" }} onClick={eyeconpasstoggle}></i> : <i class="far fa-eye eyestyle" style={{ borderBottomColor: "red" }} onClick={eyeconpasstoggle} ></i>}
                                        </div> :
                                        <div style={{ display: 'flex' }}>
                                            <input type={conpassshow ? "" : "password"} id='passfield' placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} />
                                            {conpassshow ? <i class="far fa-eye-slash eyestyle" onClick={eyeconpasstoggle}></i> : <i class="far fa-eye eyestyle" onClick={eyeconpasstoggle} ></i>}
                                        </div>}
                                    {/* <input type="" placeholder="Confirm Password" value={confirmpassword}  onChange={(e) => setconfirmpassword(e.target.value)} /> */}
                                    {error.confirmpassword && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{error.confirmpassword}</p>}
                                </div>
                                <div id={signupstatus ? "status" : ""}>{signupsuccess}</div>
                                <button className="btn" type='submit'>SIGN UP</button>
                                <h4><span>OR</span></h4>
                                {/* <div className="icons">
                                    <div className='icon'>
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='icon'>
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className='icon'>
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </div> */}
                                <p className="already-acc" onClick={handlesignin}>already have an account?</p>
                                <h3 onClick={handleclick}>SIGN IN</h3>
                            </form>
                        </div>
                    </div>
                    {/* right-part signup section  */}
                    {/* right-part signin section  */}
                    <div className="right-signin">
                        <h1>LOGIN YOUR ACCOUNT</h1>
                        <div className="form-panel">
                            <form action="" className='form' onSubmit={submitlogin}>
                                {/* <input type="text" placeholder='Email Address' value={email} onChange={(e) => setemail(e.target.value)}/> */}
                                <div>
                                    {err.email ?
                                        <input type="text" placeholder='Email Address' value={email} style={{ borderBottomColor: "red" }} onChange={(e) => setemail(e.target.value)} /> :
                                        <input type="text" placeholder='Email Address' value={email} onChange={(e) => setemail(e.target.value)} />}
                                    {err.email && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{err.email}</p>}
                                </div>
                                <div>
                                    {err.password ?
                                        <input type="password" placeholder="Password" value={password} style={{ borderBottomColor: "red" }} onChange={(e) => setpassword(e.target.value)} /> :
                                        <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                                    }
                                    {err.password && <p style={{ color: "red", textAlign: 'initial', fontSize: '12px', fontWeight: 'bold' }}>{err.password}</p>}
                                </div>
                                {/* <input type="password" placeholder="Password"  value={password} onChange={(e) => setpassword(e.target.value)}/> */}
                                <h5 >FORGET PASSWORD?</h5>
                                <div id={loginstatus ? "status" : ""}>{loginsuccess}</div>
                                <button className="btn" type='submit'>SIGN IN</button>
                                <h4><span>OR</span></h4>
                                {/* <div className="icons">
                                    <div className='icon'>
                                        <i className="fab fa-google"></i>
                                    </div>
                                    <div className='icon'>
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className='icon'>
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                </div> */}
                                <p className="already-acc" onClick={handleclick}>Create An Account</p>
                                <h3 onClick={handleclick}>SIGN UP</h3>
                            </form>
                        </div>
                    </div>
                    {/* right-part signin section  */}
                </div>
                {/* right-part section  */}

            </div>
        </div>
    )
}

export default Login
