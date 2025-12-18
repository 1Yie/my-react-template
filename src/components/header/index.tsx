import { Button } from '@/components/ui/button';
import { Github, Menu, Search } from 'lucide-react';

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/80">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<div className="flex items-center gap-8">
					<nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex dark:text-slate-400">
						<a
							href="#"
							className="transition-colors hover:text-slate-900 dark:hover:text-white"
						>
							文档
						</a>
						<a
							href="#"
							className="transition-colors hover:text-slate-900 dark:hover:text-white"
						>
							组件
						</a>
						<a
							href="#"
							className="transition-colors hover:text-slate-900 dark:hover:text-white"
						>
							展示
						</a>
					</nav>
				</div>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon"
						className="hidden text-slate-500 sm:flex"
					>
						<Search className="size-5" />
					</Button>

					<Button variant="ghost" size="icon">
						<a
							href="https://github.com/1Yie/my-react-template"
							target="_blank"
							rel="noreferrer"
						>
							<Github className="size-5" />
						</a>
					</Button>

					<Button variant="ghost" size="icon" className="md:hidden">
						<Menu className="size-5" />
					</Button>

					<div className="ml-2 hidden h-5 w-px bg-slate-200 sm:block dark:bg-slate-800" />

					<Button
						variant="default"
						size="sm"
						className="ml-2 hidden rounded-full px-4 sm:flex"
					>
						立即开始
					</Button>
				</div>
			</div>
		</header>
	);
}
