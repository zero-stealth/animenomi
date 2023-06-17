import { ref } from 'vue';
import { defineStore } from 'pinia';
import top from "../assets/top.png";
import soft from "../assets/soft.png";

export const useProductStore = defineStore('product', () => {

  const productID = ref(null);
  const Cloths = ref([
    {
      id: '1',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    },
    {
      id: '2',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    },
    {
      id: '2',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    },
    {
      id: '2',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    },
    {
      id: '2',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    },
    {
      id: '2',
      productImage: top,
      productName: "top",
      productPrice: "Ksh 30,000",
    }
  ]);

  const Fabric = ref([
    {
      id: '1',
      productImage: soft,
      productName: "soft fabric",
      productPrice: "Ksh 30,000",
    }

  ]);


  const updateProduct = (data) => {
    Cloths.value.push(data);
  }

  return { productID, updateProduct, Fabric, Cloths }
})
