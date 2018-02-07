# Dump of table countries
# ------------------------------------------------------------

DROP TABLE IF EXISTS `countries`;

CREATE TABLE `countries` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `country` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;

INSERT INTO `countries` (`id`, `country`, `created_at`, `deleted_at`)
VALUES
	(1,'Germany','2017-12-01 11:45:12',NULL),
	(2,'Netherlands','2017-12-01 11:45:13',NULL),
	(3,'United Kingdom','2017-12-01 11:45:14',NULL);

/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table deliverymoments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `deliverymoments`;

CREATE TABLE `deliverymoments` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `country_id` tinyint(11) NOT NULL,
  `weekday` tinyint(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `deliverymoments` WRITE;
/*!40000 ALTER TABLE `deliverymoments` DISABLE KEYS */;

INSERT INTO `deliverymoments` (`id`, `country_id`, `weekday`, `created_at`, `deleted_at`)
VALUES
	(1,1,2,'2017-12-01 11:45:12',NULL),
	(2,1,4,'2017-12-01 11:45:12',NULL),
	(3,2,3,'2017-12-01 11:45:12',NULL),
	(4,2,5,'2017-12-01 11:45:12',NULL),
	(5,3,4,'2017-12-01 11:45:12',NULL),
	(6,3,5,'2017-12-01 11:45:12',NULL);

/*!40000 ALTER TABLE `deliverymoments` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table subscriptions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `subscriptions`;

CREATE TABLE `subscriptions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `deliverymoment_id` int(11) unsigned NOT NULL,
  `frequency` int(11) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `country_id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
