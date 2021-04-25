<template>
  <article>
    <b-comment author="Author" date="01.01.2020 20:15">
      <template #actions>
        <b-icon type="more" />
      </template>
      <template #comment> Comment Comment Comment Comment </template>
    </b-comment>

    <b-comment author="Author" date="01.01.2020 21:15">
      <template #comment>
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
        Comment Comment Comment Comment Comment Comment Comment Comment Comment
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
import BIcon from '../components/BIcon/BIcon'

export default {
  name: 'b-comment-view',
  components: {
    BComment,
    BIcon,
  },
  methods: {
    editAction() {
      alert('Edit')
    },
    removeAction() {
      alert('Remove')
    },
  },
}
</script>
