import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#008cff" />
    </div>
  );
};
  
export default Loader;