import React from 'react';
import './Home.scss'
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div className={"home-wrapper"}>
            <div className={"video-wrapper"}>
                <video loop={true} autoPlay={true} muted={true} playsInline={true}
                       src={"https://media.cdn.teamtailor.com/videos/uploads_converted/cover_large/b70570c958dde440071ff71ba734c573ce74c5f9.mp4"}></video>
                <div className={"video-overlay"}>
                    <h1>TX Travel Authorization Form</h1>
                    <Link to={"/form"}>
                        <button>Fill the Form</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;