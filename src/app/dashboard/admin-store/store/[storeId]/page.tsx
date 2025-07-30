// File: app/(store-admin)/store/[storeId]/page.tsx

"use client";

import MenuNavbarStoreAdmin from "@/components/header/header-admin-store/header-admin-store";
import StoreDetailPage from "@/components/menu/menu-store-admin/store-by-id";

interface PageProps {
  params: {
    storeId: string;
  };
}

export default function StoreByIdPage({ params }: PageProps) {
  return (
    <MenuNavbarStoreAdmin>
      <StoreDetailPage params={params} />
    </MenuNavbarStoreAdmin>
  );
}
