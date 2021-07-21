import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import { Route } from "react-router-dom";

import "./shop.styles.scss";
import CollectionPage from "../collection/collection.component";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};


export default ShopPage;
