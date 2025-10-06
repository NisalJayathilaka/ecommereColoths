import React, { useMemo } from "react";
import { FilterIcon } from "../../components/common/FilterIcon";
import content from "../../data/content.json";

const categories = content?.categories;

export const ProductListPage = ({categoryType}) => {

  
  const categoryContent = useMemo(() => {
    return categories?.find((category) => category.code === categoryType);
  }, [categoryType]);


  return (
    <div>
      <div className="flex">
        <div className="w-[20%] p-[20px] border rounded-lg m-[20px] bg-amber-200">
          {/* fliters */}
          <div className="flex justify-between items-center mb-4">
            <p className="text-[16px] text-gray-600">Filters</p>
            <FilterIcon />
          </div>
          <div>
            {/* categories */}
            <p className="text-[16px] text-black font-bold mt-5">CATEGORIES</p>
          </div>
        </div>
        <div className="p-[15px]">
          {/* products */}
          <p className="text-black text-lg">{categoryContent?.description}</p>
        </div>
      </div>
    </div>
  );
};
