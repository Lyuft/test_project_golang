package main

import (
	"html/template"
	"log"
	"path/filepath"
	"test_project/config"
	"test_project/controller"
	"test_project/webHandlers"

	"github.com/gin-gonic/gin"
)

func main() {

	// Создаём роутер Gin
	router := gin.Default()

	tmpl, err := template.ParseGlob(filepath.Join("templates", "*.html"))
	if err != nil {
		log.Fatal("template parse error", err)
	}

	webHandler := webHandlers.NewWebHandler(tmpl)

	controller.SetupRoutes(router, webHandler)
	// Подключаемся к БД
	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Failed to connect to DB:", err)
	}
	defer db.Close() // закрываем соединение при завершении приложения

	// Запускаем сервер
	if err := router.Run(":8080"); err != nil {
		log.Fatal("Failed to run server:", err)
	}
}
