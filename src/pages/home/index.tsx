import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card';

import {
	BarChartComponent,
	ScatterChartComponent,
	PieChartComponent,
	AreaChartComponent,
	RadarChartComponent,
	FunnelChartComponent,
	LineChartComponent,
} from '@/components/charts';
import type { ChartConfig } from '@/components/ui/chart';

export function Home() {
	const data = [
		{ date: '2024-01', 访问量: 400, 转化量: 240 },
		{ date: '2024-02', 访问量: 300, 转化量: 139 },
		{ date: '2024-03', 访问量: 500, 转化量: 380 },
		{ date: '2024-04', 访问量: 478, 转化量: 430 },
		{ date: '2024-05', 访问量: 589, 转化量: 520 },
		{ date: '2024-06', 访问量: 439, 转化量: 290 },
		{ date: '2024-07', 访问量: 449, 转化量: 300 },
	];

	const chartConfig = {
		访问量: {
			label: '访问量',
			color: 'var(--chart-3)',
		},
		转化量: {
			label: '转化量',
			color: 'var(--chart-2)',
		},
	} satisfies ChartConfig;

	const scatterConfig = {
		x: {
			label: 'X 值',
		},
		y: {
			label: 'Y 值',
		},
		z: {
			label: 'Z 值',
		},
	} satisfies ChartConfig;

	const pieConfig = {
		访问量: {
			label: '访问量',
			color: 'var(--chart-1)',
		},
		转化量: {
			label: '转化量',
			color: 'var(--chart-2)',
		},
		其他: {
			label: '其他',
			color: 'var(--chart-3)',
		},
	} satisfies ChartConfig;

	const radarConfig = {
		A: {
			label: 'A 值',
			color: 'var(--chart-1)',
		},
		B: {
			label: 'B 值',
			color: 'var(--chart-2)',
		},
	} satisfies ChartConfig;

	const funnelConfig = {
		value: {
			label: '值',
		},
	} satisfies ChartConfig;

	const scatterData = [
		{ x: 100, y: 200, z: 200, color: 'var(--chart-1)' },
		{ x: 120, y: 100, z: 260, color: 'var(--chart-2)' },
		{ x: 170, y: 300, z: 400, color: 'var(--chart-3)' },
		{ x: 140, y: 250, z: 280, color: 'var(--chart-4)' },
		{ x: 150, y: 400, z: 500, color: 'var(--chart-5)' },
		{ x: 110, y: 280, z: 200, color: 'var(--chart-1)' },
	];

	const pieData = [
		{ name: '访问量', value: 400 },
		{ name: '转化量', value: 240 },
		{ name: '其他', value: 100 },
	];

	const radarData = [
		{ subject: 'Math', A: 120, B: 110 },
		{ subject: 'Chinese', A: 98, B: 130 },
		{ subject: 'English', A: 86, B: 130 },
		{ subject: 'Geography', A: 99, B: 100 },
		{ subject: 'Physics', A: 85, B: 90 },
		{ subject: 'History', A: 65, B: 85 },
	];

	const funnelData = [
		{ name: '访问', value: 1000 },
		{ name: '注册', value: 800 },
		{ name: '购买', value: 500 },
		{ name: '复购', value: 200 },
	];
	return (
		<div className="min-h-screen bg-white p-6 text-slate-900 md:p-12 dark:bg-slate-950 dark:text-slate-100">
			<div className="mx-auto max-w-4xl space-y-10">
				{/* 主内容区 */}
				<div className="grid gap-6">
					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>数据统计</CardTitle>
							<CardDescription>访问量与转化量对比</CardDescription>
						</CardHeader>
						<CardContent>
							<BarChartComponent
								data={data}
								config={chartConfig}
								xAxisKey="date"
								xAxisLabel="月份"
								yAxisLabel="数量"
								barKeys={['访问量', '转化量']}
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>散点图示例</CardTitle>
							<CardDescription>数据点分布</CardDescription>
						</CardHeader>
						<CardContent>
							<ScatterChartComponent
								data={scatterData}
								config={scatterConfig}
								xAxisKey="x"
								yAxisKey="y"
								zAxisKey="z"
								xAxisLabel="X 值"
								yAxisLabel="Y 值"
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>饼图示例</CardTitle>
							<CardDescription>数据占比</CardDescription>
						</CardHeader>
						<CardContent>
							<PieChartComponent
								data={pieData}
								config={pieConfig}
								dataKey="value"
								nameKey="name"
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>面积图示例</CardTitle>
							<CardDescription>趋势展示</CardDescription>
						</CardHeader>
						<CardContent>
							<AreaChartComponent
								data={data}
								config={chartConfig}
								xAxisKey="date"
								xAxisLabel="月份"
								yAxisLabel="数量"
								areaKeys={['访问量', '转化量']}
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>雷达图示例</CardTitle>
							<CardDescription>多维度对比</CardDescription>
						</CardHeader>
						<CardContent>
							<RadarChartComponent
								data={radarData}
								config={radarConfig}
								dataKeys={['A', 'B']}
								nameKey="subject"
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>漏斗图示例</CardTitle>
							<CardDescription>转化漏斗</CardDescription>
						</CardHeader>
						<CardContent>
							<FunnelChartComponent
								data={funnelData}
								config={funnelConfig}
								dataKey="value"
								nameKey="name"
								colors={[
									'var(--chart-1)',
									'var(--chart-2)',
									'var(--chart-3)',
									'var(--chart-4)',
								]}
							/>
						</CardContent>
					</Card>

					<Card className="border-slate-200 bg-slate-50/50 shadow-none dark:border-slate-800 dark:bg-slate-900/50">
						<CardHeader>
							<CardTitle>线图示例</CardTitle>
							<CardDescription>趋势线展示</CardDescription>
						</CardHeader>
						<CardContent>
							<LineChartComponent
								data={data}
								config={chartConfig}
								lineType="linear"
								xAxisKey="date"
								xAxisLabel="月份"
								yAxisLabel="数量"
								lineKeys={['访问量', '转化量']}
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}
