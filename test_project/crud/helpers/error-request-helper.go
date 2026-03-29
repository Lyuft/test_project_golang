package helpers

import (
	"net/http"
	"test_project/crud/models/api"
	"time"

	"github.com/gin-gonic/gin"
)

// ErrorRequestHelper функция для отправки унифицированной ошибки клиенту
// Функция предназначена для сокращения дублирующего кода
// @params - ctx *gin.Context - контекст запроса Gin
// @params - statusCode int - HTTP статус код ошибки
// @params - err error - оригинальная ошибка Go
// @params - customMessage ...string - опциональное пользовательское сообщение
// @format - возвращает JSON с полями: status_code, status_text, success, error, timestamp
func ErrorRequestHelper(ctx *gin.Context, statusCode int, err error, customMessage ...string) {
	resp := api.ResponseModel[any]{
		StatusCode: statusCode,
		StatusText: http.StatusText(statusCode),
		Success:    false,
		Timestamp:  time.Now().UTC().Format(time.RFC3339),
	}

	if len(customMessage) > 0 && customMessage[0] != "" {
		resp.Error = customMessage[0]
	} else if err != nil {
		resp.Error = err.Error()
	}

	ctx.JSON(statusCode, resp)
}
