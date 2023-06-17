import { ref } from 'vue';
import { defineStore } from 'pinia';
import top from "../assets/top.png";

export const useTailorStore = defineStore('tailor', () => {

  const tailorID = ref(null);
  const Tailor = ref([
    {
      id: '1',
      profileImage: top,
      name: 'penguin',
      rating: 4.8,
      rates: 'ksh 100/hr',
    },
    {
      id: '1',
      profileImage: top,
      name: 'kakashi',
      rating: 3.8,
      rates: 'ksh 110/hr',
    },
    {
      id: '1',
      profileImage: top,
      name: 'penguin',
      rating: 4.8,
      rates: 'ksh 90/hr',
    },
    {
      id: '1',
      profileImage: top,
      name: 'penguin',
      rating: 4.8,
      rates: 'ksh 100/hr',
    },
   
  ]);



  const updateTailor = (data) => {
    Tailor.value.push(data);
  }

  return { tailorID, updateTailor, Tailor }
})
