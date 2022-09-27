 <template>
  <div class="">
    <div class="node_content">
      <div
        class="content"
        @click.right="handleClick"
        v-for="item in listData"
        :key="item.id"
        :dataId="item.id"
      >
        <TreeNumber :number="item.level" />
        <TreeTilte :tiltle="item.code" />
        <TreeContent :content="item.name" />
      </div>
    </div>
    <!-- nav -->
    <nav id="context-menu" class="context-menu">
        <ul class="context-menu__items">
          <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="View"
              ><i class="fa fa-eye"></i> View Task</a
            >
          </li>
          <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="Edit"
              ><i class="fa fa-edit"></i> Edit Task</a
            >
          </li>
          <li class="context-menu__item">
            <a href="#" class="context-menu__link" data-action="Delete"
              ><i class="fa fa-times"></i> Delete Task</a
            >
          </li>
        </ul>
      </nav>
  </div>
</template>
 
 <script>
import TreeNumber from "./TreeNumber";
import TreeTilte from "./TreeTitle";
import TreeContent from "./TreeContent";
import { data } from "@/data";
export default {
  name: "TreeNode",
  data() {
    return {
      listData: data,
    };
  },
  components: {
    TreeNumber,
    TreeTilte,
    TreeContent,
  },
  methods: {
    handleClick(e) {
      console.log("right", e);
    },
  },
};
</script>
 
 <style lang="scss" scoped>
.node_content {
  position: absolute;
  width: 499px;
  height: 400px;
  left: 64px;
  top: 91px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 25px;
  .content {
    width: 433px;
    height: 30px;
    border-radius: 4px;
    background-color: #f0f0f0;
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 0px 5px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    margin-bottom: 15px;
  }
  }
.context-menu {
  display: none;
  position: absolute;
  z-index: 10;
  padding: 12px 0;
  width: 240px;
  background-color: #fff;
  border: solid 1px #ad0000;
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
  color: #0066aa;
  text-decoration: none;
}

.context-menu__link:hover {
  color: #fff;
  background-color: #0066aa;
}

</style>