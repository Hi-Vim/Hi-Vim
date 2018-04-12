package main

import (
	"github.com/Laily123/Hi-Vim/router"
)

func main() {
	e := router.Init()
	e.Start(":4004")
}
