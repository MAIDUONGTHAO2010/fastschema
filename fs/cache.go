package fs

// Cache is the interface that defines the methods that a Cache must implement
type Cache interface {
	Name() string
	Set(key any, value any) error
	Get(key any) (any, error)
}

// DiskConfig holds the disk configuration
type CacheConfig struct {
	Name   string `json:"name"`
	Driver string `json:"driver"`
}

// Clone returns a clone of the disk configuration
func (dc *DiskConfig) Clone() *DiskConfig {
	return &DiskConfig{
		Name:            dc.Name,
		Driver:          dc.Driver,
		Root:            dc.Root,
		BaseURL:         dc.BaseURL,
		GetBaseURL:      dc.GetBaseURL,
		Provider:        dc.Provider,
		Endpoint:        dc.Endpoint,
		Region:          dc.Region,
		Bucket:          dc.Bucket,
		AccessKeyID:     dc.AccessKeyID,
		SecretAccessKey: dc.SecretAccessKey,
		ACL:             dc.ACL,
	}
}

// StorageConfig holds the storage configuration
type StorageConfig struct {
	DefaultDisk string        `json:"default_disk"`
	DisksConfig []*DiskConfig `json:"disks"`
}

// Clone returns a clone of the storage configuration
func (sc *StorageConfig) Clone() *StorageConfig {
	if sc == nil {
		return nil
	}

	clone := &StorageConfig{
		DefaultDisk: sc.DefaultDisk,
		DisksConfig: make([]*DiskConfig, len(sc.DisksConfig)),
	}

	for i, dc := range sc.DisksConfig {
		clone.DisksConfig[i] = dc.Clone()
	}

	return clone
}
