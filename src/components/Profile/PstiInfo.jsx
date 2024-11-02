import Description from "./Description/Description.jsx";
import Vision from "./Vision/Vision.jsx";
import Mission from "./Mission/Mission.jsx";
import Goals from "./Goals/Goals.jsx";

function PstiInfo() {
  return (
    <div>
      <Description />
      <div className="visimisi d-flex gap-4">
        <div className="pt-5">
          <Vision />
        </div>
        <div className="pt-5">
          <Mission />
        </div>
      </div>
      <div className="pt-5">
        <Goals />
      </div>
    </div>
  );
}

export default PstiInfo;
