package repository

import (
	"database/sql"
)

/*
В этом файле нужно будет работать с бд, доставать, сохранять и удалять пользователей
*/
// Функция вставки нового пользователя.
func InsertUser(db *sql.DB, id, name, email, password, department string, age int) error {
	query := `INSERT INTO users (id, name, email, password, department, age) VALUES ($1, $2, $3, $4, $5, $6)`
	_, err := db.Exec(query, id, name, email, password, department, age)
	if err != nil {
		return err
	}
	return nil
}
