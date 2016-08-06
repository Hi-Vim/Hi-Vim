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
	e.Static("/js", "static/build/js/")
	e.Static("/css", "static/build/css/")
	e.Static("/img", "static/img/")

	e.GET("/", controller.Index)

	e.GET("/interactive/index", controller.InteractiveIndex)
	return e
}
