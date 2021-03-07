/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

// Utils
import formatMoney from '../lib/formatMoney';

// Components / Styles
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';

export default function Product({ product }) {
  return (
    <ItemStyles>
      <img
        src={product?.photo?.image?.publicUrlTransformed}
        alt={product.name}
      />
      <Title>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
    </ItemStyles>
  );
}
