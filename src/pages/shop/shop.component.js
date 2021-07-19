import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
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

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId),
});
export default ShopPage;
