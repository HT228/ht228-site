import products from '../data/products.json';

export function fetchProducts() {
  return products.map(p => {
    const price    = Number(p['Giá'] || 0);
    const oldPrice = Number(p['Giá so sánh'] || price);
    const discount = oldPrice > price
      ? Math.round((oldPrice - price) / oldPrice * 100)
      : 0;

    return {
      id:          p['Url'],
      name:        p['Tên'],
      description: p['Mô tả'] || '',
      price,
      oldPrice,
      discount,
      images:      p['Link hình'] ? [p['Link hình']] : [],
      rating:      5,
    };
  });
}

