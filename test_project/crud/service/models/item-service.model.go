package models

import (
	"context"

	"test_project/crud/models/item"
)

type ItemService interface {
	Create(ctx context.Context, req *item.CreateItem) (*item.CreateItem, error)
	GetById(ctx context.Context, id uint) (*item.Item, error)
	GetAll(ctx context.Context) ([]item.Item, error)
	UpdateById(ctx context.Context, id uint, req item.UpdateItem) (*item.UpdateItem, error)
	Delete(ctx context.Context, id uint) error
}
