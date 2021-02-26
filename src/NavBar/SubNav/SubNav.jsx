import React from "react";
import SubNavItem from "../SubNav/SubNavItem/SubNavItem"

export default function SubNav() {
  return (
    <div>
      <SubNavItem label='Restaurants'/>
      <SubNavItem label="Home Services" />
      <SubNavItem label="Auto Services" />
      <SubNavItem label="More" />
    </div>
  );
}
