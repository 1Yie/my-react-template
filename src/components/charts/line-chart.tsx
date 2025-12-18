import { Line, LineChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface LineChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	lineKeys: string[];
	lineType?: 'linear' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter';
}

export function LineChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	lineKeys,
	lineType = 'monotone',
}: LineChartProps) {
	return (
		<ChartContainer config={config}>
			<LineChart data={data}>
				<XAxis
					dataKey={xAxisKey}
					label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
				/>
				<YAxis
					label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				{lineKeys.map((key) => (
					<Line
						key={key}
						type={lineType}
						dataKey={key}
						stroke={`var(--color-${key})`}
						strokeWidth={2}
					/>
				))}
			</LineChart>
		</ChartContainer>
	);
}
