import { Bar, Line, ComposedChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface ComposedChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	barKeys: string[];
	lineKeys: string[];
}

export function ComposedChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	barKeys,
	lineKeys,
}: ComposedChartProps) {
	return (
		<ChartContainer config={config}>
			<ComposedChart data={data}>
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
				{lineKeys.map((key) => (
					<Line
						key={key}
						type="monotone"
						dataKey={key}
						stroke={`var(--color-${key})`}
						strokeWidth={2}
					/>
				))}
			</ComposedChart>
		</ChartContainer>
	);
}
