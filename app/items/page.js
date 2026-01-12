

import ShopContent from '../components/ShopContent';

async function getItems() {
  try {
    
    const res = await fetch('http://127.0.0.1:5000/api/items', { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <ShopContent items={items} />
    </div>
  );
}