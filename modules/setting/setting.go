package setting

import (
	log "github.com/Sirupsen/logrus"
	"github.com/Unknwon/com"
	"gopkg.in/ini.v1"
)

var (
	AppVer string

	HTTPPort int

	SiteConf struct {
		SiteName    string
		SiteUrl     string
		SiteStart   int
		SiteVersion string
	}

	Cfg *ini.File
)

func init() {
	Cfg, err := ini.Load("conf/app.ini")
	if err != nil {
		log.Fatalf("Fail to load configuration: %s", err)
	}

	if com.IsFile("custom/app.ini") {
		if err = Cfg.Append("custom/app.ini"); err != nil {
			log.Fatalf("Fail to load custom configuration: %s", err)
		}
	}
	Cfg.NameMapper = ini.AllCapsUnderscore

	AppVer = Cfg.Section("").Key("APP_VER").String()
	HTTPPort = Cfg.Section("").Key("HTTP_PORT").MustInt(8080)

	if err = Cfg.Section("site_conf").MapTo(&SiteConf); err != nil {
		log.Fatalf("Fail to map section 'site_conf': %s", err)
	}
}
