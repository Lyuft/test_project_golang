package webHandlers

import (
	"html/template"
	"net/http"
	"strconv"
	"test_project/model/UserStruct"
	"test_project/service"

	"github.com/gin-gonic/gin"
)

type WebHandler struct {
	tmpl        *template.Template
	userService *service.UserService
}

func NewWebHandler(userService *service.UserService, tmpl *template.Template) *WebHandler {
	return &WebHandler{
		userService: userService,
		tmpl:        tmpl,
	}
}

// Index – отображает список всех элементов
func (h *WebHandler) Index(c *gin.Context) {

	c.Header("Content-Type", "text/html; charset=utf-8")
	err := h.tmpl.ExecuteTemplate(c.Writer, "index.html", nil)
	if err != nil {
		c.String(http.StatusInternalServerError, "Template Error")
	}
}

// Добавление юзера передача в сервис.
func (h *WebHandler) AddUser(c *gin.Context) {
	user := &UserStruct.User{
		Name:       c.PostForm("name"),
		Email:      c.PostForm("email"),
		Password:   c.PostForm("password"),
		Department: c.PostForm("department"),
	}
	user.Age, _ = strconv.Atoi(c.PostForm("age"))
	if err := h.userService.AddUserService(user); err != nil {
		c.String(http.StatusBadRequest, "Ошибка: %v", err)
		return
	}
	c.Redirect(http.StatusFound, "/")
}

// Получение всех юзеров передача в сервис.
func (h *WebHandler) GetUsers(c *gin.Context) {
	users, err := h.userService.GetUserService(0)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, users)
}

// Получение юзера передача в сервис.
func (h *WebHandler) GetUserId(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(400, gin.H{"error": "Неверный ID"})
		return
	}
	users, err := h.userService.GetUserIdService(id)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, users)
}

// Удаление юзера передача в сервис.
func (h *WebHandler) DeleteUser(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	err = h.userService.DeleteUserService(id)
	if err != nil {
		c.JSON(404, gin.H{"error": err.Error()})
		return
	}
	c.JSON(200, gin.H{"message": "Пользователь успешно удалён"})
}

// Обновление юзера передача в сервис.
func (h *WebHandler) UpdateUser(c *gin.Context) {
	id, _ := strconv.Atoi(c.Param("id"))
	user := &UserStruct.User{
		ID:         id,
		Name:       c.PostForm("name"),
		Email:      c.PostForm("email"),
		Password:   c.PostForm("password"),
		Department: c.PostForm("department"),
	}
	if ageStr := c.PostForm("age"); ageStr != "" {
		user.Age, _ = strconv.Atoi(ageStr)
	}
	if err := h.userService.UpdateUserService(user); err != nil {
		c.JSON(500, gin.H{"error": "Ошибка обновления: " + err.Error()})
		return
	}
	c.JSON(200, gin.H{"message": "Пользователь успешно обновлен!"})
}
