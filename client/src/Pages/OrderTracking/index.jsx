import React, { useState } from "react";
import { Button, TextField, CircularProgress } from "@mui/material";
import { FaSearch, FaBox, FaTruck, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { fetchDataFromApi } from "../../utils/api";
import Badge from "../../components/Badge";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    
    if (!orderId.trim()) {
      setError("Please enter an Order ID");
      return;
    }

    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const response = await fetchDataFromApi(`/api/order/track/${orderId.trim()}`);
      
      if (response?.success) {
        setOrder(response.data);
        setError("");
      } else {
        setError(response?.message || "Order not found. Please check your Order ID.");
        setOrder(null);
      }
    } catch (err) {
      setError("Order not found. Please check your Order ID.");
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusSteps = () => {
    const status = order?.order_status || "pending";
    const steps = [
      { key: "pending", label: "Order Pending", icon: MdPending },
      { key: "confirm", label: "Order Confirmed", icon: FaCheckCircle },
      { key: "processing", label: "Processing", icon: FaBox },
      { key: "shipped", label: "Shipped", icon: FaTruck },
      { key: "delivered", label: "Delivered", icon: FaCheckCircle }
    ];

    const currentIndex = steps.findIndex(step => step.key === status);
    
    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      active: index === currentIndex
    }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  return (
    <section className="py-10 w-full bg-gray-50 min-h-screen">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Enter your Order ID to check the status of your order</p>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
            <TextField
              fullWidth
              label="Order ID"
              variant="outlined"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your order ID (e.g., 67761a5c8f1c2d3e4f5g6h7i)"
              error={!!error && !loading}
              helperText={error && !loading ? error : ""}
              disabled={loading}
            />
            <Button
              type="submit"
              variant="contained"
              className="!bg-[#ff5252] hover:!bg-[#ff5252]-dark !px-8 !py-3 !whitespace-nowrap"
              disabled={loading}
              startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <FaSearch />}
            >
              {loading ? "Tracking..." : "Track Order"}
            </Button>
          </form>
        </div>

        {/* Order Details */}
        {order && (
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
                  <p className="text-sm text-gray-600 mt-1">Order ID: <span className="font-mono text-primary">{order._id}</span></p>
                </div>
                <Badge className="!bg-[#ff5252]" status={order.order_status} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Order Date</p>
                  <p className="font-semibold text-gray-800">{formatDate(order.createdAt)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                  <p className="font-semibold text-gray-800 text-lg">{order.totalAmt?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Method</p>
                  <p className="font-semibold text-gray-800">{order.paymentId ? "PayPal" : "Cash on Delivery"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                  <p className="font-semibold text-gray-800 capitalize">{order.payment_status || "Pending"}</p>
                </div>
              </div>
            </div>

            {/* Order Status Timeline */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-6">Order Status</h3>
              
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute top-5 left-5 h-full w-0.5 bg-gray-200"></div>
                
                {getStatusSteps().map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.key} className="relative flex items-start mb-8 last:mb-0">
                      {/* Icon */}
                      <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        step.completed 
                          ? 'bg-[#ff5252] border-[#ff5252] text-white' 
                          : 'bg-white border-gray-300 text-gray-400'
                      }`}>
                        <Icon className="text-lg" />
                      </div>
                      
                      {/* Content */}
                      <div className="ml-4 flex-1">
                        <p className={`font-semibold ${step.completed ? 'text-gray-800' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        {step.active && (
                          <p className="text-sm text-[#ff5252] mt-1">Current Status</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Delivery Address */}
            {order.delivery_address && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Delivery Address</h3>
                <div className="space-y-2">
                  <p className="text-gray-800">
                    <span className="font-semibold">Name:</span> {order.userId?.name || "N/A"}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Phone:</span> {order.delivery_address.mobile}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Email:</span> {order.userId?.email || "N/A"}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold">Address:</span>
                  </p>
                  <p className="text-gray-700 pl-4">
                    {order.delivery_address.address_line1}<br />
                    {order.delivery_address.city}, {order.delivery_address.state}<br />
                    {order.delivery_address.country} - {order.delivery_address.pincode}
                    {order.delivery_address.landmark && <><br />Landmark: {order.delivery_address.landmark}</>}
                  </p>
                </div>
              </div>
            )}

            {/* Products */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Order Items</h3>
              <div className="space-y-4">
                {order.products?.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.productTitle}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{item.productTitle}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Quantity: {item.quantity} × {item.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-800">
                        {item.subTotal?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-800">Total Amount:</p>
                <p className="text-2xl font-bold text-primary">
                  {order.totalAmt?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        {!order && !loading && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <strong>Need help?</strong> You can find your Order ID in the confirmation email sent to you after placing your order.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderTracking;
