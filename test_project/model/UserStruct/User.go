package UserStruct

type User struct {
	ID         int    `db:"id"`
	Name       string `db:"name"`
	Email      string `db:"email"`
	Password   string `db:"password"`
	Age        int    `db:"age"`
	Department string `db:"department"`
}

type UserRequest struct {
	Name       string `json:"name" binding:"required"`
	Email      string `json:"email" binding:"required,email"`
	Password   string `json:"password" binding:"required,min=6"`
	Age        int    `json:"age" binding:"omitempty,min=1,max=150"`
	Department string `json:"department"`
}
