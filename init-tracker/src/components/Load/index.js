import "./style.css";
import React, { Fragment } from "react";
class Load extends React.Component {
    render() {
        return (
            <Fragment class="load">
                <input type="text" value="" class="load-field" ></input>
                <button class="load-button">
                    Load game from code
                </button>
            </Fragment>
        );
    }
}
export default Load;