package router

import (
	"github.com/Laily123/Hi-Vim/controller"
	"github.com/MarcusMann/pongor-echo"
	"github.com/labstack/echo"
)

// Init 用于初始化
func Init() *echo.Echo {
	e := echo.New()
	r:= pongor.GetRenderer()

	e.Renderer = r
	e.Static("/static", "static/build/")
	e.Static("/js", "static/build/js/")
	e.Static("/css", "static/build/css/")
	e.Static("/img", "static/img/")

	e.GET("/", controller.Index)

	e.GET("/interactive/index", controller.InteractiveIndex)
	return e
}
