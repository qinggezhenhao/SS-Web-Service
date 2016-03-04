package main

import (
	"controller"

	"gopkg.in/macaron.v1"
)

func main() {
	m := macaron.Classic()

	m.Use(macaron.Renderer())
	m.Use(macaron.Static("public"))

	m.Get("/", controller.HomeController)

	m.Run()
}
