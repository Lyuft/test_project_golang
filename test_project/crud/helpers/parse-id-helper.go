package helpers

import (
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// ParseIDHelper функция для парсинга ID из URL параметра
// Функция предназначена для сокращения дублирующего кода
// @params - ctx *gin.Context - контекст Gin запроса, содержит параметр "id"
// @returns - uint - распарсенный числовой ID
// @returns - bool - true при успешном парсинге, false при ошибке
// @example - /api/items/123 -> 123, true
// @error - при невалидном ID отправляет HTTP 400 Bad Request
func ParseIDHelper(ctx *gin.Context) (uint, bool) {
	id, err := strconv.ParseUint(ctx.Param("id"), 10, 32)

	if err != nil {
		ErrorRequestHelper(ctx, http.StatusBadRequest, nil, "Invalid id format")
		return 0, false
	}

	return uint(id), true
}
