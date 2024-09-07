import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full  select-none h-[5rem] p-5 justify-between items-center flex  text-white shadow-md">
      <Link to="/" className="font-bold text-3xl ">
        CodeEd
      </Link>
      <ul className="">
        <li>
          <Link to="/compiler">
            <Button
              variant="outline"
              className="text-2xl font-semibold w-[10rem] h-[3.5rem]"
            >
              Editor{" "}
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
