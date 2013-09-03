-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 03, 2013 at 01:26 AM
-- Server version: 5.5.29
-- PHP Version: 5.4.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db49224_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color-profile` tinytext NOT NULL,
  `header` varchar(64) NOT NULL,
  `background` varchar(256) NOT NULL,
  `intro-text` text NOT NULL,
  `main-text` text NOT NULL,
  `video` varchar(512) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `color-profile`, `header`, `background`, `intro-text`, `main-text`, `video`) VALUES
(1, 'dark', 'Biohazard', 'img/interactieve-installatie.png', 'Deze schoolopdracht is voor mij een mijlpaal geweest, na deze opdracht heb ik de keuze gemaakt om echt te leren programmeren.', 'Een leuk project dat veel verschillende vaardigheden verreiste. Ik heb hierin veel controle gehad over het visuele thema, de interactie en de technische uitvoering. Deze interactieve installatie is voor mij het eerste project waarin ik grote invloed heb gehad op het proces van a tot z', '<iframe src="http://player.vimeo.com/video/33877848" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'),
(2, 'light', 'serious gaming', 'img/serious_game.png', 'Een leuke platformer gericht op het analyseren van verschillende haarsoorten. En mijn eerste kijk naar game-design en game-programming.', 'Een behoorlijke vuurdoop voor een 5 mans groep. Het Ontwerpen, vormgeven, programmeren en testen van een game. Binnen 8 weken stond er een volledige platformer die het spelen absoluut waard is. Dankzij minimale technische kennis ook nog eens door 3 programmeurs geschreven in 1 actionscript3 class zonder versiebeheer systeem. oftewel een groot blok doorzettingsvermogen en passie. ', '');

