import { gql } from "@apollo/client";

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query product($id: ID!) {
    product(_id: $id) {
      _id
      title
      description
      price
      thumbnailKey
      fileKey
      fileName
      createdAt
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          description
          price
          thumbnailKey
          fileKey
          fileName
          createdAt
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      products {
        _id
        title
        description
        price
        thumbnailKey
        fileKey
        fileName
        createdAt
      }
      orders {
        _id
        purchaseDate
        products {
          _id
          title
          description
          price
          thumbnailKey
          fileKey
          fileName
          createdAt
        }
      }
    }
  }
`;

