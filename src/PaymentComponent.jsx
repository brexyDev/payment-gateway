import React, { useState } from 'react';

const PaymentComponent = ({ data }) => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const options = {
      key: 'rzp_live_19rJesqokT7wN6', // Replace with your Razorpay key ID
      amount: amount * 100, // Convert amount to paise (e.g., ₹500 = 50000 paise)
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Test Transaction',
      image: '/path-to-your-logo.png', // Add the path to your logo
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: data?.name || 'Test User', // User's name
        email: data?.email || 'test@email.com', // User's email
        contact: data?.contact || '9988776655' // User's contact number
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src="/jio.svg" alt="Company Logo" style={styles.logo} />
        <input
          type="text"
          placeholder="Enter Amount"
          value={amount}
          onChange={handleInputChange}
          style={styles.input}
        />
        <button onClick={handlePayment} style={styles.button}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1a1a1a', // Dark background
    padding: '20px',
    overflow: 'hidden', // Hide overflow
    boxSizing: 'border-box',
  },
  card: {
    backgroundColor: '#fff', // White card background
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  logo: {
    width: '100px',
    marginBottom: '20px',
  },
  input: {
    padding: '15px',
    fontSize: '18px',
    marginBottom: '20px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxSizing: 'border-box', // Ensure padding is included in the width
    textAlign: 'center',
  },
  button: {
    padding: '15px 20px',
    fontSize: '18px',
    backgroundColor: '#3399cc',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
  },
};


export default PaymentComponent;
