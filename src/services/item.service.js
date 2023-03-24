"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCar = exports.getCar = exports.getCars = exports.insertCar = void 0;
const items_model_1 = __importDefault(require("../models/items.model"));
const insertCar = (item) => __awaiter(void 0, void 0, void 0, function* () {
    const responseInsert = yield items_model_1.default.create(item);
    return responseInsert;
});
exports.insertCar = insertCar;
const getCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_model_1.default.find({});
    return responseItem;
});
exports.getCars = getCars;
const getCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let responseItem = null;
    try {
        responseItem = yield items_model_1.default.findById(id);
    }
    catch (e) {
        responseItem = { "status": "ERROR", "message": "Argument is not valid" };
    }
    return responseItem;
});
exports.getCar = getCar;
const updateCar = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_model_1.default.findByIdAndUpdate(id, data, { new: true });
    return responseItem;
});
exports.updateCar = updateCar;
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const responseItem = yield items_model_1.default.findByIdAndDelete(id);
    return responseItem;
});
exports.deleteCar = deleteCar;
