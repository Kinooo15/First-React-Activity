import logo from './logo.svg';
import './App.css';
import TextInput from './components/Textinput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';
import { useState } from 'react';

const sportingGoods = [
  { id: 1, name: "Football", price: 49.99, stock: 10},
  { id: 2, name: "Basketball", price: 59.99, stock: 20},
  { id: 3, name: "Baseball", price: 69.99, stock: 0},
]

function App() {

  const [input, setInput] = useState("");
  const [form, setForm] =useState({
    nameItem: '',
    priceItem: 0,
    stockItem: 0,
  })
  const [showOnlyStock, setShowOnlyStock] = useState(false);

  const [data, setData] = useState(sportingGoods)

  const handleClick = () => {
    alert("Clicked")
  }

  const hanldeForm = (e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)

    setData([...data, {id: data.length + 1, name: form.nameItem, price: form.priceItem, stock: form.stockItem}])
  }

  return (
    <div className="App">

      <form style={{display:"flex", flexDirection:"column", gap: 10, marginBottom: 20}} onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nameItem'>Name: </label>
          <input id='nameItem' type='text' value={form.nameItem} onChange={hanldeForm}/>
        </div>
        
        <div>
          <label htmlFor='priceItem'>Price: </label>
          <input id='priceItem' type='number'value={form.priceItem} onChange={hanldeForm}/>
        </div>
        
        <div>
          <label htmlFor='stockItem'>Stock: </label>
          <input id='stockItem' type='number'value={form.stockItem} onChange={hanldeForm}/>
        </div>
        

        <button type='submit'>Submit</button>
      </form>

      <TextInput value={input} onChange={(evt) => setInput(evt.target.value)}/>
      <Checkbox checked = {showOnlyStock} onChange={(evt) =>setShowOnlyStock(evt.target.checked)}/>
      <button onClick={handleClick}>Submit</button>

      <table>
        <Header></Header>
        <Category></Category>
        <Items items={data} query={input} showOnlyStock={showOnlyStock}/>
        <tr>
          <td colSpan="2" style={{textAlign: 'right'}}>Total:</td>
          <td style={{paddingLeft: '50px'}}>{data.reduce((total, sportingGoods) => {return total + parseInt(sportingGoods.stock)}, 0)}</td>
        </tr>
      </table>

    </div>
  );
}

export default App;
