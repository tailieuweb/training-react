-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 01, 2020 lúc 04:35 PM
-- Phiên bản máy phục vụ: 10.4.13-MariaDB
-- Phiên bản PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `todolistfinal`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `id_task` int(11) NOT NULL,
  `name_task` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `image` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dayS` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `dayE` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `state` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`id_task`, `name_task`, `image`, `dayS`, `dayE`, `state`) VALUES
(1, 'Làm giao diện todolist', 'lamgiaodien.jpg', '20-10-2020', '25-10-2020', 2),
(2, 'Viết API', 'vietapi.jpg', '25-10-2020', '30-10-2020', 2),
(9, 'tìm hiểu về useState và hook', 'Screenshot (3).png', '2020-10-04', '2020-10-14', 2),
(16, 'test thử xem datashow có thay đổi', 'Screenshot (4).png', '2020-10-14', '2020-10-07', 1),
(26, 'kiểm thử hộp trắng', 'Screenshot (5).png', '2020-10-11', '2020-10-11', 1),
(30, 'test update file', 'remake1.PNG', '2020-11-08', '2020-11-15', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task_detail`
--

CREATE TABLE `task_detail` (
  `id_taskDetail` int(11) NOT NULL,
  `id_task` int(11) NOT NULL,
  `step_taskDetail` text COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `task_detail`
--

INSERT INTO `task_detail` (`id_taskDetail`, `id_task`, `step_taskDetail`) VALUES
(1, 1, 'Lên ý tưởng'),
(2, 1, 'Phân công công việc cho các thành viên'),
(5, 2, 'Tìm hiểu về API'),
(6, 2, 'Viết API bằng php'),
(7, 2, 'Sử dụng API trong todolist'),
(8, 9, 'tìm hiểu về useState()');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id_task`);

--
-- Chỉ mục cho bảng `task_detail`
--
ALTER TABLE `task_detail`
  ADD PRIMARY KEY (`id_taskDetail`),
  ADD KEY `id_task` (`id_task`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `id_task` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT cho bảng `task_detail`
--
ALTER TABLE `task_detail`
  MODIFY `id_taskDetail` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `task_detail`
--
ALTER TABLE `task_detail`
  ADD CONSTRAINT `task_detail_ibfk_1` FOREIGN KEY (`id_task`) REFERENCES `task` (`id_task`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
