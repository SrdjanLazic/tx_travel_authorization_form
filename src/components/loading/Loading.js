import React from 'react';
import './Loading.css'
import ReactLoading from "react-loading";

function Loading(props) {

    const Example = (type) => (
        <ReactLoading type={type} color={"#0cf8a4"} height={'50px'} width={'50px'} />
    );

    return (
        <div className="modal">
            <div className="modal_content">
                <div className={"loading-icon"}>
                    {
                        Example("spokes")
                    }
                </div>
                <h3>Submitting form...</h3>
            </div>
        </div>
    );
}

export default Loading;