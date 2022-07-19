import React, { Component } from 'react'


import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
 
import './Footer.css';
export default class Footer extends Component {
    render() {
        return (
            <div className='loopBox'>
 
                <div className='Big-Box'>
 

                    <div className='Box-1'>

                        <h3>iGameSpot</h3>

                    </div>
                    <div className='Box-2'>
                        <div className='Company'>
                            <h5>Company</h5>
                            <ul className='do-none'>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Our Culture</li>
                                <li>Giving </li>
                                <li>Partners</li>
                                <li>Game Gear</li>
                                <li>The Game Blogs</li>
                                <li>Press Room</li>

                            </ul>
                        </div>
                        <div className='Water Pass'>
                            <h5>iGameSpot Pass</h5>
                            <ul className='do-none'>
                                <li>Go Premium</li>
                                <li>iGameSpot Lab</li>
                                <li>Get Perks</li>



                            </ul>
                        </div>
                        <div className='Downloads'>

                            <h5>Downloads</h5>
                            <ul className='do-none'>

                                <li>iGameSpot Media Server</li>
                                <li>Apps and Devices</li>
                                <li>Where to Watch</li>
                            </ul>
                        </div>
                        <div className='Resources'>
                            <h5>Resources</h5>
                            <ul className='do-none'>

                                <li>Support</li>
                                <li>Articles</li>
                                <li>Forums</li>
                                <li>Billing Questions</li>
                                <li>Status</li>
                                <li>Bug Bounty</li>
                                <li>Cord Cutter</li>
                                <li>Contact</li>

                            </ul>


                        </div>

                    </div>
                </div>
 <div className='line'>


 </div>
                <div className='Rights'>

                    <div className='Policies'>
                        <p>Copyright © 2022 iGameSpot Privacy & Legal AdChoices Accessibility Language: English (India)</p>

                    </div>
                    <div className='Media-Icons'>
                        <FaLinkedin className='ok' />
                        <FaTwitter className='ok' />
                        <FaYoutube className='ok' />
                        <FaFacebook className='ok' />
                        <FaInstagram className='ok' />

                    </div>

                </div>
            </div>
        )
    }
}
