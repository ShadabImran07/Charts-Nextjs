import { Button } from "./button";

export const Appbar = ({}) => {
	return (
		<div className="flex justify-between border-b px-4 border-slate-300">
			<div className="text-lg flex flex-col justify-center">ChainRisk</div>
			<div className="flex flex-col justify-center pt-2">
				<Button>Login</Button>
			</div>
		</div>
	);
};
