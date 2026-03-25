package repository

import (
	"log"
	"test_project/config"
)

/*
В этом файле нужно будет работать с бд, доставать, сохранять и удалять пользователей
*/
// Функция вставки нового пользователя.
func InsertUser(id, name, email, password, department, age string) {
	db, err := config.NewDB()
	if err != nil {
		log.Fatal("Failed to connect to DB:", err)
	}
	query := `INSERT INTO users (id, name, email, password, department, age) VALUES ($1, $2, $3, $4, $5, $6)`
	_, err = db.Exec(query, id, name, email, password, department, age)
	if err != nil {
		return
	}
	defer db.Close()
}
