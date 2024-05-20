//hook
import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

//assets
import the_da_het_han from "@/assets/audio/The_da_he_han.mp3";
import the_khong_hop_l from "@/assets/audio/The_khong_hop_le.mp3";
import xe_khong_co_trong_bai from "@/assets/audio/Xe_khong_co_trong_bai.mp3";
import xin_moi_xe_ra from "@/assets/audio/Xin_moi_xe_ra.mp3";
import xin_moi_xe_vao from "@/assets/audio/Xin_moi_xe_vao.mp3";

//component
import Calendar from "@/components/common/Calendar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RFIDReaderInput } from "rfid-reader-input";
import { URLtoFile } from "@/utils/url_to_file";
import { Button } from "@/components/ui/button";

//redux
import {
  useCheckInMutation,
  useCheckOutMutation,
} from "@/redux/services/in_out";

const DetectPage = () => {
  const webRef1 = useRef<any>(null);
  const webRef2 = useRef<any>(null);

  const [CheckIn, { isLoading: loadingCheckIn }] = useCheckInMutation();
  const [CheckOut, { isLoading: loadingCheckOut }] = useCheckOutMutation();

  const error1 = new Audio(the_da_het_han);
  const error2 = new Audio(the_khong_hop_l);
  const error3 = new Audio(xe_khong_co_trong_bai);
  const error4 = new Audio(xin_moi_xe_ra);
  const error5 = new Audio(xin_moi_xe_vao);

  const [file, setFile] = useState<any>();
  const [openCardReaderWindow, setOpenCardReaderWindow] =
    useState<boolean>(false);

  const [stateInOut, setStateInOut] = useState<"check-in" | "checkout">(
    "check-in"
  );
  const [serialCard, setSerialcard] = useState("");

  function handleOpenRFID() {
    setOpenCardReaderWindow(true);
  }

  function handleCloseRFID() {
    setOpenCardReaderWindow(false);
  }

  const start = () => {
    error1.play();
    error2.play();
    error3.play();
    error4.play();
    error5.play();
  };

  const handleCheck = async (code: string) => {
    try {
      const file: any = await URLtoFile(webRef2?.current.getScreenshot());
      const formData = new FormData();
      formData.append("image", file);
      formData.append("uid", code.slice(code.length - 10, code.length));
      const result =
        stateInOut === "check-in"
          ? await CheckIn(formData).unwrap()
          : await CheckOut(formData).unwrap();
      if (result) {
        console.log(result);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (serialCard) {
      console.log("vo day");
    }
  }, [serialCard]);

  return (
    <div className="w-full max-h-screen flex flex-col gap-4 items-center">
      <div className="absolute flex items-center justify-center top-[50%] left-[50%] opacity-0 z-[-1]">
        <RFIDReaderInput
          isOpen={true}
          onRequestClose={handleCloseRFID}
          handleCodeCardRFID={setSerialcard}
        />
      </div>
      <div className="w-[90%] flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Tabs
            className="w-full"
            value={stateInOut}
            onValueChange={(value: any) => setStateInOut(value)}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="bg-gray text-white" value="check-in">
                Vào
              </TabsTrigger>
              <TabsTrigger className="bg-gray text-white" value="check-out">
                Ra
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <Calendar />
      </div>
      <div className="w-full flex gap-10 items-center justify-center">
        <div className="w-2/5">
          <p>Lượt ra: 0</p>
          <Webcam
            className="w-full"
            ref={webRef1}
            videoConstraints={{
              facingMode: "user",
              deviceId: "386ED050-9568-404A-BBCC-A812660B1EEA",
            }}
          />
        </div>
        <div className="w-2/5">
          <p>Lượt vào: 0</p>
          <Webcam
            mirrored={true}
            className="w-full"
            ref={webRef2}
            videoConstraints={{
              facingMode: "user",
              deviceId: "8812DD64-DD23-45AA-A0DB-0D231D6DFF4E",
            }}
          />
        </div>
      </div>
      <div className="w-[90%] flex items-center gap-2 shadow-xl rounded-sm">
        <div className="w-1/2 h-full flex items-center gap-2">
          <div className="w-1/2 h-full">
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray rounded-t-sm">
              <p className="text-xl">Ngày vào:</p>
              <p className="text-xl font-bold">26/06/2021</p>
            </div>
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray">
              <p className="text-xl">Giờ vào:</p>
              <p className="text-xl font-bold">06:30:00 AM</p>
            </div>
            <div className="w-full shadow-xl py-2 px-2 border-[3px] border-gray rounded-b-sm">
              <p className="text-xl">Biển số xe vào</p>
              <h1 className="text-3xl font-bold text-center">61-C1-16131</h1>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray rounded-t-sm">
              <p className="text-xl">Ngày ra:</p>
              <p className="text-xl font-bold">26/06/2021</p>
            </div>
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray">
              <p className="text-xl">Giờ ra:</p>
              <p className="text-xl font-bold">06:30:00 PM</p>
            </div>
            <div className="w-full shadow-xl py-2 px-2 border-[3px] border-gray rounded-b-sm">
              <p className="text-xl">Biển số xe ra</p>
              <h1 className="text-3xl font-bold text-center">61-C1-16131</h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-full shadow-xl py-2 px-2 border-[2px] border-gray rounded-sm">
            <p className="text-xl">Giá vé</p>
            <h1 className="text-red-500 text-3xl font-bold text-center">
              4.0000D
            </h1>
          </div>
          <div className="w-full shadow-xl py-2 px-2 border-[2px] border-gray rounded-sm">
            <p className="text-xl">Loại vé</p>
            <h1 className="text-3xl font-bold text-center">Xe máy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectPage;
