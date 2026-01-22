// Fichier temporaire pour éviter les erreurs Supabase
// Fisherforce fonctionne même sans Supabase pour l'instant

export const supabase = {
  auth: {
    signInWithOtp: async () => ({ error: null }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ session: null }),
  },
  from: () => ({
    select: () => ({ data: [], error: null }),
    insert: () => ({ data: [], error: null }),
    update: () => ({ data: [], error: null }),
  }),
};
