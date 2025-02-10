import React from 'react'
import Searchcard from './SearchC'
import {trainers} from "../../constants/TrainerData";

function SearchCard() {
  return (
    <div>
      {trainers.map((val) => 
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
  )
}

export default SearchCard