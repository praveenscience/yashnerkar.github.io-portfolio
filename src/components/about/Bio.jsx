import React from 'react'
import '../css/about.css'
const Bio = () => {
    return (
        <>
            <div className="container-text container pt-4" style={{ height: "70vh" }}>
                <div className="d-flex">
                    <div className="mx-4 py-4 px-3 biodiv">
                        <ol type="1">
                            <li>/**</li>
                            <li>&nbsp;* Hello there yash here!</li>
                            <li>&nbsp;* I have keen interset to develop new projects</li>
                            <li>&nbsp;* as well as to contribute in it. Trying new and </li>
                            <li>&nbsp;* different frameworks and technologies in the niche of </li>
                            <li>&nbsp;* web-development.</li>
                            <li>&nbsp;* I enjoy solving problems. Check out my ratings on  </li>
                            <li>&nbsp;* <a href="https://leetcode.com/Madmax10/">Leetcode</a> ,<a href="https://auth.geeksforgeeks.org/user/yashnerkar512/profile">GeeksforGeeks</a> and <a href="https://www.codechef.com/users/yash7861">Codechef</a>,etc</li>
                            <li>&nbsp;* </li>
                            <li>&nbsp;* <b>Achievements :</b></li>
                            <li>&nbsp;* Secured 2<sup>nd</sup> rank in "Hackoverflow" hackathon.</li>
                            <li>&nbsp;* Runner Up at<b>TechStorm</b> by Ruia College.</li>
                            <li>&nbsp;* Secured 2<sup>nd</sup> rank at state level "ICT-Olympiad"</li>
                            <li>&nbsp;* </li>
                            <li>*/</li>
                        </ol>
                    </div>
                    <div className="aboutme-img">
                        <img src="images/bio.png" className=" img-fluid mt-2" style={{ height: "30rem", width: "35rem" }} alt=""></img>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bio;