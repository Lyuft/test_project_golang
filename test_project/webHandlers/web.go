package webHandlers

import (
	"html/template"
	"net/http"
	"test_project/service"

	"github.com/gin-gonic/gin"
)

type WebHandler struct {
	tmpl *template.Template
}

func NewWebHandler(tmpl *template.Template) *WebHandler {
	return &WebHandler{tmpl: tmpl}
}

// Index – отображает список всех элементов
func (h *WebHandler) Index(c *gin.Context) {

	c.Header("Content-Type", "text/html; charset=utf-8")
	err := h.tmpl.ExecuteTemplate(c.Writer, "index.html", nil)
	if err != nil {
		c.String(http.StatusInternalServerError, "Template Error")
	}
}

func (h *WebHandler) AddUser(c *gin.Context) {
	// Получаем данные из формы
	id := c.PostForm("id")
	name := c.PostForm("name")
	email := c.PostForm("email")
	password := c.PostForm("password")
	department := c.PostForm("department")
	age := c.PostForm("age")

	service.AddUser(id, name, email, password, department, age)

}
