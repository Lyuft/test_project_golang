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

func (h *WebHandler) CreateUser(c *gin.Context) {
	var req struct {
		ID         string `json:"id" binding:"required"`
		Name       string `json:"name" binding:"required"`
		Email      string `json:"email" binding:"required,email"`
		Password   string `json:"password" binding:"required,min=6"`
		Department string `json:"department" binding:"required"`
		Age        int    `json:"age" binding:"required,min=18,max=120"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}

	ageStr := strconv.Itoa(req.Age)

	service.AddUser(req.ID, req.Name, req.Email, req.Password, req.Department, ageStr)
}
