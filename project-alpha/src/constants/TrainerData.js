import patrick_profile from '../assets/patrick.jpg'
import shinchan_profile from '../assets/shinchan.jpg'
import shiro_profile from '../assets/shiro.jpg'
import spongebob_profile from '../assets/spongebob.jpg'
import squidward_profile from '../assets/squidward.jpg'
import Lufyprofile from '../assets/Lufyprofile.jpg'
import Zoroprofile from '../assets/Zoroprofile.jpg'
import Usopprofle from '../assets/Usopprofile.jpg'
import Chopperprofle from '../assets/Chopperprofile.jpg'
import Gojoprofile from '../assets/Gojoprofile.jpg'

export const profile = {
    patrick_profile,
    shinchan_profile,
    shiro_profile,
    spongebob_profile,
    squidward_profile
}

export const trainers = [
    {
        id: 0,
        title: "Patrick Star",
        description: "hellow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: "THB 1000",
        duration: "22",
        thumbnail: patrick_profile,
        category: "Dancing"
    },
    {
        id: 1,
        title: "Shin Chan",
        description : "hi",
        price: "THB 500",
        duration: "22",
        thumbnail: shinchan_profile,
        category: "Weight training"
    },
    {
        id: 2,
        title: "Shiro",
        description : "hi",
        price: "THB 2000",
        duration: "22",
        thumbnail: shiro_profile,
        category: "Boxing"
    },
    {
        id: 3,
        title: "SpongeBob",
        description : "hi",
        price: "THB 3000",
        duration: "22",
        thumbnail: spongebob_profile,
        category: "Dancing"
    },
    {
        id: 4,
        title: "Squidward",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: squidward_profile,
        category: "Weight training"
    },
    {
        id: 5,
        title: "Lufy",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: Lufyprofile,
        category: "Weight training"
    },
    {
        id: 6,
        title: "Zoro",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: Zoroprofile,
        category: "Weight training"
    },

    {
        id: 7,
        title: "Usop",
        description: "hellow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: "THB 1000",
        duration: "22",
        thumbnail: Usopprofle,
        category: "Dancing"
    },

    {
        id: 8,
        title: "Chpper",
        description : "hi",
        price: "THB 500",
        duration: "22",
        thumbnail: Chopperprofle,
        category: "Dancing"
    },
    {
        id: 9,
        title: "Satoru",
        description : "hi",
        price: "THB 5555",
        duration: "22",
        thumbnail: Gojoprofile,
        category: "Weight training"
    },
    
]

export const getTrainers = function (page, limit) {
    let array = [];
    for (let i = (page-1)*limit ; i < (page * limit) ; i++) {
        array.push(trainers[i]);
    }
    return array;
}

export const getLength = function () {
    return trainers.length;
}