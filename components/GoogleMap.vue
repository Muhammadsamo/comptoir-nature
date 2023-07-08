<template>
  <div class="mapouter">
    <div class="gmap_canvas">
      <iframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=00 Rue Ferdinand Forrest (in front of La Palette) 97122 Baie-Mahault (Jarry)&t=k&z=10&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe
      ><a href="https://2yu.co">2yu</a><br />
      <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 100%;
  width: 100%;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 100%;
  width: 100%;
}
</style>
