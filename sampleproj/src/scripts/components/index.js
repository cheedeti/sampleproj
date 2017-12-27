import Button from './button';
import Container from './container';
import List from './list';
import Inputset from './inputset';
import SampleTemplate from './sampletemplate';

export default function addComponents(container) {
    container.addUIComponent('button', Button.Component, Button.Schema);
    container.addUIComponent('container', Container.Component, Container.Schema);
    container.addUIComponent('list', List.Component, List.Schema);
    container.addUIComponent('inputset', Inputset.Component, Inputset.Schema);
    container.addUIComponent('SampleTemplate', SampleTemplate.Component, SampleTemplate.Schema);
}
