import { inngest } from "./client";
import { Agent, createAgent, openai } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
	{ id: "hello-world" },
	{ event: "test/hello.world" },
	async ({ event }) => {
		const componentBuilder = createAgent({
			name: "Component Builder",
			system: "You are a text component builder. You take user input and return a structured component in react js.",
			model: openai({ model: "gpt-4o" })
		});

		const { output } = await componentBuilder.run(`Write the following react component for me: ${event.data.value}`);

		return { output };
	}
);
