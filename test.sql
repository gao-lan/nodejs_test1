CREATE TABLE `t_user` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `nickname` varchar(20) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `tel` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'admin', 'admin', 'ϵͳ����Ա', '11', '��', '11111111111');
INSERT INTO `t_user` VALUES ('2', 'gaolan', 'gaolan', '����Ա', '22', 'Ů', '22222222222');