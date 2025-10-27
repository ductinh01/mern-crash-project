//Tạo Schema và Model định nghĩa cấu trúc dữ liệu Product
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

// const productSchema = new mongoose.Schema({...}, {...}): tạo ra một Schema —
// là “bản thiết kế” (blueprint) của dữ liệu trong MongoDB (Định nghĩa cấu trúc dữ liệu (như bảng trong SQL))
// mongoose.Schema nhận vào hai tham số: Đối tượng mô tả các trường (fields) của document và Tùy chọn cấu hình (như timestamps, versionKey, v.v.)
// { timestamps: true }: tự động thêm 2 trường: createdAt: thời gian document được tạo, updatedAt: thời gian document được cập nhật lần cuối
// const Product = mongoose.model("Product", productSchema):
// - Tạo ra một Model dựa trên productSchema. (Dùng để tương tác CRUD với MongoDB)
// - Product là một lớp (class), bạn có thể dùng để:Thêm dữ liệu (new Product(...)), Tìm dữ liệu (Product.find()), Cập nhật (Product.updateOne()), Xóa (Product.deleteOne())
// export default Product: Xuất model ra ngoài để file khác có thể import và dùng
