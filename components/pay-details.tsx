"use client";

import React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { toast } from "sonner";

interface PayDetailsProps {
  id?: string;
}

// USDC 代币的 ABI，只包含 transfer 方法
const USDC_ABI = [
  "function transfer(address to, uint256 amount) returns (bool)",
];

// Base 网络上的 USDC 合约地址
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
const RECIPIENT_ADDRESS = "0x63c3742F92B6144876dc9a36AC373D0346f4F2E3";

export default function PayDetails({ id: _id }: PayDetailsProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");

  useEffect(() => {
    if (isConnected) {
      fetchWalletInfo();
    }
  }, [isConnected]);

  const fetchWalletInfo = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);

        setWalletAddress(address);
        setBalance(ethers.formatEther(balance));
      }
    } catch (error) {
      console.error("Error fetching wallet info:", error);
    }
  };

  const connect = async () => {
    try {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        setIsConnected(true);
        fetchWalletInfo();
      }
    } catch (error) {
      console.error("Error connecting:", error);
    }
  };

  const handlePay = async () => {
    try {
      if (!window.ethereum) {
        toast.error("Please install MetaMask!");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // 创建 USDC 合约实例
      const usdcContract = new ethers.Contract(USDC_ADDRESS, USDC_ABI, signer);

      // 转换 100 USDC 到 wei (USDC 有 6 位小数)
      const amount = ethers.parseUnits("100", 6);

      // 发送交易
      const tx = await usdcContract.transfer(RECIPIENT_ADDRESS, amount);

      // 等待交易确认
      await tx.wait();

      // Use toast from react-toastify
      toast.success("Payment successful!");
    } catch (error) {
      console.error("Payment failed:", error);
      // Use toast from react-toastify
      toast.error("Payment failed, please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* 顶部进度条 */}
      <div className="flex items-center justify-end mb-8">
        <div className="flex items-center gap-2">
          <span className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
              1
            </div>
            <span className="text-blue-500 ml-2">Payment Info</span>
          </span>
          <div className="w-32 h-[1px] bg-gray-200"></div>
          <span className="flex items-center">
            <div className="w-6 h-6 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center text-sm">
              2
            </div>
            <span className="text-gray-400 ml-2">Pay</span>
          </span>
        </div>
      </div>

      {/* 主要内容区 */}
      <div className="flex gap-16">
        {/* 左侧 */}
        <div className="w-1/3">
          <h1 className="text-xl text-gray-600 mb-2">Pandon</h1>
          <h2 className="text-4xl font-bold mb-8">100 USDC</h2>

          {/* Logo - 更圆润的边角 */}
          <div className="w-40 h-40 bg-blue-500 rounded-[2rem] flex items-center justify-center">
            <span className="text-white text-7xl font-bold">D</span>
          </div>
        </div>

        {/* 右侧支付表单 */}
        <div className="w-2/3">
          <div className="border border-gray-100 rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-xl font-medium">Payment Info</h3>
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M12 16V12M12 8H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* 连接的钱包地址 */}
            <div className="mb-8">
              <p className="text-gray-600 mb-3">Connected Address</p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                  <span>Base</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 text-gray-600">
                  {isConnected ? (
                    <>
                      {balance} ETH {walletAddress.slice(0, 6)}...
                      {walletAddress.slice(-4)}
                    </>
                  ) : (
                    "Connect Wallet"
                  )}
                  <svg
                    className="w-4 h-4 inline-block ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 支付选择 */}
            <div>
              <p className="text-gray-600 mb-3">Pay with Crypto</p>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-white border rounded-lg hover:bg-gray-50 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                  <span>100 USDC</span>
                </div>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button
                className="w-32 bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                onClick={() => {
                  if (!isConnected) {
                    connect();
                  } else {
                    handlePay();
                  }
                }}
              >
                {isConnected ? "Go to Pay" : "Connect Wallet"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
