<template>
  <v-container class="photos-list">
    <photos-list-item
      v-for="(photo, index) in this.photos"
      :key="index"
      :photo="photo"
    />
  </v-container>
</template>

<script>
import PhotosService from './services/PhotosService';
import PhotosListItem from './components/PhotosListItem';

export default {
  name: 'PhotosList',
  data: () => ({
    photos: []
  }),
  async created() {
    try {
      this.photos = await PhotosService.getPhotos();
    } catch (error) {
      console.error(error);
      // TODO - tratar erro
    }
  },
  components: {
    PhotosListItem
  }
};
</script>

<style src="./PhotosList.scss" lang="scss" scoped />
