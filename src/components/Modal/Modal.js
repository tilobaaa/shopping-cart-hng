// const Modal = ()=>{
//     return (
//         <div >
//             x
//             <h3>Payment Successful</h3>
//             <p>Your payment (Purchase #3249) has been confiremed.</p>
//             <a href="/receipt">Print receipt</a>
//             <button>Back to Home</button>
//         </div>
//     )
// }
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}>{props.children}</div>;
};



const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("portals");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay >
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );