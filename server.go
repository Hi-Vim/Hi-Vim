package main

import (
	"github.com/Hi-Vim/Hi-Vim/router"
)

func main() {
	e := router.Init()
	e.Start(":4004")
}
