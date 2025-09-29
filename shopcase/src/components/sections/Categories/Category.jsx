import React from "react";
import SectionHandling from "../SectionHandling/SectionHandling";
import { Card } from "../../Card/Card";

export const Category = ({ title, data }) => {

    console.log(data);
    
  return (
    <div>
      <SectionHandling title={title} />
      <div className="flex px-8">
      {data.map((item) => (
        <Card key={item.id} imagePath={item.imagePath} title={item.title} 
            description={item.description} actionArrow={true} height={'280px'} width={'240px'}
        />
      ))}
      </div>
    </div>
  );
};
