import { PropsWithChildren } from "react";

type ContainerProps = {};
function Container(props: PropsWithChildren<ContainerProps>) {
	return (
		<div className="flex flex-col items-center">
			{props.children}
		</div>
	);
}

export default Container;
