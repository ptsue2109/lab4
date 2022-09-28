<template>
  <div class="add_container">
    <div class="add_header">
      <h1>Thêm mới phòng ban</h1>
    </div>
    <div class="add_content">
      <div class="form_control">
        <div class="form_group">
          <label for="">Tên Phòng ban</label>
          <input
            type="text"
            placeholder="Tên Phòng ban"
            name="phongBanName"
            class="custom"
          />
          <p class="error">Tên phòng ban không được để trống, không chứa ký tự đặc biệt</p>
        </div>
        <div class="form_group">
          <label for="">Mã Phòng ban</label>
          <input
            type="text"
            placeholder="mã phòng ban (không bắt buộc)"
            name="maPhongBan"
            class="custom"
          />
        </div>
      </div>

      <div class="add_btn">
        <button class="btn btn_cancel">Hủy</button>
        <button class="btn btn_save">Lưu</button>
      </div>
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
  border-radius: 3px;

  .add_header {
    height: 48px;
    background-color: #48647f;
    color: #ffff;
    font-size: 12px;
    padding-left: 12px;
    line-height: 40px;
    border-radius: 2px 2px 0px 0px;
  }
  .add_content {
    padding: 25px;
    height: 275px;
    .form_control {
      width: 100%;
    }
  }
  .add_btn{
    margin-top: 24px;
    display: flex;
    justify-content: flex-end
  }
}
</style>