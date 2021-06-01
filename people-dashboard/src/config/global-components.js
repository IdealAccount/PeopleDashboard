// Register global components
import Vue from "vue";

//
// Folder for global components - "../components/global" as a first arg;
// Nested files - false as a second arg;
// Component name - RegExp (only vue files) - as a third arg;
const requireComponent = require.context("../components/global", false, /\w+\.vue$/);
requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName.replace(/\.\//, "").replace(/\.\w+$/, "")
    Vue.component(componentName, componentConfig.default || componentConfig);
})