package router

import (
	"test_project/crud/handler"
	"test_project/crud/middleware"
	"time"

	"github.com/gin-gonic/gin"
)

func SetupRouter(itemHandler *handler.ItemHandler) *gin.Engine {
	router := gin.Default()

	router.Use(middleware.CORSMiddleware())

	api := router.Group("/api")
	{
		items := api.Group("/items")
		{
			items.GET("/:id", itemHandler.GetByID)
			items.GET("", itemHandler.GetAll)
			items.POST("", itemHandler.Create)
			items.PUT("/:id", itemHandler.Update)
			items.DELETE("/:id", itemHandler.Delete)
		}
	}

	router.GET("/health", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"status": "ok",
			"time":   time.Now().Format(time.RFC3339),
		})
	})

	return router
}
