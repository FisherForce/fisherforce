"use client";

import { supabase } from "../../../lib/supabase";
import { useEffect, useState } from "react";

export default function Conversation({ params }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { data } = await supabase
      .from("messages")
      .select("*")
      .eq("conversation_id", params.conversationId)
      .order("created_at");

    setMessages(data || []);
  }

  async function send() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    await supabase.from("messages").insert({
      conversation_id: params.conversationId,
      sender_id: user.id,
      content: text
    });

    setText("");
    load();
  }

  return (
    <div>
      <h2>Conversation</h2>

      {messages.map(m => (
        <p key={m.id}>
          <b>{m.sender_id}</b> : {m.content}
        </p>
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={send}>Envoyer</button>
    </div>
  );
}
