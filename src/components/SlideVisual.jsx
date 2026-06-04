import React from 'react';
import { CheckCircle } from 'lucide-react';

export const SlideVisual = ({ type }) => {
  if (type && (type.startsWith('/') || type.includes('.') || type.startsWith('http'))) {
    return (
      <img 
        src={type} 
        alt="Project Screenshot" 
        className="w-full h-full object-contain"
      />
    );
  }

  switch (type) {
    // Fintech Analytics Slides
    case 'analytics_dashboard':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-6 gap-4 font-mono text-[10px] text-gray-500">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="font-bold text-gray-800">Analytics Overview</span>
            <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Active</span>
          </div>
          <div className="flex gap-4">
            <div className="h-16 flex-1 bg-white border border-gray-150 rounded p-2 shadow-sm">
              <p className="text-[8px] text-gray-400">Total Assets</p>
              <h4 className="text-sm font-bold text-gray-800 mt-1">$482,910</h4>
            </div>
            <div className="h-16 flex-1 bg-white border border-gray-150 rounded p-2 shadow-sm">
              <p className="text-[8px] text-gray-400">Net Volume</p>
              <h4 className="text-sm font-bold text-gray-800 mt-1">$24,912</h4>
            </div>
          </div>
          <div className="flex-grow bg-white border border-gray-150 rounded p-3 shadow-sm flex items-end gap-1.5 min-h-[60px]">
            {[40, 60, 45, 80, 50, 70, 95].map((h, i) => (
              <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    case 'analytics_transactions':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Recent Transactions</h4>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { to: "Apex Ltd", desc: "API Retainer", amt: "+$4,800", date: "May 25", col: "text-green-600" },
              { to: "Stripe Inc", desc: "Payout fee", amt: "-$12.50", date: "May 24", col: "text-gray-600" },
              { to: "Vertex Co", desc: "CRM build", amt: "+$8,500", date: "May 22", col: "text-green-600" }
            ].map((t, i) => (
              <div key={i} className="flex justify-between bg-white border border-gray-150 p-2.5 rounded shadow-sm">
                <div>
                  <p className="font-bold text-gray-800">{t.to}</p>
                  <p className="text-[8px] text-gray-400">{t.desc}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${t.col}`}>{t.amt}</p>
                  <p className="text-[8px] text-gray-400">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'analytics_settings':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-6 gap-4 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">API Configurations</h4>
          <div className="space-y-3">
            <div>
              <p className="text-[9px] text-gray-400 mb-1">Live Endpoint URL</p>
              <div className="p-2 bg-white border border-gray-150 rounded shadow-sm text-gray-600 truncate">https://api.nxtwebworks.com/v1</div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <p className="text-[9px] text-gray-400 mb-1">Stripe Sync</p>
                <span className="bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded-md font-semibold text-[9px] inline-block">connected</span>
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-gray-400 mb-1">Webhook Status</p>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded-md font-semibold text-[9px] inline-block">operational</span>
              </div>
            </div>
          </div>
        </div>
      );

    // CRM System Slides
    case 'crm_pipeline':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">CRM Lead Pipeline</h4>
          <div className="grid grid-cols-3 gap-2 flex-grow">
            {[
              { title: "Inbox", leads: ["Lead A", "Lead B"], count: 2, bg: "bg-blue-50/50" },
              { title: "Scoping", leads: ["Lead C"], count: 1, bg: "bg-purple-50/50" },
              { title: "Contract", leads: ["Lead D"], count: 1, bg: "bg-green-50/50" }
            ].map((col, i) => (
              <div key={i} className={`p-2 rounded-lg border border-gray-150 ${col.bg} flex flex-col gap-2`}>
                <span className="text-[9px] font-bold text-gray-700 border-b border-gray-200 pb-1">{col.title} ({col.count})</span>
                {col.leads.map((l, idx) => (
                  <div key={idx} className="bg-white p-2 rounded border border-gray-100 shadow-sm text-[8px] font-bold">{l}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      );
    case 'crm_contacts':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Customer Contacts</h4>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { name: "John Doe", company: "Apex Ltd", email: "john@apex.com" },
              { name: "Sarah Smith", company: "Vertex Co", email: "sarah@vertex.co" },
              { name: "Mike Johnson", company: "Nextgen LLC", email: "mike@nextgen.com" }
            ].map((c, i) => (
              <div key={i} className="flex justify-between bg-white border border-gray-150 p-2.5 rounded shadow-sm">
                <div>
                  <p className="font-bold text-gray-800">{c.name}</p>
                  <p className="text-[8px] text-gray-400">{c.company}</p>
                </div>
                <p className="text-blue-600 text-[8px] self-center">{c.email}</p>
              </div>
            ))}
          </div>
        </div>
      );
    case 'crm_activities':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Activity Log</h4>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { log: "Contract document sent to Apex Ltd", time: "2 hrs ago" },
              { log: "Discovery video call completed with Vertex Co", time: "1 day ago" },
              { log: "New specs lead inquiry received from Nextgen LLC", time: "2 days ago" }
            ].map((act, i) => (
              <div key={i} className="bg-white border border-gray-150 p-2.5 rounded shadow-sm">
                <p className="text-gray-700 leading-normal">{act.log}</p>
                <p className="text-[8px] text-gray-400 mt-1 font-bold">{act.time}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // E-commerce Slides
    case 'ecommerce_storefront':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col font-mono text-[10px] text-gray-500">
          <div className="h-10 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
            <span className="font-bold text-gray-800">NXTSHOP</span>
            <div className="flex gap-2 text-[8px] text-gray-400">
              <span>Catalog</span>
              <span>Account</span>
            </div>
          </div>
          <div className="p-4 grid grid-cols-2 gap-4 flex-grow">
            {[
              { title: "Developer Theme v1", price: "$49.00" },
              { title: "Tailwind UI Bundle", price: "$99.00" }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-gray-150 rounded-lg p-3 shadow-sm flex flex-col justify-between">
                <div className="aspect-[4/3] bg-gray-100 rounded mb-2" />
                <div>
                  <h4 className="font-bold text-gray-800 text-[9px]">{p.title}</h4>
                  <p className="text-blue-600 font-bold mt-1 text-[8px]">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case 'ecommerce_cart':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col font-mono text-[10px] text-gray-500">
          <div className="h-10 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
            <span className="font-bold text-gray-800">My Cart (1)</span>
          </div>
          <div className="p-5 flex-grow flex flex-col justify-between">
            <div className="flex gap-3 bg-white border border-gray-150 p-3 rounded-lg shadow-sm">
              <div className="w-10 h-10 bg-gray-100 rounded" />
              <div>
                <h4 className="font-bold text-gray-800">Developer Theme v1</h4>
                <p className="text-gray-400 mt-1">Quantity: 1</p>
              </div>
              <span className="ml-auto font-bold text-gray-800 text-xs">$49.00</span>
            </div>
            <div className="border-t border-gray-200 pt-3">
              <div className="flex justify-between font-bold text-gray-800 mb-3 text-xs">
                <span>Subtotal</span>
                <span>$49.00</span>
              </div>
              <button className="w-full bg-[#0F172A] py-2 rounded-lg text-white font-semibold text-[10px] cursor-pointer">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      );
    case 'ecommerce_checkout':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Checkout Security</h4>
          <div className="space-y-3 mt-2">
            <div className="p-3 bg-white border border-gray-150 rounded-lg shadow-sm space-y-2">
              <div className="h-3 w-1/3 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-100 rounded" />
              <div className="h-3 w-3/4 bg-gray-100 rounded" />
            </div>
            <div className="bg-emerald-50 border border-emerald-100 p-3 rounded-lg text-emerald-800 flex gap-2">
              <CheckCircle size={14} className="text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-[8px] leading-relaxed">Stripe API connection verified. Payments are encrypted.</p>
            </div>
          </div>
        </div>
      );

    // Healthcare Portal Slides
    case 'app_dashboard':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <div className="flex justify-between items-center pb-2 border-b border-gray-200">
            <span className="font-bold text-gray-800">Patient Directory</span>
            <span className="text-[8px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded">Secure</span>
          </div>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { id: "P-4821", name: "David Miller", status: "Admitted", col: "bg-blue-500" },
              { id: "P-4822", name: "Emma Wilson", status: "Discharged", col: "bg-gray-400" }
            ].map((p, i) => (
              <div key={i} className="flex justify-between bg-white border border-gray-150 p-2.5 rounded shadow-sm">
                <div>
                  <p className="font-bold text-gray-800">{p.name}</p>
                  <p className="text-[8px] text-gray-400">ID: {p.id}</p>
                </div>
                <span className="self-center text-[9px] font-semibold text-gray-600 flex items-center gap-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full ${p.col}`} />
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case 'app_calendar':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Provider Calendar</h4>
          <div className="grid grid-cols-7 gap-1 flex-grow">
            {[...Array(28)].map((_, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded p-1 flex flex-col justify-between h-9">
                <span className="text-[7px] text-gray-400">{i + 1}</span>
                {i === 12 && <div className="w-full h-1 bg-blue-500 rounded-sm" />}
                {i === 15 && <div className="w-full h-1 bg-purple-500 rounded-sm" />}
              </div>
            ))}
          </div>
        </div>
      );
    case 'app_prescriptions':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Pharmacy Logs</h4>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { rx: "Amoxicillin 500mg", qty: "30 Caps", doctor: "Dr. Adams" },
              { rx: "Lisinopril 10mg", qty: "90 Tabs", doctor: "Dr. Carter" }
            ].map((p, i) => (
              <div key={i} className="bg-white border border-gray-150 p-2.5 rounded shadow-sm flex justify-between">
                <div>
                  <p className="font-bold text-gray-800">{p.rx}</p>
                  <p className="text-[8px] text-gray-400">Auth: {p.doctor}</p>
                </div>
                <p className="text-[8px] text-gray-400 self-center font-bold">Qty: {p.qty}</p>
              </div>
            ))}
          </div>
        </div>
      );

    // Logistics Dashboard Slides
    case 'dashboard_overview':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-[#E2E8F0]">Fleet Status</h4>
          <div className="grid grid-cols-2 gap-3 flex-grow">
            <div className="bg-white border border-gray-150 rounded-lg p-3 shadow-sm flex flex-col justify-between">
              <span className="text-[8px] text-gray-400 font-bold">Active Fleet</span>
              <h4 className="text-lg font-bold text-gray-800">42 / 48</h4>
            </div>
            <div className="bg-white border border-gray-150 rounded-lg p-3 shadow-sm flex flex-col justify-between">
              <span className="text-[8px] text-gray-400 font-bold">On Route</span>
              <h4 className="text-lg font-bold text-gray-800">36 Vehicles</h4>
            </div>
          </div>
        </div>
      );
    case 'dashboard_inventory':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Shipment Logs</h4>
          <div className="space-y-2 flex-grow overflow-y-auto max-h-[120px] hide-scrollbar">
            {[
              { id: "S-9281", route: "New York to Boston", status: "Transit" },
              { id: "S-9282", route: "Chicago to Houston", status: "Delivered" }
            ].map((s, i) => (
              <div key={i} className="bg-white border border-gray-150 p-2.5 rounded shadow-sm flex justify-between">
                <div>
                  <p className="font-bold text-gray-800">{s.route}</p>
                  <p className="text-[8px] text-gray-400">ID: {s.id}</p>
                </div>
                <span className="self-center text-[8px] font-bold bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{s.status}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case 'dashboard_metrics':
      return (
        <div className="w-full h-full bg-[#FAFAFA] flex flex-col p-5 gap-3 font-mono text-[10px] text-gray-500">
          <h4 className="font-bold text-gray-800 pb-2 border-b border-gray-200">Transit Milestones</h4>
          <div className="space-y-3">
            <div className="h-10 bg-white border border-gray-150 rounded-lg flex items-center px-3 justify-between">
              <span>Fuel Economy</span>
              <span className="font-bold text-gray-800">8.2 km/L</span>
            </div>
            <div className="h-10 bg-white border border-gray-150 rounded-lg flex items-center px-3 justify-between">
              <span>On-time Rate</span>
              <span className="font-bold text-green-600">98.4%</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-[#FAFAFA] p-6 flex flex-col justify-center items-center text-gray-400 font-mono text-[10px]">
          <span>Mockup visual empty</span>
        </div>
      );
  }
};
