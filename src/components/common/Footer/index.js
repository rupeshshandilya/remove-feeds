import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    // <div id="footer">
    //   <div className="container">
    //     <div className="row">
    //         <div className="footer-left">
    //             <img src="images/logo.png" alt="remove-feed-img" className="logo-img"/>
    //             <h2 className="sub-title">About The Productive Youtube app</h2>
    //             <p className="sub-title-p">With the introduction of shorts and the hiring of the world’s best Machine Learning engineers,
    //                 Youtube, just like any other social platform, is fighting for your attention. The world’s best education is available for free on YouTube, but it’s impossible for you to make the most efficient use of it, with current attention capturing Youtube. We are here to help you make the most of your learning process. 
    //                 Save time . Be more productive. Use Youtube to your advantage.
    //             </p>
    //         </div>
    //         <div className="footer-right">
    //             <div className="contact">
    //                 <a href="https://www.instagram.com/rupesh.shandilya_">Instagram</a>
    //                 <a href="https://www.linkedin.com/in/rupesh-shandilya-04655a193/">LinkedIn</a>
    //                 <a href="https://www.facebook.com/">Facebook</a>
    //                 <a href="https://twitter.com/login">Twitter</a>
    //                 </div>
    //         </div>
    //      </div>
    //     </div>
    // </div>
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>About Us</h4>
                    <p>With the introduction of shorts and the hiring of the world’s best Machine Learning engineers,
                        Youtube, just like any other social platform, is fighting for your attention. The world’s best education is available for free on YouTube, but it’s impossible for you to make the most efficient use of it, with current attention capturing Youtube. We are here to help you make the most of your learning process. 
                        Save time . Be more productive. Use Youtube to your advantage
                    </p>
                </div>
                <div className="footer-col social">
                    <h4 id="h41">Follow Us</h4>
                    <ul>
                        <li><a href='#'>Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href='#'>Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-col social next">
                    <h4 id="h41">Company</h4>
                    <ul>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href='#'>Satus</a></li>
                        <li><a href="#">Payment</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
  )
};

export default Footer
