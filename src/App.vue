<template>
  <div id="app">
    <TreeNode />
  </div>
</template>

<script>
  import TreeNode from "@/components/TreeNode"
export default {
  name: 'App',
  components: {
    TreeNode
  }
}
</script>

<style lang="scss" >
  body{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-top: 25px;
  }
</style>
