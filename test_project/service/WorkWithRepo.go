package service

import (
	"test_project/repository"
)

/*
В этом файле нужно будет работать с репозиторием, то есть здесь мы будет обрабатывать полученные данные из бд,
к примеру обновлять пользователя.
*/

// Функция создания пользователя.
func AddUser(id, name, email, password, department, age string) {
	repository.InsertUser(id, name, email, password, department, age)
}
