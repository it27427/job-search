<template>
  <div>
    <img
      :src="imgSrc"
      alt="Profile-Thumbnail"
      class="w-8 h-8 rounded-3xl object-contain"
    />
  </div>
</template>

<script>
export default {
  name: "ProfileThumbnail",
  data() {
    return {
      imgSrc:
        "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
