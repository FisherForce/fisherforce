"use client";

import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";

export default function Messages() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("conversations")
      .select("*")
      .or(`user1_id.eq.${user.id},user2_id.eq.${user.id}`);

    setConversations(data || []);
  }

  return (
    <div>
      <h1>Messages</h1>
      {conversations.map(c => (
        <a key={c.id} href={`/messages/${c.id}`}>
          Conversation {c.id}
        </a>
      ))}
    </div>
  );
}
