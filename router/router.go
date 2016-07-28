package router

import (
	"github.com/Laily123/hi-vim/controller"
	"github.com/echo-contrib/pongor"
	"github.com/labstack/echo"
)

func Init() *echo.Echo {
	e := echo.New()
	e.Debug()
	r := pongor.GetRenderer()

	e.SetRenderer(r)
	e.Static("/static", "static/build/")
	e.Static("/img", "static/img/")

	e.GET("/", controller.Index)
	return e
}
