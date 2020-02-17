<template>
  <article>
    <b-comment>
      <template #options>
        <button class="comment_btn">
          Edit
        </button>
        <button class="comment_btn">
          Remove
        </button>
      </template>
      <template #header>
        <span class="comment_author">Author</span>
        <span class="comment_date">01.01.2015 20:15</span>
      </template>
      <template #comment>
        <p>Comment Comment Comment Comment</p>
      </template>
    </b-comment>

    <b-comment>
      <template #header>
        <span class="comment_author">Author</span>
        <span class="comment_date">01.01.2015 21:15</span>
      </template>
      <template #comment>
        <p>Comment Comment Comment Comment</p>
      </template>
    </b-comment>
  </article>
</template>

<script>
import BComment from '../components/BComment/BComment'

export default {
  name: 'b-comment-view',
  components: {
    BComment
  }
}
</script>
