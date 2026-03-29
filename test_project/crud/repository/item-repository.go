package repository

import (
	"context"
	"test_project/crud/models/item"
	"test_project/crud/repository/models"

	"gorm.io/gorm"
)

type Repository struct {
	db *gorm.DB
}

func FabricItemRepository(db *gorm.DB) models.ItemRepository {
	return &Repository{db: db}
}

func (repo *Repository) Create(ctx context.Context, item *item.Item) error {
	return repo.db.WithContext(ctx).Create(item).Error
}

func (repo *Repository) GetById(ctx context.Context, id uint) (*item.Item, error) {
	var items item.Item

	err := repo.db.WithContext(ctx).First(&items, id).Error

	if err != nil {
		return nil, err
	}

	return &items, nil
}

func (repo *Repository) GetAll(ctx context.Context) ([]item.Item, error) {
	var items []item.Item
	err := repo.db.WithContext(ctx).Find(&items).Error

	return items, err
}

func (repo *Repository) Update(ctx context.Context, item *item.Item) error {
	result := repo.db.WithContext(ctx).Model(item).Where("id = ?", item.ID).Updates(item)

	if result.Error != nil {
		return result.Error
	}

	if result.RowsAffected == 0 {
		return gorm.ErrRecordNotFound
	}

	return nil
}

func (repo *Repository) Delete(ctx context.Context, id uint) error {
	result := repo.db.WithContext(ctx).Delete(&item.Item{}, id)

	if result.Error != nil {
		return result.Error
	}

	if result.RowsAffected == 0 {
		return gorm.ErrRecordNotFound
	}

	return nil
}
