import React from "react";

const Category = props => {
    const { category } = props;
    
    let renderStrunct = null;

      renderStrunct  = (
        <div className="category"
          style={{ position: "relative", textAlign: "center", color: "white" }}>
          {console.log("category item ", category)}
           <img
              src={ category.picture } 
              alt="category-img"
              className="category-img"
              style={{ opacity: "0.3", width: "100%", height: "100%" }}
            />
             <h1 className="name-center" style=
              {{ position: "absolute", top: "50%", left: "50%"}}>
               {category.name.en}
            </h1>
        </div>
      );

    return renderStrunct;
  
}

export default Category;