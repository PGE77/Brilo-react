import React from "react";
 
const Card = ({ item }) => {            
           
  return (
    <>
      <div className="container-card">
        <div className="container-card-flex">
          {item.map((Val) => {
            return (
              <a href={Val.url}
                className=""
                key={Val.id}
              >
                <div className="card-img">
                  <img src={Val.img} alt={Val.title} className="image-responsive " />
                </div>
               
                  <h2 className="card-title ">
                    {Val.title} 
                   
                  </h2>
                  <p className="card-text">{Val.desc}</p>
                  <button className="button-green ">Zjistit více</button>
            
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};
 
export default Card;