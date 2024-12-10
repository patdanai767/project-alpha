import React from "react";
import Sidebar from "../../components/Sidebar";
import Contence from "../../components/Card/SearchCard";
import Searchcard from "../../components/Card/SearchC";
import {trainersData} from "../../constants/TrainerData";

export default function Search() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div>
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
  )
}