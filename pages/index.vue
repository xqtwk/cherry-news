
<script setup lang="ts" >


</script>

<template>  
<html>
    
    <main class="rounded-3xl bg-gradient-to-tr from-[#fce4dc] via-[#eaeaea] to-[#fce4dc]">
    <Header />
    <NuxtPage />
    <NuxtLink to="/reviews">About page</NuxtLink>
    <div class="main-container mx-20 flex flex-col mt-4 ">
        <h1 class="text-[50px] text-black">Latest News</h1>
        <NewsList/>
    </div>   


    

</main>
</html>





</template>
<style>
.page-enter,.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<style scoped>

html {
    background-color: #d6c6b9;
    font-colour:#2a2a2a;

}
main{
    margin:5%;
    background-color:#f9f4ed;
}


</style>