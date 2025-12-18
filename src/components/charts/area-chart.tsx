import { Area, AreaChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface AreaChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	areaKeys: string[];
}

export function AreaChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	areaKeys,
}: AreaChartProps) {
	return (
		<ChartContainer config={config}>
			<AreaChart data={data}>
				<XAxis
					dataKey={xAxisKey}
					label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
				/>
				<YAxis
					label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				{areaKeys.map((key) => (
					<Area
						key={key}
						type="monotone"
						dataKey={key}
						stackId="1"
						stroke={`var(--color-${key})`}
						fill={`var(--color-${key})`}
					/>
				))}
			</AreaChart>
		</ChartContainer>
	);
}
