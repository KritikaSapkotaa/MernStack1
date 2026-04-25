const products = async ({ params }) => {
  const productId = (await params).productId;
  return <div>products: {productsId}</div>
};

export default products;