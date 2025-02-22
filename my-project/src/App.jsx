import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";

export default function App() {
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white ">
      <div className="container horzontal mt-5">
        <Stepper />
      </div>
      <div>
        <StepperControl />
      </div>
    </div>
  );
}
