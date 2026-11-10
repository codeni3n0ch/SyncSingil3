'use client';
import { useState } from 'react';
import { ShieldCheck, UserCheck, Wallet, CheckCircle2, FileText, Smartphone, ArrowLeft, Send } from 'lucide-react';

export default function BorrowerPortal() {
  const [refNum, setRefNum] = useState('');
  const [amount, setAmount] = useState('4100');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitProof = (e) => {
    e.preventDefault();
    if (!refNum) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-600 text-white p-2 rounded-xl font-bold flex items-center justify-center">
            ₱
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900">SyncSingil Corp.</h1>
            <p className="text-xs text-slate-500">Secure Microfinance & Digital Ledger</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5" /> Borrower Portal
          </span>
          <a href="/" className="text-xs text-slate-600 hover:text-emerald-600 font-semibold flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Logout
          </a>
        </div>
      </header>

      {/* Main Content matching Screenshot 1 */}
      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Banner */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-3 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-600/30 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            Client Self-Service Portal
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight">Welcome to Your Financial Hub</h2>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Manage your active microloans, track upcoming repayment schedules, submit electronic proof of payment securely, and apply for credit extensions with real-time approvals.
          </p>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">Active Loan Balance</p>
            <p className="text-3xl font-extrabold text-slate-900">₱8,200.00</p>
            <p className="text-xs text-slate-500 font-medium">Due Date: March 25, 2026</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">Credit Limit Status</p>
            <p className="text-3xl font-extrabold text-slate-900">₱25,000.00</p>
            <p className="text-xs text-emerald-600 font-semibold">Pre-approved Tier 2</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-xs font-bold text-slate-400 tracking-wider uppercase">Repayment Health</p>
            <p className="text-3xl font-extrabold text-emerald-600 flex items-center gap-2">
              100% On-Time
            </p>
            <p className="text-xs text-slate-500 font-medium">Zero missed installments</p>
          </div>
        </div>

        {/* Schedule and Receipt Submission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Repayment Schedule */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-600" /> Active Repayment Schedule
              </h3>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                Loan #SL-2026-089
              </span>
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">Installment 1 of 3</p>
                  <p className="text-xs text-slate-500 mt-0.5">Due: Jan 25, 2026</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-slate-900 text-sm">₱4,100</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-emerald-600 text-white text-xs font-bold rounded">Paid</span>
                </div>
              </div>
              <div className="bg-white border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">Installment 2 of 3</p>
                  <p className="text-xs text-slate-500 mt-0.5">Due: Feb 25, 2026</p>
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-slate-900 text-sm">₱4,100</p>
                  <span className="inline-block mt-1 px-2.5 py-0.5 bg-amber-100 text-amber-800 text-xs font-bold rounded">Pending</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Payment Receipt */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-emerald-600" /> Submit Payment Receipt (GCash / Maya)
              </h3>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-900">Receipt Submitted Successfully!</h4>
                <p className="text-xs text-slate-600">Reference #{refNum} has been queued for blockchain ledger reconciliation.</p>
                <button onClick={() => setSubmitted(false)} className="text-xs font-bold text-emerald-600 underline">Submit another payment</button>
              </div>
            ) : (
              <form onSubmit={handleSubmitProof} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Reference Number</label>
                  <input 
                    type="text" 
                    value={refNum}
                    onChange={(e) => setRefNum(e.target.value)}
                    placeholder="e.g. TRF-998234" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Amount Paid (₱)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-emerald-600"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" /> Submit Proof of Payment
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}