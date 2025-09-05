import React from 'react';

// Sidebar Component
function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col px-6 py-8">
      <nav className="flex flex-col space-y-6 mt-2">
        <a href="#" className="flex items-center space-x-3 text-blue-600 font-medium text-base">
          <i className="fas fa-th-large text-lg"></i>
          <span>Dashboard</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-500 text-base">
          <i className="fas fa-file-alt text-lg"></i>
          <span>Subscriptions</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-500 text-base">
          <i className="fas fa-bell text-lg"></i>
          <span>Alerts</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-500 text-base">
          <i className="fas fa-chart-bar text-lg"></i>
          <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-gray-500 text-base">
          <i className="fas fa-cog text-lg"></i>
          <span>Settings</span>
        </a>
      </nav>
    </aside>
  );
}

// Header Component
function Header() {
  return (
    <header className="flex items-center justify-between mb-6">
      <div className="flex items-center space-x-1">
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <span className="font-extrabold text-blue-600 text-lg select-none">
          SubGuard
        </span>
        <span className="font-semibold text-gray-900 text-lg">Dashboard</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="relative text-gray-700 hover:text-gray-900 focus:outline-none">
          <i className="fas fa-bell text-xl"></i>
          <span
            aria-label="Notification alert"
            className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-600 ring-2 ring-white"
          ></span>
        </button>
        <img
          alt="User profile"
          className="w-8 h-8 rounded-full object-cover"
          height="32"
          src="https://storage.googleapis.com/a1aa/image/9a10d6d9-e31b-400a-3eb3-c66b282baab9.jpg"
          width="32"
        />
        <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
          <i className="fas fa-cog text-xl"></i>
        </button>
      </div>
    </header>
  );
}

// TopCards Component
function TopCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col justify-between max-w-xs" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
        <p className="text-gray-500 text-sm mb-1">Active Subscriptions</p>
        <p className="font-extrabold text-2xl text-gray-900 mb-1">14</p>
        <p className="text-green-600 text-xs font-medium">^ +2 this month</p>
      </div>
      <div className="bg-white rounded-xl p-5 shadow-sm flex flex-col justify-between max-w-xs" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
        <p className="text-gray-500 text-sm mb-1">Monthly Spending</p>
        <p className="font-extrabold text-2xl text-gray-900 mb-1">₹4,299</p>
        <p className="text-red-500 text-xs font-medium">-5.2% from last month</p>
      </div>
      <div className="bg-[#faf5f5] rounded-xl p-5 shadow-sm flex flex-col justify-between max-w-xs" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
        <p className="text-gray-500 text-sm mb-1">Fraud Alerts</p>
        <p className="font-extrabold text-2xl text-red-600 mb-1">2</p>
        <p className="text-gray-900 text-sm">Requires attention</p>
      </div>
      <div></div>
    </section>
  );
}

// SpendingOverTimeChart Component
function SpendingOverTimeChart() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm max-w-full lg:max-w-none" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
      <h3 className="font-semibold text-gray-900 mb-3">Spending Over Time</h3>
      {/* SVG Chart as before */}
      {/* ... */}
    </div>
  );
}

// SpendingByCategory Component
function SpendingByCategory() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm max-w-full lg:max-w-none" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
      <h3 className="font-semibold text-gray-900 mb-3">Spending by Category</h3>
    </div>
  );
}

// LiveAlert Component
function LiveAlert({ title, amount, risk }) {
  return (
    <div role="alert" aria-label={`${title} ${amount} with ${risk} risk`} className="bg-[#fceaea] border-l-4 border-red-500 rounded-md p-3 mb-4 last:mb-0">
      <p className="text-sm mb-1">
        {title} {amount}
        <span className="inline-block bg-red-500 text-white text-xs font-semibold rounded px-2 py-0.5 ml-1">
          {risk} risk
        </span>
      </p>
      <div className="flex space-x-3">
        <button className="bg-blue-600 text-white text-sm font-semibold rounded px-4 py-1 hover:bg-blue-700 focus:outline-none">
          Resolve
        </button>
        <button className="bg-gray-200 text-gray-400 text-sm font-semibold rounded px-4 py-1 cursor-not-allowed" disabled>
          Ignore
        </button>
      </div>
    </div>
  );
}

// LiveAlerts Component
function LiveAlerts() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm max-w-full lg:max-w-none" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-900">Live Alerts</h3>
        <a href="#" className="text-blue-600 text-sm font-normal hover:underline">
          View All
        </a>
      </div>
      <LiveAlert title="Suspicious renewal: Netflix" amount="₹499" risk="95%" />
      <LiveAlert title="Unusual charge: Spotify" amount="₹329" risk="78%" />
      <LiveAlert title="Price increase: Amazon Prime ₹179 →" amount="₹249" risk="65%" />
    </div>
  );
}

// FraudPatterns Component
function FraudPatterns() {
  return (
    <div className="bg-[#faf5f5] rounded-xl p-5 shadow-sm max-w-full lg:max-w-none" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05)" }}>
      <h3 className="font-semibold text-gray-900 mb-4">Fraud Patterns</h3>
      <div className="flex items-end justify-between space-x-3 h-36">
        {/* ...bars as before... */}
      </div>
    </div>
  );
}

// TopServices Component
function TopServices() {
  return (
    <div className="bg-[#faf5f5] rounded-xl p-5 shadow-sm max-w-full lg:max-w-none" style={{ boxShadow: "0 1px 3px rgb(0 0 0 / 0.05