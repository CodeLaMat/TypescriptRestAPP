"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.SuccessMessages = void 0;
var SuccessMessages;
(function (SuccessMessages) {
    SuccessMessages["CREATE_TODO"] = "Todo created successfully";
    SuccessMessages["UPDATE_TODO"] = "Todo updated successfully";
    SuccessMessages["REMOVE_TODO"] = "Todo is successfully removed from the list ";
})(SuccessMessages = exports.SuccessMessages || (exports.SuccessMessages = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["UPDATED_ERROR"] = "Could not find the todo";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
