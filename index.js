import { i18n } from '@kbn/i18n';

export default function(kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'demo',
    uiExports: {
      app: {
        title: 'Demo',
        description: 'An awesome Kibana plugin',
        main: 'plugins/demo/app',
      },
      hacks: ['plugins/demo/hack'],
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    // eslint-disable-next-line no-unused-vars
    init(server, options) {
      const xpackMainPlugin = server.plugins.xpack_main;
      if (xpackMainPlugin) {
        const featureId = 'demo';

        xpackMainPlugin.registerFeature({
          id: featureId,
          name: i18n.translate('demo.featureRegistry.featureName', {
            defaultMessage: 'demo',
          }),
          navLinkId: featureId,
          icon: 'questionInCircle',
          app: [featureId, 'kibana'],
          catalogue: [],
          privileges: {
            all: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
            read: {
              api: [],
              savedObject: {
                all: [],
                read: [],
              },
              ui: ['show'],
            },
          },
        });
      }
    },
  });
}
