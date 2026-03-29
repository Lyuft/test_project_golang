package handler

import (
	"net/http"
	"strconv"
	"test_project/crud/helpers"
	"test_project/crud/models/item"

	"test_project/crud/service"

	"github.com/gin-gonic/gin"
)

type ItemHandler struct {
	service *service.ItemService
}

func FabricItemHandler(service *service.ItemService) *ItemHandler {
	return &ItemHandler{
		service: service,
	}
}

func (h *ItemHandler) Create(ctx *gin.Context) {
	var req item.CreateItem

	if err := ctx.ShouldBindJSON(&req); err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusBadRequest, err)
		return
	}

	createItem, err := h.service.Create(ctx.Request.Context(), &req)

	if err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusInternalServerError, err)
	}

	helpers.SuccessRequestHelper(ctx, http.StatusCreated, "item created", *createItem)
}

func (h *ItemHandler) GetAll(ctx *gin.Context) {
	items, err := h.service.GetAll(ctx.Request.Context())

	if err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusInternalServerError, err)
		return
	}

	if items == nil {
		items = []item.Item{}
	}

	helpers.SuccessRequestHelper(ctx, http.StatusOK, "get all items", items)
}

func (h *ItemHandler) GetByID(ctx *gin.Context) {
	id, ok := helpers.ParseID(ctx)

	if !ok {
		return
	}

	getItem, err := h.service.GetById(ctx.Request.Context(), id)

	if err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusNotFound, err)
		return
	}

	helpers.SuccessRequestHelper(ctx, http.StatusOK, "get item success", *getItem)
}

func (h *ItemHandler) Update(ctx *gin.Context) {
	id, ok := helpers.ParseID(ctx)

	if !ok {
		return
	}

	var req item.UpdateItem

	if err := ctx.ShouldBindJSON(&req); err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusBadRequest, err)
		return
	}

	updateItem, err := h.service.Update(ctx.Request.Context(), id, &req)

	if err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusInternalServerError, err)
		return
	}

	helpers.SuccessRequestHelper(ctx, http.StatusOK, "item updated", *updateItem)
}

func (h *ItemHandler) Delete(ctx *gin.Context) {
	id, ok := helpers.ParseID(ctx)

	if !ok {
		return
	}

	if err := h.service.Delete(ctx.Request.Context(), id); err != nil {
		helpers.ErrorRequestHelper(ctx, http.StatusInternalServerError, err)
		return
	}

	helpers.SuccessRequestHelper(ctx, http.StatusOK, "Item delete successfully", map[string]string{
		"id": strconv.FormatUint(uint64(id), 10),
	})
}
