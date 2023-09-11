import { type ActionArgs, type LoaderArgs } from "@remix-run/node";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

export async function loader({ request }: LoaderArgs) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://gulu.world",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
  return new Response("Hello tRPC", {
    status: 200,
  });
}

export async function action({ request }: ActionArgs) {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "https://gulu.world",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
  const chat = new ChatOpenAI({
    temperature: 0,
    streaming: true,
  });

  const response = await chat.call([
    new HumanMessage(
      "Translate this sentence from English to French. I love programming."
    ),
  ]);

  return response;
}
