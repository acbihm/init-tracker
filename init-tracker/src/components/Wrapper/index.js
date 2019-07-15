import "./style.css";
import React, { Fragment } from "react";
// import Wrapper from "./components/Wrapper";
// import GameWrapper from "./components/GameWrapper";
import HeaderText from "../HeaderText";

class Wrapper extends React.Component {

    render() {
        return (
            <Fragment>
                <HeaderText />
                <div class="name">
                    hellooooo
                </div>
            </Fragment>
        );
    }
}
export default Wrapper;