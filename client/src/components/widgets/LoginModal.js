import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {connect} from "react-redux";
import { Link } from 'react-router-dom';

class Modal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: true,
            preventScrolling: true,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }

    render() {
        return (
            <>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal col s3"
                >
                    <div className="modal-content">
                        <h4 className="blue-text">Login Using</h4>
                        <a href="/auth/google" className="waves-effect waves-light btn social google">
                             Sign in with google
                        </a>
                        <a href="/auth/linkedin" className="waves-effect waves-light btn social google">
                            Sign in with Linkedin
                        </a>
                    </div>
                    <div className="modal-footer">
                        <Link to={"#"}  className="modal-close waves-effect waves-red btn-small red">
                            Cancle
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default connect()(Modal);