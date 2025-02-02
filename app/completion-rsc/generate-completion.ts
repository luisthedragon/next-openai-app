'use server';

import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { createStreamableValue } from 'ai/rsc';

export async function generateCompletion(prompt: string) {
  const result = await streamText({
    model: openai('gpt-3.5-turbo'),
    maxTokens: 2000,
    prompt,
  });

  return createStreamableValue(result.textStream).value;
}
