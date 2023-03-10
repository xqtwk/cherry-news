<script setup lang="ts">

</script>
<template>
<html class="bg-[#d6c6b9] dark:bg-dark ">
<div style="position: absolute" class="bg-[#d6c6b9] dark:bg-dark background dark:text-white">

    <main class="rounded-3xl bg-gradient-to-tr from-[#fce4dc] via-[#eaeaea] to-[#fce4dc] dark:from-[#564947] dark:via-black dark:to-[#554846] ">
    <Header />
    <div class="main-container mx-20 flex flex-col mt-4 ">
        <h1 class="text-[50px] text-black dark:text-white">Latest News</h1>
        <NewsList/>
    </div>  
</main>


</div>
</html>
</template>
<style scoped>

html {
    background-color: #d6c6b9;

}
main{
    margin:5%;
    background-color:#f9f4ed;
}

</style>