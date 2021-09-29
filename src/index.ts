import { TemplateFunctionObject } from '@corioders/templates-manager-types';

export default async function templateFunction(tfo: TemplateFunctionObject): Promise<void> {
	const age = await tfo.CliApi.input('how old are you', '-1', undefined);
	console.log(`you are ${age} years old`);
}
