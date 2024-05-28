//hook
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

//component
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RFIDReaderInput } from "rfid-reader-input";

//icon
import { BiRfid } from "react-icons/bi";
import { EVehicleType, ICard } from "@/interfaces/models/card";

interface Props {
  handleChangeForm: (name: string, value: any) => void;
}
const ModalDay = (props: Props) => {
  // const { register, setValue } = props;
  const { handleChangeForm } = props;

  const [serialCard, setSerialcard] = useState("");
  const [openCardReaderWindow, setOpenCardReaderWindow] =
    useState<boolean>(false);

  const handleOpenRFID = () => {
    setOpenCardReaderWindow(true);
  };

  const handleCloseRFID = () => {
    setOpenCardReaderWindow(false);
  };

  useEffect(() => {
    if (serialCard) {
      handleChangeForm("uid", serialCard);
    }
  }, [serialCard]);

  return (
    <div className="space-y-4 gap-4 py-4 h-[400px]">
      <div className="absolute top-[50%] left-[50%]">
        <RFIDReaderInput
          textTitle="Quẹt thẻ của bạn"
          textBody="Hãy đợi tín hiệu"
          isOpen={openCardReaderWindow}
          onRequestClose={handleCloseRFID}
          handleCodeCardRFID={setSerialcard}
        />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Mã thẻ
        </Label>
        <Input readOnly className="col-span-3" value={serialCard} />
        <button
          type="button"
          className="absolute right-10 hover:cursor-pointer"
          onClick={handleOpenRFID}
        >
          <BiRfid size={24} />
        </button>
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="name" className="text-right">
          Loại xe
        </Label>
        <Select
          onValueChange={(value: EVehicleType) => {
            handleChangeForm("vehicle_type", value);
          }}
        >
          <SelectTrigger className="w-[277px]">
            <SelectValue placeholder="Chọn loại xe" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Chọn loại xe</SelectLabel>
              <SelectItem value={EVehicleType.MOTORBIKE}>Xe gắn máy</SelectItem>
              <SelectItem value={EVehicleType.CAR}>Xe ô tô</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ModalDay;
