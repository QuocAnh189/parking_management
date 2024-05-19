import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

//page
const LoginPage = lazy(() => import("./pages/auth/Login"));
const RegisterPage = lazy(() => import("./pages/auth/Register"));
const DetectPage = lazy(() => import("./pages/detection/Detection"));
const ManagementPage = lazy(() => import("./pages/management/Management"));
// const SettingPage = lazy(() => import("./pages/setting/Setting"));
const RFID = lazy(() => import("./pages/expamle_rfid"));

//component
import Loader from "./components/common/Loader";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/main" element={<Layout />}>
            <Route path="/main" element={<DetectPage />} />
            <Route path="/main/management" element={<ManagementPage />} />
            <Route path="/main/setting" element={<RFID />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
