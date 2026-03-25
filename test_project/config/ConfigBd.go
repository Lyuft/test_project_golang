package config

import (
	"database/sql"
	"fmt"
	"os"

	_ "github.com/jackc/pgx/v5/stdlib"
	"github.com/joho/godotenv"
)

func NewDB() (*sql.DB, error) {
	// загруска .env файла
	if err := godotenv.Load(".env"); err != nil {
		return nil, fmt.Errorf("error loading .env file: %w", err)
	}
	// формируем строку подключения
	connStr := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
		os.Getenv("DB_HOST"), os.Getenv("DB_PORT"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"))
	// подключаемся к бд
	db, err := sql.Open("pgx", connStr)
	if err != nil {
		return nil, fmt.Errorf("error connecting to database: %w", err)
	}
	// проверяем соединение с бд
	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("error pinging database: %w", err)
	}

	return db, nil
}
