Assignment 2 — Mini YouTube Dashboard
🧩 Objective

To practice the core concepts of Vue 3, including:

Declarative rendering

Reactivity

Directives (v-if, v-for, v-model, v-bind, v-on)

Component-based architecture

Props and event emission

Composition API and lifecycle hooks

⚙️ Features

✅ Display a list of videos (title, channel, thumbnail, views)
✅ Search videos by title or channel name using v-model
✅ Reactive counter showing number of found videos
✅ Reusable VideoCard component with a Like 👍 button
✅ “Like” event emission updates total likes in App.vue
✅ Simulated data fetching in useVideos.js using onMounted()
✅ Loading state and “No videos found” message

🧠 Technologies

Vue 3 (Composition API)

Vite for project setup

HTML / CSS / JavaScript

How to Run
npm install
npm run dev


Then open your browser at:
👉 http://localhost:5173/

Project Structure
src/
├── components/
│   └── VideoCard.vue
├── composables/
│   └── useVideos.js
├── App.vue
└── main.js

📸 Screenshots
<img width="1908" height="957" alt="image" src="https://github.com/user-attachments/assets/08cb95fb-e64a-45c2-9e47-6e3084cac27b" />
