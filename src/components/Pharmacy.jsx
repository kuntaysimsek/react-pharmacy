import React from "react";

function Pharmacy({ selectedPharmacy }) {
  return (
    <>
      {selectedPharmacy.error ? (
        <div className="card text-center mb-3">
          <div className="card-body">
            <h5 className="card-title">No result</h5>
          </div>
        </div>
      ) : (
        selectedPharmacy.map((pharmacy, idx) => (
          <div className="card text-center mb-3" key={idx}>
            <div className="card-body">
              <h5 className="card-title">{pharmacy.name} &nbsp;ECZANESI</h5>
              <div className="card-text">
                {" "}
                <span className="fw-bold">Phone Number:&nbsp;</span>{" "}
                <span className="fw-normal">{pharmacy.phone}</span>
              </div>
              <div className="card-text">
                <span className="fw-bold">Address:&nbsp;</span>{" "}
                <span className="fw-normal">{pharmacy.address}</span>{" "}
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default Pharmacy;
