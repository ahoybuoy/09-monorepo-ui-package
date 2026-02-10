import React from 'react';

export function TestDrift() {
  return (
    <aside
      className="bg-[#fefce8] border-l-4 border-[#eab308] p-[16px] rounded-r-[8px]"
      style={{ maxWidth: '480px' }}
    >
      <div className="flex items-start gap-[10px]">
        <span
          className="text-[#ca8a04] text-[20px]"
          style={{ lineHeight: 1 }}
        >
          ⚠
        </span>
        <div>
          <h4 className="text-[#854d0e] text-[15px] font-[600] m-0">
            Warning Banner
          </h4>
          <p className="text-[#a16207] text-[13px] mt-[4px] leading-[1.5]">
            This component uses hardcoded amber/yellow hex values
            instead of the shared UI package tokens.
          </p>
          <button
            className="mt-[10px] bg-[#f59e0b] hover:bg-[#d97706] text-[#fff] text-[13px] px-[12px] py-[6px] rounded-[4px]"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Acknowledge
          </button>
        </div>
      </div>
    </aside>
  );
}
