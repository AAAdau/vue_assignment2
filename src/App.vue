<template>
  <div class="app">
    <h1>🎬 Mini YouTube Dashboard</h1>

    <!-- 搜索框 -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by title or channel..."
    />

    <!-- 功能按钮 -->
    <div class="controls">
      <button @click="sortByViews">Sort by Views</button>
      <button @click="toggleTheme">
        Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Mode
      </button>
    </div>

    <!-- 状态提示 -->
    <p v-if="loading">Loading videos...</p>
    <p v-else-if="!filteredVideos.length">No videos found.</p>

    <p v-if="!loading">
      Found {{ filteredVideos.length }} videos • ❤️ {{ totalLikes }} total likes
    </p>

    <!-- 视频展示 -->
    <div class="videos">
      <VideoCard
        v-for="video in filteredVideos"
        :key="video.id"
        :title="video.title"
        :channel="video.channel"
        :views="video.views"
        :thumbnail="video.thumbnail"
        @liked="likeVideo"
      />
    </div>
  </div>
</template>

<script setup>
import VideoCard from "./components/VideoCard.vue";
import { useVideos } from "./composables/useVideos";

const {
  searchQuery,
  filteredVideos,
  likeVideo,
  totalLikes,
  loading,
  sortByViews,
  theme,
  toggleTheme,
} = useVideos();
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

/* 按钮 */
.controls {
  margin-bottom: 15px;
}
button {
  margin: 5px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
}
button:hover {
  opacity: 0.8;
}

/* 视频布局 */
.videos {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-top: 20px;
}

/* 🌞 Light 模式 */
:root,
body[data-theme='light'] {
  background-color: #f7f7f7;
  color: #222;
}

/* 🌙 Dark 模式 */
body[data-theme='dark'] {
  background-color: #222;
  color: #f7f7f7;
}
</style>
