"use client";
import { Button } from "@heroui/react";

export default function Home() {
	return (
		<>
			<div>
				<div>
					<p>kansha game</p>
				</div>
			</div>
			<div>
				<div>place holder</div>
			</div>
			<Button color="primary" onPress={() => window.location.reload()}>
				Reload
			</Button>
		</>
	);
}
