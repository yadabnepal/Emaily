import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {connect} from "react-redux";

class Modal extends Component {
    componentDidMount() {
        const options = {
            onOpenStart: () => {
                console.log("Open Start");
            },
            onOpenEnd: () => {
                console.log("Open End");
            },
            onCloseStart: () => {
                console.log("Close Start");
            },
            onCloseEnd: () => {
                console.log("Close End");
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
        // If you want to work on instance of the Modal then you can use the below code snippet
        // let instance = M.Modal.getInstance(this.Modal);
        // instance.open();
        // instance.close();
        // instance.destroy();
    }

    render() {
        return (
            <>
                <div
                    ref={Modal => {
                        this.Modal = Modal;
                    }}
                    id="modal1"
                    className="modal"
                >
                    {/* If you want Bottom Sheet Modal then add
        bottom-sheet class */}
                    <div className="blue-text modal-content">
                        <h4 className="blue-text">Login Using</h4>
                        <a href="/auth/google" className="waves-effect waves-light btn social google">
                             Sign in with google
                        </a>
                        <a href="/auth/linkedin" className="waves-effect waves-light btn social google">
                            Sign in with Linkedin
                        </a>
                    </div>
                    <div className="modal-footer">
                        <a href="#" className="modal-close waves-effect waves-red btn-flat">
                            Disagree
                        </a>
                        <a href="#" className="modal-close waves-effect waves-green btn-flat">
                            Agree
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default connect()(Modal);