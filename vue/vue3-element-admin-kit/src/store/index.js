let modules = {};
const files = require.context("./modules", false, /\.js$/);
files.keys().forEach(key => {
    const fileName = key.replace(/(\.\/|\.js)/g, "");
    modules[fileName] = files(key).default;
});

import { createStore } from "vuex";
import getters from "./getters";
export default createStore({
    getters,
    modules
});
