import {
    onBeforeUnmount,
    onMounted,
    onUnmounted,
    ref,
} from "vue";
export default function () {
    const x = ref(-1),
        y = ref(-1);
    function clickHandler(e: MouseEvent) {
        console.log("e", e);
        x.value = e.pageX;
        y.value = e.pageY;
    }
    onMounted(() => {
        window.addEventListener("click", clickHandler);
    });
    onUnmounted(() => {
        window.removeEventListener("click", clickHandler);
    });
    return {
        x, y
    }
}