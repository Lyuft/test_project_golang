package item

type CreateItem struct {
	Title       string `json:"title" binding:"required"`
	Description string `json:"description"`
}
