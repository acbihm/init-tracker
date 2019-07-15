import "./style.css";
import React, { Fragment } from "react";
// import HeaderText from "../HeaderText";
class Gen extends React.Component {
    render() {
        return (
            <Fragment class="gen">
                <button class="gen-button">
                    Create game code
                </button>
                <input type="text" value="3B4H3JNC923N" class="gen-field" readonly></input>
            </Fragment>
        );
    }
}
export default Gen;