import MenuNavbarStoreAdmin from "@/components/header/header-admin-store/header-admin-store";
import StoreDetailPage from "@/components/menu/menu-store-admin/store-by-id";

// ✅ Langsung definisikan props secara eksplisit
export default function StoreByIdPage({
  params,
}: {
  params: { storeId: string };
}) {
  return (
    <MenuNavbarStoreAdmin>
      <StoreDetailPage storeId={params.storeId} />
    </MenuNavbarStoreAdmin>
  );
}
