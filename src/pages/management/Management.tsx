//hook
import { useEffect } from "react";

//component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataTableManageCard from "@/components/common/Table-Manage-Card";
import DataTableManageIO from "@/components/common/Table-Manage-IO";
import { Skeleton } from "@/components/ui/skeleton";

//redux
import { useGetAllCardsQuery } from "@/redux/services/card";
import { useGetAllInOutsQuery } from "@/redux/services/in_out";

const ManagementPage = () => {
  const { data: cards, isFetching: fetchingCard } = useGetAllCardsQuery();
  const { data: ios, isFetching: fetchingInOut } = useGetAllInOutsQuery();

  if (fetchingCard || fetchingInOut) {
    return (
      <div className="px-10">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  return (
    <div className="px-10">
      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="card">Danh sách quản lý thẻ</TabsTrigger>
          <TabsTrigger value="in_out_put">Danh sách vào ra</TabsTrigger>
        </TabsList>
        <TabsContent value="card">
          {cards && <DataTableManageCard cards={cards!} />}
        </TabsContent>
        <TabsContent value="in_out_put">
          {ios && <DataTableManageIO ios={ios.slice(0).reverse()!} />}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagementPage;
