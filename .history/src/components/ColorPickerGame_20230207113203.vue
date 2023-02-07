<template>
  <h1>Color Picker Game</h1>

  <div>{{ message }}</div>

  <button v-for="color in colors" :key="color" @click="matchColor(color)">
    {{ color }}
  </button>
</template>

<script>
import colorPickerManager from "../composables/ColorPickerGame-manager";
export default {
  setup() {
    const { message, colors, matchColor } = colorPickerManager();

    return { colors, message, matchColor };
  },
};
</script>

<style></style>
