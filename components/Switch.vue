<script setup lang="ts">

useHead({
     script: [ {children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`} ]
})
const { enabled, toggleTheme } = useTheme() 
</script>

<template>
    <input type="checkbox" class="toggle-switch dark:bg-white" checked 
    v-model="enabled"
    v-if="enabled !== null"
    @click="toggleTheme">
</template>
  

<style scoped>
.toggle-switch {
  position: relative;
  width: var(--input-width);
  height: var(--input-height);
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: #ccc;
  border-radius: 50px;
  cursor: pointer;
}
.toggle-switch:checked {
    background-color: #2a2a2a;;
}
.toggle-switch::before {
  content: "";
  position: absolute;
  width: calc(var(--input-height) * 0.8);
  height: calc(var(--input-height) * 0.8);
  top: calc(var(--input-height) * 0.1);
  left: calc(var(--input-width) * 0.03);
  background-color: white;
  border-radius: 50%;
  transition: left 0.4s ease-out, right 0.4s ease-out;
}


.toggle-switch:checked::before {
  left: calc(var(--input-width) - (var(--input-height) * 0.8) - calc(var(--input-width) * 0.03));
  right: calc(var(--input-width) * 0.03);
}
</style>