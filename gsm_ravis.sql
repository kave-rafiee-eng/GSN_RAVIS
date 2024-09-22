-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2024 at 10:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gsm_ravis`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(20) NOT NULL,
  `serial` int(20) NOT NULL,
  `type` varchar(40) NOT NULL,
  `name` varchar(40) NOT NULL,
  `data` varchar(40) NOT NULL,
  `change` varchar(20) NOT NULL,
  `arreay_select` int(5) NOT NULL,
  `byte_count` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `serial`, `type`, `name`, `data`, `change`, `arreay_select`, `byte_count`) VALUES
(1363, 100, 'advance_settin', 'general*number_of_stop', '0', 'upload', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `date_time`
--

CREATE TABLE `date_time` (
  `id` int(20) NOT NULL,
  `serial` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `time` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `date_time`
--

INSERT INTO `date_time` (`id`, `serial`, `name`, `date`, `time`) VALUES
(135, 100, 'user_enable_change', '2024/09/18', '10:25:57'),
(136, 100, 'gsm_last_connect', '2024/09/08', '15:24:48pm'),
(137, 100, 'gsm_last_connect', '2024/09/08', '15:25:24'),
(138, 100, 'gsm_last_connect', '2024/09/08', '15:32:41'),
(139, 100, 'gsm_last_connect', '2024/09/08', '15:33:59'),
(140, 100, 'gsm_last_connect', '2024/09/08', '15:36:49'),
(141, 100, 'gsm_last_connect', '2024/09/08', '15:36:53'),
(142, 100, 'gsm_last_connect', '2024/09/08', '15:44:46'),
(143, 100, 'gsm_last_connect', '2024/09/08', '16:01:39'),
(144, 100, 'gsm_last_connect', '2024/09/09', '09:01:22'),
(145, 100, 'gsm_last_connect', '2024/09/09', '09:01:27'),
(146, 100, 'gsm_last_connect', '2024/09/09', '13:11:15'),
(147, 100, 'gsm_last_connect', '2024/09/09', '13:11:37'),
(148, 100, 'gsm_last_connect', '2024/09/09', '13:11:51'),
(149, 100, 'gsm_last_connect', '2024/09/09', '13:12:21'),
(150, 100, 'gsm_last_connect', '2024/09/09', '13:13:34'),
(151, 100, 'gsm_last_connect', '2024/09/09', '13:13:47'),
(152, 100, 'gsm_last_connect', '2024/09/09', '13:14:13'),
(153, 100, 'gsm_last_connect', '2024/09/09', '13:16:00'),
(154, 100, 'gsm_last_connect', '2024/09/09', '13:17:59'),
(155, 100, 'gsm_last_connect', '2024/09/09', '13:37:13'),
(156, 100, 'gsm_last_connect', '2024/09/09', '13:38:01'),
(157, 100, 'gsm_last_connect', '2024/09/09', '13:38:10'),
(158, 100, 'gsm_last_connect', '2024/09/09', '13:38:20'),
(159, 100, 'gsm_last_connect', '2024/09/09', '13:38:21'),
(160, 100, 'gsm_last_connect', '2024/09/09', '13:38:49'),
(161, 100, 'gsm_last_connect', '2024/09/09', '13:38:55'),
(162, 100, 'gsm_last_connect', '2024/09/09', '13:39:45'),
(163, 100, 'gsm_last_connect', '2024/09/09', '13:39:46'),
(164, 100, 'gsm_last_connect', '2024/09/09', '13:40:13'),
(165, 100, 'gsm_last_connect', '2024/09/09', '13:40:15'),
(166, 100, 'gsm_last_connect', '2024/09/09', '13:47:08'),
(167, 100, 'gsm_last_connect', '2024/09/09', '13:47:09'),
(168, 100, 'gsm_last_connect', '2024/09/09', '13:47:10'),
(169, 100, 'gsm_last_connect', '2024/09/09', '13:48:58'),
(170, 100, 'gsm_last_connect', '2024/09/09', '13:49:00'),
(171, 100, 'gsm_last_connect', '2024/09/09', '14:27:17'),
(172, 100, 'gsm_last_connect', '2024/09/09', '14:27:20'),
(173, 100, 'gsm_last_connect', '2024/09/09', '14:28:02'),
(174, 100, 'gsm_last_connect', '2024/09/09', '14:28:20'),
(175, 100, 'gsm_last_connect', '2024/09/09', '14:28:23'),
(176, 100, 'gsm_last_connect', '2024/09/09', '14:28:40'),
(177, 100, 'gsm_last_connect', '2024/09/09', '14:28:47'),
(178, 100, 'gsm_last_connect', '2024/09/11', '09:15:25'),
(179, 100, 'gsm_last_connect', '2024/09/11', '09:15:26'),
(180, 100, 'gsm_last_connect', '2024/09/11', '09:16:08'),
(181, 100, 'gsm_last_connect', '2024/09/11', '09:17:54'),
(182, 100, 'gsm_last_connect', '2024/09/11', '09:20:20'),
(183, 100, 'gsm_last_connect', '2024/09/11', '09:20:30'),
(184, 100, 'gsm_last_connect', '2024/09/11', '09:20:52'),
(185, 100, 'gsm_last_connect', '2024/09/11', '09:20:59'),
(186, 100, 'gsm_last_connect', '2024/09/11', '09:21:17'),
(187, 100, 'gsm_last_connect', '2024/09/11', '09:22:01'),
(188, 100, 'gsm_last_connect', '2024/09/11', '09:22:02'),
(189, 100, 'gsm_last_connect', '2024/09/11', '09:22:08'),
(190, 100, 'gsm_last_connect', '2024/09/11', '09:22:25'),
(191, 100, 'gsm_last_connect', '2024/09/11', '09:23:04'),
(192, 100, 'gsm_last_connect', '2024/09/11', '09:23:05'),
(193, 100, 'gsm_last_connect', '2024/09/11', '09:23:13'),
(194, 100, 'gsm_last_connect', '2024/09/11', '09:23:14'),
(195, 100, 'gsm_last_connect', '2024/09/11', '09:23:15'),
(196, 100, 'gsm_last_connect', '2024/09/11', '09:23:21'),
(197, 100, 'gsm_last_connect', '2024/09/11', '09:23:22'),
(198, 100, 'gsm_last_connect', '2024/09/11', '09:31:29'),
(199, 100, 'gsm_last_connect', '2024/09/11', '09:31:37'),
(200, 100, 'gsm_last_connect', '2024/09/11', '09:31:40'),
(201, 100, 'gsm_last_connect', '2024/09/11', '09:31:50'),
(202, 100, 'gsm_last_connect', '2024/09/11', '09:31:54'),
(203, 100, 'gsm_last_connect', '2024/09/11', '09:33:00'),
(204, 100, 'gsm_last_connect', '2024/09/11', '09:33:01'),
(205, 100, 'gsm_last_connect', '2024/09/11', '09:33:03'),
(206, 100, 'gsm_last_connect', '2024/09/11', '09:33:04'),
(207, 100, 'gsm_last_connect', '2024/09/11', '09:33:05'),
(208, 100, 'gsm_last_connect', '2024/09/11', '09:42:37'),
(209, 100, 'gsm_last_connect', '2024/09/11', '09:43:16'),
(210, 100, 'gsm_last_connect', '2024/09/11', '09:43:17'),
(211, 100, 'gsm_last_connect', '2024/09/11', '09:43:19'),
(212, 100, 'gsm_last_connect', '2024/09/11', '09:43:44'),
(213, 100, 'gsm_last_connect', '2024/09/11', '09:43:52'),
(214, 100, 'gsm_last_connect', '2024/09/11', '09:44:04'),
(215, 100, 'gsm_last_connect', '2024/09/11', '09:44:05'),
(216, 100, 'gsm_last_connect', '2024/09/11', '09:44:10'),
(217, 100, 'gsm_last_connect', '2024/09/11', '09:44:17'),
(218, 100, 'gsm_last_connect', '2024/09/11', '09:45:04'),
(219, 100, 'gsm_last_connect', '2024/09/11', '09:45:05'),
(220, 100, 'gsm_last_connect', '2024/09/11', '09:45:30'),
(221, 100, 'gsm_last_connect', '2024/09/11', '09:45:43'),
(222, 100, 'gsm_last_connect', '2024/09/11', '09:45:44'),
(223, 100, 'gsm_last_connect', '2024/09/11', '09:45:46'),
(224, 100, 'gsm_last_connect', '2024/09/11', '09:45:53'),
(225, 100, 'gsm_last_connect', '2024/09/11', '09:46:08'),
(226, 100, 'gsm_last_connect', '2024/09/11', '09:46:12'),
(227, 100, 'gsm_last_connect', '2024/09/11', '09:46:15'),
(228, 100, 'gsm_last_connect', '2024/09/11', '09:46:19'),
(229, 100, 'gsm_last_connect', '2024/09/11', '09:47:09'),
(230, 100, 'gsm_last_connect', '2024/09/11', '09:47:13'),
(231, 100, 'gsm_last_connect', '2024/09/11', '09:47:17'),
(232, 100, 'gsm_last_connect', '2024/09/11', '09:47:44'),
(233, 100, 'gsm_last_connect', '2024/09/11', '09:48:56'),
(234, 100, 'gsm_last_connect', '2024/09/11', '09:50:18'),
(235, 100, 'gsm_last_connect', '2024/09/11', '09:50:19'),
(236, 100, 'gsm_last_connect', '2024/09/11', '10:09:11'),
(237, 100, 'gsm_last_connect', '2024/09/11', '10:09:31'),
(238, 100, 'gsm_last_connect', '2024/09/11', '10:09:35'),
(239, 100, 'gsm_last_connect', '2024/09/11', '10:09:39'),
(240, 100, 'gsm_last_connect', '2024/09/11', '13:58:17'),
(241, 100, 'gsm_last_connect', '2024/09/11', '13:58:33'),
(242, 100, 'gsm_last_connect', '2024/09/11', '13:59:43'),
(243, 100, 'gsm_last_connect', '2024/09/11', '13:59:56'),
(244, 100, 'gsm_last_connect', '2024/09/11', '14:00:03'),
(245, 100, 'gsm_last_connect', '2024/09/11', '14:00:12'),
(246, 100, 'gsm_last_connect', '2024/09/11', '14:00:20'),
(247, 100, 'gsm_last_connect', '2024/09/11', '14:00:21'),
(248, 100, 'gsm_last_connect', '2024/09/11', '14:01:09'),
(249, 100, 'gsm_last_connect', '2024/09/11', '14:03:32'),
(250, 100, 'gsm_last_connect', '2024/09/11', '14:06:08'),
(251, 100, 'gsm_last_connect', '2024/09/11', '14:06:30'),
(252, 100, 'gsm_last_connect', '2024/09/11', '14:13:52'),
(253, 100, 'gsm_last_connect', '2024/09/11', '14:19:59'),
(254, 100, 'gsm_last_connect', '2024/09/11', '14:20:04'),
(255, 100, 'gsm_last_connect', '2024/09/11', '14:20:04'),
(256, 100, 'gsm_last_connect', '2024/09/11', '14:20:08'),
(257, 100, 'gsm_last_connect', '2024/09/11', '14:20:08'),
(258, 100, 'gsm_last_connect', '2024/09/11', '14:20:08'),
(259, 100, 'gsm_last_connect', '2024/09/11', '14:20:09'),
(260, 100, 'gsm_last_connect', '2024/09/11', '14:38:12'),
(261, 100, 'gsm_last_connect', '2024/09/11', '14:38:13'),
(262, 100, 'gsm_last_connect', '2024/09/11', '14:38:13'),
(263, 100, 'gsm_last_connect', '2024/09/11', '14:38:14'),
(264, 100, 'gsm_last_connect', '2024/09/11', '14:38:14'),
(265, 100, 'gsm_last_connect', '2024/09/11', '14:38:15'),
(266, 100, 'gsm_last_connect', '2024/09/11', '14:38:15'),
(267, 100, 'gsm_last_connect', '2024/09/11', '14:38:18'),
(268, 100, 'gsm_last_connect', '2024/09/11', '14:51:37'),
(269, 100, 'gsm_last_connect', '2024/09/11', '14:51:46'),
(270, 100, 'gsm_last_connect', '2024/09/11', '14:51:56'),
(271, 100, 'gsm_last_connect', '2024/09/11', '14:52:02'),
(272, 100, 'gsm_last_connect', '2024/09/11', '14:52:20'),
(273, 100, 'gsm_last_connect', '2024/09/11', '14:52:29'),
(274, 100, 'gsm_last_connect', '2024/09/11', '14:52:34'),
(275, 100, 'gsm_last_connect', '2024/09/11', '14:52:35'),
(276, 100, 'gsm_last_connect', '2024/09/11', '14:52:35'),
(277, 100, 'gsm_last_connect', '2024/09/11', '14:52:36'),
(278, 100, 'gsm_last_connect', '2024/09/11', '14:52:41'),
(279, 100, 'gsm_last_connect', '2024/09/11', '14:52:42'),
(280, 100, 'gsm_last_connect', '2024/09/11', '14:52:43'),
(281, 100, 'gsm_last_connect', '2024/09/11', '14:52:47'),
(282, 100, 'gsm_last_connect', '2024/09/11', '14:52:48'),
(283, 100, 'gsm_last_connect', '2024/09/11', '14:52:49'),
(284, 100, 'gsm_last_connect', '2024/09/11', '14:53:27'),
(285, 100, 'gsm_last_connect', '2024/09/11', '14:53:30'),
(286, 100, 'gsm_last_connect', '2024/09/11', '14:53:33'),
(287, 100, 'gsm_last_connect', '2024/09/11', '14:53:34'),
(288, 100, 'gsm_last_connect', '2024/09/11', '14:53:38'),
(289, 100, 'gsm_last_connect', '2024/09/11', '14:53:39'),
(290, 100, 'gsm_last_connect', '2024/09/11', '14:53:42'),
(291, 100, 'gsm_last_connect', '2024/09/11', '14:53:45'),
(292, 100, 'gsm_last_connect', '2024/09/11', '14:53:47'),
(293, 100, 'gsm_last_connect', '2024/09/11', '14:53:47'),
(294, 100, 'gsm_last_connect', '2024/09/11', '14:53:48'),
(295, 100, 'gsm_last_connect', '2024/09/11', '14:53:49'),
(296, 100, 'gsm_last_connect', '2024/09/11', '14:53:53'),
(297, 100, 'gsm_last_connect', '2024/09/11', '14:53:54'),
(298, 100, 'gsm_last_connect', '2024/09/11', '14:54:01'),
(299, 100, 'gsm_last_connect', '2024/09/11', '14:54:03'),
(300, 100, 'gsm_last_connect', '2024/09/11', '14:55:15'),
(301, 100, 'gsm_last_connect', '2024/09/11', '14:55:17'),
(302, 100, 'gsm_last_connect', '2024/09/11', '14:55:39'),
(303, 100, 'gsm_last_connect', '2024/09/11', '14:55:41'),
(304, 100, 'gsm_last_connect', '2024/09/11', '14:55:42'),
(305, 100, 'gsm_last_connect', '2024/09/11', '14:55:42'),
(306, 100, 'gsm_last_connect', '2024/09/11', '14:55:56'),
(307, 100, 'gsm_last_connect', '2024/09/11', '14:55:59'),
(308, 100, 'gsm_last_connect', '2024/09/11', '14:56:00'),
(309, 100, 'gsm_last_connect', '2024/09/11', '14:56:01'),
(310, 100, 'gsm_last_connect', '2024/09/11', '15:38:23'),
(311, 100, 'gsm_last_connect', '2024/09/11', '15:41:59'),
(312, 100, 'gsm_last_connect', '2024/09/11', '15:42:02'),
(313, 100, 'gsm_last_connect', '2024/09/11', '15:42:03'),
(314, 100, 'gsm_last_connect', '2024/09/11', '16:25:24'),
(315, 100, 'gsm_last_connect', '2024/09/11', '16:25:56'),
(316, 100, 'gsm_last_connect', '2024/09/11', '16:25:57'),
(317, 100, 'gsm_last_connect', '2024/09/11', '16:26:49'),
(318, 100, 'gsm_last_connect', '2024/09/11', '16:27:01'),
(319, 100, 'gsm_last_connect', '2024/09/11', '16:27:02'),
(320, 100, 'gsm_last_connect', '2024/09/11', '16:27:04'),
(321, 100, 'gsm_last_connect', '2024/09/11', '16:27:05'),
(322, 100, 'gsm_last_connect', '2024/09/11', '16:27:14'),
(323, 100, 'gsm_last_connect', '2024/09/11', '16:27:16'),
(324, 100, 'gsm_last_connect', '2024/09/11', '16:30:16'),
(325, 100, 'gsm_last_connect', '2024/09/11', '16:30:27'),
(326, 100, 'gsm_last_connect', '2024/09/11', '16:30:28'),
(327, 100, 'gsm_last_connect', '2024/09/11', '16:30:32'),
(328, 100, 'gsm_last_connect', '2024/09/11', '16:39:14'),
(329, 100, 'gsm_last_connect', '2024/09/11', '16:39:15'),
(330, 100, 'gsm_last_connect', '2024/09/11', '16:39:16'),
(331, 100, 'gsm_last_connect', '2024/09/11', '16:39:38'),
(332, 100, 'gsm_last_connect', '2024/09/11', '16:39:56'),
(333, 100, 'gsm_last_connect', '2024/09/11', '16:40:32'),
(334, 100, 'gsm_last_connect', '2024/09/11', '16:40:35'),
(335, 100, 'gsm_last_connect', '2024/09/11', '16:48:09'),
(336, 100, 'gsm_last_connect', '2024/09/11', '16:48:10'),
(337, 100, 'gsm_last_connect', '2024/09/11', '16:48:10'),
(338, 100, 'gsm_last_connect', '2024/09/11', '16:48:11'),
(339, 100, 'gsm_last_connect', '2024/09/11', '16:48:20'),
(340, 100, 'gsm_last_connect', '2024/09/11', '16:48:25'),
(341, 100, 'gsm_last_connect', '2024/09/11', '16:48:27'),
(342, 100, 'gsm_last_connect', '2024/09/11', '16:48:35'),
(343, 100, 'gsm_last_connect', '2024/09/11', '16:48:38'),
(344, 100, 'gsm_last_connect', '2024/09/11', '17:37:38'),
(345, 100, 'gsm_last_connect', '2024/09/11', '17:39:12'),
(346, 100, 'gsm_last_connect', '2024/09/11', '17:39:13'),
(347, 100, 'gsm_last_connect', '2024/09/11', '17:39:22'),
(348, 100, 'gsm_last_connect', '2024/09/11', '17:39:29'),
(349, 100, 'gsm_last_connect', '2024/09/11', '17:39:31'),
(350, 100, 'gsm_last_connect', '2024/09/11', '17:42:41'),
(351, 100, 'gsm_last_connect', '2024/09/11', '17:42:49'),
(352, 100, 'gsm_last_connect', '2024/09/11', '17:43:34'),
(353, 100, 'gsm_last_connect', '2024/09/11', '17:43:43'),
(354, 100, 'gsm_last_connect', '2024/09/11', '17:43:45'),
(355, 100, 'gsm_last_connect', '2024/09/11', '17:43:48'),
(356, 100, 'gsm_last_connect', '2024/09/11', '17:43:50'),
(357, 100, 'gsm_last_connect', '2024/09/11', '17:45:07'),
(358, 100, 'gsm_last_connect', '2024/09/11', '17:45:10'),
(359, 100, 'gsm_last_connect', '2024/09/11', '17:45:18'),
(360, 100, 'gsm_last_connect', '2024/09/11', '17:45:20'),
(361, 100, 'gsm_last_connect', '2024/09/11', '17:45:21'),
(362, 100, 'gsm_last_connect', '2024/09/11', '17:45:21'),
(363, 100, 'gsm_last_connect', '2024/09/11', '17:45:37'),
(364, 100, 'gsm_last_connect', '2024/09/11', '17:45:48'),
(365, 100, 'gsm_last_connect', '2024/09/11', '17:45:54'),
(366, 100, 'gsm_last_connect', '2024/09/11', '18:24:23'),
(367, 100, 'gsm_last_connect', '2024/09/11', '18:24:23'),
(368, 100, 'gsm_last_connect', '2024/09/11', '18:24:30'),
(369, 100, 'gsm_last_connect', '2024/09/11', '18:24:34'),
(370, 100, 'gsm_last_connect', '2024/09/11', '18:24:38'),
(371, 100, 'gsm_last_connect', '2024/09/11', '18:24:42'),
(372, 100, 'gsm_last_connect', '2024/09/11', '18:24:56'),
(373, 100, 'gsm_last_connect', '2024/09/11', '18:25:00'),
(374, 100, 'gsm_last_connect', '2024/09/11', '18:25:01'),
(375, 100, 'gsm_last_connect', '2024/09/11', '18:25:01'),
(376, 100, 'gsm_last_connect', '2024/09/11', '18:25:02'),
(377, 100, 'gsm_last_connect', '2024/09/11', '18:25:08'),
(378, 100, 'gsm_last_connect', '2024/09/12', '08:38:38'),
(379, 100, 'gsm_last_connect', '2024/09/12', '08:38:40'),
(380, 100, 'gsm_last_connect', '2024/09/12', '08:38:45'),
(381, 100, 'gsm_last_connect', '2024/09/12', '08:39:06'),
(382, 100, 'gsm_last_connect', '2024/09/12', '08:39:07'),
(383, 100, 'gsm_last_connect', '2024/09/12', '08:39:25'),
(384, 100, 'gsm_last_connect', '2024/09/12', '08:39:27'),
(385, 100, 'gsm_last_connect', '2024/09/12', '08:39:30'),
(386, 100, 'gsm_last_connect', '2024/09/12', '08:39:32'),
(387, 100, 'gsm_last_connect', '2024/09/12', '08:39:39'),
(388, 100, 'gsm_last_connect', '2024/09/12', '08:39:54'),
(389, 100, 'gsm_last_connect', '2024/09/12', '08:40:27'),
(390, 100, 'gsm_last_connect', '2024/09/12', '08:40:29'),
(391, 100, 'gsm_last_connect', '2024/09/12', '08:40:34'),
(392, 100, 'gsm_last_connect', '2024/09/12', '08:40:36'),
(393, 100, 'gsm_last_connect', '2024/09/12', '08:40:39'),
(394, 100, 'gsm_last_connect', '2024/09/12', '08:40:39'),
(395, 100, 'gsm_last_connect', '2024/09/12', '08:40:40'),
(396, 100, 'gsm_last_connect', '2024/09/12', '08:40:40'),
(397, 100, 'gsm_last_connect', '2024/09/12', '08:43:01'),
(398, 100, 'gsm_last_connect', '2024/09/12', '08:43:02'),
(399, 100, 'gsm_last_connect', '2024/09/12', '08:43:21'),
(400, 100, 'gsm_last_connect', '2024/09/12', '08:43:27'),
(401, 100, 'gsm_last_connect', '2024/09/12', '08:46:26'),
(402, 100, 'gsm_last_connect', '2024/09/12', '08:46:28'),
(403, 100, 'gsm_last_connect', '2024/09/12', '08:46:29'),
(404, 100, 'gsm_last_connect', '2024/09/12', '08:46:32'),
(405, 100, 'gsm_last_connect', '2024/09/12', '08:46:54'),
(406, 100, 'gsm_last_connect', '2024/09/12', '08:46:57'),
(407, 100, 'gsm_last_connect', '2024/09/12', '08:47:11'),
(408, 100, 'gsm_last_connect', '2024/09/12', '08:47:15'),
(409, 100, 'gsm_last_connect', '2024/09/12', '08:47:16'),
(410, 100, 'gsm_last_connect', '2024/09/12', '08:47:26'),
(411, 100, 'gsm_last_connect', '2024/09/12', '08:47:28'),
(412, 100, 'gsm_last_connect', '2024/09/12', '08:47:29'),
(413, 100, 'gsm_last_connect', '2024/09/12', '08:47:31'),
(414, 100, 'gsm_last_connect', '2024/09/12', '08:47:38'),
(415, 100, 'gsm_last_connect', '2024/09/12', '08:47:45'),
(416, 100, 'gsm_last_connect', '2024/09/12', '08:47:48'),
(417, 100, 'gsm_last_connect', '2024/09/12', '08:47:49'),
(418, 100, 'gsm_last_connect', '2024/09/12', '08:47:55'),
(419, 100, 'gsm_last_connect', '2024/09/12', '08:47:56'),
(420, 100, 'gsm_last_connect', '2024/09/14', '09:22:34'),
(421, 100, 'gsm_last_connect', '2024/09/14', '09:22:35'),
(422, 100, 'gsm_last_connect', '2024/09/14', '09:22:36'),
(423, 100, 'gsm_last_connect', '2024/09/14', '09:22:36'),
(424, 100, 'gsm_last_connect', '2024/09/14', '09:22:37'),
(425, 100, 'gsm_last_connect', '2024/09/16', '08:59:00'),
(426, 100, 'gsm_last_connect', '2024/09/16', '09:57:20'),
(427, 100, 'gsm_last_connect', '2024/09/16', '10:31:26'),
(428, 100, 'gsm_last_connect', '2024/09/16', '10:32:29'),
(429, 100, 'gsm_last_connect', '2024/09/16', '10:33:45'),
(430, 100, 'gsm_last_connect', '2024/09/16', '10:33:55'),
(431, 100, 'gsm_last_connect', '2024/09/16', '10:34:03'),
(432, 100, 'gsm_last_connect', '2024/09/16', '10:34:05'),
(433, 100, 'gsm_last_connect', '2024/09/16', '10:34:34'),
(434, 100, 'gsm_last_connect', '2024/09/16', '10:34:55'),
(435, 100, 'gsm_last_connect', '2024/09/16', '10:35:00'),
(436, 100, 'gsm_last_connect', '2024/09/16', '11:44:31'),
(437, 100, 'gsm_last_connect', '2024/09/16', '12:01:51'),
(438, 100, 'gsm_last_connect', '2024/09/16', '12:01:52'),
(439, 100, 'gsm_last_connect', '2024/09/16', '12:01:53'),
(440, 100, 'gsm_last_connect', '2024/09/16', '12:01:54'),
(441, 100, 'gsm_last_connect', '2024/09/17', '14:48:11'),
(442, 100, 'gsm_last_connect', '2024/09/17', '15:50:08'),
(443, 100, 'gsm_last_connect', '2024/09/17', '15:50:10'),
(444, 100, 'gsm_last_connect', '2024/09/18', '09:32:37'),
(445, 100, 'gsm_last_connect', '2024/09/18', '09:32:38'),
(446, 100, 'gsm_last_connect', '2024/09/18', '09:32:46'),
(447, 100, 'gsm_last_connect', '2024/09/18', '09:33:06'),
(448, 100, 'gsm_last_connect', '2024/09/18', '09:38:14'),
(449, 100, 'gsm_last_connect', '2024/09/18', '09:57:21'),
(450, 100, 'gsm_last_connect', '2024/09/18', '10:25:57');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `password` int(10) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `information` text NOT NULL,
  `serial` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`password`, `phone_number`, `address`, `information`, `serial`) VALUES
(1111, '09012908017', 'اصفهان ، خیابان احمد اباد ؟ کوچه نواب / بلاک 42', 'تولید انواع برد کنترلی اسانسور شرکت راویس', 100);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`id`, `name`) VALUES
(1, 'kave'),
(2, 'kave2'),
(3, 'kave2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `date_time`
--
ALTER TABLE `date_time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`serial`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1364;

--
-- AUTO_INCREMENT for table `date_time`
--
ALTER TABLE `date_time`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=451;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
