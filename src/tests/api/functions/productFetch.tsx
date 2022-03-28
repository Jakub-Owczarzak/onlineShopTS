export const fetchProducts = async (
  page: number,
  limitPerPage: number,
  phrase?: string,
  promo?: boolean,
  active?: boolean
) => {
  try {
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        `/products?page=${page}&limit=${limitPerPage}${
          phrase ? `&search=${phrase}` : ""
        }${promo ? `&promo=${promo}` : ""}${active ? `&active=${active}` : ""}`
    );
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.log(error);
  }
};
