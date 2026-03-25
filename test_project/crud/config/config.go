package config

import (
	"log"
	"os"
	"test_project/crud/config/models"

	"github.com/joho/godotenv"
)

func Сonfig() models.ConfigModel {
	err := godotenv.Load()

	if err != nil {
		log.Printf("Error loading .env file")
	}

	return models.ConfigModel{
		DBHost:     getEnv("DB_HOST", "127.0.0.1"),
		DBPort:     getEnv("DB_PORT", "5432"),
		DBUser:     getEnv("DB_USER", "postgres"),
		DBName:     getEnv("DB_NAME", "test_bd"),
		DBPassword: getEnv("DB_PASSWORD", "123"),
		ServerPort: getEnv("SERVER_PORT", "8080"),
	}
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}

	return fallback
}
