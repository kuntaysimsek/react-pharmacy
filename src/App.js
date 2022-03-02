import "./App.css";
import { useState } from "react";
import ctiesData from "./constants/ctiesData.json";
import axios from "./service/axios";

//components
import Pharmacy from "./components/Pharmacy";
import SelectInput from "./components/SelectInput";

function App() {
  const [selectedPharmacy, setSelectedPharmacy] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Adana");
  const [selectedDistrict, setDistrict] = useState("Aladağ");
  const result = ctiesData.filter((data) => data.il_adi === selectedCity);

  const fetchPharmacy = async () => {
    const response = await axios.get(
      "https://api.collectapi.com/health/dutyPharmacy?ilce=" +
        selectedDistrict +
        "&il=" +
        selectedCity
    );
    setSelectedPharmacy(response.data.result);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-10 col-md-8 mx-auto">
          <SelectInput
            value={selectedCity}
            name="cties"
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {ctiesData.map((data) => (
              <option key={data.plaka_kodu}> {data.il_adi} </option>
            ))}
          </SelectInput>
        </div>
        <div className="col-12 col-sm-10 col-md-8 mx-auto">
          <SelectInput
            value={selectedDistrict}
            name="districts"
            onChange={(e) => setDistrict(e.target.value)}
          >
            {result[0].ilceler.map((district, idx) => (
              <option key={idx}> {district.ilce_adi} </option>
            ))}
          </SelectInput>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-md-4 mx-auto">
          <button
            type="button"
            className="btn btn-primary btn-md w-100 mb-3"
            onClick={fetchPharmacy}
          >
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-10 col-md-8 mx-auto">
          <Pharmacy
            selectedPharmacy={selectedPharmacy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
