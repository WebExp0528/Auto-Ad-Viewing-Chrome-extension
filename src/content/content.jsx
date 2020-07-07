/* global document */

import React from "react";
import ReactDOM from "react-dom";
import ext from "../utils/ext";
import onRequest from "./messageListener";

ext.runtime.onMessage.addListener(onRequest);

class Main extends React.Component {
    render() {
        return <div className="my-extension"></div>;
    }
}

const app = document.createElement("div");
app.id = "my-extension-root";
document.body.appendChild(app);
ReactDOM.render(<Main />, app);
