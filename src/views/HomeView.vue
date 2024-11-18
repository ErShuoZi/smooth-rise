<script setup></script>

<template>
  <main>
    <div class="container">
      <div
        v-slidein
        class="item"
        v-for="n in 10"
        :style="{ backgroundColor: getRandomColor() }"
      >
        {{ n }}
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import vSlidein from "../utils/vSlidein.js";
defineExpose({
  directives: {
    slidein: vSlidein,
  },
});
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
</script>

<style scoped>
.container {
  margin: 1em auto;
  width: 80%;
}
.item {
  width: 100%;
  aspect-ratio: 2/1;
  margin: 5vw 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10vw;
}
</style>
