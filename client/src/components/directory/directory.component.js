import React from "react";

import "./directory.styles.scss";
import { connect } from "react-redux";
import MenuItem from "../menu-item/menu-item.component.js";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
