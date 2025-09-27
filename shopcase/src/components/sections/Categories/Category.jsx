import React from "react";
import SectionHandling from "../SectionHandling/SectionHandling";
import { Card } from "../../Card/Card";

export const Category = ({ title, data }) => {

    console.log(data);
    
  return (
    <div>
      <SectionHandling title={title} />
      {data.map((item) => (
        <Card key={item.id} imagePath={item.imagePath} title={item.title} 
            description={item.description} aciionArrow={true}
        />
      ))}
    </div>
  );
};
