import AssetContainer from 'remix-asset-manager';

import addComponents from './components/index';

export default function (prefix = 'remix.sample') {
    const container = new AssetContainer(prefix);

  // components
    addComponents(container);

    return container;
}
