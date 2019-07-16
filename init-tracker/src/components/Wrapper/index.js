import "./style.css";
import React, { Fragment } from "react";
// import Wrapper from "./components/Wrapper";
// import GameWrapper from "./components/GameWrapper";
import HeaderText from "../HeaderText";
import List from "../List";
class Wrapper extends React.Component {

    render() {
        return (
            <Fragment>
                <HeaderText />

                <List />
            </Fragment>
        );
    }
}
export default Wrapper;