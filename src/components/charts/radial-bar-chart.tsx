import { RadialBar, RadialBarChart, PolarAngleAxis, PolarGrid } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface RadialBarChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKey: string;
}

export function RadialBarChartComponent({
	data,
	config,
	dataKey,
}: RadialBarChartProps) {
	return (
		<ChartContainer config={config}>
			<RadialBarChart
				cx="50%"
				cy="50%"
				innerRadius="10%"
				outerRadius="80%"
				barSize={10}
				data={data}
			>
				<PolarGrid gridType="polygon" />
				<PolarAngleAxis
					type="number"
					domain={[0, 100]}
					dataKey={dataKey}
					tick={false}
				/>
				<RadialBar
					label={{ position: 'insideStart', fill: '#fff' }}
					background
					dataKey={dataKey}
					fill="var(--chart-1)"
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
			</RadialBarChart>
		</ChartContainer>
	);
}
