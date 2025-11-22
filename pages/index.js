import React from 'react';
// Dados estáticos para a demonstração visual
const demoProducts = [
  { id: 1, name: "Vestido Floral", price: 129.90, imageUrl: "https://via.placeholder.com/300/F0E6D0/0077B6?text=VESTIDO" },
  { id: 2, name: "Bermuda Linho", price: 89.90, imageUrl: "https://via.placeholder.com/300/F0E6D0/0077B6?text=BERMUDA" },
  { id: 3, name: "Bolsa Praia", price: 79.90, imageUrl: "https://via.placeholder.com/300/F0E6D0/0077B6?text=BOLSA" }
];

const ProductCard = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price);
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', textAlign: 'center' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ margin: '10px 0 5px', fontSize: '1.1em', color: '#333' }}>{product.name}</h3>
      <p style={{ fontWeight: '700', color: '#0077B6' }}>{formattedPrice}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#0077B6', textAlign: 'center', marginTop: '40px' }}>O Seu Estilo em Pontal</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {demoProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
