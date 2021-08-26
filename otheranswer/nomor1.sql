SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `ID` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `UserName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `Parent` bigint UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Ali', 2);
INSERT INTO `users` VALUES (2, 'Budi', 0);
INSERT INTO `users` VALUES (3, 'Cecep', 1);

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Run Query Soal Nomor 1
-- ----------------------------
SELECT
	A.ID AS ID,
	A.UserName AS UserName,
	B.UserName AS ParentUserName 
FROM
	users A
	LEFT JOIN users B ON B.ID = A.Parent 
ORDER BY
	A.ID