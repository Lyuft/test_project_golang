package main

import (
	"html/template"
	"log"
	"path/filepath"
	"test_project/config"
	"test_project/controller"
	"test_project/repository"
	"test_project/service"
	"test_project/webHandlers"

	"github.com/gin-gonic/gin"
)

func main() {

	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Failed to connect to DB:", err)
	}
	defer db.Close()

	userRepo := repository.NewUserRepository(db)
	userService := service.NewUserService(userRepo)

	tmpl, err := template.ParseGlob(filepath.Join("templates", "*.html"))
	if err != nil {
		log.Fatal("template parse error:", err)
	}

	webHandler := webHandlers.NewWebHandler(userService, tmpl)

	router := gin.Default()

	controller.SetupRoutes(router, webHandler)

	log.Println("Server starting on http://localhost:8080")
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to run server:", err)
	}
}
