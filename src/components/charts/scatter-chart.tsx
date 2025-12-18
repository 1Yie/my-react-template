import { Scatter, ScatterChart, XAxis, YAxis, Cell } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface ScatterDataItem {
	x: number;
	y: number;
	z: number;
	color?: string;
}

interface ScatterChartProps {
	data: ScatterDataItem[];
	config: ChartConfig;
	xAxisKey: string;
	yAxisKey: string;
	zAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	fillColor?: string;
}

export function ScatterChartComponent({
	data,
	config,
	xAxisKey,
	yAxisKey,
	zAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	fillColor = 'var(--chart-1)',
}: ScatterChartProps) {
	return (
		<ChartContainer config={config}>
			<ScatterChart data={data}>
				<XAxis
					type="number"
					dataKey={xAxisKey}
					label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
				/>
				<YAxis
					type="number"
					dataKey={yAxisKey}
					label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Scatter dataKey={zAxisKey} fill={fillColor}>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={entry.color || fillColor} />
					))}
				</Scatter>
			</ScatterChart>
		</ChartContainer>
	);
}
