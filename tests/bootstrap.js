import app from '@adonisjs/core/services/app';
import testUtils from '@adonisjs/core/services/test_utils';
import { apiClient } from '@japa/api-client';
import { assert } from '@japa/assert';
import { pluginAdonisJS } from '@japa/plugin-adonisjs';
export const plugins = [assert(), apiClient(), pluginAdonisJS(app)];
export const runnerHooks = {
    setup: [],
    teardown: [],
};
export const configureSuite = (suite) => {
    if (['browser', 'functional', 'e2e'].includes(suite.name)) {
        return suite.setup(() => testUtils.httpServer().start());
    }
};
//# sourceMappingURL=bootstrap.js.map