import { ref, computed, watch, onMounted } from "vue";

export function useVideos() {
  const videos = ref([]);
  const searchQuery = ref("");
  const totalLikes = ref(0);
  const loading = ref(true);
  const theme = ref("light"); // 当前主题

  onMounted(() => {
    setTimeout(() => {
      videos.value = [
        {
          id: 1,
          title: "Learn Vue 3 in 10 Minutes",
          channel: "Vue Mastery",
          views: 15000,
          thumbnail: "https://i.ytimg.com/vi/FXpIoQ_rT_c/maxresdefault.jpg",
        },
        {
          id: 2,
          title: "Composition API Explained",
          channel: "Academind",
          views: 22000,
          thumbnail: "https://i.ytimg.com/vi/bxER4Jq4Kp4/maxresdefault.jpg",
        },
        {
          id: 3,
          title: "Vue 3 Project Setup Guide",
          channel: "Traversy Media",
          views: 18000,
          thumbnail: "https://i.ytimg.com/vi/qZXt1Aom3Cs/maxresdefault.jpg",
        },
      ];
      loading.value = false;
    }, 1200);
  });

  const filteredVideos = computed(() => {
    if (!searchQuery.value) return videos.value;
    const q = searchQuery.value.toLowerCase();
    return videos.value.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.channel.toLowerCase().includes(q)
    );
  });

  function likeVideo() {
    totalLikes.value++;
  }

  // ✅ 新增：排序功能
  function sortByViews() {
    videos.value.sort((a, b) => b.views - a.views);
  }

  // ✅ 新增：主题切换
  function toggleTheme() {
    theme.value = theme.value === "light" ? "dark" : "light";
    document.body.setAttribute("data-theme", theme.value);
  }

  watch(searchQuery, (newVal) => {
    console.log("Search changed:", newVal);
  });

  return {
    videos,
    searchQuery,
    filteredVideos,
    totalLikes,
    loading,
    likeVideo,
    sortByViews,
    theme,
    toggleTheme,
  };
}
