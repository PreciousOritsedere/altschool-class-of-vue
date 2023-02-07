
import { onBeforeMount, onMounted, watch, watchEffect } from "vue";

const colorPickerGameManager = () => {

    let message = ref("Pick a color...")
    const colors = reactive(["green", "red", "blue", "purple"]);

    watch(colors, (val) => {
        localStorage.setItem("colors", JSON.stringify(colors.value));
    });

    return { message, colors }
}

export default colorPickerGameManager;