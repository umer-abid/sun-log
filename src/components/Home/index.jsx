import React, { useState } from "react";
// Custom Component
import IpForm from "../IpForm";
import SunInfo from "../SunInfo";
// Custom Services
import { getLongitudeLatitude, getSunRiseSunSet } from "../../services";

export default function Home() {
  const [ipInput, setIpInput] = useState("");
  const [sunRiseData, setSunRiseData] = useState(undefined);
  const handleInputChange = (e) => {
    setIpInput(e);
  };
  const handleIpSubmit = async (e) => {
    e.preventDefault();
    let result;
    let res;
    ipInput.length && (result = await getLongitudeLatitude(ipInput));
    let { latitude, longitude } = result;
    {
      latitude &&
        longitude &&
        (res = await getSunRiseSunSet(latitude, longitude));
      setSunRiseData(res);
    }
  };
  return (
    <>
      <div className="container">
        <IpForm
          handleInputChange={handleInputChange}
          handleIpSubmit={handleIpSubmit}
        />
        <SunInfo sunRiseData={sunRiseData} />
      </div>
    </>
  );
}
