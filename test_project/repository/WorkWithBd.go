package repository

import (
	"database/sql"
	"fmt"
	"test_project/model/UserStruct"
)

/*
В этом файле нужно будет работать с бд, доставать, сохранять и удалять пользователей
*/

type UserRepository struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

// Метод создания юзера в БД.
func (r *UserRepository) Create(u *UserStruct.User) error { // ← используем UserStruct.User
	query := `INSERT INTO users (name, email, password, department, age) 
	          VALUES ($1, $2, $3, $4, $5) 
	          RETURNING id`
	err := r.db.QueryRow(query, u.Name, u.Email,
		u.Password, u.Department, u.Age).Scan(&u.ID)
	if err != nil {
		return fmt.Errorf("failed to create user: %w", err)
	}
	return nil
}
