package service

import (
	"test_project/model/UserStruct"
	"test_project/repository"
)

/*
В этом файле нужно будет работать с репозиторием, то есть здесь мы будет обрабатывать полученные данные из бд,
к примеру обновлять пользователя.
*/
type UserService struct {
	userRepo *repository.UserRepository
}

func NewUserService(userRepo *repository.UserRepository) *UserService {
	return &UserService{
		userRepo: userRepo,
	}
}

// Функция создания пользователя.
func (s *UserService) AddUserService(u *UserStruct.User) error {
	return s.userRepo.Create(u)
}
