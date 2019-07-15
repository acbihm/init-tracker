import "./style.css";
import React, { Fragment } from "react";
// import Wrapper from "./components/Wrapper";
// import GameWrapper from "./components/GameWrapper";
import Gen from "../Gen";
import Load from "../Load"
class HeaderText extends React.Component {

    render() {
        return (
            <Fragment>
                <h1>Turn Tracker</h1>
                <Gen />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Load />
                <p>enter info</p>
            </Fragment>
        );
    }
}
export default HeaderText;