import React, { memo } from 'react';
import clsx from 'clsx';
import { TimeValue } from '../../../domain/value-objects/TimeValue';
import { LedDigit } from '../atoms/LedDigit';
import { getMonthName, padZero } from '../../../shared/utils/dateUtils';

interface DisplayRowProps {
  label: string;
  timeValue: TimeValue;
  color: string;
  className?: string;
}

const SegmentBlock = ({ label, children, widthClass, wrapperClass }: { label: string; children: React.ReactNode; widthClass?: string; wrapperClass?: string }) => (
  <div className={clsx("segment-block", wrapperClass)}>
    <div className="segment-label">
      {label}
    </div>
    <div className={clsx("digit-container", widthClass)}>
       <div className="glass-reflection"></div>
      {children}
    </div>
  </div>
);

const AmPmIndicator = ({ isAm, color }: { isAm: boolean; color: string }) => (
  <div className="am-pm-container">
    <div className="am-pm-row">
      <span className="am-pm-label">AM</span>
      <div 
        className={clsx("led-dot", { 'active' : isAm })}
        style={{ backgroundColor: isAm ? color : undefined, color: isAm ? color : undefined }}
      />
    </div>
    <div className="am-pm-row">
      <span className="am-pm-label">PM</span>
      <div 
        className={clsx("led-dot", { 'active' : !isAm })}
        style={{ backgroundColor: !isAm ? color : undefined, color: !isAm ? color : undefined }}
      />
    </div>
  </div>
);

export const DisplayRow: React.FC<DisplayRowProps> = memo(({ label, timeValue, color, className }) => {
  
  const monthStr = getMonthName(timeValue.month);
  const dayStr = padZero(timeValue.day);
  const yearStr = padZero(timeValue.year, 4);
  const hourStr = padZero(timeValue.getDisplayHour());
  const minStr = padZero(timeValue.minute);
  
  return (
    <div className={clsx("display-row", className)}>
      <div className="metal-overlay metal-pattern"></div>
      
      <div className="row-inner-container inbox-shadow">
        <SegmentBlock label="Month" widthClass="w-month" wrapperClass="block-month">
          <LedDigit value={monthStr} type="dseg14" color={color} className="text-dseg-lg" />
        </SegmentBlock>

        <SegmentBlock label="Day" widthClass="w-day" wrapperClass="block-day">
          <LedDigit value={dayStr} type="dseg7" color={color} className="text-dseg-lg" />
        </SegmentBlock>

        <SegmentBlock label="Year" widthClass="w-year" wrapperClass="block-year">
          <LedDigit value={yearStr} type="dseg7" color={color} className="text-dseg-lg" />
        </SegmentBlock>
        
        <div className="segment-break hidden md:hidden"></div>

        <AmPmIndicator isAm={timeValue.isAm()} color={color} />

        <SegmentBlock label="Hour" widthClass="w-hour" wrapperClass="block-hour">
          <LedDigit value={hourStr} type="dseg7" color={color} className="text-dseg-lg" />
        </SegmentBlock>

        <div className="colon-container">
           <LedDigit value=":" type="dseg7" color={color} className="blink text-dseg-colon" />
        </div>

        <SegmentBlock label="Min" widthClass="w-min" wrapperClass="block-min">
          <LedDigit value={minStr} type="dseg7" color={color} className="text-dseg-lg" />
        </SegmentBlock>
      </div>

      <div className="row-label-bottom">
        <span className="row-label-badge">
          {label}
        </span>
      </div>
    </div>
  );
}, (prev, next) => {
  const isSameTime = 
    prev.timeValue.year === next.timeValue.year &&
    prev.timeValue.month === next.timeValue.month &&
    prev.timeValue.day === next.timeValue.day &&
    prev.timeValue.hour === next.timeValue.hour &&
    prev.timeValue.minute === next.timeValue.minute;
    
  return isSameTime && prev.label === next.label && prev.color === next.color;
});
