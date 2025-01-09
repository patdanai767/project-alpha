import React from "react";
import Sidebar from "../../components/Sidebar";
import Contence from "../../components/Card/SearchCard";
import Searchcard from "../../components/Card/SearchC";
import FilterBar from "../../components/FilterBar";
import {trainersData} from "../../constants/TrainerData";


export default function Search_() {
  return (
    <div className='flex justify-center mt-[82px]'>
      <div className="flex-col">

        <FilterBar/>
        
        <div className="mt-[15px]">
          {trainersData.map((val) => 
                <Searchcard
                  key={val.id}
                  title={val.title}
                  description={val.description}
                  price = {val.price}
                  duration={val.duration}
                  thumbnail={val.thumbnail}
                  category={val.category}
                />
              )}
        </div>  

      </div>
    </div>
  )
}