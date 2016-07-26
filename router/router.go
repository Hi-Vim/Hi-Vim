package router

import (
	"github.com/Laily123/hi-vim/controller"
	"github.com/labstack/echo"
	"io"
	"text/template"
)

type Template struct {
	templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func Init() *echo.Echo {
	e := echo.New()
	e.Debug()

	t := &Template{
		templates: template.Must(template.ParseGlob("view/**/*.html")),
	}
	e.SetRenderer(t)

	e.GET("/", controller.Index)
	return e
}
