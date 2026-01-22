// src/lib/supabase.js
// Version temporaire : Supabase désactivé pour le développement sans erreur

export const supabase = {
  from: () => ({
    select: async () => ({ data: [], error: null }),
    insert: async () => ({ data: [], error: null }),
  }),
  auth: {
    signInWithOtp: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ session: null }),
  },
};
