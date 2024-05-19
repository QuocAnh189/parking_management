import { useCallback, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

//audio
import the_da_het_han from "@/assets/audio/The_da_he_han.mp3";
import the_khong_hop_l from "@/assets/audio/The_khong_hop_le.mp3";
import xe_khong_co_trong_bai from "@/assets/audio/Xe_khong_co_trong_bai.mp3";
import xin_moi_xe_ra from "@/assets/audio/Xin_moi_xe_ra.mp3";
import xin_moi_xe_vao from "@/assets/audio/Xin_moi_xe_vao.mp3";

//component
import Calendar from "@/components/common/Calendar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const DetectPage = () => {
  const webRef1 = useRef<any>(null);
  const webRef2 = useRef<any>(null);

  const error1 = new Audio(the_da_het_han);
  const error2 = new Audio(the_khong_hop_l);
  const error3 = new Audio(xe_khong_co_trong_bai);
  const error4 = new Audio(xin_moi_xe_ra);
  const error5 = new Audio(xin_moi_xe_vao);

  // const showImage1 = () => {
  //   let img1 = webRef1?.current.getScreenshot();
  //   console.log(img1);
  // };

  // const showImage2 = () => {
  //   let img2 = webRef2?.current.getScreenshot();
  //   console.log(img2);
  // };

  const start = () => {
    error1.play();
    error2.play();
    error3.play();
    error4.play();
    error5.play();
  };

  return (
    <div className="w-full max-h-screen flex flex-col gap-4 items-center">
      <div className="w-4/5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Vào/Ra</Label>
        </div>
        <Calendar />
      </div>
      <div className="w-full flex gap-10 items-center justify-center">
        <div className="w-2/5">
          <p>Lượt ra: 1000</p>
          <Webcam
            className="w-full"
            ref={webRef1}
            videoConstraints={{
              facingMode: "user",
              deviceId: "A2161",
            }}
          />
        </div>
        <div className="w-2/5">
          <p>Lượt vào: 1000</p>
          <Webcam
            className="w-full"
            ref={webRef2}
            videoConstraints={{
              facingMode: "user",
              deviceId: "8812DD64-DD23-45AA-A0DB-0D231D6DFF4E",
            }}
          />
        </div>
        {/* <button onClick={start}>On Run</button> */}
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
