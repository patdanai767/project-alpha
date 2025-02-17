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
        _id: "0",
        title: "Patrick Star",
        description: "hellow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: 1000,
        duration: "22",
        thumbnail: patrick_profile,
        category: {
            _id: "67618ebe9336125ea6502e16",
            title: "Weight training",
            description: "Weight training is the exercise that use about your body weight such as square, push-up, sit-up",
            slug: "Power",
            __v: 0
         },
    },
    {
        _id: 1,
        title: "Shin Chan",
        description : "hi",
        price: "THB 500",
        duration: "22",
        thumbnail: shinchan_profile,
        category: "Weight training"
    },
    {
        _id: 2,
        title: "Shiro",
        description : "hi",
        price: "THB 2000",
        duration: "22",
        thumbnail: shiro_profile,
        category: "Boxing"
    },
    {
        _id: 3,
        title: "SpongeBob",
        description : "hi",
        price: "THB 3000",
        duration: "22",
        thumbnail: spongebob_profile,
        category: "Dancing"
    },
    {
        _id: 4,
        title: "Squidward",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: squidward_profile,
        category: "Weight training"
    },
    {
        _id: 5,
        title: "Lufy",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: Lufyprofile,
        category: "Weight training"
    },
    {
        _id: 6,
        title: "Zoro",
        description : "hi",
        price: "THB 5000",
        duration: "22",
        thumbnail: Zoroprofile,
        category: "Weight training"
    },

    {
        _id: 7,
        title: "Usop",
        description: "hellow aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        price: "THB 1000",
        duration: "22",
        thumbnail: Usopprofle,
        category: "Dancing"
    },

    {
        _id: 8,
        title: "Chpper",
        description : "hi",
        price: "THB 500",
        duration: "22",
        thumbnail: Chopperprofle,
        category: "Dancing"
    },
    {
        _id: 9,
        title: "Satoru",
        description : "hi",
        price: "THB 5555",
        duration: "22",
        thumbnail: Gojoprofile,
        category: "Weight training"
    },
    
    {
    _id: "67a9f650d590e255765d6ea8",
    category: {
      _id: "67618ebe9336125ea6502e16",
      title: "Weight training",
      description: "Weight training is the exercise that use about your body weight such as square, push-up, sit-up",
      slug: "Power",
      __v: 0
    },
    rating: [],
    title: "Building body for Arm-wrestling",
    description: "Arm-wrestling is one of the most powerful competetive in the world where is every single country want to compete how strong they are.",
    price: 800,
    duration: 30,
    thumbnail: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    status: "draft",
    createdBy: {
      _id: "676d5dfb716bad41db9bae34",
      username: "TalkToMe",
      fullname: "Nigga888",
      email: "patlala@gmail.com",
      password: "P@ssw0rd!",
      __v: 0,
      role: "admin",
      updatedAt: "2025-02-16T13:54:11.772Z"
    },
    trainees: [
      {
        _id: "676d5dfb716bad41db9bae34",
        username: "TalkToMe",
        fullname: "Nigga888",
        email: "patlala@gmail.com",
        password: "P@ssw0rd!",
        __v: 0,
        role: "admin",
        updatedAt: "2025-02-16T13:54:11.772Z"
      }
    ],
    __v: 0
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