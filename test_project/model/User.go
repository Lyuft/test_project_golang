package model

type User struct {
	/*
		В этом файле нужно будет прописать модель, то есть как у тебя выглядит твоя таблица в бд.
	*/
	id         int    `db:"id"`
	name       string `db:"name"`
	email      string `db:"email"`
	password   string `db:"password"`
	age        int    `db:"age"`
	department string `db:"department"`
}
