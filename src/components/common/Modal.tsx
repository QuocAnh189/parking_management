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
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

//icon
import { Plus } from "lucide-react";

//interface
import { ICard, initCard } from "@/interfaces/models/card";

//redux
import {
  useCreateCardMutation,
  useCreateCardDayMutation,
} from "@/redux/services/card";
import { useState } from "react";

const ButtonAdd = () => {
  const [formCard, setFormCard] = useState<ICard | any>(initCard);
  const [createCardMonth, { isLoading: isLoadingMonth }] =
    useCreateCardMutation();
  const [createCardDay, { isLoading: isLoadingDay }] =
    useCreateCardDayMutation();

  const handleChangeForm = (name: string, value: any) => {
    setFormCard({ ...formCard, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const result =
        formCard.card_type === "MONTH"
          ? await createCardMonth(formCard).unwrap()
          : await createCardDay(formCard).unwrap();
      if (result) {
        toast({
          className: cn(
            "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-400"
          ),
          title: "Create Successfully",
          description: "Let checkin now",
          duration: 3000,
        });
      }
    } catch (e) {
      toast({
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        title: "Create Fail",
        description: "Something went wrong",
        duration: 3000,
        variant: "destructive",
      });
    }
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
              value === "month"
                ? initCard
                : { uid: "", vehicle_type: "", card_type: "DAY" }
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
          <Button
            disabled={isLoadingMonth || isLoadingDay}
            type="button"
            onClick={handleSubmit}
          >
            {isLoadingMonth || isLoadingDay ? "Loading" : "Thêm"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAdd;
