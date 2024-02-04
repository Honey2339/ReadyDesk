"use client";
import React from "react";
import WebSocket from "react-use-websocket";

const url = "ws://localhost:8000";

export default function page() {
  const { sendMessage, lastMessage, lastJsonMessage, sendJsonMessage } =
    WebSocket(url, {
      onOpen: (data) => {
        console.log("WebSocket connection opened:", data);
      },
      onMessage: (message) => {
        console.log("Received WebSocket message:", JSON.parse(message.data));
      },
    });
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="text-white">
        <h1 className="text-3xl font-bold">Ticket</h1>
      </div>
    </main>
  );
}
