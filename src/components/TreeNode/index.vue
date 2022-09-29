<template>
  <div>
    <div class="room__container">
      <div
        class="room__wrapper"
        @contextmenu.prevent="toggleOption"
        @click="show"
      >
        <div class="room__level">{{ room.level }}</div>
        <div class="room__info">
          <div class="room__info__code">{{ room.code }}</div>
          <div class="room__info__name">{{ room.name }}</div>
        </div>
      </div>
      <div v-show="isShow" class="room__children__container">
        <TreeNode
          v-for="child in newRoom.children"
          :key="child.id"
          :room="child"
          :style="childStyle"
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
        @toggleModal="toggleModal"
        @onDeleteItem="onDeleteItem"
        @levelUp="onAddLevel"
        @levelDown="onMinusLevel"
        
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
  props: ["room"],
  data() {
    return {
      toggle: false,
      modalToggle: false,
      isShow: false,
      newRoom: this.room,
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
    show() {
      this.isShow = !this.isShow;
    },
    onAddRoom(data) {
      this.newRoom.children.push({
        id: data.id,
        name: data.name,
        level: Number(this.newRoom.level) + 1,
        code: data.code,
        children: [],
      });
      this.show();
    },

    onDeleteItem() {
      this.$emit("handleDeleteItem");
    },
   
    //levelDOWN
    onMinusLevel() {
      console.log("onMinusLevel");
    
    },

    onMinusChildrenLevel(data) {
      console.log("onMinusChildrenLevel", data);
     
    },

    //levelUp
     onAddLevel() {  
      console.log("onAddLevel");
      this.$emit("checkChildrenFromParent", this.newRoom);
    },
    onAddChildrenLevel() {
      console.log("onAddChildrenLevel");
    
    },
    handleAddToChildrenFromParent(data) {
       console.log("handleAddToChildrenFromParent", data);
     
    },

    //
    handleDeleteItem(id) {
      console.log("handleDeleteItem", id);
      this.newRoom.children.splice(
        this.newRoom.children.findIndex((item) => item.id === id),
        1
      );
    },

    //
    handleRemoveFromParent(id) {
      console.log("handleRemoveFromParent", id);
    },
    handleAddToParent(data) {
      console.log("handleAddToParent", data);
    },
  },
  computed: {
    childStyle() {
      return `margin-left: 30px`;
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
      height: 50px;
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
