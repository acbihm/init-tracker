import "./style.css";
import React, { Fragment } from "react";
// import Wrapper from "./components/Wrapper";
// import GameWrapper from "./components/GameWrapper";
import HeaderText from "../HeaderText";
import List from "../List";
import Footer from "../Footer"
class Wrapper extends React.Component {

    render() {
        return (
            <Fragment>
                <HeaderText />

                <List />
                <Footer />
            </Fragment>
        );
    }
}
export default Wrapper;