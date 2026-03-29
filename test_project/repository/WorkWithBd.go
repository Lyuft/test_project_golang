package repository

import (
	"database/sql"
	"errors"
	"fmt"
	"test_project/model/UserStruct"
)

/*
В этом файле нужно будет работать с бд, доставать, сохранять и удалять пользователей
*/

type UserRepository struct {
	db *sql.DB
}

// Функция для ссылки на подлючение к бд через структуру.
func NewUserRepository(db *sql.DB) *UserRepository {
	return &UserRepository{db: db}
}

// Метод создания юзера в БД.
func (r *UserRepository) Create(u *UserStruct.User) error { // ← используем UserStruct.User
	query := `INSERT INTO users (name, email, password, department, age) 
	          VALUES ($1, $2, $3, $4, $5) 
	          RETURNING id`
	err := r.db.QueryRow(query, u.Name, u.Email, u.Password, u.Department, u.Age).Scan(&u.ID)
	if err != nil {
		return fmt.Errorf("failed to create user: %w", err)
	}
	return nil
}

// Метод для получения юзеров из БД.
func (r *UserRepository) GetAll() ([]UserStruct.User, error) {
	rows, err := r.db.Query(`SELECT id, name, email, age, department FROM users ORDER BY id DESC`)
	if err != nil {
		return nil, err
	}
	var users []UserStruct.User
	for rows.Next() {
		var u UserStruct.User
		rows.Scan(&u.ID, &u.Name, &u.Email, &u.Age, &u.Department)
		users = append(users, u)
	}
	return users, nil
}

// Метод для получения инфы о конкретном юзере.
func (r *UserRepository) GetByID(id int) (*UserStruct.User, error) {
	rows, err := r.db.Query(`SELECT id, name, email, password, age, department FROM users WHERE id = $1`, id)
	if err != nil {
		return nil, err
	}
	var u UserStruct.User
	if !rows.Next() {
		return nil, errors.New("not found")
	}
	rows.Scan(&u.ID, &u.Name, &u.Email, &u.Password, &u.Age, &u.Department)
	return &u, nil
}

// Метод для удаления юзера.
func (r *UserRepository) DeleteUser(id int) error {
	query := `DELETE FROM users WHERE id = $1`
	_, err := r.db.Exec(query, id)
	if err != nil {
		return fmt.Errorf("failed to delete user: %w", err)
	}
	return nil
}

// Обновление юзера в БД.
func (r *UserRepository) UpdateUser(u *UserStruct.User) error {
	query := `UPDATE users SET name = $2, email = $3, password = $4,  age = $5, department = $6 WHERE id = $1`
	_, _ = r.db.Exec(query, u.ID, u.Name, u.Email, u.Password, u.Age, u.Department)
	return nil
}
