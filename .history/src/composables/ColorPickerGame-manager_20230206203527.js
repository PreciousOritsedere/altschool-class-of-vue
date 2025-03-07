import { ref,watch} from "@vue/reactivity";

export function ColorPickerGame() {
    const message = ref("Pick a colour...");

    const matchColor = (value) => {
        // do a random color based on the array index;
        const randomNumber = Math.floor(Math.random() * 3) + 1; //between 1 - 4
  
        if (colors[randomNumber] === value) {
          message.value = `You win... [answer: ${colors[randomNumber]}]`;
          return;
        }
  
        message.value = `You loose [answer: ${colors[randomNumber]}]`;
      };
}