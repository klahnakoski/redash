function DataSource($resource) {
  const actions = {
    get: { method: 'GET', cache: false, isArray: false },
    query: { method: 'GET', cache: false, isArray: true },
    test: { method: 'POST', cache: false, isArray: false, url: 'api/data_sources/:id/test' },
    getSchema: { method: 'GET', cache: false, isArray: true, url: 'api/data_sources/:id/schema' },
    version: { method: 'GET', cache: false, isArray: false, url: 'api/data_sources/:id/version' },
  };

  const DataSourceResource = $resource('api/data_sources/:id', { id: '@id' }, actions);

  return DataSourceResource;
}


export default function (ngModule) {
  ngModule.factory('DataSource', DataSource);
}
