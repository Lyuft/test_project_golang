package webHandlers

import (
	"html/template"
	"net/http"
	"strconv"
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

	var user struct {
		ID         string `json:"id"`
		Name       string `json:"name"`
		Email      string `json:"email"`
		Password   string `json:"password"`
		Department string `json:"department"`
		Age        int    `json:"age"`
	}

	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "Invalid JSON format: " + err.Error(),
		})
		return
	}

	service.AddUser(user.ID, user.Name, user.Email, user.Password, user.Department, strconv.Itoa(user.Age))

}
