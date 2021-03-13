import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const ProductStyles = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  gap: 2rem;
  max-width: var(--max-width);
  align-items: top;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const SINGLE_ITEM_ITEM_QUERY = gql`
  query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      id
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_ITEM_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <DisplayError error={error.message} />;
  const { Product } = data;

  if (data)
    return (
      <ProductStyles>
        <Head>
          <title>Sick Fits | {Product.name} </title>
        </Head>
        <img
          src={Product.photo.image.publicUrlTransformed}
          alt={Product.photo.altText}
        />
        <div className="details">
          <h2>{Product.name}</h2>
          <p>{Product.description}</p>
        </div>
      </ProductStyles>
    );
}
