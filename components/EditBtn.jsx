import Link from "next/link";
import { FaRegPenToSquare } from "react-icons/fa6";

const EditBtn = ({ id }) => {
  return (
    <Link href={`/${id}`}>
      <FaRegPenToSquare />
    </Link>
  );
};
export default EditBtn;
