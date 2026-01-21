"use client";

import { supabase } from "../lib/supabase";

export default function MessageButton({ targetUserId }) {
  async function startConversation() {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data } = await supabase
      .from("conversations")
      .select("*")
      .or(
        `and(user1_id.eq.${user.id},user2_id.eq.${targetUserId}),
         and(user1_id.eq.${targetUserId},user2_id.eq.${user.id})`
      )
      .single();

    let conversationId = data?.id;

    if (!conversationId) {
      const { data: newConv } = await supabase
        .from("conversations")
        .insert({
          user1_id: user.id,
          user2_id: targetUserId
        })
        .select()
        .single();

      conversationId = newConv.id;
    }

    window.location.href = `/messages/${conversationId}`;
  }

  return <button onClick={startConversation}>Message</button>;
}
