<template>
  <article>
    <b-comment author="Author" date="01.01.2020 20:15">
      <template #actions>
        <button class="comment_action" title="Edit" @click="editAction">
          <b-icon-pencil />
        </button>
        <button class="comment_action" title="Remove" @click="removeAction">
          <b-icon-bin />
        </button>
      </template>
      <template #comment>
        Comment Comment Comment Comment
      </template>
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
import BIconPencil from '../components/BIcon/BIconPencil'
import BIconBin from '../components/BIcon/BIconBin'

export default {
  name: 'b-comment-view',
  components: {
    BComment,
    BIconPencil,
    BIconBin,
  },
  methods: {
    editAction: function () {
      alert('Edit')
    },
    removeAction: function () {
      alert('Remove')
    },
  },
}
</script>
