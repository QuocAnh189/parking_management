import { Outlet, useNavigate } from "react-router-dom";

import routes from "@/constants/routes";

//component
import Link from "@/components/common/Link";
import AvatarUser from "@/components/common/Avatar";

//shadcn
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slices/user";

const Layout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    navigate("/");
  };

  return (
    <div className="h-screen">
      <header className="flex items-center justify-between gap-6 py-4 px-4">
        <div className="flex items-center gap-6">
          {routes.map((route, index) => (
            <Link key={`link-${index}`} link={route} />
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 hover:cursor-pointer">
              <AvatarUser />
              <p>Anh Quốc</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-30">
            <DropdownMenuItem onClick={handleLogout}>
              <span className="hover:cursor-pointer">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
