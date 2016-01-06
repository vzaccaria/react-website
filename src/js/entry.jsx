const React = require("react");
const ReactDOM = require("react-dom");
import { App, Page, Section, Hero, Navbar, Team, TeamMember, PricingTable, PricingPlan, HorizontalSplit } from "neal-react";

global.jQuery = require('jQuery');

let page = (
    <Hero backgroundImage={require("file!../img/lp_background_darken.jpg")}
        className="text-xs-center">
        <h1 className="display-4"> Declarative Landing Pages for React.js </h1>
        <p className="lead">Build a beautiful landing page in less than an hour.
          No more redundant code. Easily extensible.</p>
        <p>
          <a href="https://github.com/dennybritz/neal-react" target="_blank" className="btn btn-white">
            Get it on Github
          </a>
        </p>
    </Hero>
)



ReactDOM.render(page, document.getElementById("container"));
