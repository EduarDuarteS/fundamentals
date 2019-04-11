import { Injectable } from '@angular/core';

@Injectable()
export class BreedsService {
  getAllBreeds (){
    return BREEDS
  }
  getOneBreed(){
    return BREED
  }

}

const BREEDS = [{
  id: 1,
  cardTitle: 'Alaskan Malamute',
  cardSubtitle: 'Shantal',
  cardContent: 'Alaskan Malamute. An immensely strong, heavy-duty worker of spitz type, the Alaskan Malamute is an affectionate, loyal, and playful but dignified dog recognizable by his well-furred plumed tail carried over the back, erect ears, and substantial bone.',
  date: '14/02/86',
  time: '10:00 am',
  btnLeft: 'left',
  btnRight: 'right',
  price: 250000,
  imageCover: '../../assets/imagesDogs/1.Alaskan-malamute-puppy.jpg',
  imageMain: '../../assets/imagesDogs/1.2.Alaskan-Adulto.jpg',
  location:{
    address: 'kr 56 # 151 - 51',
    city: 'Bogotá',
    country: 'Colombia'
  }
},
{
  id: 2,
  cardTitle: 'Siberian Husky',
  cardSubtitle: 'Alaska',
  cardContent: 'The Siberian Husky is a medium size working dog breed that originated in Northeast Asia. The breed belongs to the Spitz genetic family. With proper training, they make great sled dogs.',
  date: '14/02/86',
  time: '10:00 am',
  btnLeft: 'left',
  btnRight: 'right',
  price: 250000,
  imageCover: '../../assets/imagesDogs/2.2_SiberianHusky.jpg',
  imageMain: '../../assets/imagesDogs/2.SiberianHusky.jpg',
  location:{
    address: 'kr 56 # 151 - 51',
    city: 'Bogotá',
    country: 'Colombia'
  }
},
{
  id: 1,
  cardTitle: 'Alaskan Malamute',
  cardSubtitle: 'Shantal',
  cardContent: 'Alaskan Malamute. An immensely strong, heavy-duty worker of spitz type, the Alaskan Malamute is an affectionate, loyal, and playful but dignified dog recognizable by his well-furred plumed tail carried over the back, erect ears, and substantial bone.',
  date: '14/02/86',
  time: '10:00 am',
  btnLeft: 'left',
  btnRight: 'right',
  price: 250000,
  imageCover: '../../assets/imagesDogs/1.Alaskan-malamute-puppy.jpg',
  imageMain: '../../assets/imagesDogs/1.2.Alaskan-Adulto.jpg',
  location:{
    address: 'kr 56 # 151 - 51',
    city: 'Bogotá',
    country: 'Colombia'
  }
},
];


const BREED = {
id: 1,
cardTitle: 'Alaskan Malamute',
cardSubtitle: 'Shantal',
cardContent: 'Alaskan Malamute. An immensely strong, heavy-duty worker of spitz type, the Alaskan Malamute is an affectionate, loyal, and playful but dignified dog recognizable by his well-furred plumed tail carried over the back, erect ears, and substantial bone.',
date: '14/02/86',
time: '10:00 am',
btnLeft: 'left',
btnRight: 'right',
price: 250000,
imageCover: '../../assets/imagesDogs/1.Alaskan-malamute-puppy.jpg',
imageMain: '../../assets/imagesDogs/1.2.Alaskan-Adulto.jpg',
location:{
  address: 'kr 56 # 151 - 51',
  city: 'Bogotá',
  country: 'Colombia'
}
};
