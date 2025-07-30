import MenuNavbarStoreAdmin from "@/components/header/header-admin-store/header-admin-store";
import StoreDetailPage from "@/components/menu/menu-store-admin/store-by-id";

type StoreIdParams = {
  params: {
    storeId: string;
  };
};

export default function StoreByIdPage({ params }: StoreIdParams) {
  return (
    <MenuNavbarStoreAdmin>
      <StoreDetailPage params={params} />
    </MenuNavbarStoreAdmin>
  );
}
