import { useParams } from 'react-router-dom';
import {Layout} from '../components/Layout';
import Item from '../components/Item';
import {item} from '../Mocks/item.mock';
import ItemListContainer from '../components/ItemListContainer';

const CategoryView = () => {
const { category } = useParams();
const categories = item.filter(product => product.category === category);


    return (
            <Layout>
                <ItemListContainer />
                {categories.map((product) =>
                <Item product={product} /> )}
                
            </Layout>
    );
};

export default CategoryView;
