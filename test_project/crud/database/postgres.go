package database

import (
	"fmt"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"

	"test_project/crud/models/item"
)

type PostgresDB struct {
	DB *gorm.DB
}

func CreatePostgres(host, port, user, password, dbname string) (*PostgresDB, error) {
	dsn := fmt.Sprintln(
		"host="+host,
		"port="+port,
		"user="+user,
		"password="+password,
		"dbname="+dbname,
	)

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		return nil, fmt.Errorf("failed to connect to postgres database: %w", err)
	}

	err = db.AutoMigrate(&item.Item{})

	if err != nil {
		return nil, fmt.Errorf("failed to auto migrate item: %w", err)
	}

	log.Println("Database created")
	return &PostgresDB{DB: db}, nil
}

func (p *PostgresDB) Close() error {
	sqlDB, err := p.DB.DB()
	if err != nil {
		return fmt.Errorf("failed to get sql.DB: %w", err)
	}

	if err := sqlDB.Close(); err != nil {
		return fmt.Errorf("failed to close database connection: %w", err)
	}

	log.Println("Database connection closed successfully")
	return nil
}
