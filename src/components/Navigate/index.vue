<template>
  <div class="">
    <nav id="context-menu" class="context-menu">
      <ul class="context-menu__items">
        <li class="context-menu__item">
          <a href="#" class="context-menu__link" data-action="Add"
            ><i class="fa fa-eye"></i> Thêm phòng ban</a
          >
        </li>
        <li class="context-menu__item">
          <a href="#" class="context-menu__link" data-action="Delete"
            ><i class="fa fa-edit"></i> Xóa phòng ban</a
          >
        </li>
        <li class="context-menu__item">
          <a href="#" class="context-menu__link" data-action="UpLevel"
            ><i class="fa fa-times"></i> Nâng level</a
          >
        </li>
        <li class="context-menu__item">
          <a href="#" class="context-menu__link" data-action="DownLevel"
            ><i class="fa fa-times"></i> Giảm level</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigateComp",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
  
.context-menu {
   display: none;
  position: absolute;
  z-index: 10;
  padding: 12px 0;
  width: 150px;
  background-color: #fff;
  border: solid 1px #dcdcdc;
  box-shadow: 1px 1px 2px #cfcfcf;
}

.context-menu--active {
  display: block;
}

.context-menu__items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.context-menu__item {
  display: block;
  margin-bottom: 4px;
}

.context-menu__item:last-child {
  margin-bottom: 0;
}

.context-menu__link {
  display: block;
  padding: 4px 12px;
  color: #48647F;
  text-decoration: none;
  height: 36px;
  width: 100%;
}

.context-menu__link:hover {
  color: #fff;
  background-color: #48647F 
}
</style>