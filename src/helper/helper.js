const shortenText = (text) => {
  return text.split(" ").splice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );
  return searchProducts;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filterProducts = products.filter((p) => p.category == category);
  return filterProducts;
};

const createQueryObjectt = (currentQuery, newQuery) => {
  if (newQuery.category == "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search == "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumProducts = (products) => {
  const itemCounter = products.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = products
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};

export {
  shortenText,
  searchProducts,
  filterProducts,
  createQueryObjectt,
  getInitialQuery,
  sumProducts,
};
