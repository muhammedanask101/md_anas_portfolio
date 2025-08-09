import { PulseLoader } from "react-spinners";

const FallbackLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#87ceeb" />
    </div>
  );
};

export default FallbackLoading;