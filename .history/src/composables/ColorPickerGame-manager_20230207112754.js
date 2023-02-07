import { ref, reactive } from "@vue/reactivity";
import {  watch, watchEffect } from "vue";

const colorPickerGameManager = () => {

    let message = ref("Pick a color...")
    const colors = reactive(["green", "red", "blue", "purple"]);

    const matchColor = (value) => {
      // do a random color based on the array index;
      const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4
      if (colors[randomNumber] === value) {
        message.value = `You win... [answer: ${colors[randomNumber]}]`;
        return;
      }
      message.value = `You loose [answer: ${colors[randomNumber]}]`;
    };

    watch(colors, (val) => {
        localStorage.setItem("colors", JSON.stringify(colors.value));
    });

    return { message, colors }
}

export default colorPickerGameManager;