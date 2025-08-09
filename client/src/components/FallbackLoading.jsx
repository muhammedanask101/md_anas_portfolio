import { PulseLoader } from "react-spinners";

const FallbackLoading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PulseLoader color="#00ff0dff" />
    </div>
  );
};

export default FallbackLoading;