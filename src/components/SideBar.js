import './SideBar.css'
import Category from './Category'

const SideBar = props => {
    const {products} = props
    return(
        <ul>
            {products.map(product => <li><Category category={product.rname}/></li>)}
        </ul>
    )
}

export default SideBar