import reactIntegration from './integrations/react';
import reactRouterIntegration from './integrations/react-router';

class IntegrationsManager {
  constructor() {
    this.integrations = {
      'react-component': reactIntegration.integrationWrapper,
      'react-router': reactRouterIntegration.integrationWrapper,
    };
  }

  get(name) {
    // handle missing one here;
    return this.integrations[name];
  }

  register(name, integration) {
    this.integrations[name] = integration;
  }

  runNodeIntegration(data) {
    let result = '';
    const { nodeRun } = this.get(data.integrationName);
    if (typeof(nodeRun) === 'function') {
      result = nodeRun(data.payload);
    }
    return result;
  }
}

export default new IntegrationsManager;
