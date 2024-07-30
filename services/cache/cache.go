package cacheservice

import (
	"github.com/fastschema/fastschema/fs"
)

type AppLike interface {
	GetCacheProvider(string) fs.CacheProvider
}

type CacheService struct {
	GetCacheProvider func(string) fs.CacheProvider
}

func New(app AppLike) *CacheService {
	return &CacheService{
		GetCacheProvider: app.GetCacheProvider,
	}
}

func (cs *CacheService) Get(key string) (_ any) {

	provider := cs.GetCacheProvider("redis")

	return provider.Get(key)
}
