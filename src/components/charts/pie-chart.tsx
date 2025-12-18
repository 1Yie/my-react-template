import { Pie, PieChart, Cell } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface PieChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKey: string;
	nameKey: string;
	colors?: string[];
}

export function PieChartComponent({
	data,
	config,
	dataKey,
	nameKey,
	colors = [
		'var(--chart-1)',
		'var(--chart-2)',
		'var(--chart-3)',
		'var(--chart-4)',
		'var(--chart-5)',
	],
}: PieChartProps) {
	return (
		<ChartContainer config={config}>
			<PieChart>
				<Pie
					data={data}
					dataKey={dataKey}
					nameKey={nameKey}
					cx="50%"
					cy="50%"
					outerRadius={80}
					label
				>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<ChartTooltip content={<ChartTooltipContent />} />
			</PieChart>
		</ChartContainer>
	);
}
