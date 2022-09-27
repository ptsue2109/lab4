<template>
  <div class="treeNumber">
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
    name: "TreeNumber",
    data() {
        return {
        }
    },
    props: ['number']
}
</script>

<style lang="scss" scoped>
    .treeNumber{
        width: 18px;
        height: 18px;
        border-radius: 2px;
        background-color: #48647F;
        border: none;
        padding: 10px;
        p{
            text-align: center;
            color: #fff;
            font-weight: 400;
            font-size: 12px;
            margin-top: -6px;
            margin-left: -3px;
            
        }
    }
</style>