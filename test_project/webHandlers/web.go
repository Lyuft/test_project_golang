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

// Метод который берет данные с веб и пускает их по всему пути!
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
