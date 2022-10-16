export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: number;
          username: string;
          room: string;
          created_at: string;
          content: Json | null;
          type: string | null;
        };
        Insert: {
          id?: number;
          username: string;
          room: string;
          created_at?: string;
          content?: Json | null;
          type?: string | null;
        };
        Update: {
          id?: number;
          username?: string;
          room?: string;
          created_at?: string;
          content?: Json | null;
          type?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

