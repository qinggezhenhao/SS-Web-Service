package main

import (
	"modules/setting"
	"routers"

	"gopkg.in/macaron.v1"
)

func main() {
	m := macaron.Classic()

	m.Use(macaron.Renderer())
	m.Use(macaron.Static("public"))

	m.Group("", func() {
		m.Get("/", routers.ViewHomePage)
	})

	m.Run(setting.HTTPPort)
}
