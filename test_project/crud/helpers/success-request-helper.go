package helpers

import (
	"net/http"
	"test_project/crud/models/api"
	"time"

	"github.com/gin-gonic/gin"
)

// SuccessRequestHelper - функция для отправки унифицированного успешного ответа клиенту
// Функция предназначена для сокращения дублирующего кода
// @params - ctx *gin.Context - контекст запроса Gin
// @params - statusCode int - HTTP статус код (200, 201, 204 и т.д.)
// @params - message string - сообщение об успехе
// @params - data ...T - опциональные данные ответа (дженерик позволит переиспользоваться на проекте)
// @example - SuccessRequestHelper(c, 200, "Item created", item)
func SuccessRequestHelper[T any](ctx *gin.Context, statusCode int, message string, data ...T) {
	resp := api.ResponseModel[T]{
		StatusCode: statusCode,
		Message:    message,
		Success:    true,
		StatusText: http.StatusText(statusCode),
		Timestamp:  time.Now().Format(time.RFC3339),
	}

	if len(data) > 0 {
		resp.Data = data[0]
	}

	ctx.JSON(statusCode, resp)
}
