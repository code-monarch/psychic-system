import { ResponsiveContainer, AreaChart, Area, YAxis } from 'recharts';

export interface TimeValue {
  time: Date
  value: number
}

export function TimeChangeLineChart({ data, colors = { positive: '#279F70', negative: '#FF5A5C', equal: '#828282' } }: { data: TimeValue[], colors?: { positive: string, negative: string, equal: string } }) {

    const firstValue = data[0].value;
    const lastValue = data[data.length-1].value;

    const color = firstValue < lastValue ? colors.positive : firstValue > lastValue ? colors.negative : colors.equal;
    
    return (
        <ResponsiveContainer width="98%" aspect={6}>
          <AreaChart data={data}>
              <defs>
                  <linearGradient id="colorGradient" gradientTransform="rotate(90)">
                      <stop offset="0" stopColor={color} stopOpacity={1}/>
                      <stop offset="80%" stopColor={color} stopOpacity={0}/>
                  </linearGradient>
              </defs>
              <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true}/>
              <Area dataKey="value" stroke={color} fillOpacity={1} fill="url(#colorGradient)"/>
          </AreaChart>
        </ResponsiveContainer>
    )
}