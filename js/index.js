function diemTrungBinh(x, y, z) {
  var dtb = 0;
  dtb = (x + y + z) / 3;

  return dtb;
}
function tagID(id) {
  return document.getElementById(id);
}
document.getElementById("tinhToan").onclick = function () {
  var diemToan = Number(tagID("diemToan").value);
  var diemLy = Number(tagID("diemLy").value);
  var diemHoa = Number(tagID("diemHoa").value);
  var tbKhoiA = diemTrungBinh(diemToan, diemLy, diemHoa);

  var diemVan = Number(tagID("diemVan").value);
  var diemSu = Number(tagID("diemSu").value);
  var diemDia = Number(tagID("diemDia").value);
  var tbKhoiC = diemTrungBinh(diemVan, diemSu, diemDia);

  tagID("diemTbka").value = tbKhoiA;
  tagID("diemTbkc").value = tbKhoiC;
};

//bài 1
function tinhTong(diem1, diem2, diem3) {
  var sum = 0;
  sum = diem1 + diem2 + diem3;
  return sum;
}
document.getElementById("btn-tuyen-sinh").onclick = function () {
  var diemChuan = Number(tagID("diemChuan").value);
  var khuVuc = Number(tagID("chonKhuVuc").value);
  var doiTuong = Number(tagID("doiTuong").value);
  var diemMon1 = Number(tagID("diemMon1").value);
  var diemMon2 = Number(tagID("diemMon2").value);
  var diemMon3 = Number(tagID("diemMon3").value);

  var tong = tinhTong(diemMon1, diemMon2, diemMon3) + khuVuc + doiTuong;

  var ketQua = 0;
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    ketQua = "Bạn đã Rớt! Do có điểm bằng 0.";
  } else {
    ketQua =
      tong >= diemChuan
        ? (ketQua = "Bạn đã đậu." + " Tổng điểm:" + tong)
        : (ketQua = "Bạn đã Rớt." + " Tổng điểm:" + tong);
  }
  tagID("kqTuyenSinh").innerHTML = ketQua;
};

// bài 2 tính tiền điện
tagID("btn-tien-dien").onclick = function () {
  var hoTen = tagID("name").value;
  var soKw = Number(tagID("soKW").value);
  var tongTien = 0;
  if (soKw == 0) {
    alert(" Số KW không hợp lệ! Vui lòng nhập lai.");
  } else if (soKw <= 50) {
    tongTien = soKw * 500;
  } else if (soKw <= 100) {
    tongTien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tongTien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tongTien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tongTien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  tagID("kqTienDien").innerHTML =
    "Họ Tên: " + hoTen + "," + "Tiền điện" + tongTien.toLocaleString("de-DE");
};
//Tính thuế thu nhập cá nhân
tagID("btn-thue").onclick = function () {
  var hoTen = tagID("youName").value;
  var thuNhap = Number(tagID("thuNhap").value);
  var nguoiPhuThuoc = Number(tagID("nguoiPhuThuoc").value);

  // Tính thu nhập chịu thuế
  let thuNhapChiuThue = thuNhap - 4000 - nguoiPhuThuoc * 1600;

  // Tính thuế thu nhập cá nhân
  let thue = 0;
  if (thuNhapChiuThue <= 0) {
    thue = 0;
  } else if (thuNhapChiuThue <= 60000000) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120000000) {
    thue = 60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1;
  } else if (thuNhapChiuThue <= 210000000) {
    thue = 60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15;
  } else if (thuNhapChiuThue <= 384000000) {
    thue = 60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2;
  } else if (thuNhapChiuThue <= 624000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      (thuNhapChiuThue - 384000000) * 0.25;
  } else if (thuNhapChiuThue <= 960000000) {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      (thuNhapChiuThue - 624000000) * 0.3;
  } else {
    thue =
      60000000 * 0.05 +
      60000000 * 0.1 +
      90000000 * 0.15 +
      174000000 * 0.2 +
      240000000 * 0.25 +
      336000000 * 0.3 +
      (thuNhapChiuThue - 960000000) * 0.35;
  }

  tagID("kqTienThue").innerHTML =
    "Họ Tên: " +
    hoTen +
    ", " +
    "Tiền thuế thu nhập cá nhân:" +
    thue.toLocaleString("de-DE") +
    " VND";
};

// bai 4
tagID("loaiKhachHang").onclick = function () {
  var khachHang = tagID("loaiKhachHang").value;
  if (khachHang == 2) {
    tagID("soCap").className = " d-block";
  } else {
    tagID("soCap").className = " d-none";
  }
};
tagID("btn-tien-cap").onclick = function () {
  var khachHang = tagID("loaiKhachHang").value;
  var maKH = tagID("maKhachHang").value;
  var kenhCaoCap = Number(tagID("soKenh").value);
  var soCap = Number(tagID("soCap").value);
  ketQua = 0;
  if (khachHang == 0) {
    alert("Vui lòng chọn loại khách hàng!");
  } else if (khachHang == 1) {
    ketQua = 25 + 7.5 * kenhCaoCap;
  } else {
    ketQua =
      soCap <= 10
        ? 90 + 50 * kenhCaoCap
        : 90 + 50 * kenhCaoCap + (soCap - 10) * 5;
  }
  tagID("kqTienCap").innerHTML =
    "Mã Khách Hàng: " + maKH + "; " + "Tièn Cáp: $" + ketQua.toFixed(2);
};
