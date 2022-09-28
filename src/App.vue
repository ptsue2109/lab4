<template>
  <div class="app">
    <div class="container">
      <TreeNode
        v-for="room in listData"
        :key="room.id"
        :room="room"
        @handleDeleteItem="handleDeleteItem(room.id)"
        @addToParent="handleAddToParent"
        @checkChildrenFromParent="handleAddToChildrenFromParent"
      />
    </div>
  </div>
</template>

<script>
import TreeNode from "@/components/TreeNode";
import { listData } from "@/data";

export default {
  name: "App",
  components: {
    TreeNode,
  },
  data() {
    return {
      listData: listData
    };
  },
  methods: {
    handleDeleteItem(id) {
      this.data.splice(
        this.data.findIndex((room) => room.id === id),
        1
      );
    },
    handleAddToParent(room) {
      this.listData.push(room);
    },
    onAddChildrenLevel(childrenArray) {
      for (let child of childrenArray) {
        child.level++;
        if (child.children) this.onAddChildrenLevel(child.children);
      }
    },
    handleAddToChildrenFromParent(room) {
      for (let item of this.listData) {
        if (item.children.length > 0 && item !== room) {
          room.level++;
          if (room.children) {
            this.onAddChildrenLevel(room.children);
          }
          this.listData.splice(
            this.listData.findIndex((item) => item.id === room.id),
            1
          );
          item.children.push(room);
          return;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: auto;
  height: auto;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 37px 22px 30px 44px;
  position: relative;
}
</style>
