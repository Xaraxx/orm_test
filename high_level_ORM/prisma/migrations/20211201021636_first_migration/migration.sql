-- CreateTable
CREATE TABLE `dish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `veg` BOOLEAN NOT NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `dish_veg_IDX`(`veg`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ingredient` (
    `dish_id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_id` INTEGER NOT NULL,
    `quantity` FLOAT NULL DEFAULT 1,
    `unit` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `dish_id`(`dish_id`),
    PRIMARY KEY (`dish_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(64) NOT NULL,
    `type` ENUM('meat', 'veg', 'spice', 'dairy', 'oil') NULL,

    UNIQUE INDEX `id`(`id`),
    INDEX `item_type_IDX`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
