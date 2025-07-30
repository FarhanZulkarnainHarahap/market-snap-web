"use client";

import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  weight: number;
  stock: number;
}

interface StoreProduct {
  productId: string;
  storeId: string;
  stock: number;
  createdAt: string;
  updatedAt: string;
  Product: Product;
}

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  StoreProduct: StoreProduct[];
}

export default function StoreDetailPage({ storeId }: { storeId: string }) {
  const [store, setStore] = useState<Store | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStore() {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
        const res = await fetch(`${baseUrl}/api/v1/stores/${storeId}`, {
          credentials: "include",
        });
        const data = await res.json();
        setStore(data.data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchStore();
  }, [storeId]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!store) return <p className="p-4 text-red-500">Store not found.</p>;

  return (
    <section className="max-w-2xl mx-auto p-6 border">
      <h1 className="text-2xl font-bold mb-2">{store.name}</h1>
      <p className="text-gray-700 mb-4">
        {store.address}, {store.city}, {store.province}, {store.postalCode}
      </p>

      <h2 className="text-xl font-semibold mb-2">Products</h2>
      <ul>
        {store.StoreProduct.map((item) => (
          <li key={item.productId} className="mb-4">
            <h3 className="text-lg font-medium">{item.Product.name}</h3>
            <p>{item.Product.description}</p>
            <p>Price: ${item.Product.price}</p>
            <p>Weight: {item.Product.weight} kg</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
