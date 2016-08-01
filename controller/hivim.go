package controller

import (
	"github.com/labstack/echo"
	"net/http"
)

func Index(c echo.Context) error {
	return c.Render(http.StatusOK, "index.html", nil)
}

func InteractiveIndex(c echo.Context) error {
	return c.Render(http.StatusOK, "openvim/index.html", nil)
}
