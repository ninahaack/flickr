<template>
  <div class="photos-list">
    <div v-if="isLoading" class="loading-container">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      />
    </div>
    <v-container v-else class="photos-list-container">
      <photos-list-item
        v-for="(photo, index) in this.photos"
        :key="index"
        :photo="photo"
      />
    </v-container>
  </div>
</template>

<script>
import PhotosService from './services/PhotosService';
import PhotosListItem from './components/PhotosListItem';

export default {
  name: 'PhotosList',
  data: () => ({
    photos: [],
    isLoading: false
  }),
  async created() {
    try {
      this.isLoading = true;

      this.photos = await PhotosService.getPhotos();
    } catch (error) {
      console.error(error);

      alert('Sorry, something unexpected happened :(');
    } finally {
      this.isLoading = false;
    }
  },
  components: {
    PhotosListItem
  }
};
</script>

<style src="./PhotosList.scss" lang="scss" scoped />
