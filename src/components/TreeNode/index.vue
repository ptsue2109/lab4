<template>
  <div>
  <div class="room__container">
      <div class="room__wrapper" @contextmenu.prevent="toggleOption">
        <div class="room__level">{{ room.level }}</div>
        <div class="room__info">
          <div class="room__info__code">{{ room.code }}</div>
          <div class="room__info__name">{{ room.name }}</div>
        </div>
      </div>
      <div
        v-show="isShow"
        class="room__children__container"
      >
        <TreeNode
        v-for="child in room.children"
        :key="child.id"
        :room="child"
        @handleDeleteItem="handleDeleteItem(child.id)"
        @removeFromParent="handleRemoveFromParent"
        @addToParent="handleAddToParent"
        @checkChildrenFromParent="handleAddToChildrenFromParent"
      />
      </div>
      <OptionC
        :toggle="toggle"
        :room="room"
        @toggleOption="toggleOption"
        @onDeleteItem="onDeleteItem"
        @onAddLevel="onAddLevel"
        @onMinusLevel="onMinusLevel"
        @toggleModal="toggleModal"
      />
    </div>
    <AddModel
      :toggle="modalToggle"
      @toggleModal="toggleModal"
      @onAddRoom="onAddRoom"
      :parentID="room.id"
    />  
  </div>
</template>

<script>
import OptionC from "@/components/Option";
import AddModel from "@/components/AddModal";
export default {
  name: "TreeNode",
  props:['room'],
  data() {
    return {
      toggle: false,
      modalToggle: false,
      isShow: false,
    };
  },
  components: {
    OptionC,
    AddModel,
  },
  emits: [
    "handleDeleteItem",
    "removeFromParent",
    "addToParent",
    "checkChildrenFromParent",
  ],
  methods: {
    toggleOption() {
      this.toggle = !this.toggle;
    },
    toggleModal() {
      this.modalToggle = !this.modalToggle;
    },
    onAddRoom(form) {
      console.log("form", form);
      this.room.children.push({
        id: form.id,
        name: form.name,
        level: this.room.level + 1,
        code: form.code,
        children: [],
      });
    },
    onDeleteItem() {
      this.$emit("handleDeleteItem");
    },
    onAddLevel() {
      this.$emit("checkChildrenFromParent", this.room);
    },
    onMinusLevel() {
      if (this.room.level > 1) {
        this.room.level--;
        if (this.room.children) {
          this.onMinusChildrenLevel(this.room.children);
        }
        this.$emit("removeFromParent", this.room);
      }
    },
    onMinusChildrenLevel(childrenArray) {
      for (let child of childrenArray) {
        if (child.level > 1) child.level--;
        if (child.children) this.onMinusChildrenLevel(child.children);
      }
    },
    onAddChildrenLevel(childrenArray) {
      for (let child of childrenArray) {
        child.level++;
        if (child.children) this.onAddChildrenLevel(child.children);
      }
    },
    handleDeleteItem(id) {
      this.room.children.splice(
        this.room.children.findIndex((item) => item.id === id),
        1
      );
    },
    handleRemoveFromParent(room) {
      this.room.children.splice(
        this.room.children.findIndex((item) => item.id === room.id),
        1
      );
      this.$emit("addToParent", room);
    },
    handleAddToParent(room) {
      this.room.children.push(room);
    },
    handleAddToChildrenFromParent(room) {
      for (let item of this.room.children) {
        if (item.children.length > 0 && item !== room) {
          room.level++;
          if (room.children) {
            this.onAddChildrenLevel(room.children);
          }
          this.room.children.splice(
            this.room.children.findIndex((item) => item.id === room.id),
            1
          );
          item.children.push(room);
          return;
        }
      }
    },
  },
  computed: {
    hasChildren() {
      return this.room.children && this.room.children.length > 0;
    },
    childMargin() {
      return `margin-left: ${this.margin}px`;
    },
  },
};
</script>

<style lang="scss" scoped>
.room {
  &__children__container {
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 14px;
    gap: 14px;

    &::before {
      // content: "";
      // position: absolute;
      // border: 1px solid #dcdcdc;
      // height: 100%;
      // top: -15px;
      // left: -10px;
    }
  }
  &__container {
    position: relative;
    &::before {
      content: "";
      // height: 33px;
      height: calc(100% + 15px);
      border: 1px solid #dcdcdc;
      left: -10px;
      position: absolute;
      top: -15px;
    }

    &:last-child::before {
      content: "";
      height: 34px;
      // height: 100%;
      border: 1px solid #dcdcdc;
      left: -10px;
      position: absolute;
      top: -15px;
    }
  }

  &__level {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    background-color: #48647f;
    border-radius: 4px;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0px 6px 7px;
  }

  &__info {
    display: flex;
    margin: 7px 8px 7px 9px;
    align-items: center;
    font-weight: 400;
    color: #666666;
    &__code {
      width: 76px;
      font-size: 12px;
      line-height: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &__name {
      font-size: 14px;
      line-height: 20px;
      width: 308px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &__wrapper {
    &::before {
      content: "";
      position: absolute;
      width: 10px;
      border: 1px solid #dcdcdc;
      left: -10px;
      top: 17px;
    }
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
    background-color: #f0f0f0;
    border-radius: 4px;
  }
}
</style>
