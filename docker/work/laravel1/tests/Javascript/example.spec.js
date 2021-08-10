import expect from 'expect';
import { mount } from '@vue/test-utils';

describe('Hello', () => {
    it('say that it is an example components', () => {
        const Component = {
            template: '<div>Hello World</div>'
        }
        let wrapper = mount(Component);
        expect(wrapper.text()).toContain('Hello World');
    });
});
