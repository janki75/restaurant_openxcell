-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 06, 2021 at 11:11 AM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restaurantdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `cuisine_tbl`
--

DROP TABLE IF EXISTS `cuisine_tbl`;
CREATE TABLE IF NOT EXISTS `cuisine_tbl` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_name` varchar(100) NOT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cuisine_tbl`
--

INSERT INTO `cuisine_tbl` (`c_id`, `c_name`) VALUES
(1, 'italian'),
(2, 'maxican'),
(3, 'thai'),
(4, 'chinese'),
(5, 'south indian');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
CREATE TABLE IF NOT EXISTS `restaurant` (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `r_name` varchar(50) NOT NULL,
  `r_city` varchar(25) NOT NULL,
  `r_area` varchar(30) NOT NULL,
  `r_contactno` varchar(100) NOT NULL,
  `r_start_time` time NOT NULL,
  `r_end_time` time NOT NULL,
  `r_img` varchar(200) NOT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`r_id`, `r_name`, `r_city`, `r_area`, `r_contactno`, `r_start_time`, `r_end_time`, `r_img`) VALUES
(1, 'la pinoz', 'baroda', 'paldi', '8786565754', '10:00:00', '22:00:00', 'pizza.jpg'),
(2, 'la pinoz', 'surat', 'jawaharchowk', '8976767676', '10:00:00', '22:00:00', 'pizza1.jpeg'),
(3, 'honest', 'ahmedabad', 'maninagar', '8976767676', '08:00:00', '23:00:00', 'dosa1.jpeg'),
(4, 'abhilasha', 'ahmedabad', 'naranpura', '8787889812', '11:00:00', '23:00:00', '1.jpeg'),
(10, 'italiano', 'surat', 'navarangpura', '9898687687', '17:00:00', '23:00:00', 'p1.jpeg'),
(13, 'sbr social', 'ahmedabad', 'sindhubhavan', '8786576561', '23:00:00', '12:00:00', 'image-1609924726596.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `res_cuisine_tbl`
--

DROP TABLE IF EXISTS `res_cuisine_tbl`;
CREATE TABLE IF NOT EXISTS `res_cuisine_tbl` (
  `r_c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_id` int(11) NOT NULL,
  `res_id` int(11) NOT NULL,
  PRIMARY KEY (`r_c_id`),
  KEY `c_id` (`c_id`,`res_id`),
  KEY `res_id` (`res_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `res_cuisine_tbl`
--

INSERT INTO `res_cuisine_tbl` (`r_c_id`, `c_id`, `res_id`) VALUES
(1, 1, 1),
(5, 1, 4),
(9, 1, 13),
(2, 2, 1),
(6, 2, 4),
(3, 3, 2),
(4, 3, 3),
(12, 3, 13),
(10, 5, 3),
(7, 5, 10),
(8, 5, 10),
(11, 5, 13);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `res_cuisine_tbl`
--
ALTER TABLE `res_cuisine_tbl`
  ADD CONSTRAINT `res_cuisine_tbl_ibfk_1` FOREIGN KEY (`res_id`) REFERENCES `restaurant` (`r_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `res_cuisine_tbl_ibfk_2` FOREIGN KEY (`c_id`) REFERENCES `cuisine_tbl` (`c_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
