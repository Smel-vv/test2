import React from "react";
import Footer from "./componens/Footer";
import Header from "./componens/Header";
import Items from "./componens/Items";
import { TiThSmall } from "react-icons/ti";
import Categories from "./componens/Categories";
import ShowFullItem, { showFullItem } from "./componens/ShowFullItem"
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-gray.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price:'49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.webp',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'tables',
          price:'149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'Sofa.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'sofa',
          price:'549.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'wall-light.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'light',
          price:'25.00'
        },
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair-white.jpeg',
          desc: 'lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'chairs',
          price:'49.99'
        }
      ],
      showFullItem:false,
      fullItem: {}

    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
      {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
      <Footer />
    </div>
  )
 } 

 onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
 }

 chooseCategory(category) {
  if(category === 'all'){
    this.setState({currentItems: this.state.items})
    return
  }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
 }

 deleteOrder(id){
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
 }
 addToOrder(item){
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders:[...this.state.orders, item]})
 }
}

export default App;
