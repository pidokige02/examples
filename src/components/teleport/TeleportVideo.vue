<template>
  <teleport to="#end-of-body" :disabled="!showText">
    <video autoplay="true" loop="true" width="500">
      <source src="sample-5s.webm" type="video/mp4">
    </video>
  </teleport>
  <div>
    This should be at the top.
  </div>
  <button @click="showText = !showText">
      Toggle showText
  </button>
</template>
<script>
export default {
  data() {
    return {
      showText: false
    };
  }
};
</script>