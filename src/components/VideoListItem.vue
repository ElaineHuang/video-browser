<template>
  <li class="list-group-item" @click="onVideoSelect">
    <img class="mr-3" :src="thumbnailsUrl" alt="not found image" />
    <p class="media-body">
      {{ video.snippet.title }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
    video: Object,
  },
  computed: {
    thumbnailsUrl() {
      return this.video.snippet.thumbnails.default.url;
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video);
    }
  }
}  
</script>

<style scoped>
  li {
    display: flex;
    cursor: pointer;
  }
  
  li:hover {
    background: #eee;
  }
</style>