import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "Mi Primer Libro",
    description: "Primer libro escrito por mi!",
  },
  {
    id: "p2",
    price: 5,
    title: "Mi Segundo Libro",
    description: "Segundo libro escrito por mi!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Compra tu producto favorito</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
