package service

import (
	"context"
	"fmt"
	"test_project/crud/repository/models"

	"test_project/crud/models/item"
)

type ItemService struct {
	repo models.ItemRepository
}

func FabricItemService(repo models.ItemRepository) *ItemService {
	return &ItemService{repo: repo}
}

func (s *ItemService) Create(ctx context.Context, req *item.CreateItem) (*item.Item, error) {
	newItem := &item.Item{
		Title:       req.Title,
		Description: req.Description,
		Status:      "active",
	}

	if err := s.repo.Create(ctx, newItem); err != nil {
		return nil, fmt.Errorf("failed to create newItem: %w", err)
	}

	return newItem, nil
}

func (s *ItemService) GetById(ctx context.Context, id uint) (*item.Item, error) {
	getItem, err := s.repo.GetById(ctx, id)

	if err != nil {
		return nil, fmt.Errorf("failed to get item by id: %w", err)
	}

	return getItem, nil
}

func (s *ItemService) GetAll(ctx context.Context) ([]item.Item, error) {
	items, err := s.repo.GetAll(ctx)

	if err != nil {
		return nil, fmt.Errorf("failed to get all items: %w", err)
	}

	return items, nil
}

func (s *ItemService) Update(ctx context.Context, id uint, req *item.UpdateItem) (*item.Item, error) {
	updateItem, err := s.repo.GetById(ctx, id)

	if err != nil {
		return nil, fmt.Errorf("failed to get item by id: %w", err)
	}

	if req.Title != "" {
		updateItem.Title = req.Title
	}

	if req.Description != "" {
		updateItem.Description = req.Description
	}

	if req.Status != "" {
		updateItem.Status = req.Status
	}

	if err := s.repo.Update(ctx, updateItem); err != nil {
		return nil, fmt.Errorf("failed to update updateItem: %w", err)
	}

	return updateItem, nil
}

func (s *ItemService) Delete(ctx context.Context, id uint) error {
	if err := s.repo.Delete(ctx, id); err != nil {
		return fmt.Errorf("failed to delete item by id: %w", err)
	}

	return nil
}
