<script setup lang="ts">


</script>

<template>
<header class="pt-5 pb-5 "  >
    <nav class=" px-4 lg:px-6 py-2.5 rounded-t-3xl justify-between">
      <div class="flex flex-wrap justify-between  mx-10">
        <div class="flex flex-wrap justify-between max-w-screen-xl">
          <button data-collapse-toggle="mobile-menu-2" type="button" class="dark:text-white mx-10 inline-flex items-center p-2 ml-1 text-sm text-black rounded-lg hover:text-[#b0695c] dark:hover:text-[#b0695c]" >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z" fill="currentColor" />
              <path d="M4 18C4 17.4477 4.44772 17 5 17H19C19.5523 17 20 17.4477 20 18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18Z" fill="currentColor" />
              <path d="M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H5Z" fill="currentColor" /></svg>
            </button>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto md:w-auto" >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:order-1">
                    <li >
                        <NuxtLink  to="/home" exact-active-class="active" class=" block py-2 pr-4 pl-3 text-black  lg:p-0 hover:text-[#b0695c] dark:text-white dark:hover:text-[#b0695c]">Home</NuxtLink>
                    </li>
                    <li >
                      <NuxtLink exact-active-class="active" to="/" class=" block py-2 pr-4 pl-3 text-black  lg:p-0 hover:text-[#b0695c] dark:text-white dark:hover:text-[#b0695c]">Latest News</NuxtLink>
                    </li>
                    <li >
                      <NuxtLink exact-active-class="active" to="/reviews" class=" block py-2 pr-4 pl-3 text-black  lg:p-0 hover:text-[#b0695c] dark:text-white dark:hover:text-[#b0695c]">Reviews</NuxtLink>
                    </li>
                </ul>
            </div>

        </div>
        <div class="flex space-between items-center lg:order-2">
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto md:w-auto" >
              <a href="#" class="mx-10 py-2 pr-4 pl-3 text-black  lg:p-0  hover:text-[#b0695c] dark:text-white dark:hover:text-[#b0695c]">Contact Us</a></div>
              <Switch/>
            </div>
        </div>
    </nav>
</header>

</template>
  

<style scoped>


.active {
  color: #b0695c;
}
* {
    --input-height: 20px;
    --input-width: 40px;
}

</style>