<template>
  <div class="tree_title">
    <p>{{ tiltle }}</p>
  </div>
</template>

<script>
export default {
  name: "TreeTitle",
  props: ["tiltle"],
};
</script>

<style lang="scss" scoped>
.tree_title {
  width: 76px;
  max-width: 76px;
  margin-right: 12px;
  font-size: 12px;
}
</style> 