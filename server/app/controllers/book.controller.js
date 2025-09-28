exports.findAll = (req, res) => {
  res.send({ message: "Lấy tất cả sách" });
};

exports.create = (req, res) => {
  res.send({ message: "Tạo một cuốn sách mới" });
};
