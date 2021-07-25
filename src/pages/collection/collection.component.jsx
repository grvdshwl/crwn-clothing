import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
  CollectionPageContainer,
  TitleDiv,
  ItemsDiv,
  CollectionItemDiv,
} from "./collection.styles";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <TitleDiv> {title} </TitleDiv>
      <ItemsDiv>
        {items.map((item) => (
          <CollectionItemDiv>
            <CollectionItem key={item.id} item={item} />
          </CollectionItemDiv>
        ))}
      </ItemsDiv>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
