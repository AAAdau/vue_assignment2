<template>
  <div class="video-card">
    <img :src="thumbnail" alt="Video thumbnail" class="thumb" />
    <div class="info">
      <h3>{{ title }}</h3>
      <p>{{ channel }}</p>
      <p>{{ views }} views</p>
      <button @click="$emit('liked')">👍 Like</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  channel: String,
  views: Number,
  thumbnail: String,
});
</script>

<style scoped>
.video-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 240px;
}
.thumb {
  width: 100%;
  border-radius: 8px;
}
.info {
  margin-top: 8px;
}
button {
  margin-top: 6px;
  padding: 5px 10px;
  cursor: pointer;
}
</style>
