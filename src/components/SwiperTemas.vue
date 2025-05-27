<!-- filepath: src/components/SwiperTemas.vue -->
<template>
  <swiper
    :slides-per-view="3"
    :space-between="30"
    :pagination="{ clickable: true }"
    class="mySwiper"
  >
    <swiper-slide v-for="tema in temas.libros" :key="tema.tit">
      <a href="#" class="hover:text-cyan-500">
        <div class="aspect-square w-2xs bg-white shadow"></div>
        <span>{{ tema.tit }}</span>
      </a>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import temas from '../data/temas.json';
</script>

<style>
/* Puedes añadir estilos personalizados aquí si lo necesitas */
</style>