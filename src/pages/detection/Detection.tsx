//hook
import { useEffect, useRef, useState } from "react";

//assets
import xin_moi_xe_vao from "@/assets/audio/Xin_moi_xe_vao.mp3";
import the_da_het_han from "@/assets/audio/The_da_he_han.mp3";
import the_khong_hop_le from "@/assets/audio/The_khong_hop_le.mp3";
import dung_dung_vi_tri from "@/assets/audio/dung_dung_vi_tri.mp3";
import xe_nam_trong_bai from "@/assets/audio/xe_nam_trong_bai.mp3";
import xe_khong_co_trong_bai from "@/assets/audio/Xe_khong_co_trong_bai.mp3";
import xin_moi_xe_ra from "@/assets/audio/Xin_moi_xe_ra.mp3";
import the_chua_quet_vao from "@/assets/audio/the_chua_quet_vao.mp3";

//component
import Calendar from "@/components/common/Calendar";
import Webcam from "react-webcam";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

//redux
import {
  useCheckInMutation,
  useCheckOutMutation,
  useGetAllInOutsQuery,
  useGetInOutByUidQuery,
} from "@/redux/services/in_out";

//rfid
import { RFIDReaderInput } from "rfid-reader-input";

//util
import { URLtoFile } from "@/utils/url_to_file";
import { InOutResponse } from "@/interfaces/variable";
import dayjs from "dayjs";

const DetectPage = () => {
  const webRef1 = useRef<any>(null);
  const webRef2 = useRef<any>(null);

  const { data: ios } = useGetAllInOutsQuery();

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .enumerateDevices()
  //     .then((devices) => console.log(devices));
  // }, []);

  const [CheckIn] = useCheckInMutation();
  const [CheckOut] = useCheckOutMutation();

  const [openCardReaderWindow, setOpenCardReaderWindow] =
    useState<boolean>(true);

  const [resultCheckIn, setResultCheckIn] = useState<InOutResponse>();
  const [resultCheckOut, setResultCheckOut] = useState<InOutResponse>();

  const [stateInOut, setStateInOut] = useState<"check-in" | "check-out">(
    "check-in"
  );
  const [serialCard, setSerialcard] = useState("");

  const handleCheck = async (code: string) => {
    try {
      const file: any =
        stateInOut === "check-in"
          ? await URLtoFile(webRef1?.current.getScreenshot())
          : await URLtoFile(webRef1?.current.getScreenshot());
      const formData = new FormData();
      formData.append("image", file);
      formData.append("uid", code.slice(code.length - 10, code.length));
      const result: any =
        stateInOut === "check-in"
          ? await CheckIn(formData).unwrap()
          : await CheckOut(formData).unwrap();
      if (result) {
        if (stateInOut === "check-in") {
          setResultCheckIn(result);
        } else {
          setResultCheckIn(result.in);
          setResultCheckOut(result.out);
        }
        const success =
          stateInOut === "check-in"
            ? new Audio(xin_moi_xe_vao)
            : new Audio(xin_moi_xe_ra);
        success.play();
      }
    } catch (e: any) {
      switch (e.data.message) {
        case "UID card has not been registered":
          const error1 =
            stateInOut === "check-in"
              ? new Audio(the_khong_hop_le)
              : new Audio(xe_khong_co_trong_bai);
          error1.play();
          break;

        case "Plate number of the current vehicle is not the same with the one registered in card":
          const error9 = new Audio(the_khong_hop_le);
          error9.play();
          break;

        case "The vehicle with UID has not checked in, so we can't check out":
          const error6 = new Audio(the_chua_quet_vao);
          error6.play();
          break;

        case "The vehicle with UID has already checked in":
          const error2 = new Audio(xe_nam_trong_bai);
          error2.play();
          break;

        case "The card expired":
          const error3 = new Audio(the_da_het_han);
          error3.play();
          break;

        case "No plate founded in the image":
          const error4 = new Audio(dung_dung_vi_tri);
          error4.play();
          break;

        default:
          break;
      }
    }
  };

  useEffect(() => {
    let timer = undefined;
    if (resultCheckIn?.uid) {
      timer = setTimeout(() => {
        setResultCheckIn(undefined);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [resultCheckIn?.uid]);

  useEffect(() => {
    let timer = undefined;
    if (resultCheckOut?.uid) {
      timer = setTimeout(() => {
        setResultCheckIn(undefined);
        setResultCheckOut(undefined);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [resultCheckOut?.uid]);

  useEffect(() => {
    if (serialCard) {
      handleCheck(serialCard.slice(serialCard.length - 10, serialCard.length));
    }
  }, [serialCard]);

  useEffect(() => {
    if (!openCardReaderWindow) {
      setOpenCardReaderWindow(true);
    }
  }, [openCardReaderWindow]);

  return (
    <div className="w-full max-h-screen flex flex-col gap-4 items-center">
      <div className="absolute w-[300px] bg-red flex items-center justify-center top-[50%] left-[50%] z-[-1] opacity-0">
        <RFIDReaderInput
          isOpen={openCardReaderWindow}
          onRequestClose={() => {}}
          handleCodeCardRFID={setSerialcard}
          textTitle="Cho phép quẹt thẻ"
          textBody="Quẹt thẻ vào khung"
        />
      </div>
      <div className="w-[90%] flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          <Tabs
            className="w-full"
            value={stateInOut}
            onValueChange={(value: any) => {
              setStateInOut(value);
              setOpenCardReaderWindow(false);
            }}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger className="bg-gray text-white" value="check-out">
                Ra
              </TabsTrigger>
              <TabsTrigger className="bg-gray text-white" value="check-in">
                Vào
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2 z-20">
            <Switch
              checked={openCardReaderWindow}
              onCheckedChange={(checked) => {
                setOpenCardReaderWindow(checked);
              }}
            />
            <Label htmlFor="airplane-mode">
              {openCardReaderWindow ? "On" : "Off"}
            </Label>
          </div>
          <Calendar />
        </div>
      </div>
      <div className="w-full flex gap-10 items-center justify-center">
        <div className="w-2/5">
          <p className="text-xl font-bold">
            Lượt vào: {ios?.filter((item) => item.type === "IN").length}
          </p>
          {resultCheckIn?.img_url ? (
            <img src={resultCheckIn.img_url} className="    w-full" />
          ) : (
            <Webcam
              mirrored={true}
              className="w-full"
              ref={webRef1}
              videoConstraints={{
                facingMode: "user",
                deviceId: "8812DD64-DD23-45AA-A0DB-0D231D6DFF4E",
              }}
              audioConstraints={{
                deviceId: "8812DD64-DD23-45AA-A0DB-0D231D6DFF4E",
              }}
            />
          )}
        </div>
        <div className="w-2/5">
          <p className="text-xl font-bold">
            Lượt ra: {ios?.filter((item) => item.type === "OUT").length}
          </p>
          {resultCheckOut?.img_url ? (
            <img src={resultCheckOut?.img_url} className="w-full" />
          ) : (
            <Webcam
              mirrored={true}
              className="w-full"
              ref={webRef2}
              videoConstraints={{
                facingMode: "user",
                deviceId:
                  "04c091c5182d2194a6948e7866c0e1565cb6bc931c3080971e42bacce4ae37a3",
              }}
              audioConstraints={{
                deviceId:
                  "04c091c5182d2194a6948e7866c0e1565cb6bc931c3080971e42bacce4ae37a3",
              }}
            />
          )}
        </div>
      </div>
      <div className="w-[90%] flex items-center gap-2 shadow-xl rounded-sm">
        <div className="w-1/2 h-full flex items-center gap-2">
          <div className="w-1/2 h-full">
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray rounded-t-sm">
              <p className="text-xl">Ngày vào:</p>
              <p className="text-xl font-bold">
                {resultCheckIn?.created_at
                  ? dayjs(resultCheckIn?.created_at).format("DD/MM/YYYY")
                  : ""}
              </p>
            </div>
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray">
              <p className="text-xl">Giờ vào:</p>
              <p className="text-xl font-bold">
                {resultCheckIn?.created_at
                  ? dayjs(resultCheckIn?.created_at).format("hh:mm:ss A")
                  : ""}
              </p>
            </div>
            <div className="w-full shadow-xl py-2 px-2 border-[3px] border-gray rounded-b-sm">
              <p className="text-xl">Biển số xe vào</p>
              <h1 className="text-3xl font-bold text-center">
                {resultCheckIn?.plate_number || "No here"}
              </h1>
            </div>
          </div>
          <div className="w-1/2 h-full">
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray rounded-t-sm">
              <p className="text-xl">Ngày ra:</p>
              <p className="text-xl font-bold">
                {resultCheckOut?.created_at
                  ? dayjs(resultCheckOut?.created_at).format("DD/MM/YYYY")
                  : ""}
              </p>
            </div>
            <div className="w-full flex items-center p-1 justify-between border-[2px] border-gray">
              <p className="text-xl">Giờ ra:</p>
              <p className="text-xl font-bold">
                {resultCheckOut?.created_at
                  ? dayjs(resultCheckOut?.created_at).format("hh:mm:ss A")
                  : ""}
              </p>
            </div>
            <div className="w-full shadow-xl py-2 px-2 border-[3px] border-gray rounded-b-sm">
              <p className="text-xl">Biển số xe ra</p>
              <h1 className="text-3xl font-bold text-center">
                {resultCheckOut?.plate_number || "No here"}
              </h1>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="w-full shadow-xl py-2 px-2 border-[2px] border-gray rounded-sm">
            <p className="text-xl">Giá vé</p>
            <h1 className="text-red-500 text-3xl font-bold text-center">
              {resultCheckIn?.vehicle_type
                ? resultCheckIn?.vehicle_type === "MOTORBIKE"
                  ? "4.0000D"
                  : "10.000D"
                : "Chưa xác định"}
            </h1>
          </div>
          <div className="w-full shadow-xl py-2 px-2 border-[2px] border-gray rounded-sm">
            <p className="text-xl">Loại xe</p>
            <h1 className="text-3xl font-bold text-center">
              {resultCheckIn?.vehicle_type
                ? resultCheckIn?.vehicle_type === "MOTORBIKE"
                  ? "Xe máy"
                  : "Xe ô tô"
                : "Chưa xác định"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectPage;
