package routers

import (
	"modules/setting"
	"net/http"

	"gopkg.in/macaron.v1"
)

func ViewHomePage(ctx *macaron.Context) {
	ctx.HTML(http.StatusOK, "home/index", setting.SiteConf)
}
