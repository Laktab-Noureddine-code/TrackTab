import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

// Sample data for 6 expense categories
const expenseData = [
  { category: 'Food', amount: 450 },
  { category: 'Transportation', amount: 200 },
  { category: 'Rent', amount: 800 },
  { category: 'Shopping', amount: 320 },
  { category: 'Health', amount: 150 },
  { category: 'Education', amount: 270 },
];

export const ExpenseBarChart = () => (
  <div
    style={{
      width: '100%',
      height: '400px',
      padding: '20px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Inter, sans-serif',
    }}
  >
    <h3
      style={{
        margin: '0 0 20px 0',
        fontSize: '18px',
        fontWeight: 600,
        color: '#343a40',
        textAlign: 'center',
      }}
    >
      Monthly Expenses by Category
    </h3>

    <ResponsiveBar
      data={expenseData}
      keys={['amount']}
      indexBy="category"
      margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: 'set1' }} // Use custom colors below
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Category',
        legendPosition: 'middle',
        legendOffset: 32,
        legendFontSize: 12,
        legendTextColor: '#343a40',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Amount ($)',
        legendPosition: 'middle',
        legendOffset: -50,
        legendFontSize: 12,
        legendTextColor: '#343a40',
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 12,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      tooltip={({ id, value, indexValue }) => (
        <div
          style={{
            padding: '8px',
            backgroundColor: '#1a2537',
            color: 'white',
            borderRadius: '6px',
            fontSize: '14px',
            border: '1px solid #0d263a',
          }}
        >
          <strong>{indexValue}</strong>: ${value}
        </div>
      )}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#343a40',
              fontSize: 12,
            },
          },
        },
        legends: {
          text: {
            fill: '#343a40',
            fontSize: 12,
          },
        },
        tooltip: {
          container: {
            color: 'white',
          },
        },
        labels: {
          text: {
            fill: '#343a40',
          },
        },
      }}
    />
  </div>
);