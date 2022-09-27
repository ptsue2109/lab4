<template>
  <div class="add_container">
    <div class="add_header">
      <h1>Thêm mới phòng ban</h1>
    </div>
    <div class="add_content">
      <div class="form_control">
        <div class="form_group">
          <label for="">Tên Phòng Ban</label>
          <input type="text" placeholder="Tên Phòng Ban" name="phongBanName" />
        </div>
        <div class="form_group">
          <label for="">Mã Phòng Ban</label>
          <input
            type="text"
            placeholder="mã phòng ban (không bắt buộc)"
            name="maPhongBan"
          />
        </div>
      </div>
    </div>
    <div class="add_btn">
      <button class="btn btn_cencel">Hủy</button>
      <button class="btn btn_save">Lưu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddComp",
  data() {
    return {
      error: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.add_container {
  width: 500px;
  height: 325px;
  border: 1px solid #ccc;

  .add_header {
    height: 48px;
    background-color: #48647f;
    color: #ffff;
    font-size: 15px;
    float: left;
    width: 100%;
    padding-top: 5px;
    border-radius: 3px;
  }
  .add_content {
    padding: 25px;
  }
}
</style>