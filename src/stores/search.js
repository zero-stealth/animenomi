import { ref, watchEffect, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from '@/stores/product'

const productStore = useProductStore()

export const useSearchStore = defineStore('search', () => {
  const keyword = ref(null)
  const clothData = ref(null)
  const fabricData = ref(null)

  const updateKeyword = (input) => {
    keyword.value = input;
  }

  watchEffect(() => {
    if (keyword.value != null && keyword.value.length > 0) {
      clothData.value = computed(() => {
        return productStore.Clothfilter((d) => d.productName.includes(keyword.value));
      });

      fabricData.value = computed(() => {
        return productStore.Fabrifilter((d) => d.productName.includes(keyword.value));
      });

    } else {
      clothData.value = productStore.Cloth

      fabricData.value = productStore.Fabric
    }

  })


  return { keyword, updateKeyword, clothData, fabricData }
})
