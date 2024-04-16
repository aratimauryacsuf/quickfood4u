

import React, { useState , useEffect} from 'react';
import Modal from 'react-modal';
import axios from 'axios';

const GroceryList = ({ isOpen, closeGroceryModal}) => {
  const [groceryItems, setGroceryItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Fetch JWT token from localStorage when component mounts
    const storedToken = localStorage.getItem('token');
    const storedUSername = localStorage.getItem('username');

    if (storedToken) {
      setToken(storedToken);
    }
    if(storedUSername){
        setUsername(storedUSername);
    }

    // Fetch existing grocery items when component mounts
    if (isOpen && token && username) {
        fetchGroceryItems();
      }
  }, [isOpen, token, username]);

//   const addItem = () => {
//     setGroceryItems([...groceryItems, newItem]);
//     setNewItem('');
//   };

//   const deleteItem = (index) => {
//     const updatedItems = [...groceryItems];
//     updatedItems.splice(index, 1);
//     setGroceryItems(updatedItems);
//   };

const fetchGroceryItems = async () => {
    try {
     //  const storedUser = localStorage.getItem(username);
      const response = await axios.get(`http://localhost:8080/api/grocery/grocerylist?username=${username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGroceryItems(response.data);
      console.log("initial response", response.data);
    } catch (error) {
      console.error('Error fetching grocery items:', error);
    }
  };
  const addItem = async () => {
    try {
      // Make a POST request to add a new grocery item
      await axios.post(`http://localhost:8080/api/grocery/addItem`, { ingredient: newItem , username: username}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // After adding, fetch the updated list of grocery items
      fetchGroceryItems();
      // Clear the input field
      setNewItem('');
    } catch (error) {
      console.error('Error adding grocery item:', error);
    }
  };

  const deleteItem = async (ingredient) => {
    try {
      await axios.delete(`http://localhost:8080/api/grocery/deleteitem?username=${username}&ingredient=${ingredient}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // After deleting, fetch the updated list of grocery items
      fetchGroceryItems();
    } catch (error) {
      console.error('Error deleting grocery item:', error);
    }
  };

  return (
    <div>
    
      <Modal ariaHideApp={false} isOpen={isOpen} onRequestClose={closeGroceryModal} style={customStyles} > 
      <div className="modal-content">
          <div className="modal-header" >
        <h5 className="modal-title">Grocery List</h5>
        <button type="button" className="close" onClick={closeGroceryModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group">
              {groceryItems.map((item, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.ingredient}
                  <button className="btn btn-danger" onClick={() => deleteItem(item.ingredient)}>Delete</button>
                </li>
              ))}
            </ul>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" onClick={addItem}>Add Item</button>
              </div>
            </div>
          </div>
          </div>
      </Modal>
    </div>
  );
};

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '70%', // Adjust this value to change the width
        maxHeight: '70%', // Adjust this value to change the height
        overflow: 'auto',
        borderRadius: '10px',
        padding: '20px',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
  };

export default GroceryList;