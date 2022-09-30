<template>
  <div class="option" v-if="toggle">
    <div class="option__item" @click="toggleModal">Thêm phòng ban</div>
    <div class="option__item" @click="deleteRoom">Xóa phòng ban</div>
    <div class="option__item" @click="levelUp">
      Nâng level 
    </div>
    <div class="option__item" @click="levelDown">
      Giảm level
    </div>
  </div>
</template>
<script>
export default {
  name: "OptionC",
  props: ["toggle", "room"],
  methods: {
    toggleOption() {
      this.$emit("toggleOption");
    },
    toggleModal() {
      this.toggleOption();
      this.$emit("toggleModal");
    },
    deleteRoom() {
      this.toggleOption();
      this.$emit("onDeleteItem");
    },
    levelUp() {
      this.toggleOption();
      this.$emit("levelUp");
    },
    levelDown() {
      this.toggleOption();
      this.$emit("levelDown");
    },
  },
};
</script>
<style lang="scss" scoped>
.option {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 200px;
  color: #000000;
  border-radius: 4px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  top: 17px;
  right: -5px;

  &__item {
    font-size: 12px;
    line-height: 14px;
    height: 41.29px;
    display: flex;
    align-items: center;
    padding: 5px;
    &:first-child {
      border-radius: 4px 4px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 4px 4px;
    }

    &:hover {
      color: #ffffff;
      background-color: #48647f;
      cursor: pointer;
    }
  }
}
</style>
