<script setup lang="ts">
const news: New[] = [
    {
        id: 1,
        category: "arts",
        heading: "Unrecognized genius",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit efficitur tortor, id faucibus nulla interdum sit amet.
        Morbi orci neque, pulvinar vel dictum id, vehicula sit amet nulla.
        Quisque a congue lectus. Phasellus condimentum auctor urna non suscipit.
        Nulla maximus pellentesque erat in fermentum. Nulla sollicitudin maximus augue eget porta. `
    },
    {
        id: 2,
        category: "arts",
        heading: "Photography",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit efficitur tortor, id faucibus nulla interdum sit amet.
        Morbi orci neque, pulvinar vel dictum id, vehicula sit amet nulla.
        Quisque a congue lectus. Phasellus condimentum auctor urna non suscipit.
        Nulla maximus pellentesque erat in fermentum. Nulla sollicitudin maximus augue eget porta. `
    },
    {
        id: 3,
        category: "arts",
        heading: "Installation",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit efficitur tortor, id faucibus nulla interdum sit amet.
        Morbi orci neque, pulvinar vel dictum id, vehicula sit amet nulla.
        Quisque a congue lectus. Phasellus condimentum auctor urna non suscipit.
        Nulla maximus pellentesque erat in fermentum. Nulla sollicitudin maximus augue eget porta. `
    },

]
const categories: string[] = ["Politics", "Business", "Tech", "Arts", "Science", "Health", "Sports"];
</script>

<template>

    <div class="categories flex flex-wrap mt-10">
        <button class="mr-2 category border-2 border-black hover:border-[#b0695c] px-3 rounded-full hover:text-[#b0695c] text-lg" v-for="item in categories">{{ item }}</button>
    </div>
    <div class="flex justify-center mt-12 mb-6">
        <div class="w-1/4  flex flex-col">
            <div>
            <img class="mb-2" src="~/assets/img/SU2022-Web-Industry-Architecture-S2.jpg" alt="image for news 1">
            <h2 class="text-black text-[28px]  my-3 ">Unrecognized genius</h2>
            <p class="text-black">Rising star Alexandra's new work causes
                a lot of controversy in creative circles.
                According to the artist, the picture illustrates a state of horror. <span class="text-gray"> 16h ago</span>
            </p>
        </div>
            <div class="flex flex-row mt-3">
                <img class="rounded-full max-h-12 object-contain" src="https://randomuser.me/api/portraits/women/81.jpg" alt="user image" />
                <div class="flex flex-col justify-center ml-3 mb-3">
                    <p class="text-black text-lg">Grace Johnson</p>
                    <span class="text-gray">Newsman</span>
                </div>
            </div>
            <hr class="mt-3 mb-4 text-gray"/>
            <div class="flex flex-col">
                <h2 class="text-black text-[28px]  my-3 ">Photography</h2>
                <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit efficitur tortor, id faucibus nulla interdum sit amet.
                Morbi orci neque, pulvinar vel dictum id, vehicula sit amet nulla.
                Quisque a congue lectus <span class="text-gray"> 5h ago</span>
                </p>
            </div>
        </div>
    <div class="w-1/2 mx-12 flex flex-col">
        <img class="mb-2" src="~/assets/img/AXIS-2.jpg" alt="user image" />
        <h2 class="text-black text-[28px]  my-3 ">Museum of modern Art completed in London</h2>
        <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit efficitur tortor, id faucibus nulla interdum sit amet.
                Morbi orci neque, pulvinar vel dictum id, vehicula sit amet nulla.Quisque a congue lectus. us eu nulla ornare gravida. Proin id aliquet turpis. 
                Sed et placerat libero. Sed blandit rutrum porttitor. Quisque a congue lectus. us eu nulla ornare gravida. Proin id aliquet turpis. 
                Sed et placerat libero. Sed blandit rutrum porttitor. Phasellus nec elit a lacus imperdiet viverra. Quisque a congue lectus. Cras at lorem ullamcorper nibh semper gravida sed et orci. 
                Pellentesque sit amet laoreet augue. Phasellus dignissim ante tellus, vitae imperdiet ipsum condimentum ut. Nulla eget venenatis velit, at pellentesque sem. 
                Donec ultrices lobortis turpis at semper. Praesent et odio quam. Aenean fermentum rutrum ligula sit amet facilisis.Quisque a congue lectus.
                <span class="text-gray"> 16h ago</span>
                
                </p>
        
    </div> <!-- large column in the middle -->
  <div class="w-1/4 bg-gray-200 h-16 flex flex-col">
    <div class="bg-[#b0695c]">
            <h2 class="number text-white text-bs my-3 ml-3">NUMBER OF THE DAY</h2>
            <p class="text-white font-thin mx-3 my-5">Lum id, vehicula sit amet nulla.Quisque a congue lectus. us eu nulla ornare gravida. Proin id aliquet turpis. 
                Sed et placerat libero. Sed blandit rutrum porttitor. Phasellus nec elit a lacus imperdiet.
            </p>
    </div>
    <hr class="mt-5 text-gray"/>
    <div class="mt-5">
    <img class="mb-2" src="~/assets/img/deposit.jpg" alt="image for news 3">
            <h2 class="text-black text-[28px]  my-3 ">Installation per million</h2>
            <p class="text-black">Sed blandit rutrum porttitor. Phasellus nec elit a lacus imperdiet viverra. Cras at lorem ullamcorper nibh semper gravida sed et orci. 
                Pellentesque sit amet laoreet augue. Phasellus dignissim ante tellus, vitae imperdiet ipsum condimentum ut. Quisque a congue lectus. 
                Praesent et odio.nibh. Quisque sagittis, ipsum in tincidunt dignissim, ex dui vulputate augue, quis efficitur turpis justo nec orci. 
                In tempor enim et quam mollis dapibus. Suspendisse ligula turpis, vulputate eu diam sit amet, scelerisque.<span class="text-gray"> 10h ago</span>
            </p>
    </div>

  </div>
</div>
</template>

<style scoped>

@media only screen and (min-width: 1700px){
    .number{
  position: relative;
  max-width: 100%;
  text-align:left;
}
.number:after{
  content:" ";
  height: 1px;
  width: 45%;
  background: #f9f4ed;
  display: block;
  position: absolute;
  top: 50%;
  right: 0%;
}
}

.categories {
    display:flex;
    flex-direction:row;
}
.news-list {
    text-align:center;
    flex-direction:row;
}
</style>


