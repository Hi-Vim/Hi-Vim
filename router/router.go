package router

import (
	"github.com/Laily123/hi-vim/controller"
	"github.com/labstack/echo"
)

func Init() *echo.Echo {
	e := echo.New()
	e.Debug()

	e.GET("/", controller.Index)
	return e
}
