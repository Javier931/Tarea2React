import React from "react";

export const Personajeweb = ({ personajeweb = [] }) => {
  return (
    <div className="row">
      {personajeweb.map((item, index) => (
        <div key={index} className="col mb-4">
            <div className="card" style={{minWidth: "200px"}}>
                <img src={item.image} alt="" />
                <div className="card-boby">
                    <h5 className="card-title">{item.name}</h5>
                    <hr />
                    <p>Location: {item.location.name}</p>
                    <p>First Seen: {item.origin.name}</p>
                    <p>Type: {item.type}</p>
                    <p>Status: {item.status}</p>

                </div>
            </div>
        </div>
      ))}
    </div>
  );
};
