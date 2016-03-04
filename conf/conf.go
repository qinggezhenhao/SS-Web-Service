package conf

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
)

type Site struct {
	SiteName  string `json:"site_name"`
	SiteStart int    `json:"site_start"`
}

var logger = log.New(os.Stdout, "[Conf]:", 0)

func ParseSiteFile() Site {
	site := Site{}

	src, err := ioutil.ReadFile("configs/site.json")
	if err != nil {
		logger.Panic("Open file error. File is \"site.json\"")
	}

	err = json.Unmarshal(src, &site)
	if err != nil {
		logger.Panic("Configuration file parsing error. File is \"site.json\"")
	}
	return site
}
