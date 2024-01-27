import React, { Fragment } from 'react'
import './Register.css'
import img from '../../assests/img13.png'

const Register = () => {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='container login-container'>
                    <div className='row login-row'>
                        <div className='col-lg-7 login-b1'>
                            <div className='curve'>
                                <div className='curve-content'>
                                    <h4>New to our community ?</h4>
                                    <div className='login-para'>
                                        <p>Discover a world of possibilities!
                                            Join us and explore a vibrant community where ideas flourish and connections thrive.
                                        </p>
                                    </div>
                                    <div className='loginbtn'>
                                        <button className='login-btn'>Login</button>
                                    </div>
                                    <div className='curve-img'>
                                        <img src={img} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 login-b2'>
                            <form action="#" className="sign-up-form">
                                <div className='form-heading'>
                                    <h2>Register</h2>
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Owner Name" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Contact Number" />
                                </div>
                                <div className="input-fiel">
                                    <i className="fas fa-lock"></i>
                                    <input type="file" id="imageInput" accept="image/*" />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <input type="text" placeholder="Location" />
                                </div>
                                <div className='loginbtn pt-3'>
                                    <button className='logi-btn'>Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
