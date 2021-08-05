import Product from "./Product";

const ProductsList = (props) => {
  const { products } = props;
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.gid}
          product={product}
          setInCart={props.setInCart}
          inCart={props.inCart}
        />
      ))}
    </>
  );
};

export default ProductsList;
