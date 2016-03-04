package controller

import (
	"conf"
	"net/http"

	"gopkg.in/macaron.v1"
)

func HomeController(ctx *macaron.Context) {
	ctx.HTML(http.StatusOK, "home/index", conf.ParseSiteFile())
}
