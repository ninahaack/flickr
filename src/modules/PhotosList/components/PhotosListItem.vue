<template>
  <v-card class="photo-list-item">
    <v-img :src="photo.media.m" height="300px" />
    
    <div class="text-content">
      <div v-if="hasTitle" class="title">
        <a :href="photo.link" target="_blank">
          {{photo.title}}
        </a>
      </div>
      <div class="subtitle">
        by
        <a :href="authorLink" target="_blank">
          {{photo.author}}
        </a>
      </div>
    </div>

    <div class="tags" v-if="tags">
      <div class="tag-title">
        Tags:
      </div>
      <div class="chips">
        <v-chip v-for="(tag, index) in tags" :key="index">
          {{tag}}
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'PhotosListItem',
  props: {
    photo: {
      required: true,
      type: Object
    }
  },
  computed: {
    authorLink() {
      const authorId = this.photo.author_id;

      return `https://www.flickr.com/photos/${authorId}`;
    },
    hasTitle() {
      const title = this.photo.title;

      return !!title && !!title.trim();
    },
    tags() {
      const tags = this.photo.tags;

      if (!tags) return '';

      return tags.split(' ');
    }
  }
};
</script>

<style src="./PhotosListItem.scss" lang="scss" scoped />