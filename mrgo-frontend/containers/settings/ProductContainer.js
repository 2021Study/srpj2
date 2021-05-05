import React, { useState, useEffect, useMemo } from 'react';
import Product from '../../components/settings/Product';
import ResponsivePageTemplate from '../layout/ResponsivePageTemplate';

const ProductContainer = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeCode = e => setCode(e.target.value);
  const onChangePrice = e => setPrice(e.target.value);
  const onChangeQuantity = e => setQuantity(e.target.value);
  const onChangeCateGory = e => setCategory(e.target.value);

  useEffect(() => {
    setName('2021 S/S 룩북 팔레트 로코 하이틴');
    setCode('ASDFARWEGE');
    setPrice('13,750원');
    setQuantity('1000');
    setCategory('화장품');
  }, []);

  const isActiveModifyButton = useMemo(() => {
    if (
      name.length > 0 &&
      code.length > 0 &&
      price.length > 0 &&
      quantity.length > 0 &&
      category.length > 0
    )
      return true;
    return false;
  }, [name, code, price, quantity, category]);

  return (
    <ResponsivePageTemplate isFullInner>
      <Product
        name={name}
        code={code}
        price={price}
        quantity={quantity}
        category={category}
        onChangeName={onChangeName}
        onChangeCode={onChangeCode}
        onChangePrice={onChangePrice}
        onChangeQuantity={onChangeQuantity}
        onChangeCateGory={onChangeCateGory}
        isActiveModifyButton={isActiveModifyButton}
      />
    </ResponsivePageTemplate>
  );
};

export default ProductContainer;
