import React, { useEffect, useState } from 'react'
import Login from './Login'
import { Link, useHistory } from 'react-router-dom'
// import firebase from '../Firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import logo from '../Images/logo-removebg-preview.png'
// class Header extends React.Component {
const Header = (props) => {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         isLogin: false,
    //         user: []
    //     }
    // }
    const [isLogin, setisLogin] = useState(false)
    const [users, setUser] = useState([])
    const history = useHistory();
    useEffect(() => {
        
        firebase.auth().onAuthStateChanged(authUser => {
            if(authUser){
                setUser(authUser);
                setisLogin(true)
            }else{
                setisLogin(false)
            }
        });
        console.log(firebase.auth().currentUser)
    },[isLogin])

    const facebookAuth = () => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(user);
            // this.setstate({
            //     isLogin : false,
            //     user: user
            // })
            // setUser(user);
            // setisLogin(true);
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(error)
        });
    }
    const googleAuth = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        console.log(provider)
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // this.setstate({
            //     isLogin : false,
            //     user: user
            // })
            setUser(user)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log(error)
        });
    }
    const SignOut = () => {
        // firebase.auth().signOut();
        // alert("dsf")
        firebase.auth().signOut();
        setisLogin(false)
    }

    // render() {
    const nav = [
        { ID: 1, Label: "Mobile Phones" },
        { ID: 2, Label: "Cars" },
        { ID: 3, Label: "Motorcycles" },
        { ID: 4, Label: "Houses" },
        { ID: 5, Label: "TV-Video-Audio" },
        { ID: 6, Label: "Tablets" },
        { ID: 7, Label: "Land & Plots" },
    ]
    return (
        <header>
            <div className="header-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="olx-logo" />
                </Link>
                <div className="search-location">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input className="sch" type="text" placeholder="Search city, area or locality" />
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </div>
                <div className="item-search">
                    <input className="sch1" type="text" placeholder="Find Cars, Mobile Phones and more..." />
                    <i className="fa fa-search fa1" aria-hidden="true"></i>
                </div>
                <div className="btn-header">
                    {isLogin ? (
                        <>
                            <i className="fa fa-comment-o pI" aria-hidden="true"></i>
                            <span data-toggle="dropdown">
                                <img src={users.photoURL} className="pImg dropdown-toggle" alt="my-pic"/>
                            </span>
                            <i class="fa fa-bell-o pI" aria-hidden="true"></i>
                            <button className="buttons" onClick={()=>history.push("/post")}><i className="fa fa-plus" aria-hidden="true"></i> SELL</button>
                            <div className="dropdown-menu">
                                <div style={{textAlign:'center'}}>
                                    <img src={users.photoURL} style={{borderRadius:'50%',width:'100px'}} alt="my-pic" />
                                    <p className="menu-profile">{users.displayName}</p>
                                </div>
                                <hr style={{margin:'5px'}}/>
                                <a className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.olx.pk&hl=en&gl=US">Install OLX App</a>
                                <a className="dropdown-item" href="#" onClick={SignOut}>Logout</a>
                            </div>
                        </>
                    ) : (
                            <>
                                <button className="login buttons" data-toggle="modal" data-target="#modelId">Login</button>
                                <button className="buttons" data-toggle="modal" data-target="#modelId"><i className="fa fa-plus" aria-hidden="true"></i> SELL</button>
                            </>
                        )
                    }
                    <Login
                        facebookAuth={facebookAuth}
                        googleAuth={googleAuth}
                    />

                </div>
            </div>
            <div className="header-nav">
                <div className="nav-category">
                    <p>ALL CATEGORIES</p>
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>
                </div>
                <div className="nav-items">
                    {nav.map((i, k) => {
                        return (
                            // <a href={k}>{i.Label}</a>
                            <Link to={`/Category/${i.Label}`}>{i.Label}</Link>
                        )
                    })}
                </div>
            </div>
        </header>
    );
    // }
}

export default Header;
