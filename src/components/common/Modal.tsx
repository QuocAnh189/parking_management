//component
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ModalMonth from "./Modal-Month";
import ModalDay from "./Modal-Day";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

//icon
import { Plus } from "lucide-react";

//interface
import { ICard, initCard } from "@/interfaces/models/card";

//redux
import { useCreateCardMutation } from "@/redux/services/card";
import { useState } from "react";

const ButtonAdd = () => {
  const [formCard, setFormCard] = useState<ICard | any>(initCard);
  const [createCard, { isLoading }] = useCreateCardMutation();

  const handleChangeForm = (name: string, value: any) => {
    setFormCard({ ...formCard, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const result = await createCard(formCard).unwrap();
      if (result) {
        console.log(result);
      }
    } catch (e) {}
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="ml-auto">
          Thêm Thẻ <Plus className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thêm Thẻ</DialogTitle>
          <DialogDescription>Điền đầy đủ thông tin của thẻ</DialogDescription>
        </DialogHeader>
        <Tabs
          defaultValue="month"
          className="w-full"
          onValueChange={(value) => {
            setFormCard(
              value === "month" ? initCard : { uid: "", vehicle_type: "" }
            );
          }}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger type="button" value="month">
              Thẻ tháng
            </TabsTrigger>
            <TabsTrigger type="button" value="day">
              Thẻ ngày
            </TabsTrigger>
          </TabsList>
          <TabsContent value="month">
            <ModalMonth handleChangeForm={handleChangeForm} />
          </TabsContent>
          <TabsContent value="day">
            <ModalDay handleChangeForm={handleChangeForm} />
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button disabled={isLoading} type="button" onClick={handleSubmit}>
            {isLoading ? "Loading" : "Thêm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAdd;
