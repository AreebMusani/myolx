import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer">
                    <div className="footer-sec">
                        <div className="block">
                            <h2>POPULAR CATEGORIES</h2>
                            <Link to="#" >Cars</Link>
                            <Link to="#" >Flats for rent</Link>
                            <Link to="#" >Jobs</Link>
                            <Link to="#" >Mobile Phones</Link>
                        </div>
                        <div className="block">
                            <h2>Trending Searches</h2>
                            <Link to="#" >Bikes</Link>
                            <Link to="#" >Watches</Link>
                            <Link to="#" >Books</Link>
                            <Link to="#" >Dogs</Link>
                        </div>
                        <div className="block">
                            <h2>About us</h2>
                            <Link to="#" >About OLX Group</Link>
                            <Link to="#" >OLX Blog</Link>
                            <Link to="#" >Contact Us</Link>
                            <Link to="#" >OLX for Business</Link>
                        </div>
                        <div className="block">
                            <h2>OLX</h2>
                            <Link to="#" >Help</Link>
                            <Link to="#" >Sitemap</Link>
                            <Link to="#" >Legal & Privacy information</Link>
                        </div>
                        <div className="block follow">
                            <div className="follow-head">
                                <h2>Follow Us</h2>
                                <div className="follow-link">
                                    <a href="//www.facebook.com/olxpakistan" target="_blank"><span className="fa fa-facebook"></span></a>
                                    <a href="//www.twitter.com/OLX_Pakistan" target="_blank"><span className="fa fa-twitter"></span></a>
                                    <a href="//www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ" target="_blank"><span className="fa fa-youtube"></span></a>
                                    <a href="//www.instagram.com/olx.pakistan" target="_blank"><span className="fa fa-instagram"></span></a>
                                </div>
                            </div>
                            <div className="follow-app">
                                <a href="//apps.apple.com/pk/app/olx-pakistan/id1119081665?utm_source=desktop_ios&utm_medium=home_banner&utm_campaign=home" target="_black"><img src={require('../Images/appstore.png')} /></a>
                                <a href="//play.google.com/store/apps/details?id=com.olx.pk&utm_source=desktop_android&utm_medium=home_banner&utm_campaign=home" target="_black"><img src={require('../Images/playstore.png')} /></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-end">
                    <div>
                        <span className="bold">Other Countries</span>
                        <span>
                            <a href="//olx.in/">India</a>-
                            <a href="//olx.co.za/">South Africa</a>-
                            <a href="//olx.co.id">Indonesia</a>
                        </span>
                    </div>
                    <div>
                        <p><span className="bold">Free Classifieds in Pakistan</span>. © 2006-2020 OLX</p>
                    </div>

                </div>
            </>
        )
    }
}

export default Footer
