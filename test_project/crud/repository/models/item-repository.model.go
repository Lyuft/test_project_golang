package models

import (
	"context"

	"test_project/crud/models/item"
)

type ItemRepository interface {
	Create(ctx context.Context, item *item.Item) error
	GetById(ctx context.Context, id uint) (*item.Item, error)
	GetAll(ctx context.Context) ([]item.Item, error)
	Update(ctx context.Context, item *item.Item) error
	Delete(ctx context.Context, id uint) error
}
