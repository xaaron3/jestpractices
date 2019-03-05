import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// writing expectations to work with react tests better

Enzyme.configure({ adapter: new Adapter() });