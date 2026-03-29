package item

import "time"

type Item struct {
	ID          uint      `json:"id" Gorm:"primaryKey"`
	Title       string    `json:"title" binding:"required" Gorm:"not null"`
	Description string    `json:"description"`
	Status      string    `json:"status" Gorm:"default:'active'"`
	Created     time.Time `json:"created"`
}
