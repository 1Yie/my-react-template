import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface BarChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	barKeys: string[];
}

export function BarChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	barKeys,
}: BarChartProps) {
	return (
		<ChartContainer config={config}>
			<BarChart data={data}>
				<XAxis
					dataKey={xAxisKey}
					label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
				/>
				<YAxis
					label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				{barKeys.map((key) => (
					<Bar key={key} dataKey={key} fill={`var(--color-${key})`} />
				))}
			</BarChart>
		</ChartContainer>
	);
}
