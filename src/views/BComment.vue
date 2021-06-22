<template>
  <article>
    <b-comment author="Author" date="01.01.2021 20:00">
      <template #actions>Edit</template>
      <template>Comment Comment Comment Comment</template>
    </b-comment>

    <b-comment author="Author" date="01.01.2021 21:00">
      <template>
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
        Comment Comment Comment Comment Comment Comment
        CommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentCommentComment
      </template>
    </b-comment>
  </article>
</template>

<script>
import BComment from '../components/BComment/BComment'

export default {
  name: 'b-comment-view',
  components: {
    BComment,
  },
}
</script>
