package service

import (
	"test_project/model/UserStruct"
	"test_project/repository"
)

/*
В этом файле нужно будет работать с репозиторием, то есть здесь мы будет обрабатывать полученные данные из бд,
к примеру обновлять пользователя.
*/

// Структура юзера!
type UserService struct {
	userRepo *repository.UserRepository
}

// Функция ссылающиеся на структуру!
func NewUserService(userRepo *repository.UserRepository) *UserService {
	return &UserService{
		userRepo: userRepo,
	}
}

// Функция создания пользователя.
func (s *UserService) AddUserService(u *UserStruct.User) error {
	return s.userRepo.Create(u)
}

// Функция для получения всех юзеров.
func (s *UserService) GetUserService(int) ([]UserStruct.User, error) {
	return s.userRepo.GetAll()
}

// Функция для получения одного юзера.
func (s *UserService) GetUserIdService(id int) (*UserStruct.User, error) {
	return s.userRepo.GetByID(id)
}

// Функция удаления юзера.
func (s *UserService) DeleteUserService(id int) error {
	return s.userRepo.DeleteUser(id)
}

// Функция обновления юзера.
func (s *UserService) UpdateUserService(u *UserStruct.User) error {
	return s.userRepo.UpdateUser(u)
}
