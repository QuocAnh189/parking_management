//component
import DataTableManageCard from "@/components/common/Table-Manage-Card";
import DataTableManageIO from "@/components/common/Table-Manage-IO";

//shadcn
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ManagementPage = () => {
  return (
    <div className="px-10">
      <Tabs defaultValue="card" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="card">Danh sách quản lý thẻ</TabsTrigger>
          <TabsTrigger value="in_out_put">Danh sách vào ra</TabsTrigger>
        </TabsList>
        <TabsContent value="card">
          <DataTableManageCard />
        </TabsContent>
        <TabsContent value="in_out_put">
          <DataTableManageIO />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManagementPage;
