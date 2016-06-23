package main

import (
	"github.com/Laily123/hi-vim/router"
	"github.com/labstack/echo/engine/standard"
)

func main() {
	e := router.Init()
	e.Run(standard.New(":4004"))
}
