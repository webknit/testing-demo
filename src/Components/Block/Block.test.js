
import renderer from 'react-test-renderer';
import Block from './Block';

// import data from './__mocks__/carCarouselData.json';

describe('<Block />', () => {
    describe('snapshot tests', () => {
        test('should render with no data', () => {

            const tree = renderer
                .create(<Block title='hello' />)
                .toJSON();
            expect(tree).toMatchSnapshot();
        });

        // test('should render with data', () => {
        //     const { snapshot } = generateSnapshot({ Component: CarCarousel, mockData: data, inApp: false });
        //     expect(snapshot).toMatchSnapshot();
        // });
    });

});