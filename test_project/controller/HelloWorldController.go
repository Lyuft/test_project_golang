package controller

import (
	"test_project/webHandlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, webHandler *webHandlers.WebHandler) {

	// Веб-интерфейс
	r.GET("/", webHandler.Index)
	r.POST("/add-user", webHandler.CreateUser)
}
