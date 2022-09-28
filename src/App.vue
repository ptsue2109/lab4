<template>
  <div id="app">
    <TreeNode />
    <!-- <AddComp /> -->
  </div>
</template>

<script>
 import TreeNode from "@/components/TreeNode";
  //import AddComp from "@/components/Add";
export default {
  name: 'App',
  components: {
    TreeNode,
    // AddComp
  }
}
</script>

<style lang="scss" >
  body{
    height: 100%;
    margin: 0 auto;
    padding-top: 25px;
    padding: 25px;
  }
</style>
