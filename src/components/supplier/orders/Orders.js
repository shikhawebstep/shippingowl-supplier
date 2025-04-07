'use client';

import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { RiFileEditFill } from "react-icons/ri";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FiDownloadCloud } from "react-icons/fi";
import { MoreHorizontal } from "lucide-react";

const orders = [
  {
    id: '#ID285800',
    date: '15 Aug 24, 01:43 AM',
    product: 'Product Name',
    sku: '2584026',
    qty: 1,
    seller_tags: null,
    cod: '₹580',
    orderValue: '₹580',
    status: 'Unpaid',
    tags: ['Repeat Customer', 'Label Generated', 'Warehouse Model'],
    shipment: {
      id: '#ODR85178048081',
      status: 'Order Placed',
      provider: 'Shiprocket / Right Traders',
      date: 'Aug 18, 2024 01:54 PM',
    },
    sla: '27h 54m 57s',
    sla_date: 'Aug 18, 2024 05:11:54 pm',
  },
  {
    id: '#ID285801',
    date: '15 Aug 24, 01:43 AM',
    product: 'Product Name',
    sku: '2584026',
    qty: 1,
    seller_tags: null,
    cod: '₹580',
    orderValue: '₹580',
    status: 'Unpaid',
    tags: ['Repeat Customer', 'Label Generated', 'Warehouse Model'],
    shipment: {
      id: '#ODR85178048081',
      status: 'Order Placed',
      provider: 'Shiprocket / Right Traders',
      date: 'Aug 18, 2024 01:54 PM',
    },
    sla: '27h 54m 57s',
    sla_date: 'Aug 18, 2024 05:11:54 pm',
  },
];
export default function Orders() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [filter, setFilter] = useState("Actual Ratio");
  const totalPages = Math.ceil(orders.length / perPage);
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentData = orders.slice(indexOfFirst, indexOfLast);
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const today = new Date();
    return today.toISOString().slice(0, 7); // YYYY-MM format
  });

  return (
    <div>
      <div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 px-3 md:px-0 gap-4 mb-4">
          <div> <label className='text-[#232323]  block'>From Date:</label>  <input type="text" placeholder="07/23/2024 - 07/30/2024" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Order ID(s):</label>  <input type="text" placeholder="Separated By Comma" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Product Name</label>  <input type="text" placeholder="Name" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Product SKU</label>  <input type="text" placeholder="SKU" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Tag:</label>  <input type="text" placeholder="ALL" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Article Id:</label>  <input type="text" placeholder="ID" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div> <label className='text-[#232323]  block'>Search Query:</label>  <input type="text" placeholder="Query" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl" /></div>
          <div className="flex gap-2 items-end">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md">Apply</button>
            <button className="bg-red-500 text-white px-6 py-3 rounded-md">Reset</button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 items-end justify-normal ">
          <div className='lg:w-[150px]'>
            <label className='text-[#232323]  block'>Status:</label>
            <select type="text" placeholder="07/23/2024 - 07/30/2024" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl">
              <option value="All">All</option>
            </select>
          </div>
          <div className='lg:w-2/12'> <label className='text-[#232323]  block'>Select Model</label>
            <select type="text" placeholder="07/23/2024 - 07/30/2024" className=" bg-white border text-[#718EBF]  border-[#DFEAF2] mt-2 w-full p-3 rounded-xl">
              <option value="Warehouse Model">Warehouse Model</option>
            </select>
          </div>

          <button className="bg-[#2B3674] text-white font-medium px-4 py-2 rounded-md text-sm">All Orders(10)</button>
          <button className="bg-[#EE5D50] text-white font-medium px-4 py-2 rounded-md text-sm">Pending (10)</button>
          <button className="bg-[#4C82FF] text-white font-medium px-4 py-2 rounded-md text-sm">Ready to Pickup (10)</button>
          <button className="bg-[#F98F5C] text-white font-medium px-4 py-2 rounded-md text-sm">In Transit (10)</button>
          <button className="bg-[#05CD99] text-white font-medium px-4 py-2 rounded-md text-sm">Delivered(10)</button>
          <button className="bg-[#FF6D60] text-white font-medium px-4 py-2 rounded-md text-sm">Lost (10)</button>
          <button className="bg-[#B71D21] text-white font-medium px-4 py-2 rounded-md text-sm">Damaged (10)</button>
          <button className="bg-[#F98F5C] text-white font-medium px-4 py-2 rounded-md text-sm">Export</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#2B3674] font-dm-sans">RTO Order Details</h2>
          <div className="flex gap-3  flex-wrap items-center">
            <span className="font-bold text-[#2B3674]  font-dm-sans">Clear Filters</span>
            <span><IoMdRefresh className="text-red-600 text-xl" /></span>
            <span><IoSettingsOutline className="text-xl" /></span>
            <span><FiDownloadCloud className="text-red-400 text-xl" /></span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-[#4318FF] font-dm-sans outline-0 text-white md:w-[150px] font-bold  px-2 py-2 rounded-md"
            >
              <option value="Actual Ratio ">Bulk Action</option>
            </select>
            <button className="bg-[#F4F7FE] rela px-4 py-2 text-sm rounded-lg flex items-center text-[#A3AED0]">

              {/* Month Input */}
              <input
                type="month"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="outline-0 font-dm-sans"
              />
            </button>
            <button className="bg-[#F4F7FE] p-2 rounded-lg">
              <MoreHorizontal className="text-[#F98F5C]" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="">
              <tr className="text-[#A3AED0]  border-b  border-[#E9EDF7]">
                <th className="p-3 whitespace-nowrap font-medium text-left">Order ID <i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">Name<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">Payment Info<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">Order Tags<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">Seller Tags<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">Shipment Details<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-left">SLA<i></i></th>
                <th className="p-3 whitespace-nowrap font-medium text-center">Action<i></i></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((order) => (
                <tr key={order.id} className="text-[#8F9BBA]  border-b  border-[#E9EDF7] align-top">
                  <td className="p-3 whitespace-nowrap"><input type="checkbox" name="" id="" className='me-2' /><b className='text-black truncate'>{order.id}</b><br />
                    <span className="font-bold text-xs">
                      {order.date}</span></td>
                  <td className="p-3 font-bold whitespace-nowrap"><span className='text-[#2B3674]'>{order.product}</span><br /><span className=" text-sm">SKU: {order.sku}<br /> Qty: {order.qty}</span></td>
                  <td className="p-3 font-bold whitespace-nowrap"> <span className='text-[#2B3674]'>COD:{order.cod}</span><br /> <span className="text-[#8F9BBA]">Order Value:{order.orderValue}</span><span className="text-red-500 block">{order.status}</span></td>
                  <td className="p-3 space-y-1 whitespace-nowrap">
                    {order.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-sm text-center  p-2 rounded-xl font-bold block 
                          ${tag === "Repeat Customer" ? "bg-[#ccf0ebf6] text-[#00B69B]"
                            : tag === "Label Generated" ? "bg-[#FEE9DE] text-[#F98F5C]"
                              : "bg-[#5ca5f938] text-[#5CA4F9] mr-1"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </td>
                  <td className="p-3 font-medium whitespace-nowrap"><span className='text-[#2B3674] font-medium'>{order.seller_tags || 'NA'}</span></td>
                  <td className="p-3 font-medium whitespace-nowrap"><span className='text-[#2B3674] font-medium'>{order.shipment.id}</span><br />
                    <span className="text-[#05CD99] font-medium">{order.shipment.status}</span>
                    <br /><span className='font-medium'>{order.shipment.provider}</span><br /><span className="text-sm font-bold">{order.shipment.date}</span></td>
                  <td className="p-3 font-bold text-[#2B3674] whitespace-nowrap">{order.sla}<span className='block text-green-400 font-normal'>{order.sla_date}</span></td>
                  <td className=" p-3 whitespace-nowrap">
                    <ul className=" flex gap-2 justify-between">
                      <li><RiFileEditFill className=" text-black text-2xl" /></li>
                      <li><IoCloudDownloadOutline className=" text-black text-2xl" /></li>
                      <li><RxCrossCircled className=" text-black text-2xl" /></li>
                      <li><IoIosArrowDropdown className=" text-black text-2xl" /></li>
                    </ul>
                    <button className=" text-[#F98F5C] border rounded-md font-dm-sans  p-2 w-full mt-2 text-sm">
                      View / Add Notes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-wrap lg:justify-end justify-center items-center mt-4 p-4 pt-0">
          <div className="flex gap-1 items-center">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border-[#2B3674] flex gap-1  items-center  text-[#2B3674] rounded mx-1 disabled:opacity-50"
            >
              <MdKeyboardArrowLeft /> Previous
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 hidden md:block py-1 border-[#2B3674] text-[#2B3674] rounded mx-1 ${currentPage === index + 1 ? "bg-[#2B3674] text-white" : ""
                  }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border-[#2B3674] flex gap-1 items-center text-[#2B3674] rounded mx-1 disabled:opacity-50"
            >
              Next <MdKeyboardArrowRight />
            </button>
          </div>

          {/* Per Page Selection */}
          <select
            value={perPage}
            onChange={(e) => setPerPage(Number(e.target.value))}
            className="border-[#2B3674] bg-[#F8FBFF] text-[#2B3674] rounded px-3 py-2 font-semibold"
          >
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>
                {num} /Per Page
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
