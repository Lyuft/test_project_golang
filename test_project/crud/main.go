package main

import (
	"log"
	"test_project/crud/handler"
	"test_project/crud/router"
	"test_project/crud/service"

	"test_project/crud/config"
	"test_project/crud/database"
	"test_project/crud/repository"
)

func main() {
	cfg := config.Сonfig()

	db, err := database.CreatePostgres(
		cfg.DBHost,
		cfg.DBPort,
		cfg.DBUser,
		cfg.DBPassword,
		cfg.DBName,
	)

	if err != nil {
		log.Fatal("Failed to connect database", err)
	}

	defer func(db *database.PostgresDB) {
		if err := db.Close(); err != nil {
			log.Fatal("Failed to close database:", err)
		}
	}(db)

	log.Println("Database connected")

	itemRepo := repository.FabricItemRepository(db.DB)
	itemService := service.FabricItemService(itemRepo)
	itemHandler := handler.FabricItemHandler(itemService)

	route := router.SetupRouter(itemHandler)

	log.Printf("Server starting on port %s", cfg.ServerPort)
	if err := route.Run(":" + cfg.ServerPort); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
