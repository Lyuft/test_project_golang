package api

type ResponseModel[T any] struct {
	Data       T      `json:"data,omitempty"`
	StatusCode int    `json:"statusCode"`
	StatusText string `json:"statusText"`
	Success    bool   `json:"success"`
	Message    string `json:"message,omitempty"`
	Error      string `json:"error,omitempty"`
	Timestamp  string `json:"timestamp"`
}
