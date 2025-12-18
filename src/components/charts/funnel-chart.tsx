import { Funnel, FunnelChart, LabelList, Cell } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

interface FunnelChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKey: string;
	nameKey: string;
	colors?: string[];
}

export function FunnelChartComponent({
	data,
	config,
	dataKey,

	colors = [
		'var(--chart-1)',
		'var(--chart-2)',
		'var(--chart-3)',
		'var(--chart-4)',
		'var(--chart-5)',
	],
}: FunnelChartProps) {
	return (
		<ChartContainer config={config}>
			<FunnelChart>
				<ChartTooltip content={<ChartTooltipContent />} />
				<Funnel dataKey={dataKey} data={data} isAnimationActive>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
					<LabelList position="center" fill="#fff" stroke="none" />
				</Funnel>
			</FunnelChart>
		</ChartContainer>
	);
}
