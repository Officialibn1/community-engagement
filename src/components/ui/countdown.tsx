import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
	targetDate: Date;
	ongoingText?: string;
	completedText?: string;
	showDate?: boolean;
}

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function Countdown({
	targetDate,
	ongoingText = "Event Ongoing",
	completedText = "Event Completed",
	showDate = true,
}: CountdownProps) {
	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
	const [status, setStatus] = useState<"countdown" | "ongoing" | "completed">(
		"countdown",
	);

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const target = targetDate.getTime();
			const difference = target - now;

			// Check if event is today (ongoing)
			const today = new Date();
			const isToday =
				today.getDate() === targetDate.getDate() &&
				today.getMonth() === targetDate.getMonth() &&
				today.getFullYear() === targetDate.getFullYear();

			if (isToday) {
				setStatus("ongoing");
				return null;
			}

			// Check if event has passed
			if (difference < 0) {
				setStatus("completed");
				return null;
			}

			// Calculate countdown
			setStatus("countdown");
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		};

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		setTimeLeft(calculateTimeLeft());

		return () => clearInterval(timer);
	}, [targetDate]);

	if (status === "ongoing") {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className='inline-flex items-center gap-3 bg-accent/20 backdrop-blur-sm border-2 border-accent px-6 py-3 rounded-2xl'>
				<div className='w-3 h-3 bg-accent rounded-full animate-pulse' />
				<span className='text-white font-bold text-lg'>{ongoingText}</span>
			</motion.div>
		);
	}

	if (status === "completed") {
		return (
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 px-6 py-3 rounded-2xl'>
				<span className='text-white/80 font-bold text-lg'>{completedText}</span>
			</motion.div>
		);
	}

	if (!timeLeft) return null;

	const timeUnits = [
		{ value: timeLeft.days, label: "Days" },
		{ value: timeLeft.hours, label: "Hours" },
		{ value: timeLeft.minutes, label: "Minutes" },
		{ value: timeLeft.seconds, label: "Seconds" },
	];

	return (
		<motion.div className='flex flex-col w-fit gap-3 md:gap-4 bg-white/10 backdrop-blur-sm border border-white/20 px-4 md:px-6 py-3 md:py-4 rounded-2xl'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='flex items-center gap-3 md:gap-4'>
				{timeUnits.map((unit, index) => (
					<div
						key={unit.label}
						className='flex items-center gap-3 md:gap-4'>
						<div className='text-center'>
							<motion.div
								key={unit.value}
								initial={{ scale: 1.2, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='text-2xl md:text-4xl font-bold text-accent tabular-nums'>
								{String(unit.value).padStart(2, "0")}
							</motion.div>
							<div className='text-xs md:text-sm text-white/70 font-medium mt-1'>
								{unit.label}
							</div>
						</div>
						{index < timeUnits.length - 1 && (
							<div className='text-2xl md:text-3xl text-white/40 font-bold'>
								:
							</div>
						)}
					</div>
				))}
			</motion.div>

			{showDate && (
				<motion.h1 className='text-xl lg:text-2xl text-center text-white'>
					Saturday, 28th March 2026
				</motion.h1>
			)}
		</motion.div>
	);
}
