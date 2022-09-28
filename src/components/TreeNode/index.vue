 <template>
  <div class="">
    <div class="node_content">
      <div
        class="container"
        @click.right="handleClick"
        v-for="item in listData"
        :key="item.id"
        :dataId="item.id"
      >
        <TreeNumber :number="item.level" />
        <TreeTilte :tiltle="item.code" />
        <TreeContent :content="item.name" />
      </div>
      <!-- <div c    lass="" v-for="item in data.children" :key="item.id">
          {{ item}}
      </div> -->
    </div>
    <!-- nav -->
  </div>
</template>
 
 <script>
import TreeNumber from "./TreeNumber";
import TreeTilte from "./TreeTitle";
import TreeContent from "./TreeContent";
import { data } from "../../data";
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
  // position: absolute;
  width: 499px;
  height: 400px;
  left: 64px;
  top: 91px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 25px;
  &::before {
    content: "";
    position: absolute;
    width: 323px;
    border: 1px solid var(--secondColor);
    left: -126px;
    top: 198px;
    rotate: 90deg;
  }
  .container {
    width: 433px;
    height: 30px;
    border-radius: 4px;
    background-color: #f0f0f0;
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 0px 5px;
    background: #ffffff;
    border: 1px solid var(--secondColor);
    margin-bottom: 15px;

    &::before {
      content: "";
      position: absolute;
      width: 14px;
      border: 1px solid var(--secondColor);
      left: 36px;
      top: 63px;
    }
  }
}
</style>