-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2025 at 06:32 AM
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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `data` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `data`) VALUES
(1, 'password', '25482548Mo');

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
(1363, 100, 'advance_settin', 'general*number_of_stop', '12', 'update', 0, 2),
(1364, 100, 'advance_settin', 'general*num_and_talk*sl-f1', '19', 'update', 1, 105),
(1365, 100, 'advance_settin', 'general*num_and_talk*sl-f2', '10', 'update', 1, 205),
(1366, 100, 'advance_settin', 'general*num_and_talk*sl-f3', '23', 'update', 1, 305),
(1367, 100, 'advance_settin', 'general*num_and_talk*sl-f4', '23', 'update', 1, 405),
(1368, 100, 'advance_settin', 'general*num_and_talk*sr-f1', '19', 'update', 1, 106),
(1369, 100, 'advance_settin', 'general*num_and_talk*sr-f2', '2', 'update', 1, 206),
(1370, 100, 'advance_settin', 'general*num_and_talk*sr-f3', '8', 'update', 1, 306),
(1371, 100, 'advance_settin', 'general*num_and_talk*sr-f4', '4', 'update', 1, 406),
(1372, 100, 'advance_settin', 'general*num_and_talk*talk-f1', '24', 'update', 1, 107),
(1373, 100, 'advance_settin', 'general*num_and_talk*talk-f2', '1', 'update', 1, 207),
(1374, 100, 'advance_settin', 'general*num_and_talk*talk-f3', '2', 'update', 1, 307),
(1375, 100, 'advance_settin', 'general*num_and_talk*talk-f4', '3', 'update', 1, 407),
(1376, 100, 'advance_settin', 'general*num_and_talk*sl-f5', '23', 'update', 1, 505),
(1377, 100, 'advance_settin', 'general*num_and_talk*sl-f6', '23', 'update', 1, 605),
(1378, 100, 'advance_settin', 'general*num_and_talk*sl-f7', '0', 'update', 1, 705),
(1379, 100, 'advance_settin', 'general*num_and_talk*sl-f8', '0', 'update', 1, 805),
(1380, 100, 'advance_settin', 'general*num_and_talk*sl-f9', '0', 'update', 1, 905),
(1381, 100, 'advance_settin', 'general*num_and_talk*sl-f10', '0', 'update', 1, 1005),
(1382, 100, 'advance_settin', 'general*num_and_talk*sl-f11', '23', 'update', 1, 1105),
(1383, 100, 'advance_settin', 'general*num_and_talk*sl-f12', '0', 'update', 1, 1205),
(1384, 100, 'advance_settin', 'general*num_and_talk*sl-f13', '0', 'update', 1, 1305),
(1385, 100, 'advance_settin', 'general*num_and_talk*sl-f14', '0', 'update', 1, 1405),
(1386, 100, 'advance_settin', 'general*num_and_talk*sl-f15', '0', 'update', 1, 1505),
(1387, 100, 'advance_settin', 'general*num_and_talk*sl-f16', '0', 'update', 1, 1605),
(1388, 100, 'advance_settin', 'general*num_and_talk*sl-f17', '0', 'update', 1, 1705),
(1389, 100, 'advance_settin', 'general*num_and_talk*sl-f18', '0', 'update', 1, 1805),
(1390, 100, 'advance_settin', 'general*num_and_talk*sr-f5', '5', 'update', 1, 506),
(1391, 100, 'advance_settin', 'general*num_and_talk*sr-f6', '6', 'update', 1, 606),
(1392, 100, 'advance_settin', 'general*num_and_talk*sr-f7', '0', 'update', 1, 706),
(1393, 100, 'advance_settin', 'general*num_and_talk*sr-f8', '0', 'update', 1, 806),
(1394, 100, 'advance_settin', 'general*num_and_talk*sr-f9', '0', 'update', 1, 906),
(1395, 100, 'advance_settin', 'general*num_and_talk*sr-f10', '0', 'update', 1, 1006),
(1396, 100, 'advance_settin', 'general*num_and_talk*sr-f11', '0', 'update', 1, 1106),
(1397, 100, 'advance_settin', 'general*num_and_talk*sr-f12', '0', 'update', 1, 1206),
(1398, 100, 'advance_settin', 'general*num_and_talk*sr-f13', '0', 'update', 1, 1306),
(1399, 100, 'advance_settin', 'general*num_and_talk*sr-f14', '0', 'update', 1, 1406),
(1400, 100, 'advance_settin', 'general*num_and_talk*sr-f15', '0', 'update', 1, 1506),
(1401, 100, 'advance_settin', 'general*num_and_talk*sr-f16', '0', 'update', 1, 1606),
(1402, 100, 'advance_settin', 'general*num_and_talk*sr-f17', '0', 'update', 1, 1706),
(1403, 100, 'advance_settin', 'general*num_and_talk*sr-f18', '0', 'update', 1, 1806),
(1404, 100, 'advance_settin', 'general*num_and_talk*talk-f5', '4', 'update', 1, 507),
(1405, 100, 'advance_settin', 'general*num_and_talk*talk-f6', '5', 'update', 1, 607),
(1406, 100, 'advance_settin', 'general*num_and_talk*talk-f7', '6', 'update', 1, 707),
(1407, 100, 'advance_settin', 'general*num_and_talk*talk-f8', '0', 'update', 1, 807),
(1408, 100, 'advance_settin', 'general*num_and_talk*talk-f9', '0', 'update', 1, 907),
(1409, 100, 'advance_settin', 'general*num_and_talk*talk-f10', '9', 'update', 1, 1007),
(1410, 100, 'advance_settin', 'general*num_and_talk*talk-f11', '10', 'update', 1, 1107),
(1411, 100, 'advance_settin', 'general*num_and_talk*talk-f12', '11', 'update', 1, 1207),
(1412, 100, 'advance_settin', 'general*num_and_talk*talk-f13', '0', 'update', 1, 1307),
(1413, 100, 'advance_settin', 'general*num_and_talk*talk-f14', '0', 'update', 1, 1407),
(1414, 100, 'advance_settin', 'general*num_and_talk*talk-f15', '0', 'update', 1, 1507),
(1415, 100, 'advance_settin', 'general*num_and_talk*talk-f16', '0', 'update', 1, 1607),
(1416, 100, 'advance_settin', 'general*num_and_talk*talk-f17', '0', 'update', 1, 1707),
(1417, 100, 'advance_settin', 'general*num_and_talk*talk-f18', '0', 'update', 1, 1807),
(1418, 100, 'advance_settin', 'general*sound*music_volue', '3', 'update', 0, 23),
(1419, 100, 'advance_settin', 'general*sound*talk_volue', '2', 'update', 0, 24),
(1420, 100, 'advance_settin', 'general*sound*welcome_floor', '2', 'update', 0, 25),
(1421, 100, 'advance_settin', 'general*sound*gang_select', '1', 'update', 0, 26),
(1422, 100, 'advance_settin', 'general*door*number_of_door', '1', 'update', 0, 22),
(1423, 100, 'advance_settin', 'general*door*door_select*d1f1', '1', 'update', 1, 102),
(1424, 100, 'advance_settin', 'general*door*door_select*d2f1', '2', 'update', 1, 103),
(1425, 100, 'advance_settin', 'general*door*door_select*d3f1', '0', 'update', 1, 104),
(1426, 100, 'advance_settin', 'general*door*door_select*d1f2', '1', 'update', 1, 202),
(1427, 100, 'advance_settin', 'general*door*door_select*d2f2', '2', 'update', 1, 203),
(1428, 100, 'advance_settin', 'general*door*door_select*d3f2', '0', 'update', 1, 204),
(1429, 100, 'advance_settin', 'general*door*door_select*d1f3', '1', 'update', 1, 302),
(1430, 100, 'advance_settin', 'general*door*door_select*d2f3', '2', 'update', 1, 303),
(1431, 100, 'advance_settin', 'general*door*door_select*d3f3', '2', 'update', 1, 304),
(1432, 100, 'advance_settin', 'general*door*door_select*d1f4', '1', 'update', 1, 402),
(1433, 100, 'advance_settin', 'general*door*door_select*d2f4', '0', 'update', 1, 403),
(1434, 100, 'advance_settin', 'general*door*door_select*d3f4', '0', 'update', 1, 404),
(1435, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f1', '3', 'update', 1, 108),
(1436, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f2', '0', 'update', 1, 208),
(1437, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f3', '3', 'update', 1, 308),
(1438, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f4', '2', 'update', 1, 408),
(1439, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f5', '2', 'update', 1, 508),
(1440, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f6', '2', 'update', 1, 608),
(1441, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f7', '2', 'update', 1, 708),
(1442, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f8', '2', 'update', 1, 808),
(1443, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f9', '0', 'update', 1, 908),
(1444, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f10', '0', 'update', 1, 1008),
(1445, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f11', '2', 'update', 1, 1108),
(1446, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f12', '2', 'update', 1, 1208),
(1447, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f13', '0', 'update', 1, 1308),
(1448, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f14', '0', 'update', 1, 1408),
(1449, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f15', '0', 'update', 1, 1508),
(1450, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f16', '0', 'update', 1, 1608),
(1451, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f17', '0', 'update', 1, 1708),
(1452, 100, 'advance_settin', 'general*landing*based_on*jump1speed*f18', '0', 'update', 1, 1808),
(1453, 100, 'advance_settin', 'general*hydrolic*start_slow_delay', '21', 'update', 0, 43),
(1454, 100, 'advance_settin', 'general*hydrolic*start_fast_delay', '32', 'update', 0, 44),
(1455, 100, 'advance_settin', 'general*hydrolic*start_to_delta', '43', 'update', 0, 45),
(1456, 100, 'advance_settin', 'general*hydrolic*motor_start_delay', '54', 'update', 0, 46),
(1457, 100, 'advance_settin', 'general*hydrolic*motor_stop_delay', '165', 'update', 0, 47),
(1458, 100, 'advance_settin', 'general*floor*park_floor', '6', 'update', 0, 28),
(1459, 100, 'advance_settin', 'general*floor*time_to_park', '20', 'update', 0, 29),
(1460, 100, 'advance_settin', 'general*floor*fire_park', '6', 'update', 0, 30),
(1461, 100, 'advance_settin', 'general*floor*waiting_floor', '40', 'update', 0, 31),
(1462, 100, 'advance_settin', 'general*motor_safe*enable', '0', 'update', 0, 5),
(1463, 100, 'advance_settin', 'general*motor_safe*fast_over_c', '5', 'update', 0, 40),
(1464, 100, 'advance_settin', 'general*motor_safe*slow_over_c', '10', 'update', 0, 41),
(1465, 100, 'advance_settin', 'general*motor_safe*time_over_c', '150', 'update', 0, 42),
(1466, 100, 'advance_settin', 'general*service_type', '0', 'update', 0, 3),
(1467, 100, 'advance_settin', 'general*door*open_delay', '50', 'update', 0, 15),
(1468, 100, 'advance_settin', 'general*door*close_delay', '11', 'update', 0, 16),
(1469, 100, 'advance_settin', 'general*door*end_door_time', '10', 'update', 0, 17),
(1470, 100, 'advance_settin', 'general*door*close_time_out', '6', 'update', 0, 18),
(1471, 100, 'advance_settin', 'general*door*door_park', '7', 'update', 0, 19),
(1472, 100, 'advance_settin', 'general*door*debouncer_69', '11', 'update', 0, 20),
(1473, 100, 'advance_settin', 'general*door*debouncer_68', '22', 'update', 0, 21),
(1474, 100, 'advance_settin', 'general*door*open_time', '8', 'update', 0, 27),
(1475, 100, 'advance_settin', 'general*door*control_type', '2', 'update', 0, 4),
(1476, 100, 'advance_settin', 'general*door*door_select*d1f5', '1', 'update', 1, 502),
(1477, 100, 'advance_settin', 'general*door*door_select*d2f5', '0', 'update', 1, 503),
(1478, 100, 'advance_settin', 'general*door*door_select*d3f5', '0', 'update', 1, 504),
(1479, 100, 'advance_settin', 'general*door*door_select*d1f6', '1', 'update', 1, 602),
(1480, 100, 'advance_settin', 'general*door*door_select*d2f6', '0', 'update', 1, 603),
(1481, 100, 'advance_settin', 'general*door*door_select*d3f6', '0', 'update', 1, 604),
(1482, 100, 'advance_settin', 'general*door*door_select*d1f7', '1', 'update', 1, 702),
(1483, 100, 'advance_settin', 'general*door*door_select*d2f7', '0', 'update', 1, 703),
(1484, 100, 'advance_settin', 'general*door*door_select*d3f7', '0', 'update', 1, 704),
(1485, 100, 'advance_settin', 'general*door*door_select*d1f8', '1', 'update', 1, 802),
(1486, 100, 'advance_settin', 'general*door*door_select*d2f8', '0', 'update', 1, 803),
(1487, 100, 'advance_settin', 'general*door*door_select*d3f8', '0', 'update', 1, 804),
(1488, 100, 'advance_settin', 'general*door*door_select*d1f9', '1', 'update', 1, 902),
(1489, 100, 'advance_settin', 'general*door*door_select*d2f9', '0', 'update', 1, 903),
(1490, 100, 'advance_settin', 'general*door*door_select*d3f9', '0', 'update', 1, 904),
(1491, 100, 'advance_settin', 'general*door*door_select*d1f10', '1', 'update', 1, 1002),
(1492, 100, 'advance_settin', 'general*door*door_select*d2f10', '0', 'update', 1, 1003),
(1493, 100, 'advance_settin', 'general*door*door_select*d3f10', '0', 'update', 1, 1004),
(1494, 100, 'advance_settin', 'general*door*door_select*d1f11', '1', 'update', 1, 1102),
(1495, 100, 'advance_settin', 'general*door*door_select*d2f11', '0', 'update', 1, 1103),
(1496, 100, 'advance_settin', 'general*door*door_select*d3f11', '0', 'update', 1, 1104),
(1497, 100, 'advance_settin', 'general*door*door_select*d1f12', '1', 'update', 1, 1202),
(1498, 100, 'advance_settin', 'general*door*door_select*d2f12', '0', 'update', 1, 1203),
(1499, 100, 'advance_settin', 'general*door*door_select*d3f12', '0', 'update', 1, 1204),
(1500, 100, 'advance_settin', 'general*door*door_select*d1f13', '0', 'unknown', 1, 1302),
(1501, 100, 'advance_settin', 'general*door*door_select*d2f13', '0', 'unknown', 1, 1303),
(1502, 100, 'advance_settin', 'general*door*door_select*d3f13', '0', 'unknown', 1, 1304),
(1503, 100, 'advance_settin', 'general*door*door_select*d1f14', '0', 'unknown', 1, 1402),
(1504, 100, 'advance_settin', 'general*door*door_select*d2f14', '0', 'unknown', 1, 1403),
(1505, 100, 'advance_settin', 'general*door*door_select*d3f14', '0', 'unknown', 1, 1404),
(1506, 100, 'advance_settin', 'general*door*door_select*d1f15', '0', 'unknown', 1, 1502),
(1507, 100, 'advance_settin', 'general*door*door_select*d2f15', '0', 'unknown', 1, 1503),
(1508, 100, 'advance_settin', 'general*door*door_select*d3f15', '0', 'unknown', 1, 1504),
(1509, 100, 'advance_settin', 'general*door*door_select*d1f16', '0', 'unknown', 1, 1602),
(1510, 100, 'advance_settin', 'general*door*door_select*d2f16', '0', 'unknown', 1, 1603),
(1511, 100, 'advance_settin', 'general*door*door_select*d3f16', '0', 'unknown', 1, 1604),
(1512, 100, 'advance_settin', 'general*door*door_select*d1f17', '0', 'unknown', 1, 1702),
(1513, 100, 'advance_settin', 'general*door*door_select*d2f17', '0', 'unknown', 1, 1703),
(1514, 100, 'advance_settin', 'general*door*door_select*d3f17', '0', 'unknown', 1, 1704),
(1515, 100, 'advance_settin', 'general*door*door_select*d1f18', '0', 'unknown', 1, 1802),
(1516, 100, 'advance_settin', 'general*door*door_select*d2f18', '0', 'unknown', 1, 1803),
(1517, 100, 'advance_settin', 'general*door*door_select*d3f18', '0', 'unknown', 1, 1804),
(1518, 100, 'advance_settin', 'general*1cf_error*enable', '1', 'update', 0, 8),
(1519, 100, 'advance_settin', 'general*1cf_error*time_out', '30', 'update', 0, 39),
(1520, 100, 'server', 'page_mqtt_enable', '1', 'upload', 0, 0),
(1521, 100, 'advance_settin', 'general*calibreation*direction', '1', 'update', 0, 6),
(1522, 100, 'advance_settin', 'general*calibreation*speed', '1', 'update', 0, 7),
(1523, 100, 'advance_settin', 'general*emergency*enable', '1', 'update', 0, 9),
(1524, 100, 'advance_settin', 'general*emergency*direction', '1', 'update', 0, 10),
(1525, 100, 'advance_settin', 'general*travel_time', '8', 'update', 0, 14),
(1526, 100, 'advance_settin', 'general*landing*based_on*acceleration', '100', 'update', 0, 55),
(1527, 100, 'advance_settin', 'general*landing*based_on*distance*f1', '11', 'update', 1, 111),
(1528, 100, 'advance_settin', 'general*landing*based_on*distance*f2', '22', 'update', 1, 211),
(1529, 100, 'advance_settin', 'general*landing*based_on*distance*f3', '33', 'update', 1, 311),
(1530, 100, 'advance_settin', 'general*landing*based_on*jump1*f1', '0', 'update', 1, 109),
(1531, 100, 'advance_settin', 'general*landing*based_on*jumpn*f1', '0', 'update', 1, 110),
(1532, 100, 'advance_settin', 'general*landing*based_on*jump1*f2', '1', 'update', 1, 209),
(1533, 100, 'advance_settin', 'general*landing*based_on*jumpn*f2', '1', 'update', 1, 210),
(1534, 100, 'advance_settin', 'general*landing*based_on*jump1*f3', '2', 'update', 1, 309),
(1535, 100, 'advance_settin', 'general*landing*based_on*jumpn*f3', '2', 'update', 1, 310),
(1536, 100, 'advance_settin', 'general*landing*based_on*cf3_delay', '30', 'update', 0, 38),
(1537, 100, 'advance_settin', 'general*landing*based_on*motor_speed', '40', 'update', 0, 54),
(1538, 100, 'advance_settin', 'general*landing*based_on*decceleration', '20', 'update', 0, 56),
(1539, 100, 'advance_settin', 'general*num_and_talk*sl-f19', '0', 'unknown', 1, 1905),
(1540, 100, 'advance_settin', 'general*num_and_talk*sl-f20', '0', 'unknown', 1, 2005),
(1541, 100, 'advance_settin', 'general*num_and_talk*sr-f19', '0', 'unknown', 1, 1906),
(1542, 100, 'advance_settin', 'general*num_and_talk*sr-f20', '0', 'unknown', 1, 2006),
(1543, 100, 'advance_settin', 'general*num_and_talk*talk-f19', '0', 'unknown', 1, 1907),
(1544, 100, 'advance_settin', 'general*num_and_talk*talk-f20', '0', 'unknown', 1, 2007),
(1545, 834, 'advance_settin', 'general*number_of_stop', '12', 'update', 0, 2),
(1546, 834, 'server', 'page_mqtt_enable', '1', 'unknown', 0, 0),
(1547, 834, 'advance_settin', 'general*service_type', '3', 'update', 0, 3),
(1548, 834, 'advance_settin', 'general*num_and_talk*sl-f1', '2', 'update', 1, 105),
(1549, 834, 'advance_settin', 'general*num_and_talk*sl-f2', '7', 'update', 1, 205),
(1550, 834, 'advance_settin', 'general*num_and_talk*sl-f3', '13', 'update', 1, 305),
(1551, 834, 'advance_settin', 'general*num_and_talk*sl-f4', '15', 'update', 1, 405),
(1552, 834, 'advance_settin', 'general*num_and_talk*sl-f5', '8', 'update', 1, 505),
(1553, 834, 'advance_settin', 'general*num_and_talk*sr-f1', '3', 'update', 1, 106),
(1554, 834, 'advance_settin', 'general*num_and_talk*sr-f2', '2', 'update', 1, 206),
(1555, 834, 'advance_settin', 'general*num_and_talk*sr-f3', '3', 'update', 1, 306),
(1556, 834, 'advance_settin', 'general*num_and_talk*sr-f4', '16', 'update', 1, 406),
(1557, 834, 'advance_settin', 'general*num_and_talk*sr-f5', '9', 'update', 1, 506),
(1558, 834, 'advance_settin', 'general*num_and_talk*talk-f1', '3', 'update', 1, 107),
(1559, 834, 'advance_settin', 'general*num_and_talk*talk-f2', '1', 'update', 1, 207),
(1560, 834, 'advance_settin', 'general*num_and_talk*talk-f3', '2', 'update', 1, 307),
(1561, 834, 'advance_settin', 'general*num_and_talk*talk-f4', '78', 'update', 1, 407),
(1562, 834, 'advance_settin', 'general*num_and_talk*talk-f5', '9', 'update', 1, 507),
(1563, 834, 'advance_settin', 'general*travel_time', '60', 'update', 0, 14),
(1564, 834, 'advance_settin', 'general*door*open_delay', '10', 'update', 0, 15),
(1565, 834, 'advance_settin', 'general*door*close_delay', '0', 'update', 0, 16),
(1566, 834, 'advance_settin', 'general*door*end_door_time', '3', 'update', 0, 17),
(1567, 834, 'advance_settin', 'general*door*close_time_out', '10', 'update', 0, 18),
(1568, 834, 'advance_settin', 'general*door*door_park', '0', 'update', 0, 19),
(1569, 834, 'advance_settin', 'general*door*debouncer_69', '5', 'update', 0, 20),
(1570, 834, 'advance_settin', 'general*door*debouncer_68', '5', 'update', 0, 21),
(1571, 834, 'advance_settin', 'general*door*open_time', '5', 'update', 0, 27),
(1572, 834, 'advance_settin', 'general*door*control_type', '0', 'update', 0, 4),
(1573, 834, 'advance_settin', 'general*door*number_of_door', '2', 'update', 0, 22),
(1574, 834, 'advance_settin', 'general*door*door_select*d1f1', '1', 'update', 1, 102),
(1575, 834, 'advance_settin', 'general*door*door_select*d2f1', '0', 'update', 1, 103),
(1576, 834, 'advance_settin', 'general*door*door_select*d3f1', '0', 'update', 1, 104),
(1577, 834, 'advance_settin', 'general*door*door_select*d1f2', '1', 'update', 1, 202),
(1578, 834, 'advance_settin', 'general*door*door_select*d2f2', '0', 'update', 1, 203),
(1579, 834, 'advance_settin', 'general*door*door_select*d3f2', '0', 'update', 1, 204),
(1580, 834, 'advance_settin', 'general*door*door_select*d1f3', '1', 'update', 1, 302),
(1581, 834, 'advance_settin', 'general*door*door_select*d2f3', '0', 'update', 1, 303),
(1582, 834, 'advance_settin', 'general*door*door_select*d3f3', '0', 'update', 1, 304),
(1583, 834, 'advance_settin', 'general*door*door_select*d1f4', '1', 'update', 1, 402),
(1584, 834, 'advance_settin', 'general*door*door_select*d2f4', '0', 'update', 1, 403),
(1585, 834, 'advance_settin', 'general*door*door_select*d3f4', '0', 'update', 1, 404),
(1586, 834, 'advance_settin', 'general*door*door_select*d1f5', '1', 'update', 1, 502),
(1587, 834, 'advance_settin', 'general*door*door_select*d2f5', '0', 'update', 1, 503),
(1588, 834, 'advance_settin', 'general*door*door_select*d3f5', '0', 'update', 1, 504),
(1589, 834, 'advance_settin', 'general*sound*music_volue', '7', 'update', 0, 23),
(1590, 834, 'advance_settin', 'general*sound*talk_volue', '8', 'update', 0, 24),
(1591, 834, 'advance_settin', 'general*sound*welcome_floor', '0', 'update', 0, 25),
(1592, 834, 'advance_settin', 'general*sound*gang_select', '2', 'update', 0, 26),
(1593, 834, 'advance_settin', 'general*floor*park_floor', '5', 'update', 0, 28),
(1594, 834, 'advance_settin', 'general*floor*time_to_park', '0', 'update', 0, 29),
(1595, 834, 'advance_settin', 'general*floor*fire_park', '0', 'update', 0, 30),
(1596, 834, 'advance_settin', 'general*floor*waiting_floor', '1', 'update', 0, 31),
(1597, 834, 'advance_settin', 'general*motor_safe*enable', '0', 'update', 0, 5),
(1598, 834, 'advance_settin', 'general*motor_safe*fast_over_c', '6', 'update', 0, 40),
(1599, 834, 'advance_settin', 'general*motor_safe*slow_over_c', '10', 'update', 0, 41),
(1600, 834, 'advance_settin', 'general*motor_safe*time_over_c', '0', 'update', 0, 42),
(1601, 834, 'advance_settin', 'general*hydrolic*start_slow_delay', '8', 'update', 0, 43),
(1602, 834, 'advance_settin', 'general*hydrolic*start_fast_delay', '6', 'update', 0, 44),
(1603, 834, 'advance_settin', 'general*hydrolic*start_to_delta', '0', 'update', 0, 45),
(1604, 834, 'advance_settin', 'general*hydrolic*motor_start_delay', '10', 'update', 0, 46),
(1605, 834, 'advance_settin', 'general*hydrolic*motor_stop_delay', '0', 'update', 0, 47),
(1606, 834, 'advance_settin', 'general*calibreation*direction', '0', 'update', 0, 6),
(1607, 834, 'advance_settin', 'general*calibreation*speed', '2', 'update', 0, 7),
(1608, 834, 'advance_settin', 'general*emergency*enable', '0', 'update', 0, 9),
(1609, 834, 'advance_settin', 'general*emergency*direction', '0', 'update', 0, 10),
(1610, 834, 'advance_settin', 'general*1cf_error*enable', '1', 'update', 0, 8),
(1611, 834, 'advance_settin', 'general*1cf_error*time_out', '50', 'update', 0, 39),
(1612, 834, 'advance_settin', 'general*landing*based_on*jump1speed*f1', '2', 'update', 1, 108),
(1613, 834, 'advance_settin', 'general*landing*based_on*jump1speed*f2', '2', 'update', 1, 208),
(1614, 834, 'advance_settin', 'general*landing*based_on*jump1speed*f3', '2', 'update', 1, 308),
(1615, 834, 'advance_settin', 'general*landing*based_on*jump1speed*f4', '2', 'update', 1, 408),
(1616, 834, 'advance_settin', 'general*landing*based_on*jump1speed*f5', '2', 'update', 1, 508),
(1617, 834, 'advance_settin', 'general*landing*based_on*jump1*f1', '2', 'update', 1, 109),
(1618, 834, 'advance_settin', 'general*landing*based_on*jumpn*f1', '3', 'update', 1, 110),
(1619, 834, 'advance_settin', 'general*landing*based_on*jump1*f2', '2', 'update', 1, 209),
(1620, 834, 'advance_settin', 'general*landing*based_on*jumpn*f2', '3', 'update', 1, 210),
(1621, 834, 'advance_settin', 'general*landing*based_on*jump1*f3', '2', 'update', 1, 309),
(1622, 834, 'advance_settin', 'general*landing*based_on*jumpn*f3', '3', 'update', 1, 310),
(1623, 834, 'advance_settin', 'general*landing*based_on*jump1*f4', '2', 'update', 1, 409),
(1624, 834, 'advance_settin', 'general*landing*based_on*jumpn*f4', '3', 'update', 1, 410),
(1625, 834, 'advance_settin', 'general*landing*based_on*jump1*f5', '2', 'update', 1, 509),
(1626, 834, 'advance_settin', 'general*landing*based_on*jumpn*f5', '3', 'update', 1, 510),
(1627, 834, 'advance_settin', 'general*landing*based_on*cf3_delay', '0', 'update', 0, 38),
(1628, 834, 'advance_settin', 'general*landing*based_on*acceleration', '0', 'update', 0, 55),
(1629, 834, 'advance_settin', 'general*landing*based_on*distance*f1', '0', 'update', 1, 111),
(1630, 834, 'advance_settin', 'general*landing*based_on*distance*f2', '0', 'update', 1, 211),
(1631, 834, 'advance_settin', 'general*landing*based_on*distance*f3', '0', 'update', 1, 311),
(1632, 834, 'advance_settin', 'general*landing*based_on*distance*f4', '0', 'update', 1, 411),
(1633, 834, 'advance_settin', 'general*landing*based_on*distance*f5', '0', 'update', 1, 511),
(1634, 10, 'advance_settin', 'general*number_of_stop', '11', 'update', 0, 2),
(1635, 10, 'server', 'page_mqtt_enable', '1', 'unknown', 0, 0),
(1636, 10, 'advance_settin', 'general*service_type', '0', 'update', 0, 3),
(1637, 10, 'advance_settin', 'general*num_and_talk*sl-f1', '0', 'update', 1, 105),
(1638, 10, 'advance_settin', 'general*num_and_talk*sl-f2', '0', 'update', 1, 205),
(1639, 10, 'advance_settin', 'general*num_and_talk*sl-f3', '0', 'update', 1, 305),
(1640, 10, 'advance_settin', 'general*num_and_talk*sl-f4', '0', 'update', 1, 405),
(1641, 10, 'advance_settin', 'general*num_and_talk*sl-f5', '0', 'update', 1, 505),
(1642, 10, 'advance_settin', 'general*num_and_talk*sl-f6', '0', 'update', 1, 605),
(1643, 10, 'advance_settin', 'general*num_and_talk*sl-f7', '0', 'update', 1, 705),
(1644, 10, 'advance_settin', 'general*num_and_talk*sl-f8', '0', 'update', 1, 805),
(1645, 10, 'advance_settin', 'general*num_and_talk*sr-f1', '11', 'update', 1, 106),
(1646, 10, 'advance_settin', 'general*num_and_talk*sr-f2', '2', 'update', 1, 206),
(1647, 10, 'advance_settin', 'general*num_and_talk*sr-f3', '3', 'update', 1, 306),
(1648, 10, 'advance_settin', 'general*num_and_talk*sr-f4', '4', 'update', 1, 406),
(1649, 10, 'advance_settin', 'general*num_and_talk*sr-f5', '5', 'update', 1, 506),
(1650, 10, 'advance_settin', 'general*num_and_talk*sr-f6', '6', 'update', 1, 606),
(1651, 10, 'advance_settin', 'general*num_and_talk*sr-f7', '7', 'update', 1, 706),
(1652, 10, 'advance_settin', 'general*num_and_talk*sr-f8', '8', 'update', 1, 806),
(1653, 10, 'advance_settin', 'general*num_and_talk*talk-f1', '25', 'update', 1, 107),
(1654, 10, 'advance_settin', 'general*num_and_talk*talk-f2', '1', 'update', 1, 207),
(1655, 10, 'advance_settin', 'general*num_and_talk*talk-f3', '2', 'update', 1, 307),
(1656, 10, 'advance_settin', 'general*num_and_talk*talk-f4', '3', 'update', 1, 407),
(1657, 10, 'advance_settin', 'general*num_and_talk*talk-f5', '4', 'update', 1, 507),
(1658, 10, 'advance_settin', 'general*num_and_talk*talk-f6', '5', 'update', 1, 607),
(1659, 10, 'advance_settin', 'general*num_and_talk*talk-f7', '6', 'update', 1, 707),
(1660, 10, 'advance_settin', 'general*num_and_talk*talk-f8', '7', 'update', 1, 807),
(1661, 10, 'advance_settin', 'general*travel_time', '200', 'update', 0, 14),
(1662, 10, 'advance_settin', 'general*door*open_delay', '5', 'update', 0, 15),
(1663, 10, 'advance_settin', 'general*door*close_delay', '6', 'update', 0, 16),
(1664, 10, 'advance_settin', 'general*door*end_door_time', '3', 'update', 0, 17),
(1665, 10, 'advance_settin', 'general*door*close_time_out', '5', 'update', 0, 18),
(1666, 10, 'advance_settin', 'general*door*door_park', '0', 'update', 0, 19),
(1667, 10, 'advance_settin', 'general*door*debouncer_69', '5', 'update', 0, 20),
(1668, 10, 'advance_settin', 'general*door*debouncer_68', '5', 'update', 0, 21),
(1669, 10, 'advance_settin', 'general*door*open_time', '5', 'update', 0, 27),
(1670, 10, 'advance_settin', 'general*door*control_type', '0', 'update', 0, 4),
(1671, 10, 'advance_settin', 'general*door*number_of_door', '1', 'update', 0, 22),
(1672, 10, 'advance_settin', 'general*door*door_select*d1f1', '1', 'update', 1, 102),
(1673, 10, 'advance_settin', 'general*door*door_select*d2f1', '0', 'update', 1, 103),
(1674, 10, 'advance_settin', 'general*door*door_select*d3f1', '0', 'update', 1, 104),
(1675, 10, 'advance_settin', 'general*door*door_select*d1f2', '1', 'update', 1, 202),
(1676, 10, 'advance_settin', 'general*door*door_select*d2f2', '1', 'update', 1, 203),
(1677, 10, 'advance_settin', 'general*door*door_select*d3f2', '0', 'update', 1, 204),
(1678, 10, 'advance_settin', 'general*door*door_select*d1f3', '1', 'update', 1, 302),
(1679, 10, 'advance_settin', 'general*door*door_select*d2f3', '0', 'update', 1, 303),
(1680, 10, 'advance_settin', 'general*door*door_select*d3f3', '0', 'update', 1, 304),
(1681, 10, 'advance_settin', 'general*door*door_select*d1f4', '1', 'update', 1, 402),
(1682, 10, 'advance_settin', 'general*door*door_select*d2f4', '1', 'update', 1, 403),
(1683, 10, 'advance_settin', 'general*door*door_select*d3f4', '0', 'update', 1, 404),
(1684, 10, 'advance_settin', 'general*door*door_select*d1f5', '1', 'update', 1, 502),
(1685, 10, 'advance_settin', 'general*door*door_select*d2f5', '1', 'update', 1, 503),
(1686, 10, 'advance_settin', 'general*door*door_select*d3f5', '0', 'update', 1, 504),
(1687, 10, 'advance_settin', 'general*door*door_select*d1f6', '1', 'update', 1, 602),
(1688, 10, 'advance_settin', 'general*door*door_select*d2f6', '1', 'update', 1, 603),
(1689, 10, 'advance_settin', 'general*door*door_select*d3f6', '0', 'update', 1, 604),
(1690, 10, 'advance_settin', 'general*door*door_select*d1f7', '1', 'update', 1, 702),
(1691, 10, 'advance_settin', 'general*door*door_select*d2f7', '1', 'update', 1, 703),
(1692, 10, 'advance_settin', 'general*door*door_select*d3f7', '0', 'update', 1, 704),
(1693, 10, 'advance_settin', 'general*door*door_select*d1f8', '1', 'update', 1, 802),
(1694, 10, 'advance_settin', 'general*door*door_select*d2f8', '1', 'update', 1, 803),
(1695, 10, 'advance_settin', 'general*door*door_select*d3f8', '0', 'update', 1, 804),
(1696, 10, 'advance_settin', 'general*floor*park_floor', '0', 'update', 0, 28),
(1697, 10, 'advance_settin', 'general*floor*time_to_park', '0', 'update', 0, 29),
(1698, 10, 'advance_settin', 'general*floor*fire_park', '0', 'update', 0, 30),
(1699, 10, 'advance_settin', 'general*floor*waiting_floor', '1', 'update', 0, 31),
(1700, 10, 'advance_settin', 'general*calibreation*direction', '0', 'update', 0, 6),
(1701, 10, 'advance_settin', 'general*calibreation*speed', '2', 'update', 0, 7),
(1702, 10, 'advance_settin', 'general*emergency*enable', '1', 'update', 0, 9),
(1703, 10, 'advance_settin', 'general*emergency*direction', '1', 'update', 0, 10),
(1704, 10, 'advance_settin', 'general*1cf_error*enable', '1', 'update', 0, 8),
(1705, 10, 'advance_settin', 'general*1cf_error*time_out', '16', 'update', 0, 39),
(1706, 10, 'advance_settin', 'general*sound*music_volue', '20', 'update', 0, 23),
(1707, 10, 'advance_settin', 'general*sound*talk_volue', '9', 'update', 0, 24),
(1708, 10, 'advance_settin', 'general*sound*welcome_floor', '0', 'update', 0, 25),
(1709, 10, 'advance_settin', 'general*sound*gang_select', '2', 'update', 0, 26),
(1710, 10, 'advance_settin', 'general*motor_safe*enable', '0', 'update', 0, 5),
(1711, 10, 'advance_settin', 'general*motor_safe*fast_over_c', '6', 'update', 0, 40),
(1712, 10, 'advance_settin', 'general*motor_safe*slow_over_c', '10', 'update', 0, 41),
(1713, 10, 'advance_settin', 'general*motor_safe*time_over_c', '0', 'update', 0, 42),
(1714, 10, 'advance_settin', 'general*num_and_talk*sl-f9', '0', 'update', 1, 905),
(1715, 10, 'advance_settin', 'general*num_and_talk*sl-f10', '0', 'update', 1, 1005),
(1716, 10, 'advance_settin', 'general*num_and_talk*sl-f11', '2', 'update', 1, 1105),
(1717, 10, 'advance_settin', 'general*num_and_talk*sr-f9', '9', 'update', 1, 906),
(1718, 10, 'advance_settin', 'general*num_and_talk*sr-f10', '10', 'update', 1, 1006),
(1719, 10, 'advance_settin', 'general*num_and_talk*sr-f11', '1', 'update', 1, 1106),
(1720, 10, 'advance_settin', 'general*num_and_talk*talk-f9', '8', 'update', 1, 907),
(1721, 10, 'advance_settin', 'general*num_and_talk*talk-f10', '9', 'update', 1, 1007),
(1722, 10, 'advance_settin', 'general*num_and_talk*talk-f11', '10', 'update', 1, 1107),
(1723, 834, 'advance_settin', 'general*num_and_talk*sl-f6', '0', 'update', 1, 605),
(1724, 834, 'advance_settin', 'general*num_and_talk*sr-f6', '6', 'update', 1, 606),
(1725, 834, 'advance_settin', 'general*num_and_talk*talk-f6', '5', 'update', 1, 607),
(1726, 10, 'advance_settin', 'general*num_and_talk*sl-f12', '2', 'update', 1, 1205),
(1727, 10, 'advance_settin', 'general*num_and_talk*sr-f12', '2', 'update', 1, 1206),
(1728, 10, 'advance_settin', 'general*num_and_talk*talk-f12', '11', 'update', 1, 1207),
(1729, 834, 'advance_settin', 'general*num_and_talk*sl-f7', '0', 'update', 1, 705),
(1730, 834, 'advance_settin', 'general*num_and_talk*sl-f8', '0', 'update', 1, 805),
(1731, 834, 'advance_settin', 'general*num_and_talk*sr-f7', '7', 'update', 1, 706),
(1732, 834, 'advance_settin', 'general*num_and_talk*sr-f8', '8', 'update', 1, 806),
(1733, 834, 'advance_settin', 'general*num_and_talk*talk-f7', '6', 'update', 1, 707),
(1734, 834, 'advance_settin', 'general*num_and_talk*talk-f8', '7', 'update', 1, 807),
(1735, 834, 'advance_settin', 'general*door*door_select*d1f6', '1', 'update', 1, 602),
(1736, 834, 'advance_settin', 'general*door*door_select*d2f6', '0', 'update', 1, 603),
(1737, 834, 'advance_settin', 'general*door*door_select*d3f6', '0', 'update', 1, 604),
(1738, 834, 'advance_settin', 'general*door*door_select*d1f7', '1', 'update', 1, 702),
(1739, 834, 'advance_settin', 'general*door*door_select*d2f7', '0', 'update', 1, 703),
(1740, 834, 'advance_settin', 'general*door*door_select*d3f7', '0', 'update', 1, 704),
(1741, 834, 'advance_settin', 'general*door*door_select*d1f8', '1', 'update', 1, 802),
(1742, 834, 'advance_settin', 'general*door*door_select*d2f8', '0', 'update', 1, 803),
(1743, 834, 'advance_settin', 'general*door*door_select*d3f8', '0', 'update', 1, 804),
(1744, 834, 'advance_settin', 'general*landing*based_on*jump1*f6', '2', 'update', 1, 609),
(1745, 834, 'advance_settin', 'general*landing*based_on*jumpn*f6', '3', 'update', 1, 610),
(1746, 834, 'advance_settin', 'general*landing*based_on*jump1*f7', '2', 'update', 1, 709),
(1747, 834, 'advance_settin', 'general*landing*based_on*jumpn*f7', '3', 'update', 1, 710),
(1748, 834, 'advance_settin', 'general*landing*based_on*jump1*f8', '2', 'update', 1, 809),
(1749, 834, 'advance_settin', 'general*landing*based_on*jumpn*f8', '3', 'update', 1, 810),
(1750, 10, 'advance_settin', 'general*door*door_select*d1f9', '1', 'update', 1, 902),
(1751, 10, 'advance_settin', 'general*door*door_select*d2f9', '0', 'update', 1, 903),
(1752, 10, 'advance_settin', 'general*door*door_select*d3f9', '0', 'update', 1, 904),
(1753, 10, 'advance_settin', 'general*door*door_select*d1f10', '1', 'update', 1, 1002),
(1754, 10, 'advance_settin', 'general*door*door_select*d2f10', '0', 'update', 1, 1003),
(1755, 10, 'advance_settin', 'general*door*door_select*d3f10', '0', 'update', 1, 1004),
(1756, 10, 'advance_settin', 'general*door*door_select*d1f11', '1', 'update', 1, 1102),
(1757, 10, 'advance_settin', 'general*door*door_select*d2f11', '0', 'update', 1, 1103),
(1758, 10, 'advance_settin', 'general*door*door_select*d3f11', '0', 'update', 1, 1104),
(1759, 10, 'advance_settin', 'general*door*door_select*d1f12', '1', 'update', 1, 1202),
(1760, 10, 'advance_settin', 'general*door*door_select*d2f12', '0', 'update', 1, 1203),
(1761, 10, 'advance_settin', 'general*door*door_select*d3f12', '0', 'update', 1, 1204),
(1762, 834, 'advance_settin', 'general*num_and_talk*sl-f9', '0', 'unknown', 1, 905),
(1763, 834, 'advance_settin', 'general*num_and_talk*sl-f10', '0', 'unknown', 1, 1005),
(1764, 834, 'advance_settin', 'general*num_and_talk*sl-f11', '0', 'unknown', 1, 1105),
(1765, 834, 'advance_settin', 'general*num_and_talk*sl-f12', '0', 'unknown', 1, 1205),
(1766, 834, 'advance_settin', 'general*num_and_talk*sr-f9', '9', 'update', 1, 906),
(1767, 834, 'advance_settin', 'general*num_and_talk*sr-f10', '10', 'update', 1, 1006),
(1768, 834, 'advance_settin', 'general*num_and_talk*sr-f11', '1', 'update', 1, 1106),
(1769, 834, 'advance_settin', 'general*num_and_talk*sr-f12', '2', 'update', 1, 1206),
(1770, 834, 'advance_settin', 'general*num_and_talk*talk-f9', '0', 'unknown', 1, 907),
(1771, 834, 'advance_settin', 'general*num_and_talk*talk-f10', '0', 'unknown', 1, 1007),
(1772, 834, 'advance_settin', 'general*num_and_talk*talk-f11', '0', 'unknown', 1, 1107),
(1773, 834, 'advance_settin', 'general*num_and_talk*talk-f12', '0', 'unknown', 1, 1207),
(1774, 834, 'advance_settin', 'general*landing*based_on*jump1*f9', '0', 'unknown', 1, 909),
(1775, 834, 'advance_settin', 'general*landing*based_on*jumpn*f9', '3', 'unknown', 1, 910),
(1776, 834, 'advance_settin', 'general*landing*based_on*jump1*f10', '0', 'unknown', 1, 1009),
(1777, 834, 'advance_settin', 'general*landing*based_on*jumpn*f10', '3', 'unknown', 1, 1010),
(1778, 834, 'advance_settin', 'general*landing*based_on*jump1*f11', '0', 'unknown', 1, 1109),
(1779, 834, 'advance_settin', 'general*landing*based_on*jumpn*f11', '3', 'unknown', 1, 1110),
(1780, 834, 'advance_settin', 'general*landing*based_on*jump1*f12', '0', 'unknown', 1, 1209),
(1781, 834, 'advance_settin', 'general*landing*based_on*jumpn*f12', '3', 'unknown', 1, 1210),
(1782, 834, 'advance_settin', 'general*landing*based_on*decceleration', '0', 'update', 0, 56),
(1783, 834, 'advance_settin', 'general*door*door_select*d1f9', '0', 'unknown', 1, 902),
(1784, 834, 'advance_settin', 'general*door*door_select*d2f9', '0', 'update', 1, 903),
(1785, 834, 'advance_settin', 'general*door*door_select*d3f9', '0', 'unknown', 1, 904),
(1786, 834, 'advance_settin', 'general*door*door_select*d1f10', '0', 'unknown', 1, 1002),
(1787, 834, 'advance_settin', 'general*door*door_select*d2f10', '0', 'update', 1, 1003),
(1788, 834, 'advance_settin', 'general*door*door_select*d3f10', '0', 'unknown', 1, 1004),
(1789, 834, 'advance_settin', 'general*door*door_select*d1f11', '0', 'unknown', 1, 1102),
(1790, 834, 'advance_settin', 'general*door*door_select*d2f11', '0', 'update', 1, 1103),
(1791, 834, 'advance_settin', 'general*door*door_select*d3f11', '0', 'unknown', 1, 1104),
(1792, 834, 'advance_settin', 'general*door*door_select*d1f12', '0', 'unknown', 1, 1202),
(1793, 834, 'advance_settin', 'general*door*door_select*d2f12', '0', 'update', 1, 1203),
(1794, 834, 'advance_settin', 'general*door*door_select*d3f12', '0', 'unknown', 1, 1204),
(1795, 123, 'advance_settin', 'general*number_of_stop', '11', 'update', 0, 2),
(1796, 123, 'server', 'page_mqtt_enable', '1', 'unknown', 0, 0),
(1797, 123, 'advance_settin', 'general*1cf_error*enable', '0', 'update', 0, 8),
(1798, 123, 'advance_settin', 'general*1cf_error*time_out', '0', 'update', 0, 39);

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
(632, 10, 'last_gsm_connection', '2025/03/17', '13:04:43'),
(633, 834, 'user_enable_change', '2025/03/15', '15:48:54'),
(634, 834, 'last_en_user', '2025/03/15', '15:37:13'),
(635, 834, 'last_gsm_connection', '2025/03/17', '12:59:48'),
(636, 834, 'last_en_user', '2025/03/15', '15:42:36'),
(637, 10, 'user_enable_change', '2025/03/15', '15:49:59'),
(638, 10, 'last_en_user', '2025/03/15', '15:44:15'),
(639, 834, 'last_en_user', '2025/03/15', '15:47:42'),
(640, 10, 'last_en_user', '2025/03/15', '15:49:28');

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
(10, '0', '0', 'new', 10),
(123, '0', '0', 'new', 123),
(834, '0', '0', 'new', 834);

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
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1799;

--
-- AUTO_INCREMENT for table `date_time`
--
ALTER TABLE `date_time`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=641;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
