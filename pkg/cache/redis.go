package cache

import (
	"fmt"

	"github.com/fastschema/fastschema/fs"
)

type RedisCacheProvider struct {
	address        string
	exporationTime string
}

func NewRedisCacheProvider(config Config) (fs.CacheProvider, error) {
	if config["address"] == "" || config["exporation_time"] == "" {
		return nil, fmt.Errorf("redis address or exporation_time is not set")
	}

	redisCacheProvider := &RedisCacheProvider{
		address:        config["address"],
		exporationTime: config["exporation_time"],
	}

	if redisCacheProvider.address == "" {
		redisCacheProvider.address = "127.0.0.1:6379"
	}

	if redisCacheProvider.exporationTime == "" {
		redisCacheProvider.exporationTime = "60"
	}

	return redisCacheProvider, nil
}

func (rcp *RedisCacheProvider) Get(key string) any {
	return "aaaa"
}

func (ga *RedisCacheProvider) Name() string {
	return "redis"
}
