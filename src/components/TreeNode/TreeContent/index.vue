<template>
  <div class="tree-text">
    <p class="content">{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: "TreeContent",
  props: ["content"],
};
</script>

<style lang="scss" scoped>
    .tree-text{
        width: 100%;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>