package controller

import (
	"test_project/webHandlers"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(r *gin.Engine, webHandler *webHandlers.WebHandler) {
	r.GET("/", webHandler.Index)
	r.POST("/api/users", webHandler.AddUser)
	r.GET("/api/users/list", webHandler.GetUsers)
	r.GET("/api/users/:id", webHandler.GetUserId)
	r.DELETE("/api/users/:id", webHandler.DeleteUser)
	r.PUT("/api/users/:id", webHandler.UpdateUser)

}
