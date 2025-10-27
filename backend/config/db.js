//kết nối node.js với MongooDB
import mongoose from "mongoose";
//export cho phép hàm bất đồng bộ được import và dùng ở file khác
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // process code 1 code means exit with failure, 0 means success
  }
};

//try/catch bắt lỗi khi kết nối -> await ném lỗi -> catch sẽ nhận được error
// mongoose.connect(...) trả về một Promise — await chờ promise này resolve.
// process.env.MONGO_URI là biến môi trường chứa chuỗi kết nối (connection string) đến MongoDB
// Khi kết nối thành công, conn là đối tượng kết nối (một Mongoose connection object). Trong nhiều version mongoose.connect trả về mongoose instance, nhưng bạn vẫn có thể truy cập thông tin connection qua conn.connection.
// Nếu có lỗi, in ra error.message để debug (ví dụ sai URI, auth fail, network).
// process.exit(1) đóng toàn bộ tiến trình Node.js với mã trả về 1 (nghĩa: exit vì lỗi). Mã 0 nghĩa exit thành công.
