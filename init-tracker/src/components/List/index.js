import "./style.css";
import React, { Fragment } from "react";
// import HeaderText from "../HeaderText";
class List extends React.Component {
    render() {
        return (
            <Fragment>
                <ul class="list-group">
                <li class="list-group-item PC active"><span class="name">Player char 1</span><span class="tracker"></span></li>
                    <li class="list-group-item PC"><span class="name">Player char 2</span><span class="tracker"></span></li>
                    {/* <li class="list-group-item unconscious">Unconscious</li> */}
                    <li class="list-group-item enemy"><span class="name">Enemy</span><span class="tracker"></span></li>
                    {/* <li class="list-group-item NPC">NPC</li> */}
                    <li class="list-group-item empty"><span class="name">Please enter a name</span><span class="tracker"></span></li>
                    <li class="list-group-item empty"><span class="name">Please enter a name</span><span class="tracker"></span></li>
                    <li class="list-group-item empty"><span class="name">Please enter a name</span><span class="tracker"></span></li>

                </ul>
            </Fragment>
        );
    }
}
export default List;