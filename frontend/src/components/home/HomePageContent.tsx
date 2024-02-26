import { useCallback, useEffect, useState } from "react";
import { SearchInput, SectionHeader, Loader } from "components/ui";
import { ProductFilters, ProductsLayout } from "components/products";

import { IProduct } from "src/utils/interfaces";
import { debounce } from "src/utils";

import useProductsStore from "src/store/useProductsStore";

const HomePageContent = () => {
  const { products, loading, fetchProducts } = useProductsStore();
  const [productState, setProductState] = useState(products);

  const filterProducts = useCallback(
    debounce((event: any) => {
      const text = event.target.value.toLowerCase();
      const filteredProducts = products?.filter((prod: IProduct) => {
        return prod.brand.toLowerCase().includes(text);
      });
      setProductState(filteredProducts || []);
    }, 300),
    [products]
  );

  useEffect(() => {
    if (products === null) {
      fetchProducts();
    } else {
      setProductState(products);
    }
  }, [products]);

  return (
    <section className="home-page-container">
      <SearchInput
        onChange={filterProducts}
        placeholder="Search burger, pizza, drink or etc..."
      />
      <ProductFilters />
      <article className="filters-container">
        <SectionHeader showAllButton>Populer</SectionHeader>
        {loading && <Loader />}
        <ProductsLayout products={productState} />
      </article>
    </section>
  );
};

export default HomePageContent;
