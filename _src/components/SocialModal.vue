<template>
  <vue-final-modal v-model="showModal"
                   classes="modal-container"
                   content-class="modal-content modal--medium"
                   focus-trap
                   name="social-modal">
    <h1 class="modal--header">{{ $t('social.modalHeader') }}</h1>
    <button class="modal__close" @click="showModal = false">
      <i class="fas fa-times"></i>
    </button>
    <p>{{ $t('social.subtitle') }}</p>
    <div class="social-buttons">
      <a class="btn btn--large btn--facebook"
         :href="facebookShareUrl"
         @click="facebookShare"
         rel="noreferrer noopener">
        <i class="fab fa-facebook"></i>
        <span>{{ $t('social.facebook.share') }}</span>
      </a>
      <a class="btn btn--large btn--twitter"
         :href="twitterShareUrl"
         @click="twitterShare"
         rel="noreferrer noopener">
        <i class="fab fa-twitter"></i>
        <span>{{ $t('social.twitter.share') }}</span>
      </a>
      <a class="btn btn--large btn--linkedin"
         :href="linkedinShareUrl"
         @click="linkedinShare"
         rel="noreferrer noopener">
        <i class="fab fa-linkedin"></i>
        <span>{{ $t('social.linkedin.share') }}</span>
      </a>
    </div>

  </vue-final-modal>
</template>

<script>
export default {
  name: "SocialModal",
  data: () => {
    return {
      showModal: false
    }
  },
  methods: {
    facebookShare: function (e) {
      e.preventDefault();
      let popup = window.open(
          '',
          '_blank',
          'width=555,height=580'
      );
      popup.opener = null;
      popup.location = this.facebookShareUrl;
    },
    twitterShare: function (e) {
      e.preventDefault();
      let popup = window.open(
          '',
          '_blank',
          'width=600,height=580'
      );
      popup.opener = null
      popup.location = this.twitterShareUrl
    },
    linkedinShare: function (e) {
      e.preventDefault();
      let popup = window.open(
          '',
          '_blank',
          'width=600,height=580'
      );
      popup.opener = null
      popup.location = this.linkedinShareUrl
    }
  },
  computed: {
    facebookShareUrl: function () {
      let shareUrl = encodeURIComponent(this.$t('social.shareUrl'));
      return `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&display=popup`;
    },
    twitterShareUrl: function () {
      let shareUrl = encodeURIComponent(this.$t('social.shareUrl'));
      let text = encodeURIComponent(this.$t('social.twitter.text'));
      let hashtag = encodeURIComponent(this.$t('social.twitter.hashtag'));
      return `https://twitter.com/intent/tweet?url=${shareUrl}&text=${text}&hashtags=${hashtag}`;
    },
    linkedinShareUrl: function () {
      let shareUrl = encodeURIComponent(this.$t('social.shareUrl'));
      return `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
    },
  }
}
</script>

<style scoped>

</style>