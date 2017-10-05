<template>
  <div v-if="voteAverage>=0" class="vote-average">
    <p class="vote-text">{{percentage}}%</p>
    <div class="vote-positive-circle"
      :style="votesCircleStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    voteAverage: {
      type: Number,
      default: -1
    }
  },

  computed: {
    percentage () {
      return this.voteAverage*10
    },
    votesCircleStyle () {
      const scale = this.voteAverage / 10
      return `transform: scale(${scale});`
    }
  }
}
</script>

<style scoped>
.vote-average {
  float: left;
  text-align: center;
  position: absolute;
  bottom: 10px;
  background-color: rgba(204, 90, 113, 0.7);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  padding-top: 12px;
}
.vote-text {
  position: absolute;
  width: 100%;
  z-index: 2;
}
.vote-positive-circle{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #00BD9D;
  box-shadow: 0 0 2px 2px rgba(0, 189, 157, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
</style>
