import React, { useState } from 'react';
import '../Order.css';

const Order = () => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [ccv, setCcv] = useState('');
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);

  const branches = ['Kreuzberg', 'Friedrichstrasse', 'Lichtenberg'];
  const menus = {
    Kreuzberg: ['Schnitzel', 'Bratwurst', 'Currywurst', 'Apfelstrudel', 'Beer'],
    Friedrichstrasse: ['Wiener Schnitzel', 'Goulash', 'Strudel', 'Pretzel', 'Sauerkraut'],
    Lichtenberg: ['Kebab', 'Döner', 'Baklava', 'Turkish Tea', 'Ayran']
  };

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
    setSelectedItems([]);
  };

  const handleItemSelect = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setCardholderName('');
    setCardNumber('');
    setCcv('');
  };

  const isCreditCardValid = cardholderName && cardNumber && ccv;

  const handleFinishOrder = () => {
    setIsProcessingOrder(true);

    setTimeout(() => {
      setSelectedBranch('');
      setSelectedItems([]);
      setPaymentMethod('');
      setCardholderName('');
      setCardNumber('');
      setCcv('');
      setIsProcessingOrder(false);
      alert('Your order is being prepared!');
    }, 2000);
  };

  return (
    <div className="order-container">
      <h1>Place Your Order</h1>
      <div className="branch-select">
        <label htmlFor="branch">Select a Branch:</label>
        <select id="branch" value={selectedBranch} onChange={handleBranchChange}>
          <option value="">Select a branch</option>
          {branches.map((branch) => (
            <option key={branch} value={branch}>{branch}</option>
          ))}
        </select>
      </div>
      {selectedBranch && (
        <div>
          <h2>Menu</h2>
          <ul className="menu">
            {menus[selectedBranch].map((item) => (
              <li key={item}>
                <label>
                  <input type="checkbox" checked={selectedItems.includes(item)} onChange={() => handleItemSelect(item)} />
                  {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedItems.length > 0 && (
        <div>
          <h2>Order Summary</h2>
          <ul>
            {selectedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="cash" checked={paymentMethod === 'cash'} onChange={handlePaymentMethodChange} />
              Pay with Cash
            </label>
            <label>
              <input type="radio" name="payment" value="credit" checked={paymentMethod === 'credit'} onChange={handlePaymentMethodChange} />
              Pay with Credit Card
            </label>
          </div>
        </div>
      )}
      {paymentMethod === 'credit' && (
        <div className="credit-card-info">
          <h2>Credit Card Information</h2>
          <div>
            <label htmlFor="cardholderName">Cardholder Name:</label>
            <input type="text" id="cardholderName" value={cardholderName} onChange={(e) => setCardholderName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </div>
          <div>
            <label htmlFor="ccv">CCV:</label>
            <input type="text" id="ccv" value={ccv} onChange={(e) => setCcv(e.target.value)} />
          </div>
        </div>
      )}
      {(isCreditCardValid || paymentMethod === 'cash') && (
        <button className="finish-order-btn" onClick={handleFinishOrder} disabled={isProcessingOrder}>
          {isProcessingOrder ? 'Processing Order...' : 'Finish Order'}
        </button>
      )}
    </div>
  );
};

export default Order;
