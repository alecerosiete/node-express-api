"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const items_1 = require("../controllers/items");
const log_1 = require("../middleware/log");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http:/localhost:3002/items [GET]
 */
router.get('/', items_1.getItems);
router.get('/:id', log_1.logMiddleware, items_1.getItem);
router.post('/', items_1.postItem);
router.put('/:id', items_1.updateItem);
router.delete('/:id', items_1.deleteItem);
