import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import s from "./s.modules.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className={s.container}>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>

        <h1><Link to="/" /></h1>
        {children}
      </div>
    );
  }
}
