<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" />
    <div class="row">
      <div class="col-md-8"><VideoDetail :video="selectedVideo" /></div>
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import API_KEY from './configs';

export default {
  name: 'app',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data () {
    return { videos: [], selectedVideo: null };
  },
  methods: {
    onTermChange (searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: searchTerm
        }
      }).then((response) => {
        this.videos = response.data.items;
      });
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    }
  }
}
</script>
