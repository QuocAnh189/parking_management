//hook
import { useNavigate } from "react-router-dom";

//interface
import { ILink } from "@/interfaces/systems";

interface IProps {
  link: ILink;
}

const Link = (props: IProps) => {
  const navigate = useNavigate();
  const { link } = props;

  return (
    <button
      onClick={() => {
        navigate(link.path);
      }}
      className="flex items-center gap-2 hover:underline"
    >
      {link.icon}
      <p>{link.name}</p>
    </button>
  );
};

export default Link;
